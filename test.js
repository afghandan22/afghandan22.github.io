
// Wait for the DOM to load before executing JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  // Select the button using its ID
  var learnMoreButton = document.getElementById("learn-more-button");
  var infogovButton = document.getElementById("info-gov-button");
  var foiaButton = document.getElementById("foia-button");
  
  var popupBox = document.querySelector(".gdpr-popup-box");
  var infogovpopupBox = document.querySelector(".infogov-popup-box");
  var foiapopupBox = document.querySelector(".foia-popup-box");

  var exitButton = document.querySelector(".exit-button");
  var infogovexitButton = document.querySelector(".infogov-exit-button");
  var foiaexitButton = document.querySelector(".foia-exit-button");


  // Add an event listener to the button
  learnMoreButton.addEventListener("click", function () {
    // Show the popup box
    popupBox.style.display = "block";
  });
  infogovButton.addEventListener("click", function () { 
    // Show the popup box
    infogovpopupBox.style.display = "block";
  });
  foiaButton.addEventListener("click", function () { 
    // Show the popup box
    foiapopupBox.style.display = "block";
  });

  // Add an event listener to the exit button
  exitButton.addEventListener("click", function () {
    // Hide the popup box
    popupBox.style.display = "none";
  });
  infogovexitButton.addEventListener("click", function () {
    infogovpopupBox.style.display = "none";
  });
  foiaexitButton.addEventListener("click", function () {
    
    foiapopupBox.style.display = "none";
  });
//////////////
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle('active');
    });
  });
////////////////
  function handleCheckboxClick() {
    const checkbox = document.getElementById("read-checkbox");
    if (checkbox.checked) {
      learnMoreButton.innerText = "GDPR ✔️";
      learnMoreButton.disabled = false;
    } else {
      learnMoreButton.innerText = "GDPR";
      learnMoreButton.disabled = false;
    }
  }
  const readCheckbox = document.getElementById("read-checkbox");
  readCheckbox.addEventListener("click", handleCheckboxClick);
 ////////////////////////
  function handleinfogovCheckboxClick() {
    const checkbox = document.getElementById("read-infogov-checkbox");
    const learnMoreButton = document.getElementById("info-gov-button");
    
    if (checkbox.checked) {
      infogovButton.innerText = "Information\n Governance ✔️";
      infogovButton.disabled = false;
    } else {
      infogovButton.innerText = "Information\n Governance";
      infogovButton.disabled = false;
    }
  }
  const readinfogovCheckbox = document.getElementById("read-infogov-checkbox");
  readinfogovCheckbox.addEventListener("click", handleinfogovCheckboxClick);
///////////////////////
  function handlefoiaCheckboxClick() {
    const checkbox = document.getElementById("read-foia-checkbox");
    const foiaButton = document.getElementById("foia-button");
    
    if (checkbox.checked) {
      foiaButton.innerText = "FOIA & SAR ✔️";
      foiaButton.disabled = false;
    } else {
      foiaButton.innerText = "FOIA & SAR";
      foiaButton.disabled = false;
    }
  }
  const readfoiaCheckbox = document.getElementById("read-foia-checkbox");
  readfoiaCheckbox.addEventListener("click", handlefoiaCheckboxClick);
});



// function toggle(id) {
//   var content = document.getElementById(id);
//   var button = document.querySelector(`#${id} + button`);

//   if (content.style.maxHeight) {
//     // Content is visible, hide it and change button text to "Read More"
//     content.style.maxHeight = null;
//     button.textContent = 'Read More';
//   } else {
//     // Content is hidden, show it and change button text to "Read Less"
//     content.style.maxHeight = content.scrollHeight + 'px';
//     button.textContent = 'Read Less';
//   }
// }
