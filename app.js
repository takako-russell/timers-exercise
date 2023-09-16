let countDown = (num) => {
  let reduceByOne = setInterval(function () {
    num--;
    if (num > 0) {
      console.log(num);
    } else {
      clearInterval(reduceByOne);
      console.log("DONE!");
    }
  }, 1000);
};

function randomGame() {
  let randomNum;
  let counter = 0;

  let setNum = setInterval(function () {
    randomNum = Math.random();
    console.log(randomNum);
    counter++;
    if (randomNum > 0.75) {
      clearInterval(setNum);
      console.log(`It took ${counter} times!`);
    }
  }, 1000);
}
