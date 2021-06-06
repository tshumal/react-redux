import {combineReducers} from 'redux';
import courses from '../courses/courseReducer'

const rootReducer = combineReducers({
        courses: courses
});

export default rootReducer;