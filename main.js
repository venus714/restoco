 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const description = document.getElementById("description").value;
    
    // Construct the WhatsApp message
    const message = `Name: ${name}%0APhone Number: ${phoneNumber}%0ADescription: ${description}`;
    
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/0710790674?text=Hi+I+have+an+enquiry`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  });
  // Initialize the navbar toggle
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar-toggler").addEventListener("click", function() {
        var collapsedLinks = document.getElementById("navbarSupportedContent");
        if (collapsedLinks.classList.contains("show")) {
            collapsedLinks.classList.remove("show");
        } else {
            collapsedLinks.classList.add("show");
        }
    });
});
