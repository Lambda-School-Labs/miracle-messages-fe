import axios from 'axios';

export const ADD_VOLUNTEER_START = 'ADD_VOLUNTEER_START';
export const ADD_VOLUNTEER_SUCCESS = 'ADD_VOLUNTEER_SUCCESS';
export const ADD_VOLUNTEER_FAIL = 'ADD_VOLUNTEER_FAIL';

export const addVolunteers = data => async dispatch => {
  dispatch({
    type: ADD_VOLUNTEER_START
  });

  axios
    .post('https://miracle-messages-staging.herokuapp.com/api/form', data)
    .then(res => {
      return dispatch({
        type: ADD_VOLUNTEER_SUCCESS
      });
    })
    .catch(err => {
      return dispatch({ type: ADD_VOLUNTEER_FAIL, payload: err });
    });
};
