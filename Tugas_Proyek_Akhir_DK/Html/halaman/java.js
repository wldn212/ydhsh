function fadeIn(element, duration) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
    }, duration / 50);
  }
  
  // Usage:
  var el = document.getElementById('animatedElement0');
  fadeIn(el, 4000); // Fades in the element over 4 seconds

  function fadeIn(element, duration) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
    }, duration / 50);
  }
  
  // Usage:
  var el = document.getElementById('animatedElement1');
  fadeIn(el, 5000);

  function fadeIn(element, duration) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
    }, duration / 50);
  }
  
  // Usage:
  var el = document.getElementById('animatedElement2');
  fadeIn(el, 6000); 