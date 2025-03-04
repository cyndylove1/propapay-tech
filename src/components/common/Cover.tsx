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
    <div className="md:flex xl:m-4 relative hidden m-4 overflow-hidden">
      {/* Cover Image */}
      <div className="relative w-full">
        <img
          src={cover}
          alt="Cover Image"
          className="rounded-xl object-cover w-full h-full"
        />

        {/* Overlay Content */}
        <div className="xl:top-0 absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full px-4">
          {/* Marquee */}
          <Marquee direction="left">
            {Array(3)
              .fill(companyNames)
              .flat()
              .map((company, index) => (
                <span
                  key={index}
                  className="px-6 text-[20px] font-[500] text-white"
                >
                  {company}
                </span>
              ))}
          </Marquee>

          {/* Playback Video */}
          <div className="relative mx-auto my-[8rem] flex justify-center xl:w-[416px]">
            <img
              src={playback}
              alt="Playback"
              className="rounded-xl relative z-10 w-full h-auto"
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              controls
              className="mask-video absolute top-0 left-0 z-20 object-cover w-full h-full"
            />
          </div>

          {/* Swiper Slider */}
          <div className="relative w-full">
            {/* Custom Pagination Positioned Above */}
            <div className="swiper-pagination absolute left-1/2 top-[-40px] z-10 flex -translate-x-1/2"></div>

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
                  <h1 className="mt-6 text-[25px] font-[600] leading-[48px] text-white xl:text-[30px] xl:text-[36px]">
                    Speedy, easy and secure.
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="mt-6 text-[25px] font-[600] leading-[48px] text-white xl:text-[30px] xl:text-[36px]">
                    Flexible payment options.
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="mt-6 text-[25px] font-[600] leading-[48px] text-white xl:text-[30px] xl:text-[36px]">
                    Put your money to work.
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <h6 className="pt-4 text-center font-[500] leading-[24px] text-white md:text-[13px] xl:text-[16px]">
            Welcome to PropaPay! You're one step closer to enhancing your
            business <br /> operations. Please provide the following information
            to get started.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Cover;
