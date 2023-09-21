// actions.js
import axios from 'axios'; // You need Axios or any other HTTP client library

// Action Types
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const CREATE_COLLECTION_SUCCESS = 'CREATE_COLLECTION_SUCCESS';

// Action Creators
export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  collections,
});

export const createCollectionSuccess = (collection) => ({
  type: CREATE_COLLECTION_SUCCESS,
  collection,
});

// Thunk Actions
export const fetchCollections = () => {
  return async (dispatch) => {
    try {
      // Make an API call to fetch collections from your backend
      const response = await axios.get('/api/collections'); // Replace with your actual API endpoint
      const collections = response.data;

      // Dispatch the success action with the fetched collections
      dispatch(fetchCollectionsSuccess(collections));
    } catch (error) {
      // Handle error, e.g., dispatch an error action
    }
  };
};

export const createCollection = (collectionData) => {
  return async (dispatch) => {
    try {
      
      const response = await axios.post('/api/collections', collectionData); 
      const createdCollection = response.data;

      // Dispatch the success action with the created collection
      dispatch(createCollectionSuccess(createdCollection));
    } catch (error) {
      // Handle error, e.g., dispatch an error action
    }
  };
};
