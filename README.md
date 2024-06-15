![Observable (light mode)](./img/observable-header-light.png#gh-light-mode-only)
![Observable (dark mode)](./img/observable-header-dark.png#gh-dark-mode-only)

Provides State across Frameworks. Change your state from anywhere and have it update in React.

- Lightweight and fast (2kb)
<br>
<br>

## Install
`npm i toms-observable`
<br>
<br>

## Get started
[Open on Codesandbox](https://codesandbox.io/p/sandbox/broken-dust-dd33md)
<br>
<br>

Import observable:
```jsx
import { observable } from "toms-observable";
```
<br>

Create your Observable (of any type, Objects are supported, too)
```jsx
const helloObservable = observable("Hello Default");
```
<br>

You can change your observable from outside of React
```jsx
helloObservable.set("Hello from JS");
```
<br>

And use it within React. Just like useState. It´s all connected.
```jsx
export default function App() {
  [hello, setHello] = helloObservable.reactUseState();

  setHello("Hello from React"); // identical to helloObservable.set, both update

  return (
    <div className="App">
      <h1>{hello}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

<br>

## Custom Getters (e.g. all Uppercase)
[Open on Codesandbox](https://codesandbox.io/p/sandbox/observable-bascis-forked-f246vk)
<br>
<br>

```jsx
// Change to let
let helloObservable = observable("Hello Default");

// add a custom get (you could overwrite the default get,
// but this gives you more flexibility. Use funtions, not =>
helloObservable.getUpper = function () {
  return this.state.toUpperCase();
};
```
<br>

In react you can specify the getter to be used - the same observable can have unlimited getters
```jsx
[hello, setHello] = helloObservable.reactUseState({'getter': 'getUpper'});
```
<br>
<br>

## Documentation

Full docs and more demos are coming soon...
