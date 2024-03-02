import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../../context/sidebar_context';
import { useCartContext } from '../../context/cart_context';
import { NavbarWrapper } from './Navbar.styles';
import { memo } from 'react';

export const Navbar = memo(() => {
  const {total_items} = useCartContext();
  const {openSidebar} = useSidebarContext();

  return (
    <NavbarWrapper className="bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to="/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>c</span>ourself
          </Link>

          <div className='navbar-btns flex'>
            <Link to="/cart" className='cart-btn'>
              <MdShoppingCart/>
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type="button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu/>
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
});
