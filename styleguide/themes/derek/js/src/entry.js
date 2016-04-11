/*jslint node: true */
'use strict';

require('../../../global/js/src/entry.js');

module.exports = {
    equalHeight: function() {
      var height = 0,
          subjects = $('.equal-height'),
          count = subjects.length;
          subjects.each(function(i, n){
            height = n.clientHeight > height ? n.clientHeight : height;
            if (!--count) subjects.height(height);
          });
    }
}
