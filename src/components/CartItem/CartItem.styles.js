import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  grid-template-columns: 110px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;

  .cart-item-img {
    width: 100px;
    height: 100px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cart-item-category {
    padding: 0 10px;
    border-radius: 6px;
  }

  .remove-btn {
    margin-top: 16px;
    transition: var(--transition);

    &:hover {
      color: var(--clr-purple);
    }
  }
`;