import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "store/filterReducer";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
