(function() {
    window.HauserAppSettings = {
        apiBaseUrl: "http://hauser-backend-api-env-5uqm2mzix5.elasticbeanstalk.com/api/mobile/v1",
        facebookAppId: "756810117749952",
        facebookAppName: "HauserAppDev",
        firebaseUrl: "https://hauser.firebaseio.com",

        // apiBaseUrl: "http://10.0.1.20:3000/api/mobile/v1",
        // facebookAppId: "1555600084706545",
        // facebookAppName: "HauserDev",
        // firebaseUrl: "https://hauserdev.firebaseio.com",

        rootUrlState: "menu.feed",
        unauthorizedFallbackUrlState: "landing.home"
    }
})();

// AWS.config.region = 'us-east-1';
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:805a26ce-32d9-42ac-8827-56801e712b3b',
// });

// mobileAnalyticsClient = new AMA.Manager({
//     appId: "4914e4e4e60b4001adba439c748e5b25"
// });


// touchCount: 0,
//     recordTouchEvent: function(event) {
//         console.log(this.mobileAnalyticsClient.recordEvent('customTouch', { 
//             'screenName': 'main'}, {'touchCount': this.touchCount++ } ));
//         console.log('Touch Event recorded');
//     },
//   mobileAnalyticsClient.submitEvents();