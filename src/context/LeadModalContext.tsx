import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import LeadModal from '@/components/LeadModal';

type LeadModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue>({
  openModal: () => {},
  closeModal: () => {},
});

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadModal open={open} onClose={closeModal} />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  return useContext(LeadModalContext);
}