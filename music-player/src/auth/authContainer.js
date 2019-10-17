import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../homeContainer/home'
import Playlist from '../playlistContainer/playlist'
const authContainer =() =>{

    return (
        <React.Fragment>
           <Route  exact path='/' component ={Home}  />
           <Route path='/playlist' component = {Playlist} />
        </React.Fragment>
    )


}
export default authContainer;