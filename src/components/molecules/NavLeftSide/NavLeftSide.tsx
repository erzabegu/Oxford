import { useState } from 'react';
import { BrandTitle, NavItem } from '@oxford/atoms';

const NavLeftSide = () => {
  const navlinks = ['Solutions', 'Pricing', 'Contact Us'];
  const [activeLink, setActiveLink] = useState<string>(navlinks[0]);

  return (
    <div className={'flex justify-center items-center'}>
      <BrandTitle />
      <ul className="flex gap-10 pl-43px">
        {navlinks.map((navlink, index) => (
          <NavItem
            key={index}
            onClick={() => setActiveLink(navlink)}
            isActive={activeLink === navlink}
          >
            {navlink}
          </NavItem>
        ))}
      </ul>
    </div>
  );
};

export default NavLeftSide;
