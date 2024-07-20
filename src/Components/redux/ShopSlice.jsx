import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const ShopSlice = createSlice({
    name: 'Shopdata',
    initialState: {
        data: [],
        filterdata: [],
        cartcategory: [],
        cartdata: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setshopdata: (state, action) => {

            state.data = action.payload
        },
        setcategory: (state, action) => {

            state.cartcategory = state.data.filter((e) => e.category.includes(action.payload))
        },
        setstatus: (state, action) => {
            state.status = action.payload
        },
        setfiltersdata: (state, action) => {
            state.filterdata = state.data.find((e) => {
                return e.id == action.payload;
            });
        },
        addtocart: (state, action) => {
            const myCart = [...current(state.cartdata)];
            const productIndex = myCart.findIndex(prod => prod.id === action.payload.id);
            console.log({ productIndex });
            if (productIndex === -1) {
                state.cartdata.push(action.payload)
            }
            else {
                const updatedQty = myCart[productIndex].qty + 1;
                state.cartdata[productIndex] = { ...action.payload, qty: updatedQty }
            }
        },
        removecart: (state, action) => {
       
        const itemremove=state.cartdata.filter(
            (item)=>item.id!==action.payload
        )
        state.cartdata=itemremove
        //     console.log("🚀 : ~ file: ShopSlice.jsx:55 ~ rmvitm", rmvitm);
        //    state.cartdata.splice(rmvitm,1)
            
        }


    }

})
export const { setshopdata, setstatus, setfiltersdata, addtocart, removecart, setcategory } = ShopSlice.actions
export default ShopSlice.reducer


export function Shopdataapi() {
    return async function shopdatathunk(dispatch, getstate) {
        dispatch(setstatus(STATUSES.LOADING))
        try {
            const res = await axios.get('https://dummyjson.com/products')
            dispatch(setshopdata(res.data.products))
            dispatch(setstatus(STATUSES.IDLE))
        } catch (e) {
            dispatch(setstatus(STATUSES.ERROR))
        }

    }


}
export function categoryname(e) {


    return async function filtercategory(dispatch) {
        dispatch(setcategory(e))
    }
}
export function filtersdatathunk(id) {

    return async function filterdatathunk(dispatch, getstate) {

        try {
            dispatch(setfiltersdata(id))

        } catch (e) {
            dispatch(setstatus(STATUSES.ERROR))
        }

    }


}