# JSX Deep Dive

## Component Composition

### JSX and Element Tree

![jsx and element](public/images/jsx_and_element.png)

### Diffing

![Diffing](public/images/Diffing.png)

### Containment & Specialization

> **children props**  
> ![Dialog](public/images/Dialog.png)

**It is more robust and reusable with the special children prop**

## Visualize Orders

### `React.cloneElement` & `React.children`

1. Use React.cloneElement and React.children
2. Manipulate render output dynamically

#### `React.cloneElement(element, [props])`

> - This is Top level React api.
> - It returns a new copy of element
> - the second param, add new props and merge it to the original element.
> - Because props in React are immutable objects, so we need to create a copy of element first,and perform the transformation in the copy

- Modify children properties
- Add to children properties
- Extend functionality of children

![Dynamically add props](public/images/Dynamically_add_props.png)

#### `React.Children.map(children, callback)`

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Row = ({ children, spacing }) => {
  const childStyle = {
    display: 'inline-block',
    marginLeft: `${spacing}px`,
  };
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};
Row.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number.isRequired,
};
function LiveOrders() {
  return (
    <div>
      <h1>Live Orders</h1>
      <div>
        <Row spacing={32}>
          <p>Pizza Margarita</p>
          <p>2</p>
          <p>30$</p>
          <p>18:30</p>
          <p>John</p>
        </Row>
      </div>
    </div>
  );
}

export default LiveOrders;
```
