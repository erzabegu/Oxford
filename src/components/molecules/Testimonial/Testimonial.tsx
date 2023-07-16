import { TestimonialTypes } from './Testimonial.types.ts';
import { Avatar } from '@oxford/atoms';
import { QuotesIcon } from '@oxford/icons';

const Testimonial = ({
  icon,
  testimonialText,
  author,
  avatar,
  position,
  index,
}: TestimonialTypes) => {
  return (
    <div className={`pt-16 pb-16 ${index === 0 ? 'pr-8' : 'pl-16'}`}>
      <div className={'pt-9px pb-9px'}>{icon}</div>
      <div
        className={'pt-6 flex flex-col justify-between relative'}
        style={{
          minHeight: '244px',
          minWidth: index === 0 ? '544px' : '523px',
        }}
      >
        <div className={'absolute top-6 -left-3 z-0'}>
          <QuotesIcon />
        </div>
        <p className="text-lg font-medium leading-7 z-0 text-white">
          {testimonialText}
        </p>
        <div className={'flex gap-4'}>
          <Avatar src={avatar} />
          <div className="text-base font-medium leading-6">
            <p className="text-white">{author}</p>
            <p className="text-indigo-200">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
