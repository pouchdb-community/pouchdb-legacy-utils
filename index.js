'use strict';

var ajax = require('pouchdb-ajax');
var errors = require('pouchdb-errors');
var utils = require('pouchdb-utils');
var Promise = require('pouchdb-promise');
var binaryUtils = require('pouchdb-binary-utils');
var extend = require('js-extend').extend;

module.exports = function (PouchDB) {
  PouchDB.ajax = ajax;
  PouchDB.Errors = errors;
  PouchDB.utils = {
    ajax: ajax,
    parseUri: utils.parseUri,
    uuid: utils.uuid,
    Promise: Promise,
    atob: binaryUtils.atob,
    btoa: binaryUtils.btoa,
    binaryStringToBlobOrBuffer: binaryUtils.binaryStringToBlobOrBuffer,
    clone: utils.clone,
    extend: extend,
    createError: errors.createError
  };
};