import {
    h,
    mount
}
from './dom';
import styles from './honor.css';

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
const {
    tcpjid,
    mountid
} = getSyncScriptParams();

//credit section
let heart = h('i', {}, '♥');
let btnShowPopup = h('span', {}, "Made with ", heart, " by TechClub");
let wrapper = h('div', {
    className: 'tch_credit'
}, btnShowPopup);

//popup
let overlay = h('div', {
    className: 'tch_overlay'
});
let watermak = h('div', {
    className: 'tch_watermak'
});
let contributors = h('ul', {
    className: 'tch_contributors'
});

//mount
if (mountid) {
    mount(wrapper, mountid)
}

//detail section
if (tcpjid) {
    fetch('https://techclubny.github.io/honors/data/projects/' + tcpjid + '.json')
        .then(res => res.json())
        .then(
            sitedata => {
                //mount popup only after information received
                let site = 'foo'
                let description = 'bar';
                let btnHidePopup = h('span', {
                    className: 'tch_button'
                }, 'Close');
                let btnTechClub = h('a', {
                    className: 'tch_button',
                    href: "http://techclub.nyc",
                    target: "_blank"
                }, 'About TechClub');

                let tooltip = h('div', { className: 'tch_tooltip' });
                let content = h('div', {
                        className: 'tch_content'
                    },
                    tooltip,
                    h('h4', {}, 'Information'),
                    h('p', {}, 'Site: ', h('span', {}, sitedata.site)),
                    h('p', {}, 'Description: ', h('span', {}, sitedata.description)),
                    h('h4', {}, 'Contributors'),
                    contributors,
                    h('div', {
                        className: 'tch_footer'
                    },btnTechClub, btnHidePopup)
                );
                let popup = h('div', {
                    className: 'tch_popup'
                }, overlay, watermak, content);

                document.body.appendChild(popup)
                    //events

                btnShowPopup.addEventListener('click', () => {
                    popup.style.display = 'flex';
                    popup.style.opacity = 1;
                });

                btnHidePopup.addEventListener('click', () => {
                    popup.style.display = 'none';
                    popup.style.opacity = 0;
                });

                function bind_tooltip(el, html){
                    el.addEventListener('mouseenter', e=>{
                      let offset = content.getBoundingClientRect();
                      tooltip.style.display = 'inherit';
                      tooltip.style.left = `${e.target.offsetLeft - e.target.width}px`;
                      tooltip.style.top =  `${e.target.offsetTop - e.target.height}px`;
                      tooltip.innerHTML = html
                    })

                    el.addEventListener('mouseleave', e=>{
                      tooltip.style.display = 'none';
                    })
                }

                if (sitedata.github) {
                    fetch(`https://api.github.com/repos/${sitedata.github.org}/${sitedata.github.repo}/stats/contributors`).then(res => res.json())
                        .then(data => {
                            if (data && data.length) {
                                data.reverse().forEach(contributor => {
                                    let author = contributor.author;

                                    let node = document.createElement('li');
                                    let img = document.createElement('img');

                                    bind_tooltip(img, `<p>${author.login}\</p>`)

                                    img.src = author.avatar_url;
                                    node.appendChild(img);
                                    contributors.appendChild(node);
                                })
                            }
                        })
                }


                if (sitedata.contributors && sitedata.contributors.length) {
                    sitedata.contributors.forEach(contributor => {
                        let author = contributor;

                        let node = document.createElement('li');
                        let img = document.createElement('img');

                        bind_tooltip(img, `<p>${author.name}\</p>`)

                        img.src = author.avatar_url;
                        node.appendChild(img);
                        contributors.appendChild(node);
                    })
                }
            })
}
