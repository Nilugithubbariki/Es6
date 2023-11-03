import React, { useMemo, useState } from 'react'

const App = () => {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);

    const multicountMemo = useMemo(function multiCount(){
        console.log("multiCount")
        return count*5;
    },[count])
  return (
    <div>
      <h1>useMemo Hooks in React</h1>
      <h2>{count}</h2>
      <h2>{item}</h2>
      <h2>{multicountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*10)}>Updated Item</button>
    </div>
  )
}

export default App
