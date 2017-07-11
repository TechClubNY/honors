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

__$styleInject(".tch_credit{font-family:Helvetica Neue!important;font-weight:300}.tch_credit span{cursor:pointer;transition:all .3s}.tch_credit span i{font-style:normal;color:#ccc;transition:all .5s}.tch_credit span:hover{border-bottom:1px solid #ccc}.tch_credit span:hover i{color:#ff7160}.tch_popup{display:none;opacity:0;justify-content:center;align-items:center;transition:opacity 1s;z-index:4;position:fixed}.tch_overlay,.tch_popup{height:100%;width:100%;top:0;left:0;overflow:hidden}.tch_overlay{position:absolute;background-color:rgba(0,0,0,.5);z-index:1}.tch_content{width:500px;background-color:#fff;z-index:3;border-radius:10px;padding:15px 30px;font-family:Helvetica Neue!important;font-weight:300;position:relative;padding-bottom:100px}@media(max-width:600px){.tch_content{margin:auto 15px}}.tch_content h4{font-family:Helvetica Neue!important;font-weight:300;font-size:28px;border-bottom:1px solid #ccc;padding-bottom:15px;margin-bottom:0;color:#007aff}.tch_content p{margin:10px 0}.tch_content p span{color:#464646;font-size:15px}.tch_content ul{list-style:none;padding-left:0}.tch_content ul li{display:inline-block;cursor:pointer;margin:5px}.tch_content ul li img{width:70px;height:70px;border-radius:50%;border:2px solid #ccc;padding:3px;transition:border .3s}.tch_content ul li:hover img{border:2px solid #6fd2ef}.tch_content .tch_footer{position:absolute;bottom:0;height:50px;margin:auto -30px;width:100%;text-align:center}.tch_content .tch_footer span.tch_button{color:#007aff;border:1px solid #007aff;padding:10px 30px;border-radius:5px;cursor:pointer;transition:all .3s}.tch_content .tch_footer span.tch_button:hover{color:#fff;background-color:#007aff}.tch_watermark{position:absolute;right:50px;top:0;width:200px;height:200px;z-index:2;background:url(http://web.techclub.nyc/assets/img/logo-white.png);background-size:cover}", undefined);

var Credit = function Credit(props) {
    return React.createElement(
        'div',
        { className: 'tch_credit' },
        React.createElement(
            'span',
            props,
            'Made with ',
            React.createElement(
                'i',
                null,
                '\u2665'
            ),
            ' by the TechClub'
        )
    );
};

var Overlay = function Overlay() {
    return React.createElement("div", { className: "tch_overlay" });
};
var Watermark = function Watermark() {
    return React.createElement("div", { className: "tch_watermark" });
};

var Popup = function Popup(props) {
    return React.createElement(
        "div",
        { className: "tch_popup", style: { display: props.show ? 'flex' : 'none', opacity: props.show ? 1 : 0 } },
        React.createElement(Overlay, null),
        React.createElement(Watermark, null),
        React.createElement(
            "div",
            { className: "tch_content" },
            React.createElement(
                "h4",
                null,
                "Information"
            ),
            React.createElement(
                "p",
                null,
                "Site: ",
                React.createElement(
                    "span",
                    null,
                    props.site
                )
            ),
            React.createElement(
                "p",
                null,
                "Description: ",
                React.createElement(
                    "span",
                    null,
                    props.description
                )
            ),
            React.createElement(
                "h4",
                null,
                "Contributors"
            ),
            React.createElement(
                "ul",
                { className: "tch_contributors" },
                props.contributors.map(function (contributor, i) {
                    return React.createElement(
                        "li",
                        { key: i },
                        React.createElement("img", { src: contributor.avatar_url })
                    );
                })
            ),
            React.createElement(
                "div",
                { className: "tch_footer" },
                React.createElement(
                    "span",
                    { className: "tch_button", onClick: function onClick(e) {
                            return props.onClose(e);
                        } },
                    "Thanks"
                )
            )
        )
    );
};

Popup.defaultProps = {
    show: false,
    site: '',
    description: '',
    contributors: [],
    onClose: function onClose() {
        return false;
    }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable no-undef */
require('es6-promise').polyfill();
require('isomorphic-fetch');
var Honors = function (_React$Component) {
    inherits(Honors, _React$Component);

    function Honors(props) {
        classCallCheck(this, Honors);

        var _this = possibleConstructorReturn(this, (Honors.__proto__ || Object.getPrototypeOf(Honors)).call(this, props));

        _this.state = {
            showPopup: false,
            siteData: {},
            contributors: []
        };
        return _this;
    }

    createClass(Honors, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('https://techclubny.github.io/honors/data/projects/' + this.props.id + '.json').then(function (res) {
                return res.json();
            }).then(function (sitedata) {

                _this2.setState({ siteData: sitedata });

                if (sitedata.github) {
                    fetch('https://api.github.com/repos/' + sitedata.github.org + '/' + sitedata.github.repo + '/stats/contributors').then(function (res) {
                        return res.json();
                    }).then(function (data) {
                        if (data && data.length) {
                            var list = data.reverse().map(function (item) {
                                return item.author;
                            });
                            _this2.setState({ contributors: _this2.state.contributors.concat(list) });
                        }
                    });
                }

                if (sitedata.contributors && sitedata.contributors.length) {
                    _this2.setState({ contributors: _this2.state.contributors.concat(sitedata.contributors) });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(Credit, { onClick: function onClick() {
                        return _this3.setState({ showPopup: true });
                    } }),
                React.createElement(Popup, {
                    site: this.state.siteData.site,
                    description: this.state.siteData.description,
                    show: this.state.showPopup,
                    onClose: function onClose() {
                        return _this3.setState({ showPopup: false });
                    },
                    contributors: this.state.contributors
                })
            );
        }
    }]);
    return Honors;
}(React.Component);

Honors.defaultProps = {
    id: 0
};

module.exports = Honors;
