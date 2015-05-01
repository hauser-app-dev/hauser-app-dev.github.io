(function() {
    window.HauserAppSettings = {
        apiBaseUrl: function() {
            server_id = localStorage.getItem("HauserServerId");
            if (server_id == null) {
                return "https://hauser-api-0.herokuapp.com/api/mobile/v1";
            } else {
                return "https://hauser-api-" + server_id + ".herokuapp.com/api/mobile/v1";
            }

        },
        facebookAppId: "756810117749952",
        facebookAppName: "HauserAppDev",
        firebaseUrl: "https://hauser.firebaseio.com",
        imagesCdnBaseUrl: "https://hauser-dev.herokuapp.com/images",

        // apiBaseUrl: "http://localhost:3000/api/mobile/v1",
        // facebookAppId: "1555600084706545",
        // facebookAppName: "HauserDev",
        // firebaseUrl: "https://hauserdev.firebaseio.com",
        // imagesCdnBaseUrl: "http://localhost:3000/images",

        rootUrlState: "menu.feed",
        unauthorizedFallbackUrlState: "landing.login"
    }
})();
