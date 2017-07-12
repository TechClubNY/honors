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

__$styleInject(".tch_credit{font-family:Helvetica Neue!important;font-weight:300}.tch_credit span{cursor:pointer;-webkit-transition:all .3s;transition:all .3s}.tch_credit span i{font-style:normal;color:#ccc;-webkit-transition:all .5s;transition:all .5s}.tch_credit span:hover{border-bottom:1px solid #ccc}.tch_credit span:hover i{color:#ff7160}.tch_popup{display:none;opacity:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 1s;transition:opacity 1s;z-index:4;position:fixed}.tch_overlay,.tch_popup{height:100%;width:100%;top:0;left:0;overflow:hidden}.tch_overlay{position:absolute;background-color:rgba(0,0,0,.5);z-index:1;-webkit-animation:b 1s;animation:b 1s}.tch_content{width:500px;background-color:#fff;z-index:3;border-radius:10px;padding:15px 30px;font-family:Helvetica Neue!important;font-weight:300;position:relative;padding-bottom:100px;-webkit-animation:a 1s;animation:a 1s}@media(max-width:600px){.tch_content{margin:auto 15px}}.tch_content h4{font-family:Helvetica Neue!important;font-weight:300;font-size:28px;border-bottom:1px solid #ccc;padding-bottom:15px;margin-bottom:0;color:#007aff}.tch_content h4,.tch_content p{-webkit-animation:a .5s;animation:a .5s}.tch_content p{margin:10px 0}.tch_content p span{color:#464646;font-size:15px}.tch_content ul{list-style:none;padding-left:0;-webkit-animation:a .5s;animation:a .5s}.tch_content ul li{display:inline-block;cursor:pointer;margin:5px}.tch_content ul li img{width:70px;height:70px;border-radius:50%;border:2px solid #ccc;padding:3px;-webkit-transition:border .3s;transition:border .3s}.tch_content ul li:hover img{border:2px solid #6fd2ef}.tch_content .tch_footer{position:absolute;bottom:0;height:50px;margin:auto -30px;width:100%;text-align:center}.tch_content .tch_footer .tch_button{color:#007aff;border:1px solid #007aff;padding:10px 30px;border-radius:5px;cursor:pointer;-webkit-transition:all .3s;transition:all .3s;margin:auto 5px}.tch_content .tch_footer .tch_button:hover{color:#fff;background-color:#007aff;text-decoration:none}.tch_watermark{position:absolute;right:50px;top:0;width:200px;height:200px;z-index:2;background:url(http://web.techclub.nyc/assets/img/logo-white.png);background-size:cover}.tch_content .tch_tooltip{position:absolute;width:200px;height:50px;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 3px 12px -4px rgba(0,0,0,.5);box-shadow:0 3px 12px -4px rgba(0,0,0,.5);border:1px solid #6fd2ef;-webkit-animation:a .3s;animation:a .3s;display:none;text-align:center}.tch_tooltip:after,.tch_tooltip:before{content:\"\";position:absolute;height:20px;width:20px;width:0;height:0}.tch_tooltip:before{bottom:-11px;left:89px;border-left:11px solid transparent;border-right:11px solid transparent;border-top:11px solid #6fd2ef}.tch_tooltip:after{bottom:-10px;left:90px;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #fff}@-webkit-keyframes a{0%{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes a{0%{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes b{0%{opacity:0}to{opacity:1}}@keyframes b{0%{opacity:0}to{opacity:1}}", undefined);

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







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



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

var Overlay = function Overlay() {
    return React.createElement("div", { className: "tch_overlay" });
};
var Watermark = function Watermark() {
    return React.createElement("div", { className: "tch_watermark" });
};
var Tooltip = function Tooltip(props) {
    return React.createElement(
        "div",
        _extends({ className: "tch_tooltip" }, props),
        props.children
    );
};

var Popup = function (_React$Component) {
    inherits(Popup, _React$Component);

    function Popup(props) {
        classCallCheck(this, Popup);

        var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

        _this.state = {
            showTooltip: false,
            tooltipLeft: 0,
            tooltipTop: 0,
            tooltipContent: null
        };
        return _this;
    }

    createClass(Popup, [{
        key: "mouseEnterHandler",
        value: function mouseEnterHandler(e, contributor) {
            var offset = this.refs.content.getBoundingClientRect();
            this.setState({
                showTooltip: true,
                tooltipLeft: e.target.x - offset.left - e.target.width + "px",
                tooltipTop: e.target.y - offset.top - e.target.height + "px",
                tooltipContent: React.createElement(
                    "p",
                    null,
                    contributor.name || contributor.login
                )
            });
        }
    }, {
        key: "mouseLeaveHandler",
        value: function mouseLeaveHandler(e) {
            this.setState({
                showTooltip: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                show = _props.show,
                site = _props.site,
                description = _props.description,
                contributors = _props.contributors,
                onClose = _props.onClose;


            var tooltipStyle = {
                display: this.state.showTooltip ? 'inherit' : 'none',
                left: this.state.tooltipLeft,
                tooltipTop: this.state.tooltipTop
            };

            return React.createElement(
                "div",
                { className: "tch_popup", style: { display: show ? 'flex' : 'none', opacity: show ? 1 : 0 } },
                React.createElement(
                    Tooltip,
                    { style: tooltipStyle },
                    this.state.tooltipContent
                ),
                React.createElement(Overlay, null),
                React.createElement(Watermark, null),
                React.createElement(
                    "div",
                    { className: "tch_content", ref: "content" },
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
                            site
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Description: ",
                        React.createElement(
                            "span",
                            null,
                            description
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
                        contributors.map(function (contributor, i) {
                            return React.createElement(
                                "li",
                                { key: i },
                                React.createElement("img", {
                                    src: contributor.avatar_url,
                                    onMouseEnter: function onMouseEnter(e) {
                                        return _this2.mouseEnterHandler(e, contributor);
                                    },
                                    onMouseLeave: function onMouseLeave(e) {
                                        return _this2.mouseLeaveHandler(e);
                                    }
                                })
                            );
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "tch_footer" },
                        React.createElement(
                            "span",
                            { className: "tch_button", onClick: function onClick(e) {
                                    return onClose(e);
                                } },
                            "Thanks"
                        )
                    )
                )
            );
        }
    }]);
    return Popup;
}(React.Component);

Popup.defaultProps = {
    show: false,
    site: '',
    description: '',
    contributors: [],
    onClose: function onClose() {
        return false;
    }
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
