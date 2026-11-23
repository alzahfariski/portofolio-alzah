import type Lenis from "lenis";

// Satu instance Lenis (diisi SmoothScroll). null bila reduced-motion atau belum dimuat.
let inst: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  inst = l;
};
export const getLenis = () => inst;
