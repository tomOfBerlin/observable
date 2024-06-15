![Observable (light mode)](./img/observable-header-light.png#gh-light-mode-only)
![Observable (dark mode)](./img/observable-header-dark.png#gh-dark-mode-only)

<br>

install: `npm i toms-observable`

Observable: State across Frameworks

- Lightweight and fast (2kb)
- Simple

Basic Example: [codesandbox Demo](https://codesandbox.io/p/sandbox/broken-dust-dd33md)

```jsx
import { observable } from "./observable";

helloObservable = observable("Hello Default");

// Change from outside of React
sayHelloFromJS = function (...args) {
  helloObservable.set("Hello from JS");
};
setTimeout(sayHelloFromJS, 2000);

export default function App() {
  // Use it like useState inside React
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
