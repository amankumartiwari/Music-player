import React from "react";
import musiclogo from '../musiclogo.jpg'
import { Row,Col,Avatar } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

export default class Header extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Row type="flex" justify="space-between" >
                  <Col   > 
                     <img src={musiclogo} alt="Music Logo" height="60px" ></img>
                     <span style={{fontSize:'24px'}}> MUSIC PLAYER </span>
                   </Col>
                   <Col  >
                             <span style={{fontSize:'18px'}}> Search The Music </span>
                            <Search
                                        placeholder="input search text"
                                        enterButton="Search"
                                        size="large"
                                        onSearch={value => console.log(value)}
                                />
                   </Col> 

                   <Col style={{marginTop:'16px'}} >
                               <span style={{fontSize:'18px'}}> AMAN </span>
                               <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="large">
                                      A  
                                </Avatar>
                   </Col>

            </Row>



       </React.Fragment>    
    );
  }
}
