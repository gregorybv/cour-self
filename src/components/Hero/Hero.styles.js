import styled from 'styled-components';
import { otherImages } from '../../utils/images';

export const HeroWrapper = styled.div`
  background: url(${otherImages.hero_img}) center/cover no-repeat;
  height: 300px;

  .container {
    .hero-content {
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1 {
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }

      p {
        font-size: 15px;
      }
    }
  }
`;
