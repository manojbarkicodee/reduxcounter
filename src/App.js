import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, del } from './store/action';

function App() {
const dispatch=useDispatch()
  
  const machi=useSelector((state)=>state)
  console.log(machi)
  return (
    <div className="App">
      <h1>counter:{machi}</h1>
      <button onClick={()=>dispatch(add())}>+</button><button onClick={()=>dispatch(del())}>-</button>
    </div>
  );
}

export default App;
