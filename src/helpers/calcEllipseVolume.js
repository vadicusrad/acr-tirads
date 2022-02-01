function calcEllipseVolume(a, b, c) {
  return ((a * b * c * 0.52) / 1000).toFixed(1);
}

export default calcEllipseVolume;
