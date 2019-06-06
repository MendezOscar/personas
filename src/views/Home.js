import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'

function mapStateToPropos(state){
    return {
        users: state.getUsers
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators([
        getUsers
    ], dispatch)
}
class Home extends Component{
    render(){
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(Home);