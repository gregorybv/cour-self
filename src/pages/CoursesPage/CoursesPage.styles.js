import styled from 'styled-components';

export const CoursesPageWrapper = styled.div`
  .category-based-list {
    margin-top: 32px;
  }

  @media screen and (min-width: 600px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1400px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
