document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(event.target);

  // Construct the message
  let submittedDataHTML = '<h2>Submitted Data:</h2>';
  formData.forEach((value, key) => {
    submittedDataHTML += `<p><strong>${key}:</strong> ${value}</p>`;
  });

  // Display the submitted data
  document.getElementById('submittedData').innerHTML = submittedDataHTML;
});
