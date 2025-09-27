What is JSX, and why is it used?
Ans:- JSX==JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like.
It allows you to write HTML-like code inside JavaScript and then transforms that code into React elements .
Its used==JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

2##What is the difference between State and Props?
Ans==**The difference between stat and props are
**state:-State is local to the component and cannot be accessed by child components unless passed down as props.
1-It is mutable, meaning it can change over time based on user interactions or API responses.
2-When state updates, the component re-renders to reflect the changes.
3-Managed using useState in functional components or this.setState in class components.

\*\*props:-1-Props allow components to be reusable and dynamic.
2-Props are read-only and cannot be changed by the child component.
3-They help in data communication between components.
4-Passed as attributes in JSX elements.

3##What is the useState hook, and how does it work?
Ans \*\* The useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

It works--

1. Initialize State: When you call useState(initialValue), it creates a state variable and an updater function.
2. State is Preserved Across Renders: React remembers the state value between re-renders of the component. Each time the component renders
3. State Updates with the Updater Function: When you call setCount(newValue) React updates the state and it re-renders the component to reflect the new state value.
4. Triggers Re-render: React will re-render only the component where useState was used—ensuring your UI updates automatically when the state changes.

4##How can you share state between components in React?
Ans\*\*Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props.
Lift State Up (Most Common)

Place the shared state in the closest common parent component and pass it down via props.
React Context API

If many nested components need the same state, passing props through every level (prop drilling) becomes messy.
State Management Libraries (for large apps)

When the app grows complex, tools like:

Redux

Zustand

Jotai

MobX
URL / Query Params

For cross-page state, you can store data in:

React Router params

URL query strings

LocalStorage/SessionStorage
5##How is event handling done in React?
Ans\*\*
In React, events are handled similarly to how they are handled in regular HTML. However, in React, event handling is done using JSX syntax, and React provides its own synthetic event system, which is compatible with most browser events.
User Action: The user interacts with the UI (e.g., clicks a button).
Event Triggered: The corresponding event is fired.
SyntheticEvent Created: React creates a synthetic event to normalize the behavior.
Cross-Browser Consistency: Ensures the event works the same across all browsers.
