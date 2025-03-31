import Button from "@/components/common/Button/Button";
import { ArrowIcon, CancelIcon } from "@/assets/icons";

interface NotificationBannerProps {
  notificationText: string;
}

export default function NotificationBanner({
  notificationText,
}: NotificationBannerProps) {
  return (
    <div className="flex items-center justify-between bg-brand-base p-3 w-full">
      <div></div>
      <div className="flex items-center gap-3">
        <h4 className="text-sm font-medium leading-5 text-white">
          {notificationText}
        </h4>
        <Button
          text="View Details"
          className="h-fit border-none bg-transparent p-0 text-sm font-semibold leading-5"
          icon={<ArrowIcon className="h-full w-full stroke-white" />}
          iconPosition="right"
          iconClassName="pt-[5px] pb-1"
        />
      </div>
      <button className="h-5 w-5 p-[4.17px]">
        <CancelIcon />
      </button>
    </div>
  );
}
