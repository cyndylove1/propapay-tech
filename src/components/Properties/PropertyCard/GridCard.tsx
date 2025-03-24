import {
  ArrowIcon,
  BathtubIcon,
  FavouriteIcon,
  SingleBedIcon,
  AreaMeterIcon,
} from "@/assets/icons";
import Button from "@/components/common/Button/Button";
import PropertyBadge from "../PropertyBadge";
import { PropertyCardProps } from "@/types/properties.types";

export default function GridCard({
  propertyName,
  propertyLocation,
  beds,
  bathrooms,
  area,
  price,
  image,
  badge,
}: PropertyCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-100 p-2 shadow-[0_2px_4px_0_#1C1D1E0A]">
      {/* Image */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`rounded-lg bg-[50%_50%] h-[240px] w-full p-3`}
      >
        <div className="flex items-center justify-between">
          <PropertyBadge label={badge} />
          <span className="h-11 w-11 rounded-full bg-[#FFFFFFCC] p-3 shadow-[0_2px_4px_0_#1C1D1E0A]">
            <FavouriteIcon />
          </span>
        </div>
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4 px-3 py-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold leading-6 text-neutral-base">
            {propertyName}
          </h1>
          <p className="text-sm font-medium leading-5 text-neutral-700">
            {propertyLocation}
          </p>
        </div>
        {/* Facilities */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="h-5 w-5 px-[1.67px] py-[2.5px]">
              <SingleBedIcon />
            </span>
            <span className="text-sm font-medium leading-5 text-neutral-700">
              {beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-5 w-5 px-[1.67px] py-[2.5px]">
              <BathtubIcon />
            </span>
            <span className="text-sm font-medium leading-5 text-neutral-700">
              {bathrooms} Bathrooms
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-5 w-5 px-[1.67px] py-[2.5px]">
              <AreaMeterIcon />
            </span>
            <span className="text-sm font-medium leading-5 text-neutral-700">
              {area} m&sup2;
            </span>
          </div>
        </div>
        <div className="w-full border border-dashed border-neutral-100"></div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold leading-6 text-brand-base">
            ₦{price}
          </h1>
          <Button
            text="Buy Now"
            className="h-9 rounded-lg border border-brand-base bg-transparent px-4 py-2 text-sm font-semibold leading-5 text-brand-base shadow-[0_1_2_0_#375DFB14]"
            icon={<ArrowIcon className="h-full w-full stroke-brand-base" />}
            iconPosition="right"
            iconClassName="pt-[5px] pb-1"
          />
        </div>
      </div>
    </div>
  );
}
