import styled from 'styled-components';

export const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);

  .course-intro {
    padding: 40px 16px;
    max-width: 992px;

    .course-details {
      padding-top: 20px;
    }

    .course-category {
      padding: 0 8px;
      border-radius: 6px;
    }

    .course-head {
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }

    .course-para {
      padding: 12px 0;
    }

    .rating-star-val {
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }

    .students-count {
      margin-left: 8px;
    }

    .rating-count {
      margin-left: 6px;
      color: #d097f6;
    }

    .course-info {
      li {
        margin-bottom: 2px;

        &:nth-child(2) {
          margin-top: 10px;
        }
      }

      .course-info-txt {
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }

    .course-price {
      margin-top: 12px;

      .old-price {
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }

    .course-btn {
      margin-top: 16px;

      .add-to-cart-btn {
        padding: 12px 28px;

        span {
          margin-left: 12px;
        }
      }
    }

    @media screen and (min-width: 880px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details {
        padding-top: 0;
      }

      .course-img {
        order: 2;
      }
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: 60% 40%;
    }
  }

  .course-full {
    padding: 40px 16px;

    .course-sc-title {
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }

    .course-learn {
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list {
        li {
          margin: 5px 0;
          display: flex;

          span {
            &:nth-child(1) {
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

        @media screen and (min-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .course-content {
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list {
        li {
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }

`;
