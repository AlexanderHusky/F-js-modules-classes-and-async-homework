export const getPoetry = async () => {
  let res;
  await fetch("https://v1.jinrishici.com/all.json")
    .then((text) => text.json())
    .then((text) => {
      res = [text.origin, text.author, text.content];
    });

  return res;
};
