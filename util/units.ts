const gramsInOunce = 28.34952;

export const ounces = (value: number) => ({
  asGrams: () => value * gramsInOunce,
  asOunces: () => value,
});
