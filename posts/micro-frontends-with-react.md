---
title: Building Micro Front-ends with React
description: Learn how to scale your web applications using Micro Front-ends and establish effective communication between independent frameworks.
date: January 15, 2026
ogImg: ''
hide: false
---

As web applications grow in complexity, a monolithic frontend can become a bottleneck for large teams. **Micro Front-ends (MFE)** solve this by breaking the UI into smaller, independently deliverable pieces.

### Why Micro Front-ends?

Micro front-ends allow different teams to work on different parts of an application using their own tech stacks and deployment pipelines. This leads to:
- **Independent Deployments:** Fix a bug in the "Checkout" MFE without redeploying the "Product" MFE.
- **Technology Agnostic:** While we love React, one MFE could technically be in Vue or Angular if necessary.
- **Isolated Development:** Teams can move faster without stepping on each other's toes.

### Popular Implementation Approaches

1. **Module Federation (Webpack 5):** The current industry standard. It allows a JavaScript application to dynamically run code from another bundle at runtime.
2. **Single-SPA:** A framework that orchestrates the mounting and unmounting of multiple mini-applications on a single page.
3. **Iframe Composition:** The oldest and simplest method, providing strong isolation but with performance and UX drawbacks.

### Communication Between Micro Front-ends

The biggest challenge in MFE architecture is how independent apps talk to each other without becoming tightly coupled.

#### 1. Custom Events (The Recommended Way)
Using the browser's native `CustomEvent` API is the most decoupled approach.

```javascript
// In MFE A: Dispatching an event
const event = new CustomEvent('orderCreated', { detail: { orderId: '123' } });
window.dispatchEvent(event);

// In MFE B: Listening for the event
window.addEventListener('orderCreated', (e) => {
  console.log('New order received:', e.detail.orderId);
});
```

#### 2. Shared State Library
While usually discouraged for MFE (as it creates coupling), you can use a lightweight store like **Zustand** or **Redux** shared via a parent container. However, this should be limited to global data like user authentication status.

#### 3. URL and Query Parameters
The URL is a global state that all MFEs can access. Navigating to `/profile?tab=settings` is a clean way to communicate intent across frameworks.

#### 4. Props (Composition)
If you are using a "Container" or "Shell" app that imports MFE components, you can pass data down via standard React props.

### Real-Time Project Example

In a banking application, the **Dashboard**, **Transaction History**, and **Profile Settings** can all be separate MFEs. 
- The **Shell App** handles authentication.
- When the user logs in, the Shell dispatches a `userLoggedIn` event.
- All active MFEs listen for this event to fetch user-specific data independently.

### Conclusion

Micro Front-ends are not a silver bullet; they add significant operational complexity. However, for large organizations with multiple teams, the benefits of independent scaling and deployment often outweigh the costs.
