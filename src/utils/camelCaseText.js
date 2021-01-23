const camelCaseText = (string) => {
  const textList = string.split(" ");
  for (let i in textList) {
    textList[i] =
      textList[i][0].toUpperCase() +
      textList[i].substring(1, textList[i].length);
  }
  const text = textList.join(" ");
  return text;
};
export default camelCaseText;
