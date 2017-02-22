function updateCountdown() {
  const remaining = 140 - $('.message').val().length;
  const counter = $('.counter');
  counter.text(remaining);
  if(remaining < 0) {
    counter.addClass("counter red");
  } else {
    counter.removeClass("red");
  }
}

$(document).ready(function() {
  updateCountdown();
  $(this).change(updateCountdown);
  $(this).keyup(updateCountdown);
});