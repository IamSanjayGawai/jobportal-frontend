import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';





// user login
export const loginUser = createAsyncThunk('loginUser', async (user, thunkAPI) => {
  try {
console.log(user);

    const response = await fetch('http://localhost:8080/codingninjas/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
  

      return data;
    }

    return thunkAPI.rejectWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



//user logout
export const logoutUser = createAsyncThunk('logoutUser', async () => {
  try {
    const response = await fetch('http://localhost:8080/codingninjas/api/user/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log("Logged out");
      return true; // Indicate successful logout
    } else {
      return false; // Indicate unsuccessful logout
    }
  } catch (error) {
    console.error(error);
    return false; // Indicate unsuccessful logout due to an error
  }
});





  const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: [],
        loading: false,
        error: null,
        job: null,
        isLoggedIn: false, // Add the isLoggedIn state
    },

    reducers: {
        // jobRequest: (state, action) => {
        //     state.loading = true
        // },
        // jobSuccess: (state, action) => {
        //     state.loading = false
        //     state.jobs = action.payload
        // },
        // jobFail: (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // },
        // jobDetailsRequest: (state, action) => {
        //     state.loading = true
        // },
        // jobDetailsSuccess: (state, action) => {
        //     state.loading = false
        //     state.job = action.payload
        // },
        // jobDetailsFail: (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // }
        isLoggedInAction: (state, action) => {
          state.isLoggedIn = action.payload;
        }

    },

    //extra reducer with builder
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLoggedIn = true; // Set isLoggedIn to true on successful login
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },


})


    export default jobSlice.reducer;
    export const { jobRequest, jobSuccess, jobFail, jobDetailsRequest, jobDetailsSuccess, jobDetailsFail , isLoggedInAction} = jobSlice.actions;

