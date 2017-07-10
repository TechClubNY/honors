'use strict';

var h = function h(type, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    var node = document.createElement(type);
    var blankProps = {
        className: ''
    };

    node._$props = Object.assign({}, blankProps, props);

    node.className = node._$props.className;

    if (children.length) {
        children.forEach(function (child) {
            if (child instanceof Element) {
                node.appendChild(child);
            } else {
                var text = document.createTextNode(child);
                node.appendChild(text);
            }
        });
    }

    return node;
};

//mound the dom notes
var mount = function mount(node, parentIDSelector) {
    var parent = document.getElementById(parentIDSelector);
    parent.appendChild(node);
};

function getSyncScriptParams() {
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    var scriptName = lastScript;
    return {
        tcpjid: scriptName.getAttribute('data-pjid'),
        mountid: scriptName.getAttribute('data-mountid')
    };
}

//properties

var _getSyncScriptParams = getSyncScriptParams();
var tcpjid = _getSyncScriptParams.tcpjid;
var mountid = _getSyncScriptParams.mountid;

//styleshhet


var style = h('link');
style.type = 'text/css';
style.rel = "stylesheet";
style.href = 'https://techclubny.github.io/honors/css/honor.min.css';
document.head.appendChild(style);

//credit section
var heart = h('i', {}, '♥');
var btnShowPopup = h('span', {}, "Made with ", heart, " by TechClub");
var wrapper = h('div', { className: 'tch_credit' }, btnShowPopup);

//popup

var overlay = h('div', { className: 'tch_overlay' });
var watermak = h('div', { className: 'tch_watermak' });
var contributors = h('ul', { className: 'tch_contributors' });

//mount
if (mountid) {
    mount(wrapper, 'footer');
}

//detail section
if (tcpjid) {
    fetch('https://techclubny.github.io/honors/data/projects/' + tcpjid + '.json').then(function (res) {
        return res.json();
    }).then(function (sitedata) {
        //mount popup only after information received
        var site = 'foo';
        var description = 'bar';
        var btnHidePopup = h('span', { className: 'tch_button' }, 'Thanks');
        var content = h('div', { className: 'tch_content' }, h('h4', {}, 'Information'), h('p', {}, 'Site: ', h('span', {}, sitedata.site)), h('p', {}, 'Description: ', h('span', {}, sitedata.description)), h('h4', {}, 'Contributors'), contributors, h('div', { className: 'tch_footer' }, btnHidePopup));
        var popup = h('div', { className: 'tch_popup' }, overlay, watermak, content);

        document.body.appendChild(popup);
        //events

        btnShowPopup.addEventListener('click', function () {
            popup.style.display = 'flex';
            popup.style.opacity = 1;
        });

        btnHidePopup.addEventListener('click', function () {
            popup.style.display = 'none';
            popup.style.opacity = 0;
        });

        if (sitedata.github) {
            fetch('https://api.github.com/repos/' + sitedata.github.org + '/' + sitedata.github.repo + '/stats/contributors').then(function (res) {
                return res.json();
            }).then(function (data) {

                data.reverse().forEach(function (contributor) {
                    var author = contributor.author;

                    var node = document.createElement('li');
                    var img = document.createElement('img');

                    img.src = author.avatar_url;
                    node.appendChild(img);
                    contributors.appendChild(node);
                });
            });
        }
    });
}
