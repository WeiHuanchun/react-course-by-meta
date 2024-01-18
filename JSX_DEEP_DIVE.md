# JSX Deep Dive

## Component Composition

### JSX and Element Tree

![jsx and element](public/images/jsx_and_element.png)

### Diffing

![alt](https://)

### Containment & Specialization

> **children props** > ![Dialog](https://)

**It is more robust and reusable with the special children prop**

## Visualize Orders

### `React.cloneElement` & `React.children`

#### `React.cloneElement(element, [props])`

- Modify children properties
- Add to children properties
- Extend functionality of children

![Dynamically add props](https://)
#### `React.children.map(children, callback)`

