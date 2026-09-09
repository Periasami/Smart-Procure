const calculateRescheduleScore = ({
  predictedWait = 0,
  distance = 0,
  availableCapacity = 0,
  processingRate = 0,
}) => {
  const waitScore = Math.max(0, 100 - predictedWait);
  const distanceScore = Math.max(0, 100 - distance);
  const capacityScore = Math.min(100, availableCapacity);
  const processingScore = Math.min(100, processingRate);

  return Number(
    (
      waitScore * 0.4 +
      distanceScore * 0.2 +
      capacityScore * 0.2 +
      processingScore * 0.2
    ).toFixed(2)
  );
};

const recommendReschedule = (options = []) => {
  return options
    .map((option) => ({
      ...option,
      rescheduleScore: calculateRescheduleScore(option),
    }))
    .sort((a, b) => b.rescheduleScore - a.rescheduleScore);
};

module.exports = {
  calculateRescheduleScore,
  recommendReschedule,
};