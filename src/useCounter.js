import { useState } from "react"

export function useCounter(init = 0) {
    const [counter, setCounter] = useState(init)

    function increment() {
      setCounter(counter + 1)  
    }
  
    function decrement() {
      setCounter(counter - 1) 
    }
  
    function reset(){
      setCounter(init)
    }

    return {counter, increment, decrement, reset}
}