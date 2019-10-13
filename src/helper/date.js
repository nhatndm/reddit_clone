import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths
} from "date-fns";

export const durration = day => {
  let resultInSec = differenceInSeconds(new Date(), day);
  let resultInMinutes = differenceInMinutes(new Date(), day);
  let resultInHours = differenceInHours(new Date(), day);
  let resultInDays = differenceInDays(new Date(), day);
  let resultInMonths = differenceInMonths(new Date(), day);

  if (resultInSec < 60) {
    return `${resultInSec} seconds ago`;
  }

  if (resultInSec > 60 && resultInMinutes < 60) {
    return `${resultInMinutes} minutes ago`;
  }

  if (resultInMinutes > 60 && resultInHours < 24) {
    return `${resultInHours} hours ago`;
  }

  if (resultInHours >= 24 && resultInDays <= 31) {
    return `${resultInDays} days ago`;
  }

  if (resultInDays > 31) {
    return `${resultInMonths} months ago`;
  }
};
