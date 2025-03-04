import { FaKey, FaLock, FaLaptop, FaShieldAlt } from "react-icons/fa";

const SecuritySettings = () => {
  const settings = [
    {
      title: "Lockout Rules",
      description: (
        <>
          Enhance your account security by adding an extra <br />
          layer of protection against unauthorized access.
        </>
      ),
      icon: <FaKey/>,
    },
    {
      title: "2FA Authentication",
      description: (
        <>
          Update your 2FA code to enhance security and <br />
          ensure that only you can access your account.
        </>
      ),
      icon: <FaLock/>,
    },
    {
      title: "Active Sessions",
      description: (
        <>
          End all active sessions to log out of devices, ensuring <br />
          your account is only accessible from your current session.
        </>
      ),
      icon: <FaLaptop/>,
    },
    {
      title: "Change Password",
      description: (
        <>
          Change your password to enhance security and protect <br />
          your account from unauthorized access.
        </>
      ),
      icon: <FaShieldAlt/>,
    },
  ];

  return (
    <div className="max-w-2xl p-6 mx-auto">
      <h2 className="pt-2 text-[20px] font-[600] leading-[23px] text-[#303030]">
        Security Settings
      </h2>
      <p className="pt-2 text-[14px] font-[400] leading-[16px] text-[#484848]">
        Configure your security settings to protect your account.
      </p>

      <div className="mt-4 space-y-4">
        {settings.map((item, index) => (
          <div
            key={index}
            className="flex border-[1px] items-center justify-between gap-[10rem] rounded-lg border border-[#E8E8E8] bg-white p-4 shadow-sm"
          >
            <div>
              <h3 className="text-[16px] font-[600] leading-[19px] text-[#303030]">
                {item.title}
              </h3>
              <p className="pt-2 text-[14px] font-[400] leading-[21px] text-[#303030] text-[#484848]">
                {item.description}
              </p>
            </div>
            <div className="rounded-full bg-[#EEFBF6] p-3 text-[#12725B]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySettings;
