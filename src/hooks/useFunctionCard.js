import { useState } from "react";

export const useFunctionCard = (initialValue) => {
 
    const [counter, setCounter] = useState(initialValue);

    const onIncrement = () => {
      
      setCounter( counter + 1 )
    }

    const onDecrement = () => {

      if(counter <= 1) return;
        setCounter( counter - 1 )
    }

    return{
        counter,
        onIncrement,
        onDecrement
    }
}
