# Blog

[![Deploy to Docker Hub](https://github.com/alexberndt/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/alexberndt/blog/actions/workflows/deploy.yml)

Static web app using [Next.js](https://nextjs.org/) deployed to [blog.alexberndt.com](https://blog.alexberndt.com)

![diagram](/.github/media/blog.png)

---

## Development

Clone and install dependencies

```bash
git clone git@github.com:alexberndt/blog.git
cd blog
yarn install
```

Run local development server

```bash
yarn dev
```

Or run with a production-level build

```bash
yarn build
yarn start
```

## Run with Docker

The Dockerized app can be run as follows

```bash
export TAG=dev
docker build -t blog:$TAG .
docker run -it -p 3000:3000 blog:$TAG
```

Or using `docker-compose.yml` as follows

```bash
docker-compose up --build
```

## Deploy to Dockerhub

```bash
export TAG=dev
docker build -t blog:$TAG .
docker tag blog:$TAG lxberndt/blog:$TAG
```

Login and push to [Docker Hub](https://hub.docker.com/)

```bash
docker login
docker push lxberndt/blog:$TAG
```

## On server

```bash
docker stop CONTAINER_ID
export TAG=dev
docker pull lxberndt/blog:$TAG
docker run -d -it --restart unless-stopped -p 8082:3000 lxberndt/blog:$TAG
```

If bind errors (port used)

```bash
docker container ls
docker rm -f <container-name>
```
