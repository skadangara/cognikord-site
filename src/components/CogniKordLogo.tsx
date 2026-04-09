const CogniKordLogo = ({ size = 36 }: { size?: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cyan C arc */}
      <path
        d="M55 15 A40 40 0 0 0 15 50 A40 40 0 0 0 55 85"
        stroke="hsl(190, 85%, 50%)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Green chevron < */}
      <path
        d="M68 25 L38 50 L68 75"
        stroke="hsl(120, 55%, 50%)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default CogniKordLogo;
