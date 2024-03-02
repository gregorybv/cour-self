import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

export const CartWrapper = styled.div`
  padding: 30px 0;

  .card-pg-title {
    padding: 20px 0 6px 0;
  }

  .cart-grid {
    row-gap: 40px;

    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }

    .cart-total-value {
      font-size: 34px;
    }

    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-dark);
      }
    }

    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;;
      column-gap: 32px;
    }
  }
`;
