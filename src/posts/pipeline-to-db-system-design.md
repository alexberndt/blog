---
title: 'Ideas on connecting pipelines to databases'
date: 'Nov 17, 2025'
excerpt: 'Considerations when writing to a database from orchestrated pipelines'
# cover_image: '/images/posts/1.jpg'
# cover_image_caption: 'Entity Resolution is a very common ML problem.'
---

Hello, these are some ideas on connecting a database with a pipeline.

```mermaid
flowchart LR

db[(Team VM
Database)]
queue@{shape: das, label: DB Queue}
dlq_queue@{shape: das, label: DB Dead-Letter Queue}
queue_consumer(Queue
Consumer)
dagster_job(Dagster
Job / Asset) -- publishes to --> queue --> queue_consumer

successful_upsert -- yes --> db
successful_upsert -- no --> dlq_queue

subgraph DB Updating Service _CloudRun Service_
  queue_consumer -->
  successful_upsert{Upsert <br/> Success?}
end

dlq_queue
queue

subgraph _Dagster K8s_
   dagster_job
end

subgraph Database _CloudSQL_
   db
end
```

### Key Features

- If the DB is down, the job/asset will fail. This will not happen if the job/asset only needs to write to a queue.
- Queue consumer can contain logic to batch upserts when writing to the DB, reducing the number of calls made.
- Write to DLQ if the DB upserting fails, allowing inspection and possibly manually updating the DB.
