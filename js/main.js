function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

$('.custom-file input').change(function (e) {
    if (e.target.files.length) {
        $(this).next('.custom-file-label').html(e.target.files[0].name);
    }
});

$('.first-option').hide();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var timeoutHandle;
    function countdown(minutes, seconds) {
        function tick() {
            var counter = document.getElementById("otpTimer");
            counter.innerHTML = "OTP will expire in " +
                minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            seconds--;
            if (seconds >= 0) {
              document.getElementById("otpTimer").style.display = "block";
              document.getElementById("resetBtn").style.display = "none";
                timeoutHandle = setTimeout(tick, 1000);
            } else {
              document.getElementById("otpTimer").style.display = "none";
              document.getElementById("resetBtn").style.display = "block";
                if (minutes >= 1) {
                    // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                    setTimeout(function () {
                        countdown(minutes - 1, 59);
                    }, 1000);
                }
            }
        }
        tick();
}