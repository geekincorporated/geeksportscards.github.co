/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



// Function to show/hide the "Go to Top" button based on scroll position
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var goToTopBtn = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
}

// Function to scroll to the top when the "Go to Top" button is clicked
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// Attach event listeners to radio buttons 

document.querySelectorAll('input[name="condition"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        search();
    });
});



var allItems = [];
var currentPage = 1;
var itemsPerPage = 12;
var totalItems = 0;

window.onload = function () {
    loadJSON(function (data) {
        allItems = Object.values(data);
        allItems.sort(function (a, b) {
            return b["Watch Count"] - a["Watch Count"]; // Sort by Watch Count in descending order
        });
        totalItems = allItems.length;
        loadPage(currentPage);
    });
};

// Function to load JSON data from a file
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/ebay_listings.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == 200) {
            callback(JSON.parse(xobj.responseText).items); // Access items property
        }
    };
    xobj.send(null);
}

// Function to load items for the current page
function loadPage(page) {
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    var itemsToShow = allItems.slice(startIndex, endIndex);
    displayItems(itemsToShow, startIndex, endIndex);
}

// Function to display items
function displayItems(items, startIndex, endIndex) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    var totalItemsDiv = document.getElementById('totalItems');
    totalItemsDiv.innerHTML = `Showing ${startIndex + 1} - ${endIndex} of ${totalItems} items`;

    items.forEach(function (item) {
        if (item["Listing Type"] === "FixedPrice") {
            var viewUrl = item["View URL"];
            var currentPrice = item["Current Price"].replace('USD', '$').trim();
            var pictureUrl = item["Picture URLs"][0];
            var condition = item["Condition Display Name"];
            var Category = item["Category"];
            var bids = item["Bids"];
            var watchers = item["Watch Count"];
            var listingtype = item["Listing Type"];
            var playerAthlete = "";
            var card = "";
            var year = "";
            var set = "";
            var cardnumber = "";
            var cardattributes = "";
            var playerattributes = "";
            var authority = "";
            var grade = "";
            var gradecondition = "";
            var conditionrange = "";
            var ebayEPN = "?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339025312&customid=&toolid=10001&mkevt=1";



            // Find the value in item specifics

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Player/Athlete") {
                    playerAthlete = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Card") {
                    card = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Set") {
                    set = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Card Number") {
                    cardnumber = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Card Attributes") {
                    cardattributes = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Player Attributes") {
                    playerattributes = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Professional Grader") {
                    authority = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Grade") {
                    grade = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Card Condition") {
                    gradecondition = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Condition Range") {
                    conditionrange = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var itemSpecifics = item["Item Specifics"];
            for (var i = 0; i < itemSpecifics.length; i++) {
                if (itemSpecifics[i].Name === "Year") {
                    year = itemSpecifics[i].Values[0]; // Get the value
                    break;
                }
            }

            var resultElement = document.createElement('div');

            if (Category === "Trading Card Sets") {
                resultElement.innerHTML = `
                <div class="col mb-2">
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- badge-->
                                <div class="badge bg-primary text-white position-absolute" style="top: 0.5rem; right: 1.5rem"> Complete Set </div>
                            <!-- Product image-->
                                <div class="text-center bg-dark" style="padding-bottom:10px; border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                    <a href="${viewUrl}${ebayEPN}" target="_blank">
                                        <img class="card-img-top" src="${pictureUrl}" alt="..." style="max-width: 206px; max-height: 276px; padding-top: 10px; loading="lazy"">
                                        <!-- condition badge -->
                                        <span class="badge badge-dark bg-dark" style="width: 206px; border-radius: 0;">${authority} ${grade} ${gradecondition}</span>
                                    </a>
                                </div>
                            <!-- Product details-->
                                <div class="card-body w-100">
                                    <div class="text-center">
                                        <!-- Player/Athlete -->
                                        <span class="fw-bolder" style="letter-spacing: 0.25px !important; word-spacing: 0.5px;">${playerAthlete} ${playerattributes}</span><br>
                                    </div>
                                    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <!-- Set -->
                                        <span class="fw-bold" style="font-size: 12px; letter-spacing: 0.25px !important; word-spacing: 0.5px;">${set} #${cardnumber} ${cardattributes}</span><br>
                                    </div>
                                    <hr>
                                    <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                                        <!-- Product price -->
                                        <span></span>
                                        <span class="fw-bold">
                                        ${currentPrice}<span style="font-size: 10px;" data-toggle="tooltip" data-bs-placement="top" title="Or Best Offer"> OBO</span><br>
                                            ${listingtype === "FixedPrice" ? `<span style="color: red; font-weight: 500; font-size: 12px;">Free Shipping</span>` : ''}
                                        </span>
                                        </span><a href="${viewUrl}${ebayEPN}" target="_blank"><i class="fab fa-ebay" style="font-size: 35px;"></i></span></a>
                                        <span></span>
                                    </div>
                                    <hr>
                                    <div class="w-100 d-flex align-items-center justify-content-between" style="height: 10px;">
                                        <!-- watch bid auction icon -->
                                        <span>
                                            <!-- ${bids !== "0" ? `<i class="fa fa-gavel fa-rotate-270"></i> ${bids}` : ''} &nbsp;&nbsp;&nbsp; -->
                                            ${watchers !== "0" ? `<i class="bi bi-eye-fill" style="font-size: 18px;" data-toggle="tooltip" data-bs-placement="top" title="${watchers} watching"></i>` : ''}
                                        </span>
                                        <!-- info circle icon -->
                                        <span>
                                            <!-- <i class="bi bi-info-circle-fill" style="font-size: 15px;"></i> -->
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            } else if (condition === "Graded") {
                resultElement.innerHTML = `
                <div class="col mb-2">
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- badge-->
                                ${cardattributes === "(RC)" ? `<div class="badge bg-warning text-dark position-absolute" style="top: 0.5rem; right: 0.5rem">Rookie Card </div> ` : ''}
                                ${playerattributes === "(HOF)" && cardattributes !== "(RC)" ? `<div class="badge bg-warning text-dark position-absolute" style="top: 0.5rem; right: 1.5rem">Hall Of Fame</div>` : ''}
                                <!-- Product image-->
                                <div class="text-center bg-dark" style="padding-bottom:10px; border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                    <a href="${viewUrl}${ebayEPN}" target="_blank">
                                        <img class="card-img-top" src="${pictureUrl}" alt="..." style="max-width: 172px; max-height: 276px; padding-top: 10px; loading="lazy">
                                        <!-- condition badge -->
                                        <span class="badge badge-dark bg-dark" style="width: 172px; border-radius: 0;">${authority} ${grade} ${gradecondition}</span>
                                    </a>
                                </div>
                                <!-- Product details-->
                                <div class="card-body w-100">
                                    <div class="text-center">
                                        <!-- Player/Athlete -->
                                        <span class="fw-bolder" style="letter-spacing: 0.25px !important; word-spacing: 0.5px;">${playerAthlete} ${playerattributes}</span><br>
                                    </div>
                                    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <!-- Set -->
                                        <span class="fw-bold" style="font-size: 12px; letter-spacing: 0.25px !important; word-spacing: 0.5px;">${set} #${cardnumber} ${cardattributes}</span><br>
                                    </div>
                                    <hr>
                                    <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                                        <!-- Product price -->
                                        <span></span>
                                        <span class="fw-bold">
                                            ${currentPrice} <span style="font-size: 10px;" data-toggle="tooltip" data-bs-placement="top" title="Or Best Offer"> OBO</span><br>
                                            ${listingtype === "FixedPrice" ? `<span style="color: red; font-weight: 500; font-size: 12px;">Free Shipping</span>` : ''}
                                        </span>
                                        </span><a href="${viewUrl}${ebayEPN}" target="_blank"><i class="fab fa-ebay" style="font-size: 35px;"></i></span></a>
                                        <span></span>
                                    </div>
                                    <hr>
                                    <div class="w-100 d-flex align-items-center justify-content-between" style="height: 10px;">
                                        <!-- watch bid auction icon -->
                                        <span>
                                            <!-- ${bids !== "0" ? `<i class="fa fa-gavel fa-rotate-270"></i> ${bids}` : ''} &nbsp;&nbsp;&nbsp; -->
                                            ${watchers !== "0" ? `<i class="bi bi-eye-fill" style="font-size: 18px;" data-toggle="tooltip" data-bs-placement="top" title="${watchers} watching"></i>` : ''}
                                        </span>
                                        <!-- info circle icon -->
                                        <span>
                                            <!-- <i class="bi bi-info-circle-fill" style="font-size: 15px;"></i> -->
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            } else if (condition === "Ungraded") {
                resultElement.innerHTML = `
                <div class="col mb-2">
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- badge-->
                                ${cardattributes === "(USAB)" && year === "1991" ? `<div class="badge bg-primary text-light position-absolute" style="top: 0.5rem; right: 0.5rem">USA Dream Team</div> ` : ''}
                                ${cardattributes === "(RC)" ? `<div class="badge bg-warning text-dark position-absolute" style="top: 0.5rem; right: 0.5rem">Rookie Card </div> ` : ''}
                                ${playerattributes === "(HOF)" && cardattributes !== "(RC)" && cardattributes !== "(USAB)" ? `<div class="badge bg-warning text-dark position-absolute" style="top: 0.5rem; right: 1.5rem">Hall Of Fame</div>` : ''}
                                <!-- Product image-->
                                <div class="text-center bg-dark" style="padding-bottom:10px; border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                    <a href="${viewUrl}${ebayEPN}" target="_blank">
                                        <img class="card-img-top" src="${pictureUrl}" alt="..." style="max-width: 206px; max-height: 276px; padding-top: 10px;" loading="lazy">
                                        <!-- condition badge -->
                                        <span class="badge badge-dark bg-dark" style="width: 206px; border-radius: 0;">RAW ${conditionrange}</span>
                                    </a>
                                </div>
                                <!-- Product details-->
                                <div class="card-body w-100">
                                    <div class="text-center">
                                        <!-- Player/Athlete -->
                                        <span class="fw-bolder" style="letter-spacing: 0.25px !important; word-spacing: 0.5px;">${playerAthlete} ${playerattributes}</span><br>
                                    </div>
                                    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <!-- Set -->
                                        <span class="fw-bold" style="font-size: 12px; letter-spacing: 0.25px !important; word-spacing: 0.5px;">${set} #${cardnumber} ${cardattributes}</span><br>
                                    </div>
                                    <hr>
                                    <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                                        <!-- Product price -->
                                        <span></span>
                                        <span class="fw-bold">
                                            ${currentPrice} <span style="font-size: 10px;"> OBO</span><br>
                                            ${listingtype === "FixedPrice" ? `<span style="color: red; font-weight: 500; font-size: 12px;">Free Shipping</span>` : ''}
                                        </span>
                                        </span><a href="${viewUrl}${ebayEPN}" target="_blank"><i class="fab fa-ebay" style="font-size: 35px;"></i></span></a>
                                        <span></span>
                                    </div>
                                    <hr>
                                    <div class="w-100 d-flex align-items-center justify-content-between" style="height: 10px;">
                                        <!-- watch bid auction icon -->
                                        <span>
                                            <!-- ${bids !== "0" ? `<i class="fa fa-gavel fa-rotate-270"></i> ${bids}` : ''} &nbsp;&nbsp;&nbsp; -->
                                            ${watchers !== "0" ? `<i class="bi bi-eye-fill" style="font-size: 18px;" data-toggle="tooltip" data-bs-placement="top" title="${watchers} watching"></i>` : ''}
                                        </span>
                                        <!-- info circle icon -->
                                        <span>
                                            <!-- <i class="bi bi-info-circle-fill" style="font-size: 15px;"></i> -->
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            }

            resultsContainer.appendChild(resultElement);
        }
    });
}


// Function to clear input field
function clearInput() {
    document.getElementById('searchInput').value = '';
}

// Function to handle Enter key press
function checkEnter(event) {
    if (event.keyCode === 13) {
        search();
    }
}

function search() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var selectedCondition = document.querySelector('input[name="condition"]:checked').value;

    if (searchTerm.trim() === '') {
        currentPage = 1;
        loadPage(currentPage);
        return;
    }

    var filteredData = allItems.filter(function (item) {
        // Check if item name or description matches search term
        var nameMatches = item.Title.toLowerCase().includes(searchTerm);
        var descriptionMatches = item["Item Specifics"].some(specific =>
            specific.Name.toLowerCase().includes(searchTerm) || specific.Values.some(value => value.toLowerCase().includes(searchTerm))
        );

        // Check if condition matches selected condition
        var conditionMatches = selectedCondition === "Any" || item["Condition Display Name"].toLowerCase() === selectedCondition.toLowerCase();


        return (nameMatches || descriptionMatches) && conditionMatches;
    });

    totalItems = filteredData.length;
    displayItems(filteredData, 0, totalItems);
}




// Function to show filter and perform search
function showFilter() {
    var resultsfilterContainer = document.getElementById('resultsfilterContainer');
    resultsfilterContainer.style.display = 'block';
    search();
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});



