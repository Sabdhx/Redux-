import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { fetchData } from '../redux/fetchingData';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchingData.value); // Accessing Redux state
  const status = useSelector((state) => state.fetchingData.status); // Accessing Redux status
  const error = useSelector((state) => state.fetchingData.error); // Accessing Redux error

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData()); // Dispatch the fetchData thunk
    }
  }, [dispatch, status]);

  // Log data to console
  useEffect(() => {
    if (status === 'succeeded') {
      console.log('Fetched data:', data);
    } else if (status === 'failed') {
      console.error('Error fetching data:', error);
    }
  }, [status, data, error]);

  return (
    <div>
      <h1>App</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
}

export default Main;
