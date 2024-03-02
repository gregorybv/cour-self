import { categoriesImages } from '../../utils/images';
import { Category } from "../Category";
import { useCoursesContext } from '../../context/courses_context';
import { CategoriesListWrapper } from './CategoriesList.styles';
import { memo } from 'react';

export const CategoriesList = memo(() => {
  const {categories} = useCoursesContext();
  return (
    <CategoriesListWrapper>
      <div className='container'>
        <div className='categories-list-top'>
          <h2>Top Categories</h2>
        </div>
        <div className='categories-list grid'>
          {
            categories.map((category, idx) => {
              return (
                <Category image={categoriesImages[idx]} category={category} key={idx}/>
              )
            })
          }
        </div>
      </div>
    </CategoriesListWrapper>
  )
});
