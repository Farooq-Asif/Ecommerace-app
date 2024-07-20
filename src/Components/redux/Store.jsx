import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './ShopSlice'

const Store=configureStore({
    reducer:{
        Shopdata:shopReducer
    }
})

export default Store