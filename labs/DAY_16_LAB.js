const PostController = require("../labController/PostController");
const { getUserInput } = require("../labUtils/inputUtil");

const HOST = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

execution();

async function execution() {
    let userId, postId;
    const postController = new PostController(HOST, SLUG);
    try {
        // get all posts by userId
        userId = getUserInput(true, "Please input userId: ");
        const allPostByUserId = await postController.getAllPostsByUserId(userId);
        if (allPostByUserId.length === 0) {
            throw new Error("[FAILED] This userId is NOT existing");
        }
        console.log(`All posts by userId: ${userId}`);
        console.log(allPostByUserId);

        // get post by userId and postId
        postId = getUserInput(true, "Please input postId: ");
        const postByUserIdAndPostId = await postController.getPostByUserIdAndPostId(userId, postId);
        if (!postByUserIdAndPostId) {
            throw new Error("[FAILED] This postId is NOT existing");
        }
        console.log(`Post ${postId}'s content: \n${postByUserIdAndPostId._body}`);
    } catch (error) {
        console.error(error.message);
    }
};