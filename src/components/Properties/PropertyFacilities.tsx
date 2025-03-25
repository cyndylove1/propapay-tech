import {
  CarIcon,
  DoubleBedIcon,
  FlowerPotIcon,
  GymIcon,
  HomeIcon,
  PoolIcon,
  ResizeIcon,
  ToiletIcon,
} from "@/assets/icons";
import { PropertyFacilitiesProps } from "@/types/properties.types";

export default function PropertyFacilities({
  bedroom = 4,
  bathroom = 3,
  parking = 2,
  area = 1400,
}: Partial<PropertyFacilitiesProps>) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] p-4">
      <h2 className="font-inter text-[18px] font-medium leading-6 text-[#2E2E2E]">
        Property Facilities
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <DoubleBedIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            {bedroom} Bedrooms
          </p>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <ToiletIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            {bathroom} Bathrooms
          </p>
        </span>
        <span className="flex items-center  gap-2">
          <span className="h-5 w-5">
            <HomeIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            Home System
          </p>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <GymIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            Gym
          </p>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <CarIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            {parking} Parking
          </p>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <ResizeIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            {area} sq ft
          </p>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <PoolIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            Pool
          </p>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-5 w-5">
            <FlowerPotIcon />
          </span>
          <p className="font-inter text-base font-normal leading-6 text-[#2E2E2E]">
            Garden View
          </p>
        </span>
      </div>
    </div>
  );
}
