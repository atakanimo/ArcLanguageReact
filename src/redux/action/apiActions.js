import { ActionTypes } from './ActionTypes';
import * as axios from 'axios';

export const fetchArcApi = (id) => {
  return (dispatch) => {
    dispatch({ type: 'GET_ARC_REQUEST' });
    let url = 'https://localhost:44313/api/ARCLanguageApi';
    if (id) {
      url = url + '/' + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'GET_DATA_SUCCESS', payload: data });
      });
  };
};

export const DeleteArc = (id) => {
  return async (dispatch) => {
    console.log('id', id);
    try {
      await axios
        .delete('https://localhost:44313/api/ARCLanguageApi/' + id)
        .then((response) => console.log('Delete response', response));
      dispatch({ type: ActionTypes.DELETE_ARC, payload: id });
    } catch (error) {
      console.log('Delete error', error);
    }
  };
};

export const NewArc = (Arc) => {
  // debugger;
  return async (dispatch) => {
    try {
      await axios
        .post('https://localhost:44313/api/ARCLanguageApi/', Arc)
        .then((response) => console.log('NewArc ', response));
      dispatch({ type: ActionTypes.NEW_ARC, payload: Arc });
      dispatch({ type: 'ERROR_HANDLING_ADD_ARC', payload: [] });
      dispatch({ type: 'ANY_ERROR', payload: false });
    } catch (error) {
      console.log('NewArc catch error', error.response.data.title);
      dispatch({
        type: 'ERROR_HANDLING_ADD_ARC',
        payload: error.response.data.detail,
      });
      dispatch({ type: 'ANY_ERROR', payload: true });
    }
  };
};

export const EditArc = async (Arc, id) => {
  try {
    return await axios
      .put('https://localhost:44313/api/ARCLanguageApi/' + id, Arc)
      .then((response) => console.log(response));
    // dispatch({ type: "EDIT_ARC" });
  } catch (error) {
    console.log(error);
  }
  return Promise.reject();
};
export const EditActiveArc = (Arc) => {
  return async (dispatch) => {
    try {
      await axios
        .put('https://localhost:44313/api/ARCLanguageApi/isActive/' + Arc.id)
        .then((response) => console.log('EditActiveArc response', response));
      dispatch({ type: ActionTypes.EDIT_ARC_ACTIVE, payload: Arc.id });
    } catch (error) {
      console.log('EditActiveArc error', error);
    }
  };
};

export const searchArc = (key) => {
  return (dispatch) => {
    try {
      let url = 'https://localhost:44313/api/ARCLanguageApi/search/' + key;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'GET_SEARCHED_DATA', payload: data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
