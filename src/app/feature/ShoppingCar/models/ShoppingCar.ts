
export interface ShoppingCar {
  id?: string
  name: string
  status?: string
  products?: Array<{ pcx:number, product:string }>
}