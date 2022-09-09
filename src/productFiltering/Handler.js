export default class Handler {
  constructor(filterConditions) {
    this.next = null
    this.resultProducts = null
    this.filterConditions = filterConditions
  }

  getFilterConditions() { return this.filterConditions }

  setNext(fn) {
    this.next = fn
  }

  setResultProducts(products) {
    this.resultProducts = products
  }

  proceedWith(products) {
    if (this.next)
      this.next.handle(products, this.filterConditions)
    else
      this.setResultProducts(products)
  }
}