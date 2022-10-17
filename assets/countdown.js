let finalDate = new Date("jan 1, 2023 00:00:01").getTime();

let x = setInterval(function() {
  
  let now = new Date().getTime();
  let t = finalDate - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes; 
  document.getElementById("seconds").innerHTML = seconds; 
  if (t < 0) {
          clearInterval(x);
          document.getElementById("days").innerHTML ='0';
          document.getElementById("hours").innerHTML ='0';
          document.getElementById("minutes").innerHTML ='0'; 
          document.getElementById("seconds").innerHTML = '0';
        }
  }, 1000);