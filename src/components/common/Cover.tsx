import Marquee from "react-fast-marquee";
import playback from "@/assets/images/Playback.png";
import video from "@/assets/video/Showreel.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import cover from "@/assets/images/Cover.png";

const Cover: React.FC = () => {
  const companyNames = [
    "Booking.com",
    "Google",
    "Bloomberg",
    "Spotify",
    "Stripe",
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hidden h-screen w-full flex-col justify-between overflow-hidden rounded-2xl bg-[50%_50%] p-[64px] md:flex"
    >
      <div className="flex flex-col gap-[40px] mb-10">
        <Marquee direction="left" autoFill={true}>
          {companyNames.map((name, index) => (
            <span className="text-white px-8" key={index}>{name}</span>
          ))}
        </Marquee>

        <div className="relative mx-auto flex w-2/3 justify-center">
          <img
            src={playback}
            alt="Playback"
            className="relative z-10 h-auto w-full rounded-xl"
          />
          <video
            src={video}
            autoPlay
            loop={true}
            muted
            controls={false}
            className="mask-video absolute left-0 top-0 z-20 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative w-full">
        {/* Custom Pagination Positioned Above */}
        <div className="swiper-pagination mx-auto w-full"></div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[28px] font-[600] leading-[48px] text-white">
                Speedy, easy and secure.
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[28px] font-[600] leading-[48px] text-white">
                Flexible payment options.
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[28px] font-[600] leading-[48px] text-white">
                Put your money to work.
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
        <p className="pt-4 text-center font-medium leading-[24px] text-white md:text-[13px] xl:text-[16px]">
          Welcome to PropaPay! You're one step closer to enhancing your business
          operations. Please provide the following information to get started.
        </p>
      </div>
    </div>
  );
};

export default Cover;
