// Function to handle updating a resume entry
async function updateResume(data) {
  const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
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
  const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
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
