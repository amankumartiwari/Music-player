import React from 'react'
import {Row,Col,Typography,Icon} from 'antd'
import coldplay from '../images/coldplay.jpg'
const {Paragraph} = Typography

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
         <Row type="flex" justify="middle" style={{backgroundColor: 'rgb(13, 13, 255)',height:'90px',}}>
              <Col span={4}>
                  <img  src={coldplay} alt="aman" height="70px" width="70px" style={{marginLeft:'30px'}} ></img>
              </Col>
                
                <Col span={4}  >
                      <Paragraph style={{fontSize:'18px',marginTop:'8px',color:'white',fontWeight:'bold' } } > Aman Kumar </Paragraph>
                      <Paragraph style={{fontSize:'14px',marginTop:'8px',color:'white' }} > Rise above hate </Paragraph>
                </Col>

                <Col>
                    <Icon type="heart" theme="twoTone"  width="40px" height="40px" />
                </Col>

         </Row>
      );
  }

}
export default Songlist; 