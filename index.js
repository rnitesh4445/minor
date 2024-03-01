document.addEventListener('DOMContentLoaded', function () {
  const mobileNumberInput = document.getElementById('mobileNumber');
  const sendOTPBtn = document.getElementById('sendOTPBtn');
  const otpContainer = document.getElementById('otpContainer');
  const verifyOTPBtn = document.getElementById('verifyOTPBtn');
  const messageDiv = document.getElementById('message');

  sendOTPBtn.addEventListener('click', function () {
    const mobileNumber = mobileNumberInput.value;
    // Send OTP logic goes here (backend API call)

    // For demonstration purpose, let's assume OTP is sent successfully
    otpContainer.style.display = 'block';
    messageDiv.innerText = 'OTP has been sent to your mobile number.';
  });

  verifyOTPBtn.addEventListener('click', function () {
    const otpInput = document.getElementById('otp').value;
    // Verify OTP logic goes here (backend API call)

    // For demonstration purpose, let's assume OTP verification is successful
    messageDiv.innerText = 'OTP verification successful. You are logged in!';
      window.location.href = 'front.html';
  });
});
