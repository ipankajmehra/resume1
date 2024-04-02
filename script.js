// Function to handle updating a resume entry
async function updateResume(data) {
  const response = await fetch('https://script.google.com/a/macros/sageuniversity.in/s/AKfycbwWD4C4n80YqfuWVQenTpwkVaHe6RTlBsvPa5oUn_pTrSCLosVL1q35AaUsmEaDVWMd/exec', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const responseData = await response.json();
    messageDiv.textContent = responseData.message;
  } else {
    messageDiv.textContent = 'Error updating resume. Please try again later.';
  }
}

// Function to handle deleting a resume entry
async function deleteResume(data) {
  const response = await fetch('https://script.google.com/a/macros/sageuniversity.in/s/AKfycbwWD4C4n80YqfuWVQenTpwkVaHe6RTlBsvPa5oUn_pTrSCLosVL1q35AaUsmEaDVWMd/exec', {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const responseData = await response.json();
    messageDiv.textContent = responseData.message;
  } else {
    messageDiv.textContent = 'Error deleting resume. Please try again later.';
  }
}
