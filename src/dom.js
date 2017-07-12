
export const h = (type, props, ...children) => {
    const node = document.createElement(type)
    const blankProps = {
        className: ''
    }

    node._$props = Object.assign({}, blankProps, props);

    node.className = node._$props.className

    //anchor
    if(type === 'a'){
      node.href = node._$props.href;
      node.target = node._$props.target;
    }

    if(children.length){
      children.forEach( child => {
        if(child instanceof Element){
          node.appendChild(child)
        }else{
          let text = document.createTextNode(child);
          node.appendChild(text)
        }
      })
    }

    return node;
    }

//mound the dom notes
export const mount = (node, parentIDSelector) => {
    let parent = document.getElementById(parentIDSelector)
    parent.appendChild(node)
}



export default {
    h, mount
};