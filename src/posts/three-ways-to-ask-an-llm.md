---
title: 'Three ways to ask an LLM about pancakes'
date: 'Jun 14, 2026'
excerpt: 'Three ways to ask an LLM about a problem, and why the framing matters more than the model.'
cover_image: '/images/posts/3.jpg'
---

My partner and I wanted to make fluffy pancakes this weekend.

I've made pancakes before, but never the fluffy, American-style ones. As you'd expect, I googled some recipes online to show me how, and, just as predictably, **they all said different things, and some of them flatly contradicted each other**. I ended up picking one that felt reasonable, followed it, and we ate the result. The pancakes were good, but could've been fluffier. We had some theories about what to change next time, but weren't sure. Our likely approach was to trial-and-error either other recipes, or the ingredients for the next batch.

There was another option. It is 2026, after all, so we could also just ask an LLM. That got me wondering **what the best way to ask the LLM would be**. I had a few options.

### 1. "Just give me a recipe"

Tell the LLM what I made today, that it wasn't fluffy enough, and ask it to recommend the ingredients and method for next time.

This is fast. I get a recipe, I try it, maybe it's better. But I've learned nothing, and if it's still not fluffy I'm **back where I started, guessing**.

### 2. "Help me understand what drives fluffiness"

Ask the LLM how eggs, flour, and preparation each contribute to fluffiness, and then suggest adjustments to my recipe based on that.

Now I'm not just collecting an answer, **I'm collecting a little bit of a model of the problem**. I understand which levers exist and roughly which way to push them. The recipe I get out the other end is better, and I can adapt it.

### 3. "How do chefs actually think about this?"

Ask the LLM to research how chefs approach the cooking "problem" at its root, how the levers span both ingredients _and_ preparation, and how each ingredient shapes the properties of the final result, fluffiness in particular.

This is the most work to set up and the slowest to read. It's also the one that gives me the deepest, most transferable result. I come out **understanding the problem, not just holding an answer to it**.

## The point isn't that 3 is "good" and 1 is "bad"

My first instinct was to call option 1 the lazy way and option 3 the proper way. **But I don't think that's right.**

They're just three different ways into the same problem, and which one makes sense depends on **what the problem is actually worth to me**:

- In a hurry, and it's a one-off? Option 1 is fine. Get the recipe, move on.
- Bit of time, but not that invested? Option 2.
- Actually want to get good at making pancakes? Option 3.

All else equal, option 3 gives a better result than 2, and 2 better than 1. But that's not because one used a smarter model. It's the same model every time, and it isn't about clever wording either. **The difference is how I framed the problem before I even opened the chat.**

## A couple of things I noticed

The first is that **the framing did more of the work than the model did**. I could have run all three of these through the same LLM and gotten three different levels of usefulness back. Newer models are getting better at supplying that structure themselves, which helps. But a lot of what makes an answer useful still lives outside the model, such as how much time I have, how much I care, and what I'm actually trying to get out of it. At work, that outside context is often most of the problem.

The second is that none of this is prompt engineering. I wasn't hunting for a magic phrasing or some optimisation trick; the three options differ in how much of the problem I actually set out to solve, not in how I worded it. Read up on how the thing works, apply it to my specific case, get a feel for which inputs matter most. Those are the same problem-solving steps a good cook or engineer was using long before LLMs, and they're the same ones now. The tooling changed. **The way you approach a problem didn't, and it won't.**

We're going to try again next weekend. I haven't decided which of the three I'll do. It probably depends on how much of a hurry we're in.
