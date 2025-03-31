import Button from "@/components/common/Button/Button";
import { AdvertPattern } from "@/assets/icons";

interface AdvertCardProps {
    header: string;
    description: string;
}

export default function AdvertCard({header,description}: AdvertCardProps) {
    return (
        <div className="rounded-2xl px-6 py-5 bg-[linear-gradient(90deg,#1C1D1E_0%,#4E5257_100%)] relative flex flex-col gap-4 justify-center h-[192px]">
            <div className="flex flex-col gap-1">
                <h1 className="font-aeonik font-medium text-base text-white">
                    {header}
                </h1>
                <p className="font-aeonik font-normal w-[229px] z-20 text-sm text-neutral-30">
                    {description}
                </p>
            </div>
            <Button 
            text="Learn More"
            className="py-2 px-3 bg-white rounded-[43px] h-[30px] w-[100px] text-black font-aeonik font-medium text-sm"
            />

            <span className="w-[128px] h-[115.94px] absolute top-0 left-0">
                <AdvertPattern className="opacity-35" />
            </span>
            <div className="w-[140px] h-[140px] absolute right-0 bottom-[26px] top-[26px]">
                <img src="/images/rocket.webp" className="opacity-85" />
            </div>
        </div>
    )
}