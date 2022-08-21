const runSetCount = (count: number, setCount: (count: number) => void) => {
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
};

const makeTimer = (count: number) => {
  const hour = Math.floor(count / 3600);
  const min = Math.floor(count / 60);
  const sec = count;
  return `${turnToTime(hour)}:${turnToTime(min)}:${turnToTime(sec)}`;
};

const makeMinutesTimer = (count: number) => {
  const min = Math.floor(count / 60);
  const sec = count;
  return `${turnToTime(min)}:${turnToTime(sec)}`;
};

export { runSetCount, makeTimer, makeMinutesTimer };

const turnToTime = (number: number) => {
  // 여기를 더 깔끔하게 작성할 수 있을까?
  if (number >= 60) {
    if (number % 60 < 10) {
      return '0' + (number % 60);
    }
    return number % 60;
  }
  if (number < 10) {
    return '0' + number;
  }
  return number;
};
