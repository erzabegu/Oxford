import { NavItemTypes } from './NavItem.types.ts';

const NavItem = ({ isActive, ...rest }: NavItemTypes) => {
  return (
    <li
      {...rest}
      className={`text-base font-medium cursor-pointer ${
        isActive ? 'text-gray-900' : 'text-gray-500'
      }`}
    >
      {rest.children}
    </li>
  );
};

export default NavItem;
