const initialState = {
    workoras: [],
    workora: null,
    loading: false,
    error: ""
};

export const workoraReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WORK":
        
            return {
                ...state,
                workoras : [...state.workoras , action.payload,]
            };
        case "GET_WORK":
        
            return {
                ...state,
                workoras :  action.payload,
            };
        case "DELETE_POST":
           
            return {
                ...state,
   
            }
        case "EDIT_POST":
          

            return {
                ...state,
   
            };

        default:
            return state;
    }
};