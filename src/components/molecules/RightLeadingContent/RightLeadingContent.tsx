import LivingRoom from '../../../assets/images/LivingRoom.png';
import BannerAvatar from '../../../assets/images/Avatar.png';
import { Avatar, HaveToItem } from '@oxford/atoms';
import { LivingRoomIcon, BedIcon, BathroomIcon } from '@oxford/icons';
import './index.css';

const RightLeadingContent = () => {
  const toHaveItems = [
    {
      icon: <LivingRoomIcon />,
      number: 1,
      text: 'Living Room',
    },
    {
      icon: <BedIcon />,
      number: 1,
      text: 'Bedroom',
    },
    {
      icon: <BathroomIcon />,
      number: 1,
      text: 'Bathroom',
    },
  ];
  return (
    <div
      className="w-full bg-cover bg-center h-714px relative"
      style={{ backgroundImage: `url(${LivingRoom})` }}
    >
      <div className={'absolute top-261px left-67px flex gap-3.5'}>
        <Avatar size={'lg'} src={BannerAvatar} />
        <div className={'apartmentFeatures'}>
          <div className={'p-4 bg-white rounded-10px mb-5px'}>
            <p className={'text-sm italic font-medium leading-5'}>
              Hi, I am Interested for an Apartment
              <br />
              in Upper East Side
            </p>
          </div>
          <div className={'p-4 bg-white rounded-10px text-gray-900'}>
            <p className={'text-sm font-medium leading-6 mb-3'}>to have:</p>
            {toHaveItems.map((item, index) => (
              <HaveToItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightLeadingContent;
