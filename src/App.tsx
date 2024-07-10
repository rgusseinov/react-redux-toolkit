import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented } from './features/counter/counter-slice'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(incremented());

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
