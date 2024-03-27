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

// make offer dollar amount handler-->
    $(document).ready(function() {
        // Make Offer Submit Form Handler
        // Wait for the modal to be fully shown
        $('#makeOfferModel').on('shown.bs.modal', function () {
            // Add event listener to the "offerAmount" input field
            $('#offerAmount').on('blur', function () {
                // Get the input value
                let input = $(this).val();
    
                // Remove non-numeric characters except for periods (.)
                input = input.replace(/[^\d.]/g, '');
    
                // Format the value as a currency
                input = parseFloat(input).toFixed(2);
    
                // Update the input value
                $(this).val(input);
            });
        });
    });


// Instantiate all tooltips 
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
    new bootstrap.Tooltip(tooltip)
    })


// Instantiate cardInfo popovers
document.querySelectorAll('[data-bs-toggle="cardInfo"]')
    .forEach(popover => {
    new bootstrap.Popover(popover)
    })

// Instantiate all popovers
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
    new bootstrap.Popover(popover)
    })


// Add event listener to offer form submission
document.getElementById('makeofferForm').addEventListener('submit', handleOfferFormSubmission);

// Function to handle offer form submission
function handleOfferFormSubmission(event) {
    // Prevent default form submission
    event.preventDefault();

    // Submit the form via AJAX
    var form = document.getElementById("makeofferForm");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Close the current modal
                var makeOfferModal = bootstrap.Modal.getInstance(document.getElementById('makeOfferModel'));
                makeOfferModal.hide();

                // Clear the form
                form.reset();

                // Open the success modal
                var submittedModal = new bootstrap.Modal(document.getElementById('submittedOfferModel'));
                submittedModal.show();
            } else {
                // Handle other response statuses if needed
            }
        }
    };
    xhr.send(formData);
}


// Add event listener to Offer form submission
document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmission);

// Function to handle contact form submission
function handleContactFormSubmission(event) {
    // Prevent default form submission
    event.preventDefault();

    // Submit the form via AJAX
    var form = document.getElementById("contactForm");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Clear the form
                form.reset();

                // Open the success modal
                var newsletterSuccessModal = new bootstrap.Modal(document.getElementById('contactSuccessModel'));
                newsletterSuccessModal.show();
            } else {
                // Handle other response statuses if needed
            }
        }
    };
    xhr.send(formData);
}


// Function to close all modals
function closeAllModals() {
    // Close the submitted offer modal
    var submittedOfferModal = new bootstrap.Modal(document.getElementById('submittedOfferModel'));
    submittedOfferModal.hide();

    // Close the newsletter success modal
    var newsletterSuccessModal = new bootstrap.Modal(document.getElementById('newsletterSuccessModel'));
    newsletterSuccessModal.hide();
}
