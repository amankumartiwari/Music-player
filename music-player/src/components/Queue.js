import React from  'react';
import Coldplay from '../images/coldplay.jpg'
 import {Row, Col} from 'antd'

let myObj = [
    {
        id:1,
        imgSrc:'asd',
        songName:'let me love you',
        Album: "delicate"
    },
    {
        id:2,
        imgSrc:'asd',
        songName:'let me love you',
        Album: "delicate"
    },
    {
        id:3,
        imgSrc:'asd',
        songName:'let me love you',
        Album: "delicate"
    },
    {
        id:4,
        imgSrc:'asd',
        songName:'let me love you',
        Album: "delicate"
    }
]


class Queue extends React.Component{
render(){
    return(
         <Row>
               <Col > <img src={Coldplay} width="50px" height="55px"></img>  </Col>
                  <Col >  <h4 >MIRAGE</h4>   <h6 > ELSE  </h6> </Col>
                  <Col >  <p > &#9825; </p>  </Col>
         </Row>  

    );
}
}
export default Queue