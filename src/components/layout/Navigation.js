import React, { Component, ReactNode } from 'react';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/react-simple-tree-menu/dist/main.css';
const    treeData = {
    'first-level-node-1': {               // key
      label: 'Fresh Food',
      index: 0, // decide the rendering order on the same level 
      nodes: {
        'Fruit': {
          label: 'Fruit',
          index: 0,
          nodes: {
              'Fruit':{
            label: 'Strawberry',
            index: 0, // decide the rendering order on the same level 
            nodes: { },
              }
            }},
          'Vegetable': {
            label: 'Vegetable',
            index: 1,
            nodes: {
                'Vegetable':{
                    label: 'Cucumber',
                    index: 0, // decide the rendering order on the same level 
                    nodes: { }
                }

            },
            },
        },
      },
    'first-level-node-2': {
      label: 'Bakery',
      index: 1,
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
  };
class Navigation extends Component {
  
    render() {
        return (
       
// add a button to do resetOpenNodes
<TreeMenu data={treeData}>
    {({ search, items, resetOpenNodes }) => (
      <div>
        <button onClick={resetOpenNodes} />
        {defaultChildren({search, items})}
      </div>
    )}
</TreeMenu>

        );
 }
}

const navStyle = {
    backgroundColor: 'lightgrey',
    height:'100%',
    body:'100%'
}

export default Navigation;