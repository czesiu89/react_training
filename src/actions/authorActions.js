"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        //Normally AJAX calls and callback here
        var newAuthor = AuthorApi.saveAuthor(author);

        //Tells distpatcher, to tell stores, that author was just created.
        Dispatcher.dispatch({
            acitonType: ActionTypes.CREATE_AUTHOR, 
            author: newAuthor
        });
    }
};

module.exports = AuthorActions;