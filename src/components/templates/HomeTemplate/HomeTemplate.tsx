import { HomeTemplateTypes } from './HomeTemplate.types.ts';
import {
  AllInOnePlatform,
  BetterWayToCloseDeals,
  Footer,
  Header,
  LeadingContent,
  Testimonials,
} from '@oxford/organisms';

const HomeTemplate = ({ loading, getImage }: HomeTemplateTypes) => {
  return (
    <div>
      <header className={'sticky top-0 bg-white z-10 w-full custom-shadow'}>
        <Header />
      </header>
      <div className={'w-full bg-gray-50'}>
        <LeadingContent />
        <BetterWayToCloseDeals loading={loading} getImage={getImage}/>
      </div>
      <Testimonials />
      <AllInOnePlatform />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
