import { useCartContext } from '../../context/cart_context';
import { MdClear } from "react-icons/md";
import { CartItem } from '../../components/CartItem';
import { CartWrapper, NotFoundWrapper } from './CartPage.styles';
import { memo } from 'react';

export const CartPage = memo(() => {
  const {cart: cartItems, total_items, total_amount, clearCart} = useCartContext();

  if (cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className='container'>No items found in the cart.</div>
      </NotFoundWrapper>
    )
  }

  return (
    <CartWrapper>
      <div className='container'>
        <div className='cart-pg-title'>
          <h3>Shopping Cart</h3>
        </div>
        <div className='cart-grid grid'>
          <div className='cart-grid-left'>
            <div className='flex flex-wrap flex-between'>
              <div className='cart-count-info'>
                <span className='fw-7 fs-18'>{total_items}</span> Course in Cart
              </div>
              <button type="button" className='cart-clear-btn flex fs-15 fw-6 text' onClick={() => clearCart()}>
                <MdClear className='text-pink'/>
                <span className='d-inline-block text-pink'>Clear All</span>
              </button>
            </div>

            <div className='cart-items-list grid'>
              {
                cartItems.map(cartItem => {
                  return (
                    <CartItem key={cartItem.courseID} cartItem={cartItem}/>
                  )
                })
              }
            </div>
          </div>
          <div className='cart-grid-right'>
            <div className='cart-total'>
              <span className='d-block fs-18 fw-6'>Total:</span>
              <div className='cart-total-value fw-8'>${total_amount.toFixed(2)}</div>
              <button type="button" className='checkout-btn bg-purple text-white fw-6'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </CartWrapper>
  )
});
