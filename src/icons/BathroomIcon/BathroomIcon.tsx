import { IconTypes } from '../icon.types.ts';

const BathroomIcon = ({
  width = '24',
  height = '24',
  fill = 'none',
}: IconTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        d="M6.825 9.025C6.325 9.025 5.89583 8.84583 5.5375 8.4875C5.17917 8.12917 5 7.7 5 7.2C5 6.7 5.17917 6.27083 5.5375 5.9125C5.89583 5.55417 6.325 5.375 6.825 5.375C7.325 5.375 7.75417 5.55417 8.1125 5.9125C8.47083 6.27083 8.65 6.7 8.65 7.2C8.65 7.7 8.47083 8.12917 8.1125 8.4875C7.75417 8.84583 7.325 9.025 6.825 9.025ZM4.65 22C4.35 22 4.08333 21.9042 3.85 21.7125C3.61667 21.5208 3.5 21.2833 3.5 21C3.08333 21 2.72917 20.8542 2.4375 20.5625C2.14583 20.2708 2 19.9167 2 19.5V13H5V12.3C5 11.7167 5.20833 11.2167 5.625 10.8C6.04167 10.3833 6.54167 10.175 7.125 10.175C7.44167 10.175 7.74167 10.2333 8.025 10.35C8.30833 10.4667 8.55833 10.6417 8.775 10.875L10.075 12.35C10.1917 12.4833 10.3125 12.6042 10.4375 12.7125C10.5625 12.8208 10.6917 12.9167 10.825 13H18V4.65C18 4.33333 17.8958 4.0625 17.6875 3.8375C17.4792 3.6125 17.2167 3.5 16.9 3.5C16.7333 3.5 16.575 3.51667 16.425 3.55C16.275 3.58333 16.1417 3.65833 16.025 3.775L14.725 5.075C14.8083 5.35833 14.8208 5.64583 14.7625 5.9375C14.7042 6.22917 14.6 6.50833 14.45 6.775L11.9 4.35C12.1667 4.16667 12.4583 4.05 12.775 4C13.0917 3.95 13.4 3.98333 13.7 4.1L15 2.825C15.25 2.575 15.5375 2.375 15.8625 2.225C16.1875 2.075 16.5333 2 16.9 2C17.6333 2 18.25 2.25833 18.75 2.775C19.25 3.29167 19.5 3.91667 19.5 4.65V13H22V19.5C22 19.9167 21.8542 20.2708 21.5625 20.5625C21.2708 20.8542 20.9167 21 20.5 21C20.5 21.2833 20.3833 21.5208 20.15 21.7125C19.9167 21.9042 19.6417 22 19.325 22H4.65ZM3.5 19.5H20.5V14.5H3.5V19.5ZM20.5 19.5H3.5H20.5Z"
        fill="black"
      />
    </svg>
  );
};

export default BathroomIcon;