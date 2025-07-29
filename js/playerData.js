export const playerData = {
  userId: null,
  username: null,
  region: null,
  playerScore: 0,

  setUser(userId, username, region) {
    this.userId = userId;
    this.username = username;
    this.region = region;

    //get score from api
    var apigClient = apigClientFactory.newClient();
    var params = {
      playerId: this.userId,
    };

    const body = {
      playerId: userId,
      score: score,
    };

    const additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {
        "Content-Type": "application/json",
      },
    };

    apigClient
      .scoresGet(params, body, additionalParams)
      .then((response) => {
        const body = JSON.parse(response.data.body);
        if (body.score) {
          this.playerScore = body.score;
        } else {
          this.playerScore = 0; // Default score if not found
        }

        $("#currentHighScore").text(this.playerScore);
      })
      .catch((error) => {
        console.error("Error fetching score:", error);
        this.playerScore = 0; // Default score on error
        $("#currentHighScore").text(this.playerScore);
      });
  },

  clearUser() {
    this.userId = null;
    this.username = null;
    this.region = null;
  },
};

window.sharedDataFromModule = playerData;
