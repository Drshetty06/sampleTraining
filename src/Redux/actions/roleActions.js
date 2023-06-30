import axios from 'axios';

export const fetchMasterResources = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8085/v1/rolemanagement/roles/getmasterresources', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MzMzMDk5OCwiaWF0IjoxNjgzMzMwOTk4fQ.BFm7V_vxfvugKnyhC72DLUT3xednJ8AKe6JHefXh4L8'
        },
      });

      dispatch({ type: 'FETCH_RESOURCES_SUCCESS', payload: response.data.resources });
    } catch (error) {
      console.error('Error fetching resources:', error);
      dispatch({ type: 'FETCH_RESOURCES_FAILURE' });
    }
  };
};

export const updateSelectedResources = (selectedResources) => {
  return { type: 'UPDATE_SELECTED_RESOURCES', payload: selectedResources };
};
