# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2021-05-23

### Added
- Highlight directive
- ProductInfoComponent to use in ProductComponent and CartItemComponent
- CartItemComponent
- Add modules for Products, Cart, Shared nad Orders
- Add header to app component

### Changed
- Add details with total products and total price to CartListComponent
- Add OnPush strategy to product component and to new created cart-item and product-info
- Update product component to use details part form shared component  
- Update product in cart to have +/- buttons to add/remove one item. Display total price of one product
- Update cart service to display total count and price of products 

## [0.1.0] - 2021-04-19
### Added
- First component (just for test).
- Product component. Use it in product-list and cart-list components.
- Product model, categories enum.
- Product-list component - display list of available products.
- Product service - get list of available products.
- Cart-list component - display products added to cart.
- Cart service - handle add/remove components from cart.
- Add bootstrap to apply some basic styles.

### Changed
- npm start command.
