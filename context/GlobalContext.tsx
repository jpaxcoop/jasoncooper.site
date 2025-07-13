'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type ModalContextType = {
  showContactModal: () => void;
  hideContactModal: () => void;
  isVisible: boolean;
};

const GlobalContext = createContext<ModalContextType | undefined>(undefined);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showContactModal = () => setIsVisible(true);
  const hideContactModal = () => setIsVisible(false);

  return (
    <GlobalContext.Provider value={{ isVisible, showContactModal, hideContactModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useContactModal = () => {
  console.log('useContactModal called');
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useContactModal must be used within GlobalContextProvider');
  return context;
};
