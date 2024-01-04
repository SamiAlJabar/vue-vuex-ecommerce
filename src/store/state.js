import { allProducts } from "@/data/product"

export default {
  products: allProducts,
  cart: [],
  selectedMenu: 'New',
  filter: {
    ratings: [],
    maxPrice: null,
    minPrice: null,
    onSale: false,
    isBestSeller: false
  }
}