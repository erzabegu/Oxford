import { AllInOneBoxTypes } from './AllInOneBox.types.ts';

const AllInOneBox = ({ icon, color, title }: AllInOneBoxTypes) => {
  return (
    <div>
      <div
        className={`flex w-12 h-12 justify-center rounded-md items-center mb-6 ${color}`}
      >
        {icon}
      </div>
      <h6 className="text-lg font-bold leading-7 mb-2 text-gray-900">
        {title}
      </h6>
      <p className="text-base font-medium leading-6 text-gray-500">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </p>
    </div>
  );
};
export default AllInOneBox;
