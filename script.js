document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("preferences-form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Function to get a specific cookie
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Set initial values from cookies, if available
  const fontSizeCookie = getCookie("fontSize");
  const fontColorCookie = getCookie("fontColor");

  if (fontSizeCookie) {
    fontSizeInput.value = fontSizeCookie;
    document.body.style.fontSize = fontSizeCookie + "px";
  }

  if (fontColorCookie) {
    fontColorInput.value = fontColorCookie;
    document.body.style.color = fontColorCookie;
  }

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user preferences
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Store preferences as cookies
    document.cookie = `fontSize=${fontSize}; max-age=31536000`; // Max-age set to 1 year
    document.cookie = `fontColor=${fontColor}; max-age=31536000`; // Max-age set to 1 year

    // Apply preferences to the page
    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;
  });
});