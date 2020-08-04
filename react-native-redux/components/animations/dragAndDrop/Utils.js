export const immutableMove = (arr, from, to) => {
  return arr.reduce((prev, current, idx, self) => {
    if (from === to) {
      prev.push(current);
    }
    if (idx === from) {
      return prev;
    }
    if (from < to) {
      prev.push(current);
    }
    if (idx === to) {
      prev.push(self[from]);
    }
    if (from > to) {
      prev.push(current);
    }
    return prev;
  }, []);
};

export const getRandomColor = () => {
  let color = "#";
  const letter = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
};
