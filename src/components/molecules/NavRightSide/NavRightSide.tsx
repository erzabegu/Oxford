import { Button } from '@oxford/atoms';

const NavRightSide = () => {
  return (
    <div className={'flex gap-x-8 justify-center items-center'}>
      <span className="text-base font-medium cursor-pointer text-gray-500">
        Sign in
      </span>
      <Button>Register for Free</Button>
    </div>
  );
};

export default NavRightSide;
