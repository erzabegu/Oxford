import { CategoryIconTypes } from './CategoryIcon.types.ts';

export const CategoryIcon = ({ isActive }: CategoryIconTypes) => {
  return isActive ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
    >
      <circle cx="20" cy="19.5" r="19.5" fill="#EDE9FE" />
      <circle
        cx="20"
        cy="19.5"
        r="7"
        fill="#8B5CF6"
        stroke="white"
        stroke-width="3"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
    >
      <circle cx="20" cy="19.5" r="19.5" fill="#E5E7EB" />
      <circle
        cx="20"
        cy="19.5"
        r="7"
        fill="#D1D5DB"
        stroke="white"
        stroke-width="3"
      />
    </svg>
  );
};
export default CategoryIcon;
