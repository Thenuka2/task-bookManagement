
import axios from 'axios';

export const registerUser = (userData, history) => async (dispatch) => {
  try {
    await axios.post('/api/register', userData);
    history.push('/login');
  } catch (error) {
    
  }
};

export const loginUser = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    history.push('/dashboard');
  } catch (error) {
    // Handle login error
  }
};
