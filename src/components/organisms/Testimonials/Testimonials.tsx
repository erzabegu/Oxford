import { OxfordIcon, SpireIcon } from '@oxford/icons';
import Avatar1 from '../../../assets/images/Avatar1.png';
import Avatar2 from '../../../assets/images/Avatar2.png';
import { Testimonial } from '@oxford/molecules';

const Testimonials = () => {
  const testimonials = [
    {
      icon: <OxfordIcon />,
      testimonialText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. ',
      author: 'Adam Mahfouda',
      avatar: Avatar1,
      position: 'CEO, OPGNY',
    },
    {
      icon: <SpireIcon />,
      testimonialText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae. ',
      author: 'Joseph Rodriguez',
      avatar: Avatar2,
      position: 'CEO, spire',
    },
  ];
  return (
    <div className={'w-full bg-blue'}>
      <div className={'container pl-8 pr-8 mx-auto flex'}>
        {testimonials.map((testimonial, index) => (
          <Testimonial {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
