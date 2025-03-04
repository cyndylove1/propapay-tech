import ToggleSwitch from "@/components/ToggleSwitch";

const appNotification = [
  {
    MainText: "Mobile push notifications",
    subtext:
      "Receive push notifications on mentions and comments via your mobile app",
  },
  {
    MainText: "Desktop push notifications",
    subtext:
      "Receive push notifications on mentions and comments immediately on your desktop app",
  },
  {
    MainText: "Daily digest",
    subtext:
      "Includes Productivity stats and tasks due today. Sent every morning.",
  },
];

const emailNotification = [
  {
    MainText: "Activity in your workspace",
    subtext:
      "Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes.",
  },
  {
    MainText: "Always send email notifications",
    subtext:
      "Receive emails about activity in your workspace, even when you're active on the app",
  },
  {
    MainText: "Email digest",
    subtext:
      "Receive email digests every 8 hours for changes to pages you’re subscribed to.",
  },
];

const NotificationSettings: React.FC = () => {
  return (
    <div className="max-w-2xl p-6 mx-auto">
      <h2 className="text-[24px] font-[500] leading-[31px] text-[#1A202C]">
        Notification
      </h2>
      {/* In-App Notifications */}
      <div className="pb-4 pt-[30px]">
        <h2 className="border-b-[1px] border-[#DFE1E6] pb-4 text-[16px] font-[600] leading-[24px] text-[#0D0D12]">
          In-app Notifications
        </h2>
      </div>
      <div className="space-y-4">
        {appNotification.map(({ MainText, subtext }, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <h3 className="text-[16px] font-[600] leading-[24px] text-[#0D0D12]">
                {MainText}
              </h3>
              <p className="text-[14px] font-[400] leading-[21px] text-[#666D80]">
                {subtext}
              </p>
            </div>
            <ToggleSwitch className="h-[16px] w-[34px]" />
          </div>
        ))}
      </div>

      {/* Email Notifications */}
      <div className="pb-4 pt-[30px]">
        <h2 className="border-b-[1px] border-[#DFE1E6] pb-4 text-[16px] font-[600] leading-[24px] text-[#0D0D12]">
          Email Notifications
        </h2>
      </div>
      <div className="space-y-4">
        {emailNotification.map(({ MainText, subtext }, index) => (
          <div key={index} className="flex items-center justify-between gap-[4px]">
            <div>
              <h3 className="text-[16px] font-[600] leading-[24px] text-[#0D0D12]">
                {MainText}
              </h3>
              <p className="text-[14px] font-[400] leading-[21px] text-[#666D80]">
                {subtext}
              </p>
            </div>
            <ToggleSwitch className="h-[16px] w-[34px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
