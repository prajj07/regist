import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



interface UserState{
    user: any;
}
const initialState: UserState = {
    user: {},
}

export const registerUser = createAsyncThunk('user/registerUser', async (data:{email:string,password:string}) => { 
    const response:any = await fetch('https://reqres.in/api/register', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
})

export const getUser = createAsyncThunk('user/getUser', async (data: { id: number }) => {
    const response = await fetch(`https://reqres.in/api/users/${data.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    return response.json();
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = {};
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
})



export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;