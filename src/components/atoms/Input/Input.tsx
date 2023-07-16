import { InputTypes } from './Input.types.ts';

const Input = ({ ...rest }: InputTypes) => {
  return (
    <input
      {...rest}
      className="bg-white w-full border border-gray-300 border-solid py-3 h-12 border-transparent px-4 rounded-lg shadow-sm focus:outline-none text-base leading-6 font-normal focus:border-blue-500 placeholder-lightgray"
    />
  );
};

export default Input;
