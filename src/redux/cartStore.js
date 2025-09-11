import { configureStore } from "@reduxjs/toolkit"
import productSlice from './slice/productSlice'

const carStore = configureStore({
     reducer:{
        productReducer:productSlice
     }
})
export default carStore  