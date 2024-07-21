function printNumbers(from, to, interval) {
  let current = from;

  const intervalId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(intervalId);
    } else {
      current++;
    }
  }, interval);
}

printNumbers(1, 10, 1000); // Виведе числа 1, 2, 3, 4, 5 з інтервалом у 1000 мс (1 секунда)
