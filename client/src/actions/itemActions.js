import axios from 'axios';
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';

export const addItem = item => dispatch => {
    axios 
        .post('/api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data.data
            })
        )
};

export const getItems = () => dispatch => {
    dispatch(itemsLoading())
    axios
        .get('/api/items')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_ITEMS,
                payload: res.data.data 
            })
        })
}
export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
}
export const itemsLoading = () => {return {type: ITEMS_LOADING}}