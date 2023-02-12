import {HANDLE_MENU} from "./MenuTypes";

export const handleMenu = (value:boolean) => {
  return async (dispatch:any) => {
    dispatch({
        type: HANDLE_MENU,
        payload: value
    })
  }
}