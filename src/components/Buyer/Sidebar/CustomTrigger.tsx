import { TriggerIcon } from "@/assets/icons";
import useSidebar from "@/hooks/useSidebar";

export default function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="px-[2px] py-[3px]">
      <span>
        <TriggerIcon />
      </span>
    </button>
  );
}
