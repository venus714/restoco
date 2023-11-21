// Get the menu icon and navbar elements
let menu = document.querySelector('.hamburger');
let navbar = document.querySelector('.navigation');

// Function to toggle the active class on the menu icon and navbar
function toggleMenu() {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Event listener for the menu icon click
menu.addEventListener('click', toggleMenu);

// Event listener to close the navbar when scrolling
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  menu.classList.remove('bx-x');
});

// Remove the active class from navbar when a nav-link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
  });
});

$(document).ready(function() {
  $(".view-more-btn").click(function() {
    var moreImagesContainer = $(this).closest(".box").next(".more-images-container");

    // Toggle the visibility of additional images
    moreImagesContainer.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-container").hide();
});



// $(document).ready(function() {
//   $(".view-more-bt").click(function() {
//     var moreImagesContaine = $(this).closest(".box").next(".more-images-containe");

//     // Toggle the visibility of additional images
//     moreImagesContaine.slideToggle();

//     // Update the button text
//     var buttonText = $(this).text();
//     var showText = "View More Images";
//     var hideText = "Hide";
//     $(this).text(buttonText === showText ? hideText : showText);
//   });

//   // Hide the additional images by default
//   $(".more-images-containe").hide();
// });
$(document).ready(function() {
  $(".view-more-b").click(function() {
    var moreImagesContain = $(this).closest(".box").next(".more-images-contain");

    // Toggle the visibility of additional images
    moreImagesContain.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-contain").hide();
});
$(document).ready(function() {
  $(".view-more-").click(function() {
    var moreImagesContai = $(this).closest(".box").next(".more-images-contai");

    // Toggle the visibility of additional images
    moreImagesContai.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-contai").hide();
});
$(document).ready(function() {
  $(".view-more").click(function() {
    var moreImagesConta = $(this).closest(".box").next(".more-images-conta");

    // Toggle the visibility of additional images
    moreImagesConta.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-conta").hide();
});
$(document).ready(function() {
  $(".view-mor").click(function() {
    var moreImagesContainer = $(this).closest(".box").next(".more-images-cont");

    // Toggle the visibility of additional images
    moreImagesCont.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-cont").hide();
});
function searchProperties() {
  var searchQuery = document.getElementById("propertySearchInput").value.toLowerCase();
  var propertyBoxes = document.querySelectorAll(".rent-center .box");
  var matchFound = false; // Flag to track if any matches were found

  propertyBoxes.forEach(function (box) {
    var location = box.querySelector(".text h2").textContent.toLowerCase();

    if (location.includes(searchQuery)) {
      box.style.display = "block";
      matchFound = true;
    } else {
      box.style.display = "none";
    }
  });

  // Display message if no matches were found
  if (!matchFound) {
    var noMatchesMessage = document.getElementById("noMatchesMessage");
    noMatchesMessage.style.display = "block";
  } else {
    var noMatchesMessage = document.getElementById("noMatchesMessage");
    noMatchesMessage.style.display = "none";
  }
}

function searchLands() {
  var searchQuery = document.getElementById("landSearchInput").value.toLowerCase();
  var landBoxes = document.querySelectorAll(".rent-center.container .box");

  landBoxes.forEach(function (box) {
    var locationElement = box.querySelector(".text h2");

    if (locationElement) {
      var location = locationElement.textContent.toLowerCase();

      if (location.includes(searchQuery)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    }
  });
}

document.getElementById("whatsappForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(event.target);

  // Construct the API endpoint URL
  const apiUrl = "http://127.0.0.1:3000/feedback";

  // Make a POST request to the backend API
  fetch(apiUrl, {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend (if needed)
      console.log(data);
      // Optionally, you can display a success message to the user here
    })
    .catch(error => {
      // Handle errors (if any)
      console.error("An error occurred while sending the data:", error);
      // Optionally, you can display an error message to the user here
    });
});
$(document).ready(function() {
  $(".view-more-land").click(function() {
    var moreImagesContainer = $(this).closest(".box").find(".moreland");

    // Toggle the visibility of additional images
    moreImagesContainer.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".moreland").hide();
});
$(document).ready(function() {
  $(".view-mo").click(function() {
    var moreImagesCon = $(this).closest(".box").next(".more-images-co");

    // Toggle the visibility of additional images
    moreImagesCon.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-co").hide();
});

$(document).ready(function() {
  $(".view-m").click(function() {
    var moreImagesCo = $(this).closest(".box").next(".more-images-c");

    // Toggle the visibility of additional images
    moreImagesCo.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-c").hide();
});


$(document).ready(function() {
  $(".view").click(function() {
    var moreImagesC = $(this).closest(".box").next(".more-images-");

    // Toggle the visibility of additional images
    moreImagesC.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-").hide();
});


$(document).ready(function() {
  $(".vie").click(function() {
    var moreImages = $(this).closest(".box").next(".more-imag");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-imag").hide();
});
$(document).ready(function() {
  $(".vi").click(function() {
    var moreImages = $(this).closest(".box").next(".more-ima");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-ima").hide();
});

$(document).ready(function() {
  $(".v").click(function() {
    var moreImages = $(this).closest(".box").next(".more-im");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-im").hide();
});
$(document).ready(function() {
  $(".v-").click(function() {
    var moreImages = $(this).closest(".box").next(".more-i");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-i").hide();
});
$(document).ready(function() {
  $(".v--").click(function() {
    var moreImages = $(this).closest(".box").next(".more-");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-").hide();
});
$(document).ready(function() {
  $(".v---").click(function() {
    var moreImages = $(this).closest(".box").next(".mor");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".mor").hide();
});
$(document).ready(function() {
  $(".view-").click(function() {
    var moreImages = $(this).closest(".box").next(".more-images-");

    // Toggle the visibility of additional images
    moreImages.slideToggle();

    // Update the button text
    var buttonText = $(this).text();
    var showText = "View More Images";
    var hideText = "Hide";
    $(this).text(buttonText === showText ? hideText : showText);
  });

  // Hide the additional images by default
  $(".more-images-").hide();
});
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  
  // Get form data
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const description = document.getElementById("description").value;
  
  // Construct the WhatsApp message
  const message = `Name: ${name}%0APhone Number: ${phoneNumber}%0ADescription: ${description}`;
  
  // Construct the WhatsApp URL
  const whatsappURL = `https://wa.me/+254791023312?text=hello+how+can+we+help+you`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappURL, "_blank");
});