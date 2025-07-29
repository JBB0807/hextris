export const playerData = {
    userId: null,
    username: null,
    region: null,

    setUser(userId, username, region) {
        this.userId = userId;
        this.username = username;
        this.region = region;
    },

    clearUser() {
        this.userId = null;
        this.username = null;
        this.region = null;
    },
};

window.sharedDataFromModule = playerData;