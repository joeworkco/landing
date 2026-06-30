export type RoiInputs = {
  monthlyTasks: number;
  minutesPerTask: number;
  hourlyCost: number;
  automatablePercentage: number;
};

export type RoiResult = {
  currentHours: number;
  recoverableHours: number;
  monthlyRecoverableCost: number;
  annualRecoverableCost: number;
};

const safeNumber = (value: number) =>
  Number.isFinite(value) && value > 0 ? value : 0;

export function calculateRoi(input: RoiInputs): RoiResult {
  const monthlyTasks = safeNumber(input.monthlyTasks);
  const minutesPerTask = safeNumber(input.minutesPerTask);
  const hourlyCost = safeNumber(input.hourlyCost);
  const automatablePercentage = Math.min(
    100,
    safeNumber(input.automatablePercentage),
  );

  const currentHours = (monthlyTasks * minutesPerTask) / 60;
  const recoverableHours = currentHours * (automatablePercentage / 100);
  const monthlyRecoverableCost = recoverableHours * hourlyCost;

  return {
    currentHours,
    recoverableHours,
    monthlyRecoverableCost,
    annualRecoverableCost: monthlyRecoverableCost * 12,
  };
}
