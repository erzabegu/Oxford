import { BrandTitle, Button, Input } from '@oxford/atoms';
import './index.css';

const LeftLeadingContent = () => {
  return (
    <div className={'ml-100px flex flex-col h-full w-full leftSideContainer'}>
      <div
        className={
          'text-5xl font-extrabold leading-tight tracking-tight mb-5 text-primary'
        }
      >
        <h1>Faster.Better. Easier.</h1>
        <h2>
          All in <BrandTitle size={'lg'} />
        </h2>
      </div>
      <p className={'text-xl font-normal text-mediumblue pb-10'}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className={'flex pb-4'} style={{ width: '604px' }}>
        <Input type={'email'} placeholder={'Enter your email'} />
        <Button className={'ml-3'}>Start Free Trial</Button>
      </div>
      <div>
        <p className={'text-sm not-italic leading-5 text-mediumblue'}>
          <span className={'font-normal'}>
            Start your free trial, no credit card necessary. By providing your
            email, you agree to our
            <span className={'font-medium underline cursor-pointer'}>
              terms or service.
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LeftLeadingContent;
