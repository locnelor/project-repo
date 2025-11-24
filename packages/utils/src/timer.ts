export const delayMs = (ms: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const delayCallback = async (callback: () => void, ms?: number) => {
  await delayMs(ms);
  callback();
};
