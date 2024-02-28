/// Auction Page Search Forn Handler

  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    updateGallery();
  });

  function updateGallery() {
    const searchInput = document.getElementById('inputSearch').value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gsc-gallery-item');
    let anyItemDisplayed = false; // Flag to check if any item is displayed

    galleryItems.forEach(item => {
      const itemText = item.innerText.toLowerCase();

      if (itemText.includes(searchInput)) {
        item.style.display = 'block';
        anyItemDisplayed = true;
      } else {
        item.style.display = 'none';
      }
    });

    // Display a message when no items match the search
    const noItemsMessage = document.getElementById('noItemsMessage');

    if (!anyItemDisplayed) {
      noItemsMessage.style.display = 'block';
    } else {
      noItemsMessage.style.display = 'none';
    }
  }


//  From Index Search Form Handler 

  window.addEventListener('DOMContentLoaded', function () {
    // Get the search query from the URL
    const searchQuery = new URLSearchParams(window.location.search).get('search');

    // If a search query exists, update the gallery
    if (searchQuery) {
      document.getElementById('inputSearch').value = searchQuery;
      updateGallery();
    }
  });

  function updateGallery() {
    const searchInput = document.getElementById('inputSearch').value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gsc-gallery-item');
    let anyItemDisplayed = false; // Flag to check if any item is displayed

    galleryItems.forEach(item => {
      const itemText = item.innerText.toLowerCase();

      if (itemText.includes(searchInput)) {
        item.style.display = 'block';
        anyItemDisplayed = true;
      } else {
        item.style.display = 'none';
      }
    });

    // Display a message when no items match the search
    const noItemsMessage = document.getElementById('noItemsMessage');

    if (!anyItemDisplayed) {
      noItemsMessage.style.display = 'block';
    } else {
      noItemsMessage.style.display = 'none';
    }
  }


// Time Remaing Countdown

  // Function to calculate time until next Sunday at 8 PM MST or the current Sunday if today is Sunday
  function calculateTimeUntilSunday8PM() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const isSunday = dayOfWeek === 0;
    const isPastSunday8PM = isSunday && now.getHours() >= 20;

    let daysUntilSunday = isPastSunday8PM ? (7 - dayOfWeek) : (isSunday ? 0 : (7 - dayOfWeek));

    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(20, 0, 0, 0); // Set time to 8 PM MST

    const timeDifference = nextSunday - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  }
  // Function to update the countdown display
  function updateCountdown(countdownId) {
    const countdownElement = document.getElementById(countdownId);
    const timeUntilSunday8PM = calculateTimeUntilSunday8PM();

    countdownElement.textContent = `${timeUntilSunday8PM.days}d ${timeUntilSunday8PM.hours}h ${timeUntilSunday8PM.minutes}m`;

    // If less than 24 hours, change text color to red
    if (timeUntilSunday8PM.days === 0 && timeUntilSunday8PM.hours < 24) {
      countdownElement.style.color = 'red';
    } else {
      countdownElement.style.color = ''; // Reset to default color
    }
  }

  // Update countdowns every second using setInterval
  setInterval(function () {
    console.log('Interval function is running');

    // Dynamically find and update countdowns based on the data-item-index attribute
    const galleryItems = document.querySelectorAll('.gsc-gallery-item');
    galleryItems.forEach(item => {
      const itemIndex = item.dataset.itemIndex;
      const countdownId = `countdown_${itemIndex}`;
      console.log(`Updating countdown for item ${itemIndex}`);
      updateCountdown(countdownId);
    });
  }, 1000);

  // Initial update
  window.onload = function () {
    console.log('Initial update on window load');

    // Dynamically find and update countdowns based on the data-item-index attribute
    const galleryItems = document.querySelectorAll('.gsc-gallery-item');
    galleryItems.forEach(item => {
      const itemIndex = item.dataset.itemIndex;
      const countdownId = `countdown_${itemIndex}`;
      console.log(`Updating countdown for item ${itemIndex}`);
      updateCountdown(countdownId);
    });
  };



// Index 2 Auction Search Form Handler
  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the search input value
    const searchInput = document.getElementById('inputSearch').value.toLowerCase();

    // Navigate to ebay_auctions.html with the search query as a parameter
    window.location.href = 'auctions.html?search=' + encodeURIComponent(searchInput);
  });



// Scroll Up Button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Newsletter Submit Form Handler
  document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Submit the form via AJAX
    var form = event.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Subscription successful, show success message
          var successMessage = document.getElementById("successMessage");
          successMessage.classList.remove("d-none");

          // Clear input field
          document.getElementById("emailInput").value = "";

          // Auto close after 5 seconds (5000 milliseconds)
          setTimeout(function () {
            successMessage.classList.add("d-none");
          }, 2000);
        } else {
          // Handle other response statuses if needed
        }
      }
    };
    xhr.send(formData);
  });

    // JavaScript code for initializing tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
