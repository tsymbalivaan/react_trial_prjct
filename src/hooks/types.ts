import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { StoreType, DispatchType } from '../store/index';

export const AppDispatch = () => useDispatch<DispatchType>();
export const AppSelector: TypedUseSelectorHook<StoreType> = useSelector;
