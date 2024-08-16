const {assert} = require('chai');

function isLastResponseCodeCorrect({status}, expectedCode) {
    assert.equal(status, expectedCode, `[FAILED] expected code is ${expectedCode} but found ${status}`)
}

function isUserIdCorrect({userId}, expectedUserId) {
    assert.equal(userId, expectedUserId, `[FAILED] expected userId is ${expectedUserId} but found ${userId}`)
}

function isPostIdCorrect({id}, expectedPostId) {
    assert.equal(id, expectedPostId, `[FAILED] expected postId is ${expectedPostId} but found ${id}`)
}

module.exports = {
    isLastResponseCodeCorrect,
    isUserIdCorrect,
    isPostIdCorrect,
};
