import { useState } from "react"
export const Counter =()=>{
const [count , setCount] = useState(0);
return<>
<button onClick={()=>{setCount(c=>c+1)}}>Click to Count</button>
<h1>count is {count}</h1>
</>
}