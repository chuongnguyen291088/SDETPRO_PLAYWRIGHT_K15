const { getUserInput } = require("../labUtils/inputUtil");
const url = "https://jsonplaceholder.typicode.com";

filterUserResourcesByUserId(getUserInput(true, "Please input userId: "));
gettingResourceDetail(getUserInput(true, "Please input resourceId: "));

async function filterUserResourcesByUserId(userId) {
   const filterUserResourcesUrl = url.concat(`/posts?userId=${userId}`);
   const response = await fetch(filterUserResourcesUrl);
   const jsonObject = await response.json();
   return console.log(jsonObject);
};

async function gettingResourceDetail(resourceId) {
   const getAllResourcesUrl = url.concat(`/posts/${resourceId}`);
   const response = await fetch(getAllResourcesUrl);
   const jsonObject = await response.json();
   return console.log(`\nPost content of resourceId ${resourceId}: \n${jsonObject.body}\n`);
};