const { assert } = require('chai');
const { JSON } = require('../httpUtils/ContentType');
const { isLastResponseCodeCorrect, isPostIdCorrect } = require('../labSteps/labVerification/verifyLastResponseCode');
const {getUserInput} = require('../labUtils/inputUtil');

describe('Json Placeholder', () => {
    it('should be able to get post by id', async () => {
        const postId = getUserInput(true, "Please input postId: ");
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const response = await fetch(url, {
            header: JSON
        });
        const data = await response.json();
        isLastResponseCodeCorrect(response, 200);
        isPostIdCorrect(data, postId);
    });
});

describe('Json Placeholder', () => {
    it('should be able to get all posts', async() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url, {
            header: JSON
        });
        const data = await response.json();
        assert.isTrue(data.length !== 0, '[FAILED] Fail to get all posts');

        const userId = getUserInput(true, "Please input userId: ");
        const postListByUserId = data.filter((post) => {
            return post.userId === userId;
        })
        postListByUserId.forEach((post) => {
            assert.equal(post.userId, userId, `[FAILED] expected userId is ${userId} but found ${post.userId}`)
        });

        const postId = getUserInput(true, "Please input postId: ");
        const specificPost = postListByUserId.find((post) => {
            return post.id === postId;
        });
        assert.equal(specificPost.id, postId, `[FAILED] expected postId is ${postId} but found ${specificPost.id}`)
    });
});