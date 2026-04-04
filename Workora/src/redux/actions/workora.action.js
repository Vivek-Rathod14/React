import axios from "axios"

export const addWork = (data) => {

    return {
        type: "ADD_WORK",
        payload: data
    }
}

export const getWork = (data) => {

    return {
        type: "GET_WORK",
        payload: data
    }
}
export const deletePost = (id) => {

    return {
        type: "DELETE_POST",
        payload: id
    }
}
export const EditPost = (data) => {

    return {
        type: "EDIT_POST",
        payload: data
    }
}

// thunk 

export const addWorkAsync = (data) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:5000/workoras/`,data)
            dispatch(addWork(res.data))
        } catch (error) {
            console.log(error);

        }
    }
}
export const getWorkAsync = (data) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:5000/workoras/`,data)
            dispatch(getWork(res.data))
        } catch (error) {
            console.log(error);

        }
    }
}