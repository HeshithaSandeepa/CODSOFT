
// phonenumber copy to clip borad
const phoneNumber = document.getElementById("phone-number");
const copyMessage = document.getElementById("copy-message");

phoneNumber.addEventListener("click", function() {
  navigator.clipboard.writeText(phoneNumber.textContent)
    .then(function() {
      copyMessage.textContent = "Copied to clipboard!";
      // Optionally, reset the message after a timeout:
      setTimeout(() => {
        copyMessage.textContent = "";
      }, 2000); // Delay for 2 seconds
    })
    .catch(function(error) {
      console.error("Failed to copy phone number:", error);
      alert("Failed to copy phone number. Try again later.");
    });
});


