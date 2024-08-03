import { Header } from '@/app/components/Layout/Header';

export const Hero = () => {
    return (
      <>
        <div className="lg:h-[calc(100vh-3rem)] relative overflow-hidden  rounded-xl">
          <Header />
        </div>
      </>
    );
};
