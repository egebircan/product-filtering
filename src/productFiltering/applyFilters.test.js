import applyFilters from "."

it('should filter products correctly', () => {
  const allProducts = [
    {
      name: "abc",
      price: 50,
      inStock: true
    },
    {
      name: "abc1",
      price: 60,
      inStock: true
    },
    {
      name: "abc12",
      price: 70,
      inStock: true
    },
    {
      name: "abc123",
      price: 80,
      inStock: false
    }
  ]

  const filterConditions = {
    filterInStock: true,
    searchKeyword: "abc1",
    sortByPriceType: "decreasing"
  }

  const filteredProducts = applyFilters({ allProducts, filterConditions })

  expect(filteredProducts).toEqual([
    {
      name: "abc12",
      price: 70,
      inStock: true
    },
    {
      name: "abc1",
      price: 60,
      inStock: true
    }
  ])
})