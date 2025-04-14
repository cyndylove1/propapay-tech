import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserType } from './AuthContext';

// Define the registration data interface
export interface RegistrationData {
  userType: UserType;
  countryName: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Initial registration data
const initialRegistrationData: RegistrationData = {
  userType: 'buyer',
  countryName: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// Define the context type
interface RegistrationContextType {
  registrationData: RegistrationData;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  resetRegistrationData: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

// Create the context
const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

// Provider props
interface RegistrationProviderProps {
  children: ReactNode;
}

// Create the provider component
export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  // Initialize state from localStorage if available
  const [registrationData, setRegistrationData] = useState<RegistrationData>(() => {
    const savedData = localStorage.getItem('registrationData');
    return savedData ? JSON.parse(savedData) : initialRegistrationData;
  });
  
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem('registrationStep');
    return savedStep ? parseInt(savedStep, 10) : 1;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('registrationData', JSON.stringify(registrationData));
  }, [registrationData]);

  useEffect(() => {
    localStorage.setItem('registrationStep', currentStep.toString());
  }, [currentStep]);

  // Update registration data
  const updateRegistrationData = (data: Partial<RegistrationData>) => {
    setRegistrationData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  // Reset registration data
  const resetRegistrationData = () => {
    setRegistrationData(initialRegistrationData);
    setCurrentStep(1);
    localStorage.removeItem('registrationData');
    localStorage.removeItem('registrationStep');
  };

  // Navigation functions
  const goToNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  // Context value
  const contextValue: RegistrationContextType = {
    registrationData,
    updateRegistrationData,
    resetRegistrationData,
    currentStep,
    setCurrentStep,
    goToNextStep,
    goToPreviousStep
  };

  return (
    <RegistrationContext.Provider value={contextValue}>
      {children}
    </RegistrationContext.Provider>
  );
};

// Custom hook to use the registration context
export const useRegistration = (): RegistrationContextType => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

export { RegistrationContext };
