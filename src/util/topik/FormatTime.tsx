export const formatTimeSound = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const mDisplay = m < 10 ? `0${m}` : `${m}`;
  const sDisplay = s < 10 ? `0${s}` : s;

  return h > 0 ? `${h}:${mDisplay}:${sDisplay}` : `${mDisplay}:${sDisplay}`;
};

export const formatTimeExam = (time: number) => {
  if (time <= 0) {
    return '00:00';
  }

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
};
