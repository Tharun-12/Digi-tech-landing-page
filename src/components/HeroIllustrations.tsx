export function WheelIllustration() {
  const services = [
    'Social Media',
    'Email Marketing',
    'Analytics & Reporting',
    'Paid Advertising',
    'Blog',
    'Website Design',
    'Search Engine Optimization',
    'Digital Marketing',
  ];
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-auto w-full max-w-[420px] drop-shadow-2xl"
      role="img"
      aria-label="Wheel of digital marketing services"
    >
      <circle cx="200" cy="200" r="196" fill="rgba(255,255,255,0.06)" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 6" />
      {services.map((label, i) => {
        const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
        const x = 200 + Math.cos(angle) * 150;
        const y = 200 + Math.sin(angle) * 150;
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="30" fill="#E11D2E" opacity={i % 2 === 0 ? 1 : 0.85} />
            <circle cx={x} cy={y} r="30" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <text x={x} y={y - 2} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Montserrat, sans-serif">
              {label.split(' ').slice(0, 1).join(' ')}
            </text>
            <text x={x} y={y + 12} textAnchor="middle" fill="#fff" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.9">
              {label.split(' ').slice(1).join(' ')}
            </text>
          </g>
        );
      })}
      <circle cx="200" cy="200" r="62" fill="#0B1F4B" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
      <text x="200" y="192" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat, sans-serif">
        Digital
      </text>
      <text x="200" y="212" textAnchor="middle" fill="#F0B429" fontSize="14" fontWeight="800" fontFamily="Montserrat, sans-serif">
        Marketing
      </text>
    </svg>
  );
}

export function CodeIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full max-w-[440px] drop-shadow-2xl"
      role="img"
      aria-label="Desktop monitor with website code"
    >
      <rect x="30" y="20" width="360" height="230" rx="14" fill="#0B1F4B" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <rect x="46" y="38" width="328" height="196" rx="8" fill="#071636" />
      <circle cx="66" cy="52" r="4" fill="#E11D2E" />
      <circle cx="80" cy="52" r="4" fill="#F0B429" />
      <circle cx="94" cy="52" r="4" fill="#34D399" />
      <text x="66" y="92" fontFamily="monospace" fontSize="13" fill="#7A90D8">{`<html>`}</text>
      <text x="82" y="114" fontFamily="monospace" fontSize="13" fill="#F0B429">{`<body>`}</text>
      <text x="98" y="136" fontFamily="monospace" fontSize="13" fill="#FBAFAE">{`<h1>`}Hello World{`</h1>`}</text>
      <text x="98" y="158" fontFamily="monospace" fontSize="13" fill="#34D399">{`<p>`}We build growth{`</p>`}</text>
      <text x="82" y="180" fontFamily="monospace" fontSize="13" fill="#F0B429">{`</body>`}</text>
      <text x="66" y="202" fontFamily="monospace" fontSize="13" fill="#7A90D8">{`</html>`}</text>
      <rect x="180" y="250" width="60" height="34" fill="#12275C" />
      <rect x="140" y="284" width="140" height="12" rx="6" fill="#0B1F4B" stroke="rgba(255,255,255,0.35)" />
      <circle cx="360" cy="60" r="26" fill="#E11D2E" />
      <path d="M350 60l8 8 14-16" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ConversionIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full max-w-[440px] drop-shadow-2xl"
      role="img"
      aria-label="Monitor with target, gears and lightbulb"
    >
      <rect x="30" y="30" width="300" height="200" rx="14" fill="#0B1F4B" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <rect x="44" y="44" width="272" height="172" rx="8" fill="#071636" />
      {[[90, 260], [140, 250], [190, 220], [240, 200]].map(([x, y], i) => (
        <rect key={i} x={x as number} y={y as number} width="28" height={340 - (y as number)} rx="4" fill={i === 3 ? '#E11D2E' : '#2A44A0'} opacity={0.5 + i * 0.15} />
      ))}
      <circle cx="300" cy="110" r="46" fill="#E11D2E" />
      <circle cx="300" cy="110" r="30" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="300" cy="110" r="16" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="300" cy="110" r="4" fill="#fff" />
      <g transform="translate(330, 240)">
        <circle r="26" fill="#F0B429" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return <rect key={i} x={-4 + Math.cos(a) * 30} y={-4 + Math.sin(a) * 30} width="8" height="8" rx="2" fill="#F0B429" />;
        })}
        <circle r="10" fill="#0B1F4B" />
      </g>
      <g transform="translate(380, 120)">
        <path d="M0 -30 C 14 -18 14 -6 8 4 L -8 4 C -14 -6 -14 -18 0 -30 Z" fill="#F0B429" />
        <rect x="-7" y="6" width="14" height="4" rx="2" fill="#7A90D8" />
        <rect x="-5" y="13" width="10" height="4" rx="2" fill="#7A90D8" />
      </g>
      <rect x="150" y="230" width="60" height="26" fill="#12275C" />
      <rect x="115" y="256" width="130" height="12" rx="6" fill="#0B1F4B" stroke="rgba(255,255,255,0.35)" />
    </svg>
  );
}
