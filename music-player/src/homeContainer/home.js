import React from 'react'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent'
export default class Home extends React.Component{

render(){
    return (
    <div className="App" style={{marginLeft:'30px',marginTop:'20px',marginRight:'30px'}}>
        <Header/>
        <CardComponent/>
 
     </div>
    )
}

}