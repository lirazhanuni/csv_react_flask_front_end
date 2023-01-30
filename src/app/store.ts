import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import diamondReducer from '../features/Diamond/diamondSlice';

export const store = configureStore({
  reducer: {
    Diamond: diamondReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
