import Handler from "./Handler"

export default class NameFilter extends Handler {
  handle(products) {
    const { searchKeyword } = super.getFilterConditions()
    if (searchKeyword) products = products.filter(p => p.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    super.proceedWith(products)
  }
}