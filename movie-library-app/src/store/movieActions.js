import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({ type: 'MOVIES_FETCH_REQUEST' });
    const snap = await getDocs(collection(db, 'movies'));
    const movies = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    dispatch({ type: 'MOVIES_FETCH_SUCCESS', payload: { results: movies } });
  } catch (err) {
    dispatch({ type: 'MOVIES_FETCH_FAIL', payload: err.message || String(err) });
  }
};

export const searchMovies = (q) => async (dispatch) => {
  try {
    dispatch({ type: 'MOVIES_SEARCH_REQUEST' });
    const snap = await getDocs(collection(db, 'movies'));
    const movies = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    const queryStr = (q || '').trim().toLowerCase();
    const results = movies.filter((m) => (m.title || '').toLowerCase().includes(queryStr));
    dispatch({ type: 'MOVIES_SEARCH_SUCCESS', payload: { results } });
  } catch (err) {
    dispatch({ type: 'MOVIES_SEARCH_FAIL', payload: err.message || String(err) });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'MOVIE_DETAILS_REQUEST' });
    const d = await getDoc(doc(db, 'movies', id));
    if (!d.exists()) {
      dispatch({ type: 'MOVIE_DETAILS_FAIL', payload: 'Movie not found' });
      return;
    }
    dispatch({ type: 'MOVIE_DETAILS_SUCCESS', payload: { id: d.id, ...d.data() } });
  } catch (err) {
    dispatch({ type: 'MOVIE_DETAILS_FAIL', payload: err.message || String(err) });
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: 'MOVIE_ADD_REQUEST' });
    const ref = await addDoc(collection(db, 'movies'), movie);
    dispatch({ type: 'MOVIE_ADD_SUCCESS', payload: { id: ref.id, ...movie } });
    dispatch(fetchMovies());
  } catch (err) {
    dispatch({ type: 'MOVIE_ADD_FAIL', payload: err.message || String(err) });
  }
};

export const updateMovie = (id, updates) => async (dispatch) => {
  try {
    dispatch({ type: 'MOVIE_UPDATE_REQUEST' });
    await updateDoc(doc(db, 'movies', id), updates);
    dispatch({ type: 'MOVIE_UPDATE_SUCCESS', payload: { id, ...updates } });
    dispatch(fetchMovies());
  } catch (err) {
    dispatch({ type: 'MOVIE_UPDATE_FAIL', payload: err.message || String(err) });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'MOVIE_DELETE_REQUEST' });
    await deleteDoc(doc(db, 'movies', id));
    dispatch({ type: 'MOVIE_DELETE_SUCCESS', payload: id });
    dispatch(fetchMovies());
  } catch (err) {
    dispatch({ type: 'MOVIE_DELETE_FAIL', payload: err.message || String(err) });
  }
};
