import { AvatarTypes } from './Avatar.types.ts';

const Avatar = ({ size = 'sm', src, ...rest }: AvatarTypes) => {
  return (
    <img
      {...rest}
      src={src}
      className={size === 'lg' ? 'h-16 w-16' : 'h-52px w-52px'}
    />
  );
};

export default Avatar;
