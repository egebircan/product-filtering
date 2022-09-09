Install dependencies > yarn

Run tests > yarn test

Run project > yarn start

Run with Docker:
  > (in project root folder) docker build -t <image-name> .
  > docker run -p 3000:3000 <image-name>

  Then visit http://localhost:3000


Folder structure:
  src:
    app: 
      redux store

    productFiltering:
      product filtering logic as a chain of responsibility
      product fltering logic test

    products:
      products page
      products page test

      product detail page

      fetch products api

      redux global state management for products
      global state management test

    App.js & App.test.js