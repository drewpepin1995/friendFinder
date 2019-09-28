var friends = require("../app/data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var newFriendScores = 0;
        var scoresArray = [];
        var friendCount = 0;
        var bestFriend = 0;

        for (var i = 0; i < friends.length; i++) {
            var scoresDiff = 0;
            for (var j = 0; j < newFriendScores; j++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            };

            scoresArray.push(scoresDiff);
        };

        for (var i=0; i<scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestFriend]) {
                bestMatch = i;
            }
        };

        var bff = friendList[bestFriend];
        res.json(bff);

        friendList.push(req.body)
    });
};
