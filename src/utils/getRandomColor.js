const getRandomColor = () => {
  const colors = [
    "#E74212",
    "#0A7427",
    "#600EB8",
    "#E86C0C",
    "#C10808",
    "#29AA7D",
    "#CF1B9B",
    "#7E1B1B",
    "#054C28",
    "#0B2895",
  ];
  let randomIndex = -1;
  while (randomIndex < 0 || randomIndex >= 10) {
    randomIndex = Math.floor(Math.random() * 10 + 1) - 1;
  }
  console.log(randomIndex);
  return colors[randomIndex];
};
export default getRandomColor;
