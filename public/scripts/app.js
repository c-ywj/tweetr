$(document).ready(function () {

  const ROOT_URL = 'http://localhost:8080';
  // Converts Date.now() to readable units
  const calcDaysAgo = function (date_past) {
  // get total seconds between the times
  let delta = Math.abs(Date.now() - date_past) / 1000;
  let timeMessage = ``;

  if (delta >= 86400) {
    // calculate (and subtract) whole days
    delta = Math.floor(delta / 86400);
    timeMessage += `${delta} day(s) ago`
  } else if (delta >= 3600) {
    // calculate (and subtract) whole hours
    delta = Math.floor(delta / 3600) % 24;
    timeMessage += `${delta} hour(s) ago`
  } else if (delta >= 60) {
    // calculate (and subtract) whole minutes
    delta = Math.floor(delta / 60) % 60;
    timeMessage += `${delta} minute(s) ago`
  } else {
    timeMessage += `Just now!`
  }
  return timeMessage;
  };

  const createTweetElement = (newTweet) => {
    const timeAgo = calcDaysAgo(newTweet.created_at)
  return `
    <article class="tweet">
      <header>
        <img src="${newTweet.user.avatars.small}">
        <h2>${newTweet.user.name}</h2>
        <span>${newTweet.user.handle}</span>
      </header>
      <p>
        ${newTweet.content.text}
      </p>
      <footer>
        <span>${timeAgo}</span>
        <div class="footer-icons">
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  `;
  }
  //Renders HTML block for new tweets posted
  const renderTweets = (tweets) => {
  var tweetsContainer = $('#tweets-container');
    tweets.forEach( (tweet) => {
      const result = createTweetElement(tweet);
      tweetsContainer.prepend(result);
    })
  };
  //Loads all tweets from database
  const fetchTweets = () => {
    $.ajax({
      method: 'GET',
      url: `${ROOT_URL}/tweets`
    })
    .done(renderTweets)
    .fail(console.error)
  };
  //Ajax POST handler for new tweets posts
  $('.new-tweet form').on('submit', (ev) => {
    ev.preventDefault();
    const formData = $(ev.target).serialize();

    if($('.message').val().length > 140 || $('.message').val() === '') {
      alert("your message is either empty or too long!");
    } else {
      $.ajax({
        method: 'POST',
        url: `${ROOT_URL}/tweets`,
        data: formData
      })
      .done(function () {
        $('.message').val("");
        fetchTweets();
      })
    }
  });
  //Adds slide toggle animation to "compose" button
  $('#composeButton').on('click', () => {
      $('.new-tweet').slideToggle(200);
      $('.message').focus();
  })

   fetchTweets();
});

