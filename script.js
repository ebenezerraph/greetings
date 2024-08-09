// WARNING!
// This code was written with the help of and refactored by Claude!

function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour >= 18) {
    return { greeting: 'Good evening!', message: 'How did your day go?' };
  } else if (currentHour >= 12) {
    return { greeting: 'Good afternoon!', message: 'How is your day going?' };
  } else if (currentHour >= 0) {
    return { greeting: 'Good morning!', message: 'How was your night?' };
  } else {
    return { greeting: 'Welcome!', message: 'How are you doing' };
  }
}

function displayGreeting() {
  const { greeting, message } = getGreeting();
  document.getElementById('greeting').textContent = greeting;
  document.getElementById('hello').textContent = message;
}

function handleDayButtons() {
  const awesomeModal = document.getElementById("awesome_modal");
  const awfulModal = document.getElementById("awful_modal");
  const awesome = document.getElementById("awesome");
  const awful = document.getElementById("awful");
  const awesomeSpan = document.getElementsByClassName("close_awesome")[0];
  const awfulSpan = document.getElementsByClassName("close_awful")[0];

  awesome.onclick = () => awesomeModal.style.display = "flex";
  awful.onclick = () => awfulModal.style.display = "flex";
  awesomeSpan.onclick = () => awesomeModal.style.display = "none";
  awfulSpan.onclick = () => awfulModal.style.display = "none";

  window.onclick = (event) => {
    if (event.target === awesomeModal) {
      awesomeModal.style.display = "none";
    } else if (event.target === awfulModal) {
      awfulModal.style.display = "none";
    }
  };

  const escape = (event) => {
    if (event.key === 'Escape') {
      awesomeModal.style.display = "none";
      awfulModal.style.display = "none";
    }
  };
  document.addEventListener('keydown', escape);
}

displayGreeting();
handleDayButtons();
