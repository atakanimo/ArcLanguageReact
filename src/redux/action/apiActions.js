import { ActionTypes } from './ActionTypes';
import * as axios from 'axios';
import configData from '../../config.json';

export const fetchArcApi = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_ARC_REQUEST });
    let url = configData.LOCAL_URL;
    if (id) {
      url = url + '/' + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: data });
      });
  };
};

export const DeleteArc = (id) => {
  return async (dispatch) => {
    console.log('id', id);
    try {
      await axios
        .delete(configData.LOCAL_URL + id)
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
        .post(configData.LOCAL_URL + 'add', Arc)
        .then((response) => console.log('NewArc ', response));
      dispatch({ type: ActionTypes.NEW_ARC, payload: Arc });
      dispatch({ type: ActionTypes.ERROR_HANDLING_ADD_ARC, payload: [] });
      dispatch({ type: ActionTypes.ANY_ERROR, payload: false });
    } catch (error) {
      console.log('NewArc catch error', error.response.data.title);
      dispatch({
        type: ActionTypes.ERROR_HANDLING_ADD_ARC,
        payload: error.response.data.detail,
      });
      dispatch({ type: ActionTypes.ANY_ERROR, payload: true });
    }
  };
};

export const EditArc = (Arc, id) => {
  return async (dispatch) => {
    try {
      await axios
        .post(configData.LOCAL_URL + 'update/' + id, Arc)
        .then((response) => console.log('Edit response', response));
      dispatch({ type: ActionTypes.EDIT_ARC });
    } catch (error) {
      console.log('EditArc error', error);
    }
  };
};

export const EditActiveArc = (Arc) => {
  return async (dispatch) => {
    try {
      await axios
        .post(configData.LOCAL_URL + 'isActive/' + Arc.id)
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
      let url = configData.LOCAL_URL + 'search/' + key;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ActionTypes.GET_SEARCHED_DATA, payload: data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
