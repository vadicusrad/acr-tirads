function calcBodySurfaceArea(mass, length) {
    const result = (Math.sqrt(mass * length) / 60).toFixed(2);
    return result
}

export default calcBodySurfaceArea