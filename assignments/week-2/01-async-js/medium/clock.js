// const fs = require('fs');

// // Function to format time as HH:MM:SS
// function formatTime(time) {
//     return time.toLocaleTimeString('en-US', { hour12: false });
// }

// // Function to format time as HH:MM:SS AM/PM
// function formatTimeWithAmPm(time) {
//     return time.toLocaleTimeString('en-US');
// }

// // Function to update clock and write time to files
// function updateClock() {
//     const currentTime = new Date();
//     const time24Format = formatTime(currentTime);
//     const time12Format = formatTimeWithAmPm(currentTime);

//     // Write the formatted time to the files
//     fs.writeFileSync("1-counter.md", `Current Time (24-hour format): ${time24Format}\n`);
//     fs.writeFileSync("2-counter.md", `Current Time (12-hour format): ${time12Format}\n`);
// }

// // Initial update
// updateClock();

// // Update the clock every second
// setInterval(updateClock, 1000);

setInterval(() => {
    const date = new Date();
    console.log(
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    );
  }, 1000);