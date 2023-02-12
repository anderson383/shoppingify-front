
export const HANDLE_MENU = 'HANDLE_MENU'

interface HandleMenuAction {
  type: typeof HANDLE_MENU
  payload: boolean
}

export type TypesMenuActions = HandleMenuAction