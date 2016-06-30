const mongoose = require('../lib/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  createdAt: Date,
  updateAt: Date,
  tweets: [{
    text: String, isLiked: {type: Boolean, default: false}
  }]
});

userSchema.methods.addTweet = function(text) {
  this.tweets.push({text: text});
  this.save();
};

userSchema.methods.listTweets = function(text) {
//show all tweets
  this.tweets.forEach(tweet => {
    console.log('\n');
    console.log(`${this.username} has tweeted: ${tweet.text}`);
    console.log('\n');
  });
};

userSchema.methods.findTweets = function(searchString) {
// search through tweets with given parameters
  return this.tweets.filter(tweet => {
    return tweet.text.indexOf(search) >= 0 ? true : false;
  });
};

userSchema.methods.addFriend = function() {
  //add friendships
};

userSchema.methods.listFriends = function() {
  // show friends
};

//tell schema to become a model
const User = mongoose.model('User', userSchema);

module.exports = User;
