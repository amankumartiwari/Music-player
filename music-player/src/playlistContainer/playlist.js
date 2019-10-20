import React from  'react'
import Header from '../components/Header'
import Songlist from '../components/songlist'
export default class Playlist extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
               <div style={{margin: '30px 0 0 30px', width: '65%'  }}> 
                  <Songlist/>
               </div> 
            </React.Fragment>
        )
    }

}