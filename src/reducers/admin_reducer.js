import {
  GET_ADMINS_BEGIN,
  GET_ADMINS_ERROR,
  GET_ADMINS_SUCCESS,
} from '../actions';

const product_reducer = (state, action) => {
  if (action.type === GET_ADMINS_BEGIN) {
    return { ...state, admins_error: false, admins_loading: true };
  }
  if (action.type === GET_ADMINS_ERROR) {
    return { ...state, admins_error: true, admins_loading: false };
  }
  if (action.type === GET_ADMINS_SUCCESS) {
    return {
      ...state,
      admins_loading: false,
      admins: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
