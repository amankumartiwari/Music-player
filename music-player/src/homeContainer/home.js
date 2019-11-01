import React from 'react'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent'
import PopArtist from '../components/PopArtist'
import Queue from '../components/Queue'
export default class Home extends React.Component{
render(){
    return (
        <React.Fragment>
                     <Header/>


                <div  style={{ display:'inline-block', margin:' 20px 20px 0 30px',width:'70%',backgroundColor:'white'}}>
                    <CardComponent/>
                    <PopArtist/>  
                </div>

                <div style={{display:'inline-block',width:'25%',height:'100px',backgroundColor:"red"}}>
                    {/* <Queue/> */}
                </div>

     </React.Fragment> 
    )
}

}