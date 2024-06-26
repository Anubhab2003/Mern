Notification.requestPermission().then((result) => {
    console.log(result);
});
Notification.requestPermission((result) => {
    console.log(result);
});
  
  

function askNotificationPermission() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
      return;
    }
    Notification.requestPermission().then((permission) => {
      // set the button to shown or hidden, depending on what the user answers
      notificationBtn.style.display = permission === "granted" ? "none" : "block";
    });
}
  