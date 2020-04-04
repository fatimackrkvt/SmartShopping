import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TreeMenu from 'react-simple-tree-menu'
const    treeData = {
    'first-level-node-1': {               // key
      label: 'Fresh Food',
      index: 0, // decide the rendering order on the same level 
      nodes: {
        'Fruit': {
          label: 'Fruit',
          index: 0,
          nodes: {},
          },
          'Vegetable': {
            label: 'Vegetable',
            index: 1,
            nodes: {},
            },
        },
      },
    'first-level-node-2': {
      label: 'Bakery',
      index: 1,
    },
  };
class Navigation extends Component {
  
    render() {
        return (
        <div style={navStyle}>
       
          <TreeMenu data={treeData} onClickItem={({ key, label, ...props }) => {
             this.navigate(props.url); // user defined prop
          }}
    debounceTime={125}>
    {({ search, items }) => (
        <>
          <Input onChange={e => search(e.target.value)} placeholder="Type and search" />
          <ListGroup>
            {items.map(props => (
              // You might need to wrap the third-party component to consume the props
              // check the story as an example
              // https://github.com/iannbing/react-simple-tree-menu/blob/master/stories/index.stories.js
              <ListItem {...props} />
            ))}
          </ListGroup>
        </>
    )}
            </TreeMenu>
        </div>);
 }
}

const navStyle = {
    backgroundColor: 'lightgrey',
    height:'100%',
    body:'100%'
}

export default Navigation;