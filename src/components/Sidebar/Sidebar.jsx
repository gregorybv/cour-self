import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from '../../context/sidebar_context';
import { useCoursesContext } from '../../context/courses_context';
import { memo } from 'react';
import { SidebarWrapper } from './Sidebar.styles';

export const Sidebar = memo(() => {
  const {categories} = useCoursesContext();
  const {closeSidebar, isSidebarOpen} = useSidebarContext();

  return (
    <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button type="button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
        <MdClose/>
      </button>
      <div className='sidebar-content'>
        <h6 className='fs-18'>Top Categories</h6>
        <ul className='sidebar-category'>
          {
            categories.map((category, idx) => {
              return (
                <li className='sidebar-link-item fw-5' key={idx}>
                  <Link to={`category/${category}`}>{category.toUpperCase()}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </SidebarWrapper>
  )
});
