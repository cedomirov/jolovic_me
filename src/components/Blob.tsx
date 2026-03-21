export function Blob({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) {
  return (
    <div className={`absolute pointer-events-none opacity-12 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <path
          d="M45,-58C57,-50,65,-34,69,-17C73,-1,73,17,65,31C58,45,44,56,29,62C13,68,-3,70,-20,67C-36,63,-53,54,-62,40C-72,26,-75,7,-71,-10C-67,-26,-57,-40,-44,-50C-31,-61,-16,-67,1,-69C18,-71,33,-67,45,-58Z"
          transform="translate(100 100)"
          fill={color}
        />
      </svg>
    </div>
  );
}
