import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: mounted ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
