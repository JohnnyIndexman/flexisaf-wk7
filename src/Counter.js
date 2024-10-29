import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Store';
import { UserContext } from './UserContext';

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const { user } = useContext(UserContext);

  return (
    <div className='counter'>
      <h2>Welcome, <span> {user.name}!</span></h2>
      <p>Age: {user.age}</p>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;
