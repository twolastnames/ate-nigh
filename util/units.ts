const gramsInOunce = 28.34952;

export const ounces = (value: number) => ({
  asGrams: () => value * gramsInOunce,
  asOunces: () => value,
});

export const grams = (value: number) => ({
  asGrams: () => value,
  asOunces: () => value / gramsInOunce,
});
