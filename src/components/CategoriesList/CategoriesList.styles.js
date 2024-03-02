import styled from 'styled-components';

export const CategoriesListWrapper = styled.div`
  .categories-list-top {
    margin-bottom: 32px;
  }

  .categories-list {
    gap: 32px;
  }

  @media screen and (min-width: 600px) {
    .categories-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 800px) {
    .categories-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .categories-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;