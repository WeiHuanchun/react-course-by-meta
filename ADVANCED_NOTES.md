# Advanced Notes

## List

-   Represents an array in JavaScript
-   Per element is an object

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
