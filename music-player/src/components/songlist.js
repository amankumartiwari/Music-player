import React from 'react'
import {Row,Col} from 'antd'
import coldplay from '../images/coldplay.jpg'
let myobj = [
   {
       id:123,
       name: 'ABCD',
       preview:"https://cdns-preview-0.dzcdn.net/stream/c-096452f45cdca8793b4f01d33189c559-6.mp3",
       img:'asd',
   }

]

class Songlist extends React.Component{

  render(){
      return(
         <Row style={{margin: '30px 0 0 30px',backgroundColor:'white'}}>
              <Col>
                  <img  src={coldplay} alt="aman" height="70px" width="70px" ></img>
              </Col>

         </Row>
      );
  }

}
export default Songlist; 