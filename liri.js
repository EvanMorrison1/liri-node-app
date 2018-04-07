require("dotenv").config();

const os = require('os');

let keys      = require("./keys.js"),
    Twitter   = require("twitter"),
    client    = new Twitter(keys.twitter),

    request   = require("request-promise"), 
    inquirer  = require("inquirer"),
    fs        = require("fs");

var command   = process.argv.slice(2, 3).join("+"),
    media     = process.argv.slice(3).join("+");

function myTweets(media){
    var params = {screen_name: media, count: 20};
    client.get('statuses/user_timeline', params)
    .then(function (tweets) {
        for (var i = 0; i < tweets.length; i++) {
            console.log(`${tweets[i].created_at}
${tweets[i].text}
            `);
        //END OF: for (var i = 0; i < tweets.length; i++) {
        }
    //END OF: .then(function (tweets) {
    })
    .catch(function (error) {
        throw error;
    })
}
