import logoImg from '../assets/logo.png';

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "w-10 h-10" }: BrandLogoProps) {
  return (
    <div className={`${className} rounded-xl border border-zinc-200/80 bg-white overflow-hidden flex items-center justify-center shadow-sm relative shrink-0`}>
      <img
        src={logoImg}
        alt="Shanva Media Logo"
        className="w-full h-full mr-1 object-contain scale-[1.85] mix-blend-multiply select-none"
      />
    </div>
  );
}
