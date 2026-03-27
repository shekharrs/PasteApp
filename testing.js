// cart.js — shopping cart logic

const cart = []

// add item to cart or increase quantity if already exists
export function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id)

  if (existing) {
    existing.quantity += quantity
  } else {
    cart.push({ ...product, quantity })
  }
}

// remove item completely from cart
export function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId)
  if (index !== -1) cart.splice(index, 1)
}

// calculate total price including tax
export function getCartTotal(taxRate = 0.18) {
  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  const tax = subtotal * taxRate
  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: (subtotal + tax).toFixed(2)
  }
}

// apply discount code to cart total
export function applyDiscount(code) {
  const codes = {
    SAVE10: 0.10,
    SAVE20: 0.20,
    HALFOFF: 0.50
  }
  return codes[code] ?? 0
}