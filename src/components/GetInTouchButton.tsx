import { Send } from 'lucide-react';
import { useLeadModal } from '@/context/LeadModalContext';

export default function GetInTouchButton() {
  const { openModal } = useLeadModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] px-8 text-base font-bold text-white shadow-[0_10px_24px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 sm:w-auto"
    >
      <Send className="h-5 w-5" aria-hidden="true" />
      Get in Touch
    </button>
  );
}