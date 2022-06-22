import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { asyncDecrementCreator, AsyncIncrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

// redux thunk это мидлваре, который помогает нам прокидовать диспатч во внутрь функции
function App() {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="count">{count}</div>
      <div className='btns'>
        <button onClick={() => dispatch(AsyncIncrementCreator())}>Инкремент++</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>Декремент--</button>
        <button onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
      </div>
      <div className='users'>
        {users.map(user =>
          <div key={user.id} style={{border:'1px solid black'}}>
            {user.name}
          </div>  
        )}
      </div>
    </div>
  );
}

export default App;
