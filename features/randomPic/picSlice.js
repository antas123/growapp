import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    pics: [],
    error: ''
}

const clientId = 'JNGSNe5vglcN0P9p_zUKu7OPj2Q6DCCp8q8_dduhi00';

export const fetchPics = createAsyncThunk('pic/fetchPics',  async ({page}, {fulfillWithValue, rejectWithValue}) => {
    try{
       const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${clientId}&_limit=1&_page=${page}`;
       
            const response = await axios
            .get(apiUrl);
        
          
            if(response.status)
            return fulfillWithValue(response.data);
            else return rejectWithValue("Error in fetching");
        
    }
    catch(error){
        return rejectWithValue(error);
        console.log(error)
    }
})


const picSlice = createSlice({
    name:'pic',
    initialState,
    reducers: {
        addAPicToState: (state, action) => {
            state.loading = false
            state.pics = [...state.pics, action.payload]
            state.error = ''
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPics.pending, state => {
            state.loading = true
        })
        
        builder.addCase(fetchPics.fulfilled, (state, action) => {
            state.loading = false
            state.pics = [...state.pics, action.payload]
            state.error = ''
        })

        builder.addCase(fetchPics.rejected, (state, action) => {
            state.loading = false
            // state.pics = []
            state.error = action.error.message
        })
    }
})

export default picSlice.reducer

export const {addAPicToState} = picSlice.actions
