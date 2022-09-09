import Handler from "./Handler"

export default class PriceSorter extends Handler {
  handle(products) {
    const { sortByPriceType } = super.getFilterConditions()
    if (sortByPriceType) products = [...products].sort(this.getCompareFunction(sortByPriceType))
    super.proceedWith(products)
  }

  getCompareFunction(sortByPriceType) {
    return sortByPriceType === "decreasing"
      ? (firstEl, secondEl) => secondEl.price - firstEl.price
      : (firstEl, secondEl) => firstEl.price - secondEl.price
  }
}