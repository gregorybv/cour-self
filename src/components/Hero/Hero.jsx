import { HeroWrapper } from './Hero.styles';
import { memo } from 'react';

export const Hero = memo(() => {
  return (
    <HeroWrapper className="bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Save big. Learn big.</h1>
          <p>Shop our big sale for courses from $9.99. If you what to learn it, chances are we've got it. Ends Aug.
            31.</p>
        </div>
      </div>
    </HeroWrapper>
  )
});
