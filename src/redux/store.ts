import { configureStore } from '@reduxjs/toolkit'
import userDataSlice from "@redux/slices/userDataSlice.ts";

export const store = configureStore({
    reducer: {
        user: userDataSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch