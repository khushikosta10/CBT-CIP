// script.js

// Get form and event list elements
const eventForm = document.getElementById('create-event-form');
const eventList = document.getElementById('events');

// Add event listener to handle form submission
eventForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const eventTime = document.getElementById('event-time').value;
  const eventLocation = document.getElementById('event-location').value;

  // Create a new list item for the event
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="event-info">
      <p><strong>${eventName}</strong></p>
      <p>${eventDate} at ${eventTime}</p>
      <p>${eventLocation}</p>
    </div>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality to the button
  li.querySelector('.delete-btn').addEventListener('click', function() {
    eventList.removeChild(li);
  });

  // Add the new event to the list
  eventList.appendChild(li);

  // Clear the form
  eventForm.reset();
});
