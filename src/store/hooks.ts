//create custom dispatch
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch; //function type
//create dispatch variable and export
const useCartDispatch: DispatchFunction = useDispatch;
export {useCartDispatch};