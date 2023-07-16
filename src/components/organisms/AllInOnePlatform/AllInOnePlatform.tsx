import {
  AddTagIcon,
  AddTaskIcon,
  ApplicationIcon,
  ChartIcon,
  SendIcon,
  SMSIcon,
  UploadIcon,
} from '@oxford/icons';
import CampaignIcon from '../../../icons/CampaignIcon';
import { AllInOneBox } from '@oxford/molecules';

const AllInOnePlatform = () => {
  const allInOnePlatform = [
    {
      icon: <UploadIcon />,
      color: 'bg-orange-50',
      title: 'Import CSV',
    },
    {
      icon: <CampaignIcon />,
      color: 'bg-green-50',
      title: 'CampaignIcon',
    },
    {
      icon: <AddTaskIcon />,
      color: 'bg-cyan-50',
      title: 'Add Task',
    },
    {
      icon: <AddTagIcon />,
      color: 'bg-indigo-50',
      title: 'Add Tags',
    },
    {
      icon: <ChartIcon />,
      color: 'bg-red-50',
      title: 'See statistics',
    },
    {
      icon: <SMSIcon />,
      color: 'bg-yellow-50',
      title: 'Email&SMS',
    },
    {
      icon: <ApplicationIcon />,
      color: 'bg-teal-50',
      title: 'Receive Applications',
    },
    {
      icon: <SendIcon />,
      color: 'bg-blue-50',
      title: 'Send Online Forms',
    },
  ];
  return (
    <div className={'container mx-auto mt-16 mb-145px'}>
      <h3 className="text-3xl font-extrabold leading-9 text-center color-gray-900 mb-4">
        All-in-One Platform
      </h3>
      <p className="text-lg font-normal leading-7 text-center pb-38px">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing <br /> sagittis vel nulla nec.
      </p>
      <div className={'grid gap-x-8 gap-y-16 grid-cols-4 grid-rows-2 px-3'}>
        {allInOnePlatform.map((item, index) => (
          <AllInOneBox {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllInOnePlatform;
