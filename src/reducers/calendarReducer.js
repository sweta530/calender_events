import { ADD_EVENT } from '../actions';
import { eventData } from '../demoData';

const initialState = {
    events: eventData,
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        default:
            return state;
    }
};

export default calendarReducer;
