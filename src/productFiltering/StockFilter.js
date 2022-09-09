import Handler from "./Handler"

export default class StockFilter extends Handler {
  handle(products) {
    const { filterInStock } = super.getFilterConditions()
    if (filterInStock) products = products.filter(p => p.inStock)
    super.proceedWith(products)
  }
}