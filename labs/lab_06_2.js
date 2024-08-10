const { getUserInput } = require("../labUtils/inputUtil");
const url = "https://jsonplaceholder.typicode.com";

/**
 * 
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

 */

getPost();

async function getPost() {
   try {
      const userId = getUserInput(true, 'Please input userId: ');
      const postList = await getPostListByUserId(userId);
      if (postList.length === 0) {
         throw new Error('This userId is NOT existing');
      };
      console.log(postList);

      const post = await getPostByResourceId(postList);
      if (post) {
         console.log(`\nPost content: \n${post.body}\n`)
      } else {
         console.error(`This resourceId is NOT existing with userId ${userId}`)
      };
   } catch (error) {
      console.error(error);
   };
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