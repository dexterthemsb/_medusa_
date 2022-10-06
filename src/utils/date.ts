const createHistoryDateDifferenceResponse = (diff: number, unit: string) => {
  return diff + unit + " ago";
};

export const getHistoryDateDifference = (date: string) => {
  const history = new Date(date);
  const current = new Date();

  let diff = current.getTime() - history.getTime();
  let unit = "min";

  if (diff <= 60000) return "now";

  const iterate = (no: number, scale: string) => {
    if (diff >= no) {
      diff = Math.round(diff / no);
      unit = ` ${scale}${diff > 1 ? "s" : ""}`;
    }
  };

  if (diff >= 60000) iterate(60000, "min");
  else return createHistoryDateDifferenceResponse(diff, unit);

  if (diff >= 60) iterate(60, "hr");
  else return createHistoryDateDifferenceResponse(diff, unit);

  if (diff >= 24) iterate(24, "day");
  else return createHistoryDateDifferenceResponse(diff, unit);

  if (diff >= 31) iterate(31, "mon");
  else return createHistoryDateDifferenceResponse(diff, unit);

  if (diff >= 12) iterate(12, "yr");
  else return createHistoryDateDifferenceResponse(diff, unit);

  return createHistoryDateDifferenceResponse(diff, unit);
};
