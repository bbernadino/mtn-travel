
function countDown(num) {
  var intervalId = setInterval(function () {
    num--;
    if (num > 0) {
      console.log("Timer:", num);
    } else {
      console.log("Ring a ling!");
      clearInterval(intervalId);
    }
  }, 1000);
}



countDown(11);