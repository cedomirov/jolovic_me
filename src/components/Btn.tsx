import Link from "next/link";

interface BtnProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "dark" | "outline";
  className?: string;
}

export function Btn({ children, href, onClick, variant = "outline", className = "" }: BtnProps) {
  const base = "inline-block rounded-3xl px-6 py-3 font-sans text-[13px] font-medium cursor-pointer transition-all duration-200";
  const variants = {
    primary: "bg-terra text-white hover:bg-terra-dark",
    dark: "bg-dark text-white hover:opacity-90",
    outline: "bg-transparent border-[1.5px] border-line text-dark hover:border-terra",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
}
