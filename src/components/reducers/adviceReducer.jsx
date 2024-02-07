
const adviceReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_ADVICE":
            return action.payload;    
        default:
            state;
    }
}
export default adviceReducer;