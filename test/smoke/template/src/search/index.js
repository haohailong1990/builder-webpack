'use strict';

import React from 'react'
import ReactDom from 'react-dom'
import { common } from '../../common/index.js'
import zhaoshou from './images/zhaoshou.png'
import largeNumber from 'largr_number'

import './search.less';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.loadComponent = this.loadComponent.bind(this)
        this.state = {
            Text: ''
        }
    }
    loadComponent() {
        import('./text.js').then((Text) => {
            console.log('loadComponent......', Text)
            this.setState({
                Text: Text.default
            })
        })
    }
    render() {
        const { Text } = this.state;
        const addResult = largeNumber('999', '1')
        return <div className="search-text">
            搜索的文字 { Text ? <Text></Text> : null}
            <img src={zhaoshou} onClick={this.loadComponent}/>
            {addResult }
        </div>;
    }
}

ReactDom.render(
    <Search />,
    document.getElementById('root')
)