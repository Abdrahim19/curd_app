const button  = document.getElementById('submit-button');

export function loding_button() {
    // Disable the button
    button.disabled = true;

    // Change the button text
    button.innerText = 'Loading...';
  
    // Add a loading spinner or any other visual indication
    button.classList.add('loading');
}

export function resetButton() {
  button.disabled = false;

  // Restore the original button text
  button.innerText = 'login';

  // Remove the loading spinner or any other visual indication
  button.classList.remove('loading');
}
export function redirect() {
  // Set the desired timeout duration in milliseconds
  const timeoutDuration = 1500; // 3 seconds

  // Set the target URL that you want to redirect to
  const targetURL = 'http://localhost:5173/index.html';

  // Redirect to the target URL after the specified timeout duration
  setTimeout(function() {
    window.location.href = targetURL;
  }, timeoutDuration);
}