# Plushly

[Plushly](https://deli123.github.io/Plushly/) is an e-commerce website that sells plushies.

# Features

- **Five pages**: Landing, login, signup, products, and checkout pages
- **Responsive Design**: Accessible on all devices, ensuring a smooth experience whether you're on a desktop, tablet, or mobile phone.
- **Form validation**: Inputs must meet the specified requirements; input fields are color coded as green or red for valid/invalid inputs
- **Search for products**: Live search feature that will filter products on each keystroke. Accessible by clicking the search icon (magnifying glass) in the nav bar on the products page.

# Technologies

- HTML
- CSS
- JavaScript
- Bootstrap 5

# Previews

## Landing page

![Landing Page](images/readme/home.JPG)

## Login page

![Login Page](images/readme/login.JPG)

## Signup page

![Signup Page](images/readme/signup.JPG)

## Products page

![Products Page](images/readme/products.JPG)

## Checkout page

![Checkout Page](images/readme/checkout.JPG)

# Code Snippet

Below is a code snippet for the Order Summary dropdown. When the screen is smaller than large (<992px), the Order Summary will convert from a table to a dropdown, which can be minimized or expanded.


```html
<div class="btn-group d-flex flex-column d-lg-none my-2">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    data-bs-auto-close="false"
    aria-expanded="false"
  >
    Order Summary
  </button>
  <ul class="dropdown-menu w-100 position-relative bg-darker-cream">
    <li class="d-flex justify-content-between mx-4">
      <div class="d-flex align-items-center">
        <img
          src="images/products/corgi.png"
          width="60"
          height="60"
          class="p-1 pe-2"
          alt="corgi"
        />
        <div>
          <h6 class="my-0 fw-bold">CORGI</h6>
          <small class="text-muted">Quantity: 1</small>
        </div>
      </div>
      <span class="text-muted">$20</span>
    </li>
    ...
  </ul>
</div>
```

![Cart Dropdown](images/readme/cart-dropdown.JPG)

# Future features

- A cart system where users can add products to a cart
- More robust form validations
- Backend system where users can create an account