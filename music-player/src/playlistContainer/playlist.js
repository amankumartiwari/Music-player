import React from  'react'
import Header from '../components/Header'
import Songlist from '../components/songlist'
export default class Playlist extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Songlist/>
            </React.Fragment>
        )
    }

}