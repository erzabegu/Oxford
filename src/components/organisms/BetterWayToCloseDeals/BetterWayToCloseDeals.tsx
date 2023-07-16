import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@oxford/store';
import { CategoryIcon } from '@oxford/icons';
import { HomeTemplateTypes } from '@oxford/templates';
import './index.css';

export const BetterWayToCloseDeals = ({ loading }: HomeTemplateTypes) => {
  const { image } = useSelector((state: RootState) => state.image);

  const categories = [
    'Categorize',
    'Show in Funnel',
    'Drive Campaign',
    'Send Online Form',
    'Send ApplicationIcon',
    'Go see Live',
    'Make the Deal',
  ];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div className={'container mx-auto mt-24 pb-24'}>
      <h3 className="text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 text-gray-900">
        A better way to close deals
      </h3>
      <p className="text-xl font-normal leading-7 text-gray-500 text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam
        <br /> voluptatum cupiditate veritatis in, accusamus quisquam.
      </p>
      <div className={'flex gap-5 mx-auto items-center justify-center'}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={'flex gap-11px justify-center items-center'}
            role={'button'}
            onClick={() => {
              setActiveCategory(category);
            }}
          >
            <CategoryIcon isActive={category === activeCategory} />
            <p className="text-sm font-semibold leading-6">{category}</p>
          </div>
        ))}
      </div>
      {loading && (
        <div className=" mt-70px mx-auto bg-gradient-to-r from-gray-200 to-gray-400 animate-pulse imageSize" />
      )}
      {!loading && (
        <img
          alt={''}
          src={image ?? ''}
          className={'mt-70px mx-auto object-cover imageSize'}
        />
      )}
    </div>
  );
};

export default BetterWayToCloseDeals;
