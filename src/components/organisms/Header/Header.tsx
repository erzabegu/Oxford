import { NavLeftSide, NavRightSide } from '@oxford/molecules';

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between p-6">
      <NavLeftSide />
      <NavRightSide />
    </header>
  );
};

export default Header;
