export function getCurrentDayMonthYear(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function getCurrentWeekData(data) {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const daysSinceSunday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - daysSinceSunday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return data.filter(({ date }) => {
    const itemDate = new Date(date.split("-").reverse().join("-"));
    return itemDate >= startOfWeek && itemDate <= endOfWeek;
  });
}
