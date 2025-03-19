const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    value:"not login"
}

const loginSlice = createSlice({
    name:"login",
    initialState,

    reducers:{
        setnotlogin:(state)=>{
            state.value="not login"
        },
        setlogin:(state , action)=>{
            state.value= action.payload
        }
    }
})

export const {setlogin , setnotlogin} = loginSlice.actions;

export default loginSlice.reducer;