import { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";

function App() {
  const handleClick = () => {
    // Setup Recaptcha
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible", // Use 'invisible' to avoid showing the Recaptcha widget
        callback: (response) => {
          // reCAPTCHA solved - allow user to proceed with the request
          console.log("Recaptcha solved!");
        },
        "expired-callback": () => {
          console.log("Recaptcha expired, refresh the page.");
        },
      },
      auth
    );

    // Your test phone number (with country code)
    let phoneNumber = "+923107860806";

    // Send OTP
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        // Ask the user for the OTP code
        let code = prompt("Enter the OTP:", "");

        if (code === null || code === "") return;

        // Verify OTP
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + " number verified";
          })
          .catch((err) => {
            console.error("Error verifying OTP:", err);
          });
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  return (
    <div>
      <label></label>
      <button onClick={handleClick}>Send OTP</button>
      <div id="recaptcha"></div> {/* Div for Recaptcha */}
    </div>
  );
}

export default App;
