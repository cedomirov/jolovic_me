interface SvcCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export function SvcCard({ icon, title, description, bgColor }: SvcCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-line hover:-translate-y-1 hover:shadow-lg transition-all duration-250 cursor-default">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
        style={{ background: bgColor }}
      >
        {icon}
      </div>
      <h3 className="font-serif text-[17px] text-dark mb-1">{title}</h3>
      <p className="font-sans text-xs leading-relaxed text-gray">{description}</p>
    </div>
  );
}
