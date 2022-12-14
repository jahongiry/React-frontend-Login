import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  token: null,
  error: '',
  data: [],
  username: 'Anonyms',
};

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (payload) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios
      .post('https://rails-backend-jy.herokuapp.com/login', payload)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        return response;
      });
  }
);

export const fetchSignUp = createAsyncThunk(
  'user/fetchSignUp',
  async (payload) => {
    return axios
      .post('https://rails-backend-jy.herokuapp.com/users', payload)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        return response;
      });
  }
);

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return axios
    .get('https://rails-backend-jy.herokuapp.com/notes', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    })
    .then((response) => response.data);
});

export const fetchCreateNotes = createAsyncThunk(
  'notes/fetchCreateNotes',
  async (payload) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios
      .post('https://rails-backend-jy.herokuapp.com/notes', payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.username = action.payload.data.user.username;
      state.token = JSON.parse(localStorage.getItem('token'));
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.error = action.error.message;
    });

    builder.addCase(fetchSignUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      state.username = action.payload.data.user.username;
      state.loading = false;
      state.token = JSON.parse(localStorage.getItem('token'));
    });
    builder.addCase(fetchSignUp.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.error = action.error.message;
    });

    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });

    builder.addCase(fetchCreateNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateNotes.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchCreateNotes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export default loginSlice.reducer;
