import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '@models/IAuthResponse';
import AuthService from "@services/AuthService.ts";
import {IUser} from "@models/IUser.ts";
import $api from "@utils/interceptors.ts";
import {AxiosError} from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk<AuthResponse, { email: string; password: string }, { rejectValue: string }>(
  'api/auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);

      if (!response || !response.data) {
        return rejectWithValue('No access tokens found');
      }

      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e: any) {
      const error: AxiosError = e;
      return rejectWithValue(error.message as string);
    }
  }
);

export const registration = createAsyncThunk<AuthResponse, { email: string; password: string }, { rejectValue: string }>(
  'user/registration',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(email, password);

      if (!response || !response.data) {
        return rejectWithValue('No access tokens found');
      }

      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e: any) {
      const error: AxiosError = e;
      return rejectWithValue(error.message as string);
    }
  }
);

// export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
//     'user/logout',
//     async (_, { rejectWithValue }) => {
//         try {
//             await AuthService.logout();
//             localStorage.removeItem('token');
//             return;
//         } catch (e: any) {
//             return rejectWithValue(e.response?.data?.message);
//         }
//     }
// );

export const checkAuth = createAsyncThunk<AuthResponse, void, { rejectValue: string }>(
  'user/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await $api.get<AuthResponse>(`${API_URL}/api/auth/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response?.data?.message);
    }
  }
);

// Slice
const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
      })
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
      })
      .addCase(registration.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed';
      })
      // .addCase(logout.pending, (state) => {
      //     state.isLoading = true;
      //     state.error = null;
      // })
      // .addCase(logout.fulfilled, (state) => {
      //     state.isLoading = false;
      //     state.isAuth = false;
      //     state.user = null;
      // })
      // .addCase(logout.rejected, (state, action: PayloadAction<string | undefined>) => {
      //     state.isLoading = false;
      //     state.error = action.payload || 'Logout failed';
      // })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || 'Authentication check failed';
      });
  },
});

export const { setAuth, setUser, setLoading } = userDataSlice.actions;

export default userDataSlice.reducer;
