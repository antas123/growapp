import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    users: {
        userDetails: []
    },
    error: ''
}

const clientId = 'JNGSNe5vglcN0P9p_zUKu7OPj2Q6DCCp8q8_dduhi00';

// generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers',async ({Id}, {fulfillWithValue, rejectWithValue}) => {
    console.log(Id)
    try{
        const apiUrl = `https://api.unsplash.com/users/${Id}/?client_id=${clientId}`
    
    const  response = await axios
    .get(apiUrl);

    if(response.status)
    return fulfillWithValue(response.data);
    else return rejectWithValue([]);
    
   }
    catch(error)
    {
        console.log(error)
    }

})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ' '
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
