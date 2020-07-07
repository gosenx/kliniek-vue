const addDays = (days) => {
  return new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000);
};

export default addDays;
