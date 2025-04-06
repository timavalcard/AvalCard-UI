import { combineReducers } from 'redux';
import authReducer from './authReducer';

// ترکیب reducer ها
const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;