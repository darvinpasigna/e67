//create custom dispatch
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch; //function type
//create dispatch variable and export
const useCartDispatch: DispatchFunction = useDispatch;
//custom useSelector
const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useCartDispatch, useCartSelector};