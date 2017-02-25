$(document).ready(function () {

  const ROOT_URL = 'http://localhost:8080';

  const createTweetElement = (newTweet) => {
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
        <span>${newTweet.created_at}</span>
        <div class="footer-icons">
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  `;
}

  const renderTweets = (tweets) => {
  // loops thru tweets
  var tweetsContainer = $('#tweets-container');
  tweets.forEach( (tweet) => {
    const result = createTweetElement(tweet);
    tweetsContainer.prepend(result);
  })
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};
  // TODO:
  // Create fetchTweets() to get content from /tweets
  //   - Ajax GET request
  //   - renderTweets inside .done()
  const fetchTweets = () => {
    $.ajax({
      method: 'GET',
      url: `${ROOT_URL}/tweets`
    })
    .done(renderTweets)
    .fail(console.error)
  };

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

  $('#composeButton').on('click', () => {
      $('.new-tweet').slideToggle(200);
      $('.message').focus();
  })


    // Ajax POST request to /tweets with data = formData
    // .done = things went well
    //   reload tweets
    // .fail = things went wrong
   fetchTweets();

});


