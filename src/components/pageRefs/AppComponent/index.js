import { useState } from 'react'
import classes from './styles.module.scss'

const AppComponent = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={classes.container}>
      <h2>{count}</h2>
      <button onClick={() => setCount(count => count + 1 > 10 ? 10 : count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1 < 0 ? 0 : count - 1)}>-</button>
    </div>
  )
}

export default AppComponent
