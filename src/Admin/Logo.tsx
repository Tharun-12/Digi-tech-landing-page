// Logo lives in src/assets/logo.webp (this file is in src/Admin/)
import logo from '../assets/logo.webp';

export default function Logo({ className = 'h-10' }: { className?: string }) {
  return <img src={logo} alt="iiiQBets" className={`w-auto ${className}`} />;
}