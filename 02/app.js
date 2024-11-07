(function () {
  document.addEventListener("DOMContentLoaded", init);

  const errorElement = document.querySelector(".alert");
  const messageElement = document.querySelector(".alert__message");

  const showMessage = (message) => {
    errorElement.classList.remove("alert--hidden");
    messageElement.innerText = message;
  };

  const hiddenMessage = () => {
    errorElement.classList.add("alert--hidden");
  };

  function init() {
    const clickEl = document.querySelector(".error--click");
    const enterEl = document.querySelector(".error--enter");

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, "click", new RangeError("Błąd zakresu!"));
    initEventWithError(enterEl, "mouseenter", new TypeError("Błąd typu!"));

    errorElement.addEventListener("click", hiddenMessage);
  }

  function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + "px";
    element.style.left = Math.random() * 800 + "px";

    if (error) {
      throw error;
    }
  }

  function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function () {
      try {
        setRandomPosition(this, error);
      } catch (error) {
        const message = error.message;
        showMessage(message);
      }
    });
  }
})();
