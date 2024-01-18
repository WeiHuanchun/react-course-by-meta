# Starting with hooks

## `useState` hoook

Works with state in react components

### Array destructuring

```js
let veggies = [parsley, onion, carrot];
const [v1, v2, v3] = veggies;
console.log(v1);
console.log(v2);
console.log(v3);
```

#### Goal example

```jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value }); // Interesting!
  }
  function submitHandler(event) {
    event.preventDefault();
    // console.log(formData);
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="by"
          placeholder="By"
          value={formData.by}
          onChange={handleChange}
        />
        <button type="submit" style={{ margin: '10px' }}>
          Submit Goal
        </button>
      </form>
    </>
  );
}
GoalForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

function GoalList(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

GoalList.propTypes = {
  allGoals: PropTypes.array.isRequired,
};

function Goal() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <>
      <GoalForm onAdd={addGoal} />
      <GoalList allGoals={allGoals} />
    </>
  );
}

export default Goal;
```

## `useEffect`

```js
useEffect(() => console.log('useEffect'), []);
```

Has to params, first is an anonymous function, second is an array that could be empty.  
Using `useEffect` to perform side effects.

### Update function and Dependency

- Update function  
   Update function is the function to be executed after each render phase. This corresponds to componentDidMount and componentDidUpdate events

- Dependency  
   Dependency is an array with all the variables on which the function is dependent. Specifying the dependency is very important to optimize the effect hook. In general, update function is called after each render. Sometimes it is not necessary to render update function on each render.
- Empty dependency
  ```js
  const [data, setDate] = useState({});
  const [toggle, setToggle] = useState(false);
  const [id, setID] = useState(0);
  useEffect(() => {
    fetch('/data/url/', { id: id }).then((fetchedData) => setData(fetchedData));
  }, []);
  ```
  The above code will run the effect only once after the first render. Even though it will fix the issus, the effects has to be run on every change of id.

### Side Effect

Makes of function impure

### Pure function vs. Impure function

In programming, the concepts of pure and impure functions come from functional programming.

A **pure function** is a function that has the following properties:

1. **Deterministic**: For the same input, it will always produce the same output.
2. **No side effects**: It does not change or affect anything outside the function. This means it doesn't modify any external variables or states, doesn't perform I/O operations, etc.

Here's an example of a pure function:

```javascript
function add(a, b) {
  return a + b;
}
```

An **impure function**, on the other hand, does not follow one or both of the above rules. It might produce different outputs for the same input (non-deterministic), or it might have side effects like modifying an external variable, making a network request, changing the DOM, etc.

Here's an example of an impure function:

```javascript
let count = 0;

function increment() {
  count += 1;
}
```

In this example, `increment` is an impure function because it modifies the external variable `count` (a side effect).

In the context of React, side effects are usually handled in `useEffect` hook, and state changes can make a function component impure. However, this is a trade-off we accept because it allows us to write interactive UIs. To manage state and side effects in a predictable manner, React provides hooks like `useState` and `useEffect`.

## Four main rules to call hooks

1. Only call hooks from react component function(call inside component function)
2. Only call hooks at the top level(before `return`)
3. Call multiple state or effect Hooks
4. Make multiple hooks calls in the same sequence
   > The statement "Make multiple hooks calls in the same sequence" refers to one of the rules of Hooks in React.
   >
   > In React, Hooks must be called in the exact same order in every component render. This is because the order in which Hooks are called determines how React associates the state and effects with each Hook. If the order were to change between renders, it could lead to bugs and inconsistencies in the UI.
   >
   > For example, consider a component that uses two state hooks:
   >
   > ```jsx
   > function MyComponent() {
   >   const [count, setCount] = useState(0);
   >   const [text, setText] = useState('Hello');
   >
   >   // ...
   > }
   > ```
   >
   > In this component, the order of the `useState` calls is always the same: `count` first, then `text`. If you were to conditionally call a Hook, the order could change between renders, leading to bugs.
   >
   > Here's an example of what not to do:
   >
   > ```jsx
   > function MyComponent({ condition }) {
   >   // BAD: the order of Hook calls will change if condition changes
   >   if (condition) {
   >     const [count, setCount] = useState(0);
   >   }
   >   const [text, setText] = useState('Hello');
   >
   >   // ...
   > }
   > ```
   >
   > In this bad example, the `useState` call for `count` is conditional. If `condition` changes between renders, the order of Hook calls will change, leading to bugs.
   >
   > So, "Make multiple hooks calls in the same sequence" means that you should always ensure the order of Hook calls is consistent between renders.

## Fetch API
`fetch` and `axios` are both ways to make HTTP requests in JavaScript, but they have some differences:

1. **Error Handling**: `fetch` considers any HTTP response with a status of 200 to 299 as successful and will not reject the promise on HTTP error statuses (like 404 or 500). You have to handle these errors manually. On the other hand, `axios` automatically rejects the promise on HTTP error statuses.

2. **Browser Support**: `fetch` is a newer API and is not supported in Internet Explorer. If you need to support older browsers, you might need to use a polyfill. `axios` has wider browser support out of the box.

3. **Request and Response Interception**: `axios` allows you to intercept requests and responses, which can be useful for setting headers, logging, or handling errors globally. `fetch` does not have this feature.

4. **Timeouts**: `axios` allows you to specify a timeout for a request, after which it will be aborted. `fetch` does not have built-in support for timeouts.

5. **Automatic JSON data transformation**: `axios` automatically transforms JSON data, while in `fetch` you have to call the `json` method on the Response object.

Here's an example of a GET request with both:

Using `fetch`:

```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

Using `axios`:

```javascript
axios.get('/api/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

In summary, while `fetch` is built into modern browsers and is quite capable, `axios` provides a more powerful and flexible API.

### Asynchronous JavaScript

javascript is single-thread execution

## `useReducer` Hook

```jsx
import React from 'react';

const reducer = (state, action) => {
  if (action.type === 'increment') return { money: state.money + 1 };
  if (action.type === 'decrement') return { money: state.money - 1 };
  return state;
};

const ReducerExample = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReducerExample;
```
## `useRef` Hook
```jsx
import React from 'react';

const RefExample = () => {
  const formRef = React.useRef(null);
  const [state, setState] = React.useState('');
  const focusInput = () => {
    formRef.current.focus();
    console.log(formRef.current.value);
  };
  const changeHandler = () => {
    setState(formRef.current.value);
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      <h3>{state}</h3>
      <input type="text" ref={formRef} onChange={changeHandler} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefExample;
```