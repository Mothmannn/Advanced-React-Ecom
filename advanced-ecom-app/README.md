# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
Shopping Cart Application

A simple e-commerce shopping cart application built with React, TypeScript, Redux Toolkit, React Query, and React-Bootstrap, utilizing the FakeStore API
 to display products. Users can add items to the cart, view cart contents, filter by category, and simulate checkout.

Features
Product Display

Fetches products from the FakeStore API using React Query.

Displays product image, title, category, price, and rating.

Dynamically filter products by category using the Category Navigation dropdown.

Category Navigation

Provides a select dropdown for product categories.

Fetches categories dynamically from the API:
GET https://fakestoreapi.com/products/categories

Dropdown is not hard-coded, ensuring it updates automatically if categories change in the API.

When a user selects a category, only products from that category are displayed.

Uses the API endpoint for category-specific products:
GET https://fakestoreapi.com/products/category/{category}

Integrates seamlessly with React Query to cache requests and update the product listing in real-time.

-Shopping Cart

Add products to the cart directly from the product listing.

Cart displays:

Product title, image, price, and quantity.

Total number of items.

Total price of all items.

Remove items individually from the cart.

Cart state persists across page reloads via sessionStorage.

-Checkout

Simulates checkout by clearing the cart.

Updates both Redux state and sessionStorage for persistence.

Provides user feedback after checkout.

-State Management

Uses Redux Toolkit for managing cart state.

Uses typed hooks (useAppSelector, useAppDispatch) with TypeScript for type safety.

React Query handles API fetching, caching, and loading states for products and categories.

-UI

Built with React-Bootstrap for responsive layouts and styling.

Displays loading spinners while products or categories are fetching.

Clean and simple interface for product browsing, category selection, and cart management.

##Installation & Setup

Clone the repository:

git clone https://github.com/your-username/shopping-cart-app.git
cd shopping-cart-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser and navigate to:

http://localhost:5173


How it Works

###Products Page

Fetches product data via React Query.

Displays a list of products with Add to Cart buttons.

Dynamically filters products based on the selected category from the dropdown.

Category Navigation

Fetches the category list via React Query from the API.

Users select a category from a dropdown.

Product listing updates automatically for the chosen category.


###Cart Page

Reads cart state from Redux using typed selectors.

Calculates total items and total price dynamically.

Users can remove items or click Checkout to clear the cart.

Cart persists in sessionStorage across reloads.

Redux & Session Storage

Cart state is saved to sessionStorage whenever it changes.

On page reload, the cart rehydrates from sessionStorage.


###Dependencies

React – UI library

TypeScript – Type safety

Redux Toolkit – State management

React-Redux – Connecting Redux to React

React Query – Data fetching and caching

React-Bootstrap – UI components

Axios – API requests

Scripts
Script	           Description
npm run dev	       Starts the development server
npm run build	     Builds the production bundle
npm run preview	   Previews the production build
