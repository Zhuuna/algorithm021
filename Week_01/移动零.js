var moveZeroes = function (numbers) {
  let moveIndex = 0;

  numbers.forEach((value, index) => {
    if (value !== 0) {
      if (moveIndex !== index) {
        numbers[moveIndex] = value;
        numbers[index] = 0;
      }
      moveIndex++;
    }
  });
};
