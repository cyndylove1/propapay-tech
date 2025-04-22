import { useNavigate } from 'react-router';
import { UserType } from '@/context/AuthContext';
import { useRegistration } from '@/context/RegistrationContext';
import Cover from '@/components/common/Cover';
import RegisterFooter from '@/components/RegisterFooter';
import { HomesLogo } from '@/assets/icons';

export default function UserTypeSelection() {
  const { updateRegistrationData } = useRegistration();
  const navigate = useNavigate();

  const handleUserTypeSelect = (userType: UserType) => {
    updateRegistrationData({ userType });
    navigate('/register-contact');
  };

  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <Cover />
      <div className="flex h-full w-full flex-col items-center justify-center px-4 py-8 md:w-1/2 md:px-10 lg:px-20">
        <div className="mb-8 flex w-full items-center justify-center md:justify-start">
          <HomesLogo />
        </div>
        <div className="mb-8 w-full text-center md:text-left">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Select User Type</h1>
          <p className="text-gray-600">Choose how you want to use PropaPay</p>
        </div>

        <div className="mb-8 w-full space-y-4">
          <div 
            onClick={() => handleUserTypeSelect('buyer')}
            className="cursor-pointer rounded-lg border border-gray-200 p-6 hover:border-primary hover:bg-primary/5 transition-all"
          >
            <h3 className="mb-2 text-xl font-semibold">Buyer</h3>
            <p className="text-gray-600">I want to purchase or invest in properties</p>
          </div>
          
          <div 
            onClick={() => handleUserTypeSelect('developer')}
            className="cursor-pointer rounded-lg border border-gray-200 p-6 hover:border-primary hover:bg-primary/5 transition-all"
          >
            <h3 className="mb-2 text-xl font-semibold">Developer</h3>
            <p className="text-gray-600">I want to list and sell properties</p>
          </div>
        </div>

        <RegisterFooter />
      </div>
    </div>
  );
}
