import axios from "axios";
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes";

export const addProducts = (newProduct) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    axios
        .post("http://localhost:8080/products", newProduct)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: POST_PRODUCT_SUCCESS })
        })
        .catch((err) => {
            console.log(err.message)
            dispatch({ type: PRODUCT_FAILURE })
        });
};


export const getProducts = (paramObj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.get(`http://localhost:8080/products`, paramObj)
        .then((res) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data }) }).catch((err) => {
            dispatch({ type: PRODUCT_FAILURE })
        })
};


export const deleteProduct = (id) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    let payload = []
    //filter the data for not making another get request after deleting product-------
    axios.get(`http://localhost:8080/products`).then((res) => {
        payload = res.data.filter((el) => el.id !== id)
    })

    // ---------------------------------------------------------------


    return axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
        console.log(res);
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload })
    }).catch((err) => dispatch({ type: PRODUCT_FAILURE }))
}


export const editProduct = (id, data) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.patch(`http://localhost:8080/products/${id}`, data).then((res) => {
        dispatch({ type: PATCH_PRODUCT_SUCCESS })
    }).catch((err) => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}