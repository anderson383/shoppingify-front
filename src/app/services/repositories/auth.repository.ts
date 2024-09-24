import { Category } from "../../components/features/Category/models/Category"

export type LoginType = {
  email: string
  password: string
}
export interface AuthRepository {
  login(values: LoginType): Promise<string>
}