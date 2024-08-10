const { getUserInput } = require("../labUtils/inputUtil");
const url = "https://jsonplaceholder.typicode.com";


/**

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
 
 */

getPost();

function getPost() {
   const userId = getUserInput(true, 'Please input userId: ');
   getPostListByUserId(userId)
      .then((postList) => {
         if (postList.length === 0) {
            throw new Error('This userId is NOT existing');
         };
         console.log(postList);
         return postList;
      })
      .then(postList => {
         return getPostByResourceId(postList);
      })
      .then((post) => {
         if (post) {
            console.log(`\nPost content: \n${post.body}\n`)
         } else {
            console.error(`This resourceId is NOT existing with userId ${userId}`)
         }
      }
      )
      .catch((error) =>
         console.error(error))
};

function getPostListByUserId(userId) {
   const filterAllPostsByUserIdUrl = url.concat(`/posts?userId=${userId}`);
   return fetch(filterAllPostsByUserIdUrl)
      .then((response) => response.json());
};

function getPostByResourceId(postList) {
   const resourceId = getUserInput(true, 'Please input resourceId: ');
   return postList.find((post) => post.id === resourceId);
};