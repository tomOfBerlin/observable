![Observable (light mode)](./img/observable-header-light.png#gh-light-mode-only)
![Observable (dark mode)](./img/observable-header-dark.png#gh-dark-mode-only)

<br>

install: `npm i toms-observable`

Observable: State across Frameworks

- Lightweight and fast (2kb)
<br>



## Basic Example:
[Open on Codesandbox](https://codesandbox.io/p/sandbox/broken-dust-dd33md)
<br><br>
Import observable:
```jsx
import { observable } from "toms-observable";
```
Create your Observable (of any type, Objects are supported, too)
```jsx
const helloObservable = observable("Hello Default");
```
You can change your observable from outside of React
```jsx
helloObservable.set("Hello from JS");
```
And use it within React. Just like useState. It´s all connected.
```jsx
export default function App() {
  [hello, setHello] = helloObservable.reactUseState();
  
  setHello("Hello from React");

  return (
    <div className="App">
      <h1>{hello}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

## Custom Getters - making hello Uppercase:

```jsx
// Change to let
let helloObservable = observable("Hello Default");

// add a custom get (you could overwrite the default get, but this gives you more flexibility
helloObservable.getUpper = function () {
  return this.state.toUpperCase();
};
```

In react you can specify the getter to be used - the same observable can have multiple getters
```jsx
[hello, setHello] = helloObservable.reactUseState({'getter': 'getUpper'});
```

## Documentation

Full docs and more demos are coming soon...
