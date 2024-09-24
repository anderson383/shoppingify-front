import { Category } from "../../components/features/Category/models/Category"

export interface ConfigRepository {
  getListCategoryProducts(): Promise<Category[]>
  getListCategory(): Promise<any[]>
  getCategoryListHistory (id:string): Promise<{name: string, date:string, list_categories: Category[]}>
}