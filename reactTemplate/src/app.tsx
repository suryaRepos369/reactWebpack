import { Counter } from './utils/Counter'
export const App = () => {
  const name = 'sdfa'
  return (
    <div>
      <h1>Hello surya ..! learning the webpack in {name}react</h1>
      <h2>project runs in {process.env.NODE_ENV}</h2>
      <Counter></Counter>
    </div>
  )
}
