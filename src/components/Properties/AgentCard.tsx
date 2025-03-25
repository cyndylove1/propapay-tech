import { CallIcon, MessageIcon } from "@/assets/icons";
import Button from "../common/Button/Button";

interface AgentCardProps {
  agentName: string;
  agentTitle: string;
}

export default function AgentCard({ agentName, agentTitle }: AgentCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
      <h4 className="font-inter text-[18px] font-medium leading-6 text-[#2E2E2E]">
        Agent Details
      </h4>
      <div className="flex gap-5">
        <div className="h-12 w-12 bg-[#D2B1AC] rounded-full">
          <img
            src="https://res.cloudinary.com/di3qlrrgj/image/upload/v1742938995/26364dc17ad40120217008c73c625960_kgz2sr.png"
            alt={"agent " + agentName}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-inter text-[18px] font-medium leading-6 text-[#2E2E2E]">
            {agentName}
          </h2>
          <p className="font-inter text-xs font-normal leading-4 text-[#727272]">
            {agentTitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          text="Call Us"
          className="font-inter h-auto w-full gap-1 rounded-lg border border-blue-600 p-[10px] text-sm leading-5 text-white shadow-[0_2px_2px_0_#FFFFFF66]"
          icon={<CallIcon />}
        />
        <Button
          text="Call Us"
          className="bg-sulu-base border-sulu-400 font-inter h-auto w-full gap-1 rounded-lg border p-[10px] text-sm leading-5 text-neutral-base"
          icon={<MessageIcon />}
        />
      </div>
    </div>
  );
}
