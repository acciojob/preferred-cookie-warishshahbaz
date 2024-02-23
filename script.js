document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.getElementById("preferences-form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Set initial values from cookies, if available
  if (document.cookie) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {});

    if (cookies["fontSize"]) {
      fontSizeInput.value = cookies["fontSize"];
      document.body.style.fontSize = cookies["fontSize"] + "px";
    }

    if (cookies["fontColor"]) {
      fontColorInput.value = cookies["fontColor"];
      document.body.style.color = cookies["fontColor"];
    }
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
