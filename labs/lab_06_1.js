const { getUserInput } = require("../labUtils/inputUtil");
const url = "https://jsonplaceholder.typicode.com";

filterUserResourcesByUserId(getUserInput(true, "Please input userId: "));
gettingResourceDetail(getUserInput(true, "Please input resourceId: "));

function convertJsonToObject(response) {
   return response.json();
};

function printOutObject(object) {
   return console.log(object);
};

function filterUserResourcesByUserId(userId) {
   const filterUserResourcesUrl = url.concat(`/posts?userId=${userId}`);
   fetch(filterUserResourcesUrl)
      .then(convertJsonToObject)
      .then(printOutObject)
};

function gettingResourceDetail(resourceId) {
   const getAllResourcesUrl = url.concat(`/posts/${resourceId}`);
   fetch(getAllResourcesUrl)
      .then(convertJsonToObject)
      .then(function (obj) {
         return console.log(`\nPost content of resourceId ${resourceId}: \n${obj.body}\n`);
      })
};