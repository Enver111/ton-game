import Item from "@/lib/game/Item";
import itemsData from "@/lib/data/items.json"
import {itemFromType} from "@/lib/game/items/helpers";

export type ShopItem  = {
  item: Item,
  count: number,
  price: number
}

export default class Shop {
  name!: string;
  items!: ShopItem[]

  constructor() {
    this.name = "Basic shop"
    this.items = itemsData.map(item => {
      return {
        item: itemFromType(item),
        count: 10,
        price: 100
      }
    })
  }
}
