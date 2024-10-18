const calculateWord = (sentence) => {
  const map = new Map();

  sentence
    .toLowerCase()
    .split(" ")
    .forEach((word) => {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    });

  console.log(map);
};

calculateWord("xxxx hello my name Name name is something aba");
