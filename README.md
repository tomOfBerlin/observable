![Observable (light mode)](./img/observable-header-light.png#gh-light-mode-only)
![Observable (dark mode)](./img/observable-header-dark.png#gh-dark-mode-only)

<br>

install: `npm i toms-observable`

Observable: State across Frameworks

- Lightweight and fast (2kb)



Basic Example: [codesandbox Demo](https://codesandbox.io/p/sandbox/broken-dust-dd33md)

Import observable:
```jsx
import { observable } from "./observable";
```
Create your Observable (of any type, Objects are supported, too)
```jsx
helloObservable = observable("Hello Default");
```
You can change your observable from outside of React
```jsx
sayHelloFromJS = function (...args) {
  helloObservable.set("Hello from JS");
};
setTimeout(sayHelloFromJS, 2000);
```
And use it within React. Just like useState. It´s all connected.
```jsx
export default function App() {
  [hello, setHello] = helloObservable.reactUseState();
  
  // Change from React
  useEffect(() => {
    // Use setTimeout to update the message after 4 seconds
    const timeoutId = setTimeout(() => {
      setHello("Hello from React");
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      <h1>{hello}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

More demos are coming soon...
