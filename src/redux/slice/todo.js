import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk('fetchTodos', async (initialLoad) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
       
    const body = JSON.stringify({
        "limit": 10,
        "offset": 0
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };
       
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
    return { res: await response.json(), initialLoad };
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isloading: false,
        data: {jdList: [], totalCount: 0},
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isloading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload.initialLoad ? action.payload.res : {...action.payload.res, jdList: [...state.data.jdList, ...action.payload.res.jdList]}
            // state.data = state.initialLoad ? action.payload : {...action.payload, jdList: [...state.data.jdList, ...action.payload.jdList]};
            // state.data = {...action.payload, jdList: [...state.data.jdList, ...action.payload.jdList]};
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log('Error', action.payload)
            state.isError = true;
        });
    }
});

export default todoSlice.reducer;