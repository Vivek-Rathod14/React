import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const signUp = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'AUTH_REQUEST' });
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
            type: 'AUTH_SUCCESS',
            payload: { uid: user.uid, email: user.email },
        });
    } catch (err) {
        dispatch({ type: 'AUTH_FAIL', payload: err.message || String(err) });
    }
};

export const signIn = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'AUTH_REQUEST' });
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
            type: 'AUTH_SUCCESS',
            payload: { uid: user.uid, email: user.email },
        });
    } catch (err) {
        dispatch({ type: 'AUTH_FAIL', payload: err.message || String(err) });
    }
};

export const signOutUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'AUTH_REQUEST' });
        await signOut(auth);
        dispatch({ type: 'AUTH_SIGNOUT' });
    } catch (err) {
        dispatch({ type: 'AUTH_FAIL', payload: err.message || String(err) });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'AUTH_LOAD_START' });
        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch({
                        type: 'AUTH_SUCCESS',
                        payload: { uid: user.uid, email: user.email },
                    });
                } else {
                    dispatch({ type: 'AUTH_CLEAR' });
                }
                unsubscribe();
                resolve();
            });
        });
    } catch (err) {
        dispatch({ type: 'AUTH_CLEAR' });
    }
};
