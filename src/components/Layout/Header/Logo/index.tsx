import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 border border-primary/40 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
      <span className="text-22 font-medium tracking-tight text-white uppercase">
        Fyn<span className="text-primary font-light">ex</span>
      </span>
    </Link>
  );
};

export default Logo;
