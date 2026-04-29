import { NeatGradient } from "./neat.js";

const gradient = new NeatGradient({
  ref: document.getElementById("neat-gradient"),
  colors: [
    { color: "#DEDCFF", enabled: true },
    { color: "#DBE1FF", enabled: true },
    { color: "#E1E5FF", enabled: true },
    { color: "#FFFFFF", enabled: true },
    { color: "#D7D8FF", enabled: true },
    { color: "#FFE7E7", enabled: true },
  ],
  speed: 4.5,
  horizontalPressure: 8,
  verticalPressure: 3,
  waveFrequencyX: 5,
  waveFrequencyY: 5,
  waveAmplitude: 0,
  shadows: 0,
  highlights: 6,
  colorBrightness: 1.1,
  colorSaturation: 0,
  wireframe: false,
  colorBlending: 3,
  backgroundColor: "#202020",
  backgroundAlpha: 0.95,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0.325,
  grainSpeed: 0.1,
  resolution: 1,
  yOffset: -10999,
  flowDistortionA: 4,
  flowDistortionB: 0.8,
  flowScale: 2.9,
  flowEase: 0.32,
  flowEnabled: true,
  iridescenceEnabled: true,
  iridescenceIntensity: 0.15,
  iridescenceSpeed: 0,
});

setTimeout(() => {
  const c = document.getElementById("neat-gradient");
  if (c) c.style.opacity = "1";
}, 400);
