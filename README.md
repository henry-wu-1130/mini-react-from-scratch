# mini-react-from-scratch

A learning project to understand React internals by building a minimal React clone from scratch, with a focus on reconciliation and Fiber.

## Project Structure

```
mini-react/
  src/
    createElement.ts         # JSX -> VNode
    render.ts                # render(vnode, container)
    reconciliation.ts        # diffing and patching logic
    fiber.ts                 # fake fiber + scheduling
    index.ts                 # entry point
    types.ts                 # shared VNode/Fiber types
  examples/
    01-basic-render.ts       # createElement + render
    ...
  README.md
  package.json
  tsconfig.json
```

// Stages (Assignments):

1. Stage 1: ✨ createElement + render

   - ✍ Task: Implement `createElement` — takes type, props, ...children, returns VNode
   - ✍ Task: Implement `render(vnode, container)` to turn VNode into real DOM
   - ℹ Reference: React v0.3.0 source + JSX transform (Babel/React.createElement)

2. Stage 2: ⚛️ reconciliation (diffing)

   - ✍ Task: Implement basic diff logic for props and children
   - ✍ Task: Add key support for child diffing (simulate behavior of index vs uuid)
   - ℹ Reference: React v15.0.0 - children reconciliation algorithm

3. Stage 3: 🌟 fiber scheduling (time slicing)

   - ✍ Task: Implement fake Fiber node and scheduling system using `requestIdleCallback`
   - ✍ Task: Break render work into units (build own performUnitOfWork)
   - ℹ Reference: React v16 internal Fiber renderer, especially beginWork/completeWork

4. Stage 4: 🌍 experiments & visualization
   - ✍ Task: Build profiler logs (start time, end time, re-rendered nodes)
   - ✍ Task: Add demo playground with big list update
   - ℹ Reference: React DevTools, Concurrent Mode demos

// Optional Advanced:

- Support hooks (useState only)
- Implement fragment/text nodes
- Explore why deep diff is avoided in React

## Stages

1. **Stage 1**: createElement + render (you are here)
2. **Stage 2**: reconciliation (diffing)
3. **Stage 3**: fiber scheduling (time slicing)
4. **Stage 4**: experiments & visualization

---

## Setup

```
npm install
```

## Run Example

Use a bundler like Vite, Parcel, or webpack to run the examples in a browser, or add a simple HTML file with a root div and import the example.

---

Happy hacking!
