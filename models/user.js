const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
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
};

userSchema.methods.listTweets = function(text) {
  // list all tweets
  // use .map because we're altering an existing array and then we want to use that manipulated array as a new object
  
};

userSchema.methods.addFriend = function(???) {
  //add friendships
};

userSchema.methods.listFriends = function() {
  // show friends
};

//tell schema to become a model
const User = mongoose.model('User', userSchema);

module.exports = User;
