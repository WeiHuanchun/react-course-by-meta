# Advanced Notes

## List

- Represents an array in JavaScript
- Per element is an object

### `map()`

### JSX

**Syntax extension**

### Rendering a List component

All HTML tags are components by default

```jsx
const topDeserts = [
  {
    id: 1,
    title: 'Desert 1',
    price: 10.0,
  },
  {
    id: 2,
    title: 'Desert 2',
    price: 15.0,
  },
  {
    id: 3,
    title: 'Desert 3',
    price: 20.0,
  },
  {
    id: 4,
    title: 'Desert 4',
    price: 25.0,
  },
  {
    id: 5,
    title: 'Desert 5',
    price: 30.0,
  },
];

function App() {
  const listItems = topDeserts.map((dessert) => {
    const itemText = `${dessert.title} - $${dessert.price}`;
    return <li key={dessert.id}>{itemText}</li>;
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
```

## What are keys in React?

1. Use keys to identify and distinguish between list elements
2. Determine the appropriate key
3. Understand the implications of using keys incorrectly

### React is fast by default and designed with out-of-the-box performance

"React is fast by default and is designed with out of the box performance" means that React has been built to be efficient and performant from the get-go. It includes several optimizations and features that help it to render and update the user interface quickly and smoothly.

For example, React uses a virtual DOM to minimize direct manipulations of the actual DOM, which is a slow operation. It only updates the parts of the DOM that have changed, rather than re-rendering the entire page. This makes React applications fast and efficient by default, without requiring additional performance optimizations from the developer.

However, while React is designed to be fast, the performance can still be affected by how you write your code. For example, unnecessary re-renders can slow down your application. Therefore, it's still important to follow best practices for performance when writing React applications.

### Diffing algorithm

![Alt text](public/images/diffing_algorithm.png)

### Keys

Keys are identifiers of elements

- Use stable identifiers:
  1. avoid to generate unnecessary keys,
  2. reusable
- Unique IDs: Usually matches the IDs in database

## Controlled components

- Controlled components
  > Component's state handles form data
- Uncontrolled components
  > DOM handles form data

### Value

A special property to determine input contant

### onChange callback

```jsx
handleChange(event){
    validate(value)
    event.preventDefault()
    setValue(event.target.value)
}
```

### `htmlFor` equivalent to the `for` in HTML

When clicking the label, focus on the binding input

#### Code Example

```jsx
import { useState } from 'react';

const Feedback = () => {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(score) < 5 && comment.length < 10) {
      alert('Please provide detailed feedback');
    } else {
      setComment('');
      setScore('10');
      console.log(score, comment);
    }
  };

  return (
    <div className="feedback">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Feedback</h1>
          <div>
            <label htmlFor="score">Score:{score}⭐️</label>
            <input
              type="range"
              min={0}
              max={10}
              value={score}
              onChange={(event) => setScore(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Feedback;
```

## Stateless component vs. Stateful component

![Stateless component vs. Stateful component](<public/images/Stateless component vs. Stateful component.png>)

## Must a component be default export?

No, a component does not have to be a default export in React. You can use either default exports or named exports to export your components.

A default export means that the component can be imported with any name. For example, if you have a component like this:

```jsx
// MyComponent.js
export default function MyComponent() {
  return <div>Hello</div>;
}
```

You can import it like this:

```jsx
import AnyNameYouWant from './MyComponent';
```

On the other hand, a named export requires that the component be imported with the exact same name. For example, if you have a component like this:

```jsx
// MyComponent.js
export function MyComponent() {
  return <div>Hello</div>;
}
```

You would import it like this:

```jsx
import { MyComponent } from './MyComponent';
```

You can choose to use either default exports or named exports based on your preference and your project's coding standards. Some developers prefer named exports because they can make the code more self-documenting and can help prevent naming conflicts.

## useContext

To solve props drilling problem, there is `useContext`

> Props drilling can lead to code that is hard to maintain and understand. It can also cause unnecessary renders if a parent component passes a prop that changes, causing all child components to re-render, even if they don't use the prop.
>
> To solve the props drilling problem, React provides context API (useContext hook) and other state management libraries like Redux or MobX can also be used. These tools allow you to share state between components without having to pass props through intermediate components.
