import productsReducer, {
  filterProducts
} from './productsSlice'

describe('products reducer', () => {
  const initialState = {
    items: [],
    status: 'idle',
  }

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

  it('should handle initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
      status: 'idle',
    })
  })

  it('should handle product filtering', () => {
    const filteredProductsState = productsReducer(initialState, filterProducts({ allProducts, filterConditions }))
    expect(filteredProductsState.items).toEqual([
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
})
