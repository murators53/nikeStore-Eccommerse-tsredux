import { configureStore } from '@reduxjs/toolkit'
import CartSlice, { RootState } from './CartSlice'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux/es/exports'

const store = configureStore({
    reducer: {
        cart: CartSlice,
    }
})

export default store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;