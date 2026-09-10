const calculateCentreScore = ({
  predictedWait,
  distance,
  capacity,
  processingRate,
  cropCompatible,
}) => {
  // Lower waiting time and distance are better.
  const waitScore = Math.max(0, 100 - predictedWait);
  const distanceScore = Math.max(0, 100 - distance);

  // Higher capacity and processing rate are better.
  const capacityScore = Math.min(100, capacity);
  const processingScore = Math.min(100, processingRate);

  const cropScore = cropCompatible ? 100 : 0;

  const score =
    waitScore * 0.4 +
    distanceScore * 0.2 +
    capacityScore * 0.15 +
    processingScore * 0.15 +
    cropScore * 0.1;

  return Number(score.toFixed(2));
};

const recommendCentres = (centres = []) => {
  return centres
    .map((centre) => ({
      ...centre,
      recommendationScore: calculateCentreScore(centre),
    }))
    .sort(
      (a, b) =>
        b.recommendationScore - a.recommendationScore
    );
};

module.exports = {
  calculateCentreScore,
  recommendCentres,
};