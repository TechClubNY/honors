import { h, mount } from './dom';
function getSyncScriptParams() {
     var scripts = document.getElementsByTagName('script');
     var lastScript = scripts[scripts.length-1];
     var scriptName = lastScript;
     return {
         tcpjid : scriptName.getAttribute('data-pjid'),
         mountid: scriptName.getAttribute('data-mountid')
     };
}

//properties
const { tcpjid, mountid } = getSyncScriptParams();

//styleshhet
let style = h('link');
style.type='text/css';
style.rel="stylesheet";
style.href='https://techclubny.github.io/honors/css/honor.min.css';
document.head.appendChild(style)


//credit section
let heart = h('i', {}, '♥');
let btnShowPopup = h('span', {}, "Made with " , heart, " by TechClub");
let wrapper = h('div', { className: 'tch_credit'}, btnShowPopup);

//popup

let overlay = h('div', { className: 'tch_overlay'} );
let watermak = h('div', { className: 'tch_watermak'} );
let contributors = h('ul', { className: 'tch_contributors'} );

//mount
if(mountid){
    mount(wrapper, 'footer')
}

//detail section
if(tcpjid){
    fetch('https://techclubny.github.io/honors/data/projects/' + tcpjid + '.json').then( res => res.json() ).then(
        sitedata => {
            //mount popup only after information received
            let site = 'foo'
            let description = 'bar';
            let btnHidePopup = h('span', {className: 'tch_button'}, 'Thanks');
            let content = h('div', { className: 'tch_content'},
                h('h4',{}, 'Information'),
                h('p', {}, 'Site: ', h('span',{}, sitedata.site)),
                h('p', {}, 'Description: ', h('span', {}, sitedata.description)),
                h('h4', {}, 'Contributors'),
                contributors,
                h('div', {className: 'tch_footer'}, btnHidePopup)
            );
            let popup = h('div', { className: 'tch_popup'}, overlay, watermak, content);

            document.body.appendChild(popup)
            //events

            btnShowPopup.addEventListener('click', ()=> {
                popup.style.display= 'flex';
                popup.style.opacity = 1;
            });

            btnHidePopup.addEventListener('click', ()=> {
                popup.style.display= 'none';
                popup.style.opacity = 0;
            });


          if(sitedata.github){
            fetch(`https://api.github.com/repos/${sitedata.github.org}/${sitedata.github.repo}/stats/contributors`).then( res => res.json() )
            .then( data => {
              if(data && data.length){
                  data.reverse().forEach( contributor => {
                    let author = contributor.author;

                    let node = document.createElement('li');
                    let img = document.createElement('img');

                    img.src = author.avatar_url;
                    node.appendChild(img);
                    contributors.appendChild(node);
                  })
              }
            })
          }
        })
}
