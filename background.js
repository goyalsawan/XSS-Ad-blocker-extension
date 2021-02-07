// variables to track current state(Enabled/Disabled) for blockers.
var XSS_blocker = true;                               
var Ad_blocker = true
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // console.log(JSON.stringify(details));
   if (XSS_blocker) {
     // assuming no legitimate request will contain HTML code. This regex will block all HTML input. 
    var regex = "<.*?>"                               
    if (details.method == "POST"){
      var data = details.requestBody.formData.data;
      // console.log(data);
      var reg = new RegExp(regex);
        if ( Boolean(reg.exec(data)) )
        {
          return {cancel:true};
        }
      }
    if (details.method == "GET"){
      var url = details.url;
      //extraction of input data
      var reg = new RegExp("data=.*");          
      var val = reg.exec(url)[0].split('=')[1];
      var decoded = decodeURIComponent(val);
      // console.log(decoded);
      var reg2 = new RegExp(regex);
      if ( Boolean(reg2.exec(decoded)) ){
        return {cancel:true};
      }
    }     
   }
  },
  {urls: ["https://www.cse.iitb.ac.in/~surajyadav/xss/xss_test.php*"]}, 
  ["requestBody","blocking"]
);
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (Ad_blocker) {
      return {cancel:true};
    }
  },{urls: blocked_ads},              //blocked_ads variable defined in blocked_ads.js contains url list of all the advertisements.
  ["blocking"]
);
