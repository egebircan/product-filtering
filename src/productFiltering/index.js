import StockFilter from "./StockFilter"
import NameFilter from "./NameFilter"
import PriceSorter from "./PriceSorter"

export default function applyFilters({ allProducts, filterConditions }) {
  const stockFilter = new StockFilter(filterConditions)
  const nameFilter = new NameFilter(filterConditions)
  const priceSorter = new PriceSorter(filterConditions)

  stockFilter.setNext(nameFilter)
  nameFilter.setNext(priceSorter)

  stockFilter.handle(allProducts)

  return priceSorter.resultProducts
}