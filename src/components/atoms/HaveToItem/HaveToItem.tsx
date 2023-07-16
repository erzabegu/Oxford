import { HaveToItemTypes } from './HaveToItem.types.ts';

const HaveToItem = ({ text, icon, number }: HaveToItemTypes) => {
  return (
    <div className={'flex gap-1.5 pb-3'}>
      {icon}
      <span className={'text-gray-900'}>
        <span className={'text-base font-semibold leading-6'}>
          {number}
          <span className={'text-base font-normal leading-6'}>{text}</span>
        </span>
      </span>
    </div>
  );
};

export default HaveToItem;
