/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants."
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
        <span>999 days ago</span>
        <div class="footer-icons">
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  `;
}

$(document).ready(function () {
  const ROOT_URL = 'http://localhost:8080';
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
    console.log(formData);
    $.ajax({
      method: 'POST',
      url: `${ROOT_URL}/tweets`,
      data: formData
    })
    .done(function () {
      $('.message').val("");
      fetchTweets();
    })
    .fail(console.error)
  });


    // Ajax POST request to /tweets with data = formData
    // .done = things went well
    //   reload tweets
    // .fail = things went wrong
   fetchTweets();

});


