import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../features/user/userSlice'
import picReducer from "../features/randomPic/picSlice"
import scrollReducer from "../features/scroll/scrollSlice"

const store = configureStore({
    reducer:{
        user: userReducer,
        pic: picReducer,
        scroll : scrollReducer
    },

})

export default store