import { memo, useCallback, useState } from 'react';
import { Course } from "../Course";
import { TabsWrapper } from './Tabs.styles';
import courses from '../../utils/data';
import {
  PYTHON,
  WEB_DEVELOPMENT,
  DATA_SCIENCE,
  AWS,
  DESIGN,
  MARKETING
} from "../../utils/constants";


export const Tabs = memo(() => {
  const categories = [
    PYTHON,
    WEB_DEVELOPMENT,
    DATA_SCIENCE,
    AWS,
    DESIGN,
    MARKETING
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);

  const tabHandler = useCallback((category) => {
    setActiveTab(category);
  }, []);

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          {categories.map(category => (
            <li className='tabs-head-item' key={category}>
              <button
                type="button"
                className={'tab-btn' ? 'active': activeTab === category }
                onClick={() => tabHandler(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className='tabs-body'>
          {courses.filter(course => course.category === activeTab).map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </TabsWrapper>
  )
});
