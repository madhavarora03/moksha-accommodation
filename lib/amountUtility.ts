export const calcAmount = (
  checkIn: number,
  checkOut: number,
  memberCount: number,
) => {
  if (checkIn === 4 || checkIn === 5) {
    if (checkOut === 10) {
      return 4300 * memberCount;
    } else if (checkOut === 11) {
      return 4500 * memberCount;
    }
  } else if (checkIn === 6 || checkIn === 7) {
    if (checkOut === 10) {
      return 3500 * memberCount;
    } else if (checkOut === 11) {
      return 4300 * memberCount;
    }
  } else return 0;
};
