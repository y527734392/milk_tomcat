import React from 'react'

import Subnav from '../Subnav'
class Home extends React.Component {
    render() {
        return (

            <div className="home">
                {location.href.split('#')[1] === '/login' || location.href.split('#')[1] === '/register'?'':<Subnav />}
                <div className="conten">
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default Home
