'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

__$styleInject(".tch_credit {\n  font-family: 'Helvetica Neue' !important;\n  font-weight: 300;\n}\n\n.tch_credit span {\n  cursor: pointer;\n  transition: all .3s;\n}\n\n.tch_credit span i {\n  font-style: normal;\n  color: #ccc;\n  transition: all .5s;\n}\n\n.tch_credit span:hover {\n  border-bottom: 1px solid #ccc;\n}\n\n.tch_credit span:hover i {\n  color: #ff7160;\n}\n\n.tch_popup {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  display: none;\n  opacity: 0;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 1s;\n  z-index: 9999999;\n  position: fixed;\n}\n\n.tch_overlay{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0, 0.5);\n  overflow: hidden;\n  z-index: 5;\n}\n\n.tch_content {\n  width: 500px;\n  background-color: #fff;\n  z-index: 10;\n  border-radius: 10px;\n  padding: 15px 30px;\n  font-family: 'Helvetica Neue' !important;\n  font-weight: 300;\n  position: relative;\n  padding-bottom: 100px;\n}\n\n@media(max-width: 600px){\n  .tch_content {\n    margin: auto 15px;\n  }\n}\n\n.tch_content h4 {\n  font-family: 'Helvetica Neue' !important;\n  font-weight: 300;\n  font-size: 28px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n  margin-bottom: 0;\n  color: #007aff;\n}\n\n.tch_content p {\n  margin: 10px 0;\n}\n\n.tch_content p span {\n  color: #464646;\n  font-size: 15px;\n}\n\n.tch_content ul {\n  list-style: none;\n  padding-left: 0;\n}\n\n.tch_content ul li {\n  display: inline-block;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.tch_content ul li img{\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  padding: 3px;\n  transition: border .3s;\n}\n\n.tch_content ul li:hover img {\n  border: 2px solid #6fd2ef;\n}\n\n.tch_content .tch_footer {\n  position: absolute;\n  bottom: 0;\n  height: 50px;\n  /* border-top: 1px solid #d4d4d4; */\n  margin: auto -30px;\n  width: 100%;\n  text-align: center;\n}\n\n.tch_content .tch_footer span.tch_button {\n  color: #007aff;\n  border: 1px solid #007aff;\n  padding: 10px 30px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all .3s;\n}\n\n.tch_content .tch_footer span.tch_button:hover {\n  color: #fff;\n  background-color: #007aff;\n}\n\n.tch_watermark {\n  position: absolute;\n  right: 50px;\n  top: 0;\n  width: 200px;\n  height: 200px;\n  z-index: 6;\n  background: url(http://web.techclub.nyc/assets/img/logo-white.png);\n  background-size: cover;\n}", undefined);

var Credit = function Credit(props) {
    return React.createElement('div', null);
};

var index = {
    Credit: Credit
};

module.exports = index;
