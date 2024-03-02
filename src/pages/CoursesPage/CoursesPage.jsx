import { useParams } from 'react-router-dom';
import { Course } from "../../components/Course";
import { useCoursesContext } from '../../context/courses_context';
import { CoursesPageWrapper } from './CoursesPage.styles';
import { memo } from 'react';

export const CoursesPage = memo(() => {
  const {category} = useParams();
  const {courses} = useCoursesContext();

  return (
    <CoursesPageWrapper>
      <div className='container'>
        <div className='category-based-list'>
          {
            courses.filter(course => course.category === category).map((course) => (
              <Course key={course.id} {...course} />
            ))
          }
        </div>
      </div>
    </CoursesPageWrapper>
  )
});
