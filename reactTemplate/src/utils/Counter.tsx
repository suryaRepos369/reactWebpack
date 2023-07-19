import { useEffect, useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState(["1", "4"])

  useEffect(() => {
    console.log("useEffect runs!")
    console.log(`u clicked ${count} times`)
  })
  console.count("component rendered")
  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1)
        }}
      >
        Click to Count
      </button>
      <h1>count is {count}</h1>
      <h3>Arr is {JSON.stringify(arr)}</h3>
      <input onChange={(e) => setArr([...arr, e.target.value])} />
    </>
  )
}
