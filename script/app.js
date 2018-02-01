// Define starting points of the counters
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
// Grab HTML elements for each counter
const counter1 = document.getElementById("counter-1");
const counter2 = document.getElementById("counter-2");
const counter3 = document.getElementById("counter-3");
const counter4 = document.getElementById("counter-4");
// Object containing counter functions
const handlers = {
  start1: function(){
    // Initially set the counter to starting value
    counter1.textContent = count1;
    // Run this function every 0.01 second
    let timer1 = setInterval(function(){
      // Set the number you want to count to
      if(count1 <= 2000) {
        // Set the counter to count value
        counter1.textContent = count1;
        // Increment by one
        count1+=8;
      } else {
        // Stop the function
        clearInterval(timer1);
      }
    }, 14);
  },
  start2: function(){
    counter2.textContent = count2;
    let timer2 = setInterval(function(){
      if(count2 <= 724000) {
        counter2.textContent = count2;
        count2+=2000;
      } else {
        clearInterval(timer2);
      }
    }, 10);
  },
  start3: function(){
    counter3.textContent = count3;
    let timer3 = setInterval(function(){
      if(count3 <= 1741) {
        counter3.textContent = count3;
        count3+=10;
      } else {
        clearInterval(timer3);
      }
    }, 15);
  },
  start4: function(){
    // Initially set the counter to starting value
    counter4.textContent = count4;
    // Run this function every 0.01 second
    let timer4 = setInterval(function(){
      // Set the number you want to count to
      if(count4 <= 1020) {
        // Set the counter to count value
        counter4.textContent = count4;
        // Increment by one
        count4+=10;
      } else {
        // Stop the function
        clearInterval(timer4);
      }
    }, 24);
  }
}
// Calling counter functions
function start(){
  handlers.start1();
  handlers.start2();
  handlers.start3();
  handlers.start4();
};
start();

