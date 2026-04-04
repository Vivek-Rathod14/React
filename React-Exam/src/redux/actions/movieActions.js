import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_MOVIES_REQUEST" });

    try {
      const querySnapshot = await getDocs(collection(db, "movies"));
      let data = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_MOVIES_ERROR", payload: error.message });
    }
  };
};