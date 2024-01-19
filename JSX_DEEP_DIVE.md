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

> This is acheived with **spread operator**  
> Copy and Merging

### Spread Operator

```jsx
import PropTypes from 'prop-types';

const Button = ({ type, children, ...buttonProps }) => {
  const className =
    type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

const LoginButton = ({ ...buttonProps }) => (
  <Button type="primary" {...buttonProps} onClick={() => alert('Login')}>
    Login
  </Button>
);

const SignupButton = ({ ...buttonProps }) => (
  <Button type="secondary" {...buttonProps} onClick={() => alert('Signup')}>
    Signup
  </Button>
);

const Buttons = () => (
  <div>
    <SignupButton />
    <LoginButton onClick={() => alert('signup')} /> {/* still alert login, because
    the onClick in LoginButton is after the {...buttonProps} , This should be noticed when using spread operator*/}
  </div>
);

export default Buttons;
```

**still alert login, because
the onClick in LoginButton is after the {...buttonProps} , This should be noticed when using spread operator**

## HOC(Higher-order component)

**cross-cutting design**

[How to Use Higher-Order Components in React](https://www.freecodecamp.org/news/higher-order-components-in-react/)

## Render Props Pattern

> Take functions that return React elements and call them inside their render logic

```jsx
import { useEffect, useState } from 'react';

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes('desserts')) {
      setData(['cake', 'ice cream', 'pie', 'brownies']);
    } else {
      setData(['water', 'soda', 'juice']);
    }
  }, []);
  return render(data);
};

const DessertCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  );
};

const RenderProps = () => {
  return (
    <div>
      <h1>RenderProps</h1>
      <DessertCount />
      <DrinksCount />
    </div>
  );
};

export default RenderProps;
```

Simillarly with HOC, abstract out the implementation. Then deside the way to make presentation of date.
