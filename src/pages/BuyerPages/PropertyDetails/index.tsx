import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Checkbox from "@/components/common/Input/Checkbox";
import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button/Button";
import {
  ArrowIcon,
  HeartIcon,
  ShareIcon,
  TagIcon,
  MoreIcon,
  CalendarIcon,
} from "@/assets/icons";
import PropertyFacilities from "@/components/Properties/PropertyFacilities";
import AgentCard from "@/components/Properties/AgentCard";

export default function PropertyDetails() {
  return (
    <>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[18px] font-semibold leading-[32px] text-neutral-base md:text-[24px]">
            Property Details
          </h1>
          <div className="flex items-center gap-3">
            <Button
              text="Available"
              className="bg-sulu-base border-sulu-400 h-9 rounded-lg border pl-4 pr-5 text-sm font-semibold leading-5 text-neutral-base"
              icon={<TagIcon />}
              iconClassName="px-[3.33px] py-[1.67px]"
            />
            <Button
              text="Buy Now"
              className="h-9 gap-2 rounded-lg py-2 pl-5 pr-4 text-sm font-semibold leading-5"
              icon={<ArrowIcon className="h-full w-full stroke-white" />}
              iconClassName="pt-[5px] pb-1"
              iconPosition="right"
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex gap-6">
          {/* L.H.S */}
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-[#E0E0E0] p-4 lg:w-2/3 lg:max-w-[728px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2000 }}
              className="h-[346px] w-full rounded-xl"
            >
              {Array(3)
                .fill({})
                .map(() => (
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/di3qlrrgj/image/upload/v1742898791/a7e780431d88a84091c189351f680b01_d3qkta.webp"
                      alt="property-view"
                      className="h-full w-full rounded-xl"
                    />{" "}
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* Name-Location */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-[24px] font-semibold leading-9">
                  Diamond Manco Apartment
                </h1>
                <p className="text-sm font-medium leading-5 text-neutral-800">
                  210 Jericho Highway, Comfort Island, Ibadan
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-lg border border-[#E0E0E0] p-2">
                  <ShareIcon />
                </span>
                <span className="h-10 w-10 rounded-lg border border-[#E0E0E0] p-2">
                  <HeartIcon />
                </span>
                <span className="h-10 w-10 rounded-lg border border-[#E0E0E0] p-2">
                  <MoreIcon />
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <h2 className="font-inter text-[18px] font-medium leading-6 text-[#2E2E2E]">
                Description
              </h2>
              <p className="font-inter text-sm font-medium leading-5 text-[#2E2E2E]">
                Hayfield Ashton Place Residences at Willow Brook Valley" evokes
                an elegant and serene residential community. It suggests a
                picturesque neighborhood with modern yet charming homes,
                possibly surrounded by lush greenery, rolling landscapes, or a
                tranquil brook. The name conveys a sense of sophistication,
                comfort, and exclusivity, ideal for those seeking a refined
                living experience in a scenic setting.
              </p>
            </div>

            <PropertyFacilities />
          </div>

          {/* R.H.S */}
          <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-[#E0E0E0] p-4">
            <div className="flex flex-col gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
              <h4 className="font-inter text-[18px] font-medium leading-6 text-[#2E2E2E]">
                Property Pricing
              </h4>
              <div className="flex flex-col gap-4">
                <Checkbox
                  labelClassName="font-inter font-normal text-base leading-6 text-[#727272]"
                  label="Rent a House"
                />
                <Checkbox
                  labelClassName="font-inter font-normal text-base leading-6 text-[#727272]"
                  label="Buy a House"
                />
              </div>
              <Input
                label="Annual Payment"
                labelClassName="mb-2 font-inter font-medium text-base leading-6 text-[#2E2E2E]"
                className="font-inter h-auto px-3 py-2 text-base font-normal leading-6 placeholder:text-[#727272]"
                placeholder="USD 14,000"
              />
              <Input
                label="Minimum Rental Duration"
                labelClassName="mb-2 font-inter font-medium text-base leading-6 text-[#2E2E2E]"
                className="font-inter h-auto px-3 py-2 text-base font-normal leading-6 placeholder:text-[#727272]"
                placeholder="3 Years"
              />
            </div>
            <AgentCard
              agentName="Sophia Williams"
              agentTitle="Real Estate Agent"
            />

            <div className="flex flex-col gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
              <h4 className="font-inter text-[18px] font-medium leading-6 text-[#2E2E2E]">
                Inspection Times
              </h4>

              <div className="flex flex-col gap-2">
                <h2 className="font-inter text-base leading-6 text-[#2E2E2E]">
                  Inspections are actions are still happening{" "}
                </h2>
                <p className="font-inter text-xs font-normal leading-4 text-[#727272]">
                  Monday-Friday at 10:00am-5:00PM
                </p>
              </div>

              <Button
                text={"Make Payment"}
                className="font-inter h-auto w-full rounded-lg border border-blue-600 p-[10px] text-sm leading-5 text-white shadow-[0_2px_2px_0_#FFFFFF66]"
                icon={<CalendarIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
