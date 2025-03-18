import { useEffect, useState } from "react";
import PaymentMenu from "./PaymentMenu";
import ReminderEdit from "./ReminderEdit";

interface PaymentReminderProps {
  isOpenMenu: boolean;
  onClose: () => void;
}

const PaymentReminder = ({ isOpenMenu, onClose }: PaymentReminderProps) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const formStatus = localStorage.getItem("formSubmitted");
    if (formStatus === "true") {
      setIsFormSubmitted(true);
    }
  }, []);

  const handleFormSubmit = () => {
    localStorage.setItem("formSubmitted", "true");
    setIsFormSubmitted(true);
  };

  return (
    <div>
      {isOpenMenu &&
        (isFormSubmitted ? (
          <ReminderEdit isOpenMenu={isOpenMenu} onClose={onClose} />
        ) : (
          <PaymentMenu
            isOpenMenu={isOpenMenu}
            onClose={onClose}
            onSubmit={handleFormSubmit}
          />
        ))}
      <button onClick={onClose}>Close Menu</button>
    </div>
  );
};

export default PaymentReminder;
