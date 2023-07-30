import { createSlice} from '@reduxjs/toolkit'

const initialState = {
   pageCnt:0,
   pageUpdates: true
}

const scrollSlice = createSlice({
    name:'scroll',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.pageCnt += 1
            state.pageUpdates = true;
        },
        setPage:(state, action)=>{
            state.pageUpdates = action.payload
        }

    },
})

export default scrollSlice.reducer

export const {changePage,setPage} = scrollSlice.actions