import { BrandTitleTypes } from './BrandTitle.types.ts';

const BrandTitle = ({ size = 'sm' }: BrandTitleTypes) => {
  return (
    <span
      className={`font-normal not-italic ${
        size === 'sm'
          ? 'text-20 font-semibold'
          : 'text-5xl font-extrabold leading-60 tracking-tighter'
      } cursor-pointer`}
    >
      <span className="text-lightblue">ONE</span>
      <span className="text-primary">LINE</span>
    </span>
  );
};

export default BrandTitle;
