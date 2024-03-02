import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  &.show-sidebar {
    transform: translateX(0);
  }

  .sidebar-close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }

  .sidebar-close-btn:hover {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }

  .sidebar-content {
    margin-top: 50px;

    h6 {
      margin-bottom: 16px;
    }

    .sidebar-link-item {
      font-size: 15px;
      margin-bottom: 12px;
      transition: var(--transition);

      &:hover {
        transform: translateX(6px);
        text-decoration: underline;
      }
    }
  }
`;
