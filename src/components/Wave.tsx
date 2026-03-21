export function Wave({ size = 24, color = "#C4725A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h2" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 8v8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 5v14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 8v8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12h2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
