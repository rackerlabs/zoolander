#! /usr/bin/env node
var pkg = require('../package.json')
var async = require('async');
var fs = require('fs-extra');
var colors = require('colors');
var request = require('request');
var _ = require('lodash');
var shortid = require('shortid');
shortid = shortid.generate();

console.log('- Flatten www.rackspace.com -'.green);
var base = 'http://local.rackspace.com:7080/api/content/node';

var writeBase = __dirname + '/../styleguide/derek/examples';
function getNodes (callback) {
  console.log('Pulling' + ' nodes.json'.cyan);
  request.get(base + '.json?parameters[type]=legacy_content&pagesize=20000&' + shortid, function (err, res, body) {
    body = JSON.parse(body);
    callback(err, body);
  });
}

function saveNode (node, callback) {
  var uuid = node.uuid;
      console.log(base + '/' + uuid);
  request.get(base + '/' + uuid , function (err, res, body) {
    console.log(('Pulled UUID: ' +  uuid).cyan);
    body = JSON.parse(body);

    var filename = writeBase + '/node/_' + body.nid + '.html';

    if(typeof body.body.en != 'undefined' && typeof body.body.en[0].value != 'undefined') {
      console.log(writeBase + filename + '.html');
      fs.writeFile(filename, body.body.en[0].value, function (err, data) {
        var jadeFile =  writeBase + '/node/' + body.nid + '.jade';
        var jade = '' +
          'extends ../../../_layouts/page\n'+
          '\n' +
          'block content\n'+
          '  != partial("../../_partials/_navbar")\n'+
          '    include ./_' + body.nid + '.html';
        fs.writeFile(jadeFile, jade, callback);

      });
    } else {
      console.log(('Error parsing: ' + uuid).red);
      callback(null);
    }
  });
}

function saveNodes (callback, results) {
  var nodes = results.nodes;

  var done = function (err, results) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  };

  nodes = _.transform(nodes, function (list, node, key) {
    list.push(saveNode.bind(this, node));
    return list;
  }, []);
  async.parallelLimit(nodes, 10, done);
}

var opts = {
  nodes: getNodes,
  save: ['nodes', saveNodes]
}

async.auto(opts, function (err, data) {
  console.log('- Site flattened successfully! -'.green);
});
