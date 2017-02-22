/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 const tweetData = {
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
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const renderTweets = () => {

};

const createTweetElement = (newTweet) => {
  return `<article class="tweet">
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
            </article>`;
}

$(document).ready(function () {
  const tweet = createTweetElement(tweetData);
  $('#tweets-container').append(tweet);
});

