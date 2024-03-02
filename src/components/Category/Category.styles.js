import styled from 'styled-components';

export const CategoryItemWrapper = styled.div`
  padding: 20px;
  border: 1px solid transparent;
  transition: var(--transition);

  .category-item-img {
    img {
      max-width: 110px;
    }
  }

  .category-item-name {
    margin-top: 24px;

    h6 {
      font-size: 15px;
    }
  }

  &:hover {
    border: 1px solid var(--clr-purple);
  }
`;