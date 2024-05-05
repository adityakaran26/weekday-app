import './App.css';
import * as React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Cards/Cards';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodos } from './redux/slice/todo';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { todo } = state;

  React.useEffect(() => {
    dispatch(fetchTodos(true));
  }, []);

  
  return (
    <div className="App">
      <Sidebar todo={todo}/>
    </div>
  );
}

export default App;
