import {ItemCategory} from "../../../shared/components/ItemCategory";
import React from "react";
import {ListShoppingHistory} from "../../ShoppingCar/components/ListShoppingHistory";


export const HistoryPage = () => {
  return (
    <>
      <main>
        <div className="container mt-57">
          <div className="mb-57">
            <h1>Shopping history</h1>
          </div>
          <div className="">
            <ListShoppingHistory />
          </div>
        </div>
      </main>
  </>)
}