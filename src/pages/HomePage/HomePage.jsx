import { Hero } from "../../components/Hero";
import { CourseList } from "../../components/CourseList";
import { CategoriesList } from "../../components/CategoriesList";
import { memo } from 'react';

export const HomePage = memo(() => {
  return (
    <div className='holder'>
      <Hero/>
      <CourseList/>
      <CategoriesList/>
    </div>
  )
});
