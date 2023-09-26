import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// typed useSelector hook for typescript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// typed useDispatch hook for typescript
export const useAppDispatch = () => useDispatch<AppDispatch>()