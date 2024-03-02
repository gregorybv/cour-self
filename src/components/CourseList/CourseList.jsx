import { Tabs } from "../Tabs";
import { useCoursesContext } from '../../context/courses_context';
import { CoursesListWrapper } from './CourseList.styles';
import { memo } from 'react';

export const CourseList = memo(() => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>A broad selection of courses</h2>
          <p>Choose from 204,000 online video courses with new additions published every month</p>
        </div>

        <Tabs courses={courses}/>
      </div>
    </CoursesListWrapper>
  )
});
