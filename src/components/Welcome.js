import React, { useEffect, useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"

  //   const [stateName, functionThatSetsState] = useState(initialValue)

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+10)}>
        Click me
      </button>
    </div>
  );
}

export default Example;

