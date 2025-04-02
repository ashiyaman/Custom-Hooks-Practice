import { useCounter } from './useCounter'
import { useState } from 'react'

import { useToggle} from './useToggle'
import { useFetch } from './useFetch'

function App() {
  function Counter() {
    const { counter, increment, decrement, reset } = useCounter(0);
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }

  function ToggleSwitch() {
    const { value, toggle } = useToggle(false);
    return (
      <div>
        <h1>Current State: {value ? "True" : "False"}</h1>
        <button onClick={toggle}>Toggle</button>
      </div>
    );
  }
  
  function UserList() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <Counter/>
      <hr/>

      <ToggleSwitch/>
      <hr/>

      <UserList/>
      <hr/>
    </>
  )
}

export default App
