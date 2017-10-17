/* eslint-disable */

/**
 * @file
 * This file should never be included directly. Rather, the code should be
 * injected inside of a SVG. This is only in a separate file for the purposes
 * of unit testing the code.
 */

/**
 * Retrieves svg attribute values based on lineCt and ID.
 */
function svgBannerGetAttributes(lineCt, id) {
  var height = lineCt * 45 + 50;
  var bottomSides = {
    primaryBox: "1442," + height + " 805,777 140,777 777," + height,
    secondaryBox: "1327," + height + " 690,777 140,777 777," + height
  }
  return {
    boxHeight: height,
    leftSide: "777," + height + " 140,777 0,777 777,0",
    bottomSide: bottomSides[id]
  };
}

/**
 * Splits a string based on characters.
 *
 * @see http://bit.ly/2zn664C
 */
function svgBannerStringSplitter(str, l){
  var strs = [];
  while(str.length > l){
    var pos = str.substring(0, l).lastIndexOf(' ');
    pos = pos <= 0 ? l : pos;
    strs.push(str.substring(0, pos));
    var i = str.indexOf(' ', pos)+1;
    if(i < pos || i > pos+l)
      i = pos;
    str = str.substring(i);
  }
  strs.push(str);
  return strs;
}

/**
 * Set's the svg content.
 */
function svgBannerSetContent() {
  // Add content lines.
  var boxTextLimits = {
    primaryBox: 25,
    secondaryBox: 20
  };
  for (var id in boxTextLimits) {
    var parent = document.getElementById(id);
    if (!parent) { continue; }
    var el = parent.querySelector('.text');
    var sourceText = el.childNodes[1].textContent ? el.childNodes[1].textContent : el.childNodes[1].innerText;
    var lines = svgBannerStringSplitter(sourceText, boxTextLimits[id]);
    var xmlns = 'http://www.w3.org/2000/svg';

    for (var lineIdx in lines) {
      var tspan = document.createElementNS(xmlns, 'tspan');
      tspan.setAttributeNS(null, 'class', 'displayText');
      tspan.setAttributeNS(null, 'x', 800);
      tspan.setAttributeNS(null, 'dy', lineIdx > 0 ? 50 : 0);
      tspan.setAttributeNS(null, 'width', 665);
      var text = document.createTextNode(lines[lineIdx]);
      tspan.appendChild(text);
      el.appendChild(tspan);
    }

    // Set height and position attributes.
    var attributes = svgBannerGetAttributes(lines.length, id);
    parent.querySelector('.poly-leftSide').setAttributeNS(null, 'points', attributes['leftSide']);
    parent.querySelector('.poly-bottomSide').setAttributeNS(null, 'points', attributes['bottomSide']);
    parent.querySelector('.textBox').setAttributeNS(null, 'height', attributes['boxHeight']);
  }
}
