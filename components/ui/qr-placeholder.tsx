/**
 * QR Placeholder — deterministyczny, "wyglądający jak QR" wzorek SVG.
 *
 * Renderowany serwerowo, bez runtime losowości (seed = deterministic hash).
 * Użyj do mockupu CTA do aplikacji Embargo — w produkcji podmień na prawdziwy
 * kod z `qrcode` lub wygenerowany po stronie CMS / Embargo.
 */

type Props = {
  seed?: string;
  size?: number;
  fg?: string;
  bg?: string;
  className?: string;
  title?: string;
};

const GRID = 25;

function fnv1a(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function isFinder(x: number, y: number): boolean {
  const topLeft = x < 7 && y < 7;
  const topRight = x >= GRID - 7 && y < 7;
  const bottomLeft = x < 7 && y >= GRID - 7;
  return topLeft || topRight || bottomLeft;
}

function finderFill(x: number, y: number): boolean {
  const lx = x < 7 ? x : x - (GRID - 7);
  const ly = y < 7 ? y : y - (GRID - 7);
  // outer ring
  if (lx === 0 || lx === 6 || ly === 0 || ly === 6) return true;
  // inner 3x3
  if (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4) return true;
  return false;
}

export function QrPlaceholder({
  seed = "american-ice-dream",
  size = 200,
  fg = "#0f2d5c",
  bg = "#fdfaf2",
  className,
  title = "Kod QR — placeholder",
}: Props) {
  const rand = mulberry32(fnv1a(seed));
  const modules: { x: number; y: number }[] = [];

  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      if (isFinder(x, y)) {
        if (finderFill(x, y)) modules.push({ x, y });
        continue;
      }
      // Timing lines
      if (x === 6 && y >= 7 && y < GRID - 7) {
        if (y % 2 === 0) modules.push({ x, y });
        continue;
      }
      if (y === 6 && x >= 7 && x < GRID - 7) {
        if (x % 2 === 0) modules.push({ x, y });
        continue;
      }
      // Pseudo-random data
      if (rand() > 0.48) modules.push({ x, y });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${GRID} ${GRID}`}
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
    >
      <title>{title}</title>
      <rect width={GRID} height={GRID} fill={bg} />
      {modules.map((m) => (
        <rect
          key={`${m.x}-${m.y}`}
          x={m.x}
          y={m.y}
          width={1}
          height={1}
          fill={fg}
        />
      ))}
    </svg>
  );
}
