import { motion } from 'framer-motion';

const NODES = [
  { id: 0,  cx: 80,  cy: 78,  r: 3.5, token: 'primary',   delay: 0.0 },
  { id: 1,  cx: 200, cy: 38,  r: 5.0, token: 'tertiary',  delay: 0.6 },
  { id: 2,  cx: 338, cy: 84,  r: 3.5, token: 'secondary', delay: 1.2 },
  { id: 3,  cx: 454, cy: 54,  r: 2.5, token: 'primary',   delay: 1.8 },
  { id: 4,  cx: 128, cy: 164, r: 4.5, token: 'secondary', delay: 0.9 },
  { id: 5,  cx: 265, cy: 144, r: 6.5, token: 'primary',   delay: 0.3 },
  { id: 6,  cx: 388, cy: 184, r: 3.5, token: 'tertiary',  delay: 1.5 },
  { id: 7,  cx: 54,  cy: 254, r: 3.0, token: 'tertiary',  delay: 0.7 },
  { id: 8,  cx: 174, cy: 284, r: 5.0, token: 'primary',   delay: 1.0 },
  { id: 9,  cx: 304, cy: 254, r: 4.0, token: 'secondary', delay: 1.4 },
  { id: 10, cx: 438, cy: 304, r: 5.5, token: 'primary',   delay: 0.2 },
  { id: 11, cx: 108, cy: 354, r: 3.5, token: 'secondary', delay: 1.1 },
  { id: 12, cx: 244, cy: 364, r: 3.0, token: 'tertiary',  delay: 0.5 },
  { id: 13, cx: 374, cy: 358, r: 4.5, token: 'primary',   delay: 1.7 },
  { id: 14, cx: 500, cy: 208, r: 3.0, token: 'secondary', delay: 0.4 },
];

const EDGES = [
  [0,1],[1,2],[2,3],
  [0,4],[1,4],[1,5],[2,5],[2,6],[3,6],
  [4,5],[5,6],[6,14],[3,14],
  [4,7],[4,8],[5,8],[5,9],[6,9],[6,10],[10,14],
  [7,8],[8,9],[9,10],
  [7,11],[8,12],[9,12],[9,13],[10,13],
  [11,12],[12,13],
];

const PARTICLE_EDGES = [[1,5],[5,9],[8,12],[6,10]];

// Color palettes per theme
const PALETTE = {
  dark:  { primary: '#b8c3ff', secondary: '#d0bcff', tertiary: '#00dbe9' },
  light: { primary: '#2d5bff', secondary: '#571bc1', tertiary: '#007981' },
};

const EDGE_TOKENS = ['primary', 'tertiary', 'secondary'];

export default function NeuralNetwork({ isDark = true }) {
  const palette = isDark ? PALETTE.dark : PALETTE.light;
  const edgeOpacity = isDark ? 0.18 : 0.22;

  const nodeColor  = (token) => palette[token];
  const edgeColor  = (i)     => palette[EDGE_TOKENS[i % 3]];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
      className="relative w-full h-full"
    >
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ background: isDark
          ? 'radial-gradient(ellipse at 60% 40%, rgba(45,91,255,0.08) 0%, transparent 65%)'
          : 'radial-gradient(ellipse at 60% 40%, rgba(45,91,255,0.05) 0%, transparent 65%)',
        }}
      />

      <svg viewBox="0 0 540 420" className="w-full h-full" aria-hidden="true">
        <defs>
          {['primary','secondary','tertiary'].map((token) => (
            <radialGradient key={token} id={`nodeGlow-${token}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor={palette[token]} stopOpacity="0.4" />
              <stop offset="100%" stopColor={palette[token]} stopOpacity="0"   />
            </radialGradient>
          ))}
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => (
          <line
            key={`e-${i}`}
            x1={NODES[a].cx} y1={NODES[a].cy}
            x2={NODES[b].cx} y2={NODES[b].cy}
            stroke={edgeColor(i)}
            strokeOpacity={edgeOpacity}
            strokeWidth={0.8}
          />
        ))}

        {/* Traveling particles */}
        {PARTICLE_EDGES.map(([a, b], i) => (
          <circle key={`p-${i}`} r={1.8} fill={edgeColor(i)} opacity={0.85}>
            <animateMotion dur={`${2.5 + i * 0.7}s`} repeatCount="indefinite"
              path={`M${NODES[a].cx},${NODES[a].cy} L${NODES[b].cx},${NODES[b].cy}`} />
          </circle>
        ))}

        {/* Reverse particles */}
        {PARTICLE_EDGES.map(([a, b], i) => (
          <circle key={`pr-${i}`} r={1.2} fill={edgeColor(i + 1)} opacity={0.55}>
            <animateMotion dur={`${3.2 + i * 0.6}s`} begin={`${1 + i * 0.4}s`} repeatCount="indefinite"
              path={`M${NODES[b].cx},${NODES[b].cy} L${NODES[a].cx},${NODES[a].cy}`} />
          </circle>
        ))}

        {/* Glow halos */}
        {NODES.map((n) => (
          <circle key={`h-${n.id}`} cx={n.cx} cy={n.cy} r={n.r * 5}
            fill={`url(#nodeGlow-${n.token})`} />
        ))}

        {/* Nodes */}
        {NODES.map((n) => (
          <motion.circle
            key={`n-${n.id}`}
            cx={n.cx} cy={n.cy} r={n.r}
            fill={nodeColor(n.token)}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4 + (n.id % 4) * 0.3, delay: n.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
