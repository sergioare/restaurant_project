const getSoonestAvailableDate = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 15);

  const dateStr = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {
    fullDate: date,
    dateLabel: dateStr,
    timeLabel: timeStr,
  };
};

export { getSoonestAvailableDate };
