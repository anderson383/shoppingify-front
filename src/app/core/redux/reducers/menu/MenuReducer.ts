import {StatusMenu} from "../../models/StatusMenu";
import {HANDLE_MENU, TypesMenuActions} from "../../actions/menu/MenuTypes";


const initialState: StatusMenu = {
  showMenu: true
}

export const MenuReducer = (state = initialState, {type, payload}: TypesMenuActions): StatusMenu  => {
  const cases = {
    [HANDLE_MENU]: () => {
      return {
        ...state,
        showMenu: payload
      }
    }
  }
  return cases[type] ? cases[type]() : state;
}