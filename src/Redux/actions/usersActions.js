import axios from 'axios';

export const FETCH_USER_RESOURCES_REQUEST = 'FETCH_USER_RESOURCES_REQUEST';
export const FETCH_USER_RESOURCES_SUCCESS = 'FETCH_USER_RESOURCES_SUCCESS';
export const FETCH_USER_RESOURCES_FAILURE = 'FETCH_USER_RESOURCES_FAILURE';

export const fetchUserResources = (userId, token) => {
  return (dispatch) => {
    dispatch(fetchUserResourcesRequest());

    axios
      .get(`http://localhost:8085/getuserresources/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(fetchUserResourcesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserResourcesFailure(error.message));
      });
  };
};

export const fetchUserResourcesRequest = () => {
  return {
    type: FETCH_USER_RESOURCES_REQUEST,
  };
};

export const fetchUserResourcesSuccess = (data) => {
  return {
    type: FETCH_USER_RESOURCES_SUCCESS,
    payload: data,
  };
};

export const fetchUserResourcesFailure = (error) => {
  return {
    type: FETCH_USER_RESOURCES_FAILURE,
    payload: error,
  };
};
