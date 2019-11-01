import React from "react";
import {Redirect} from 'react-router-dom';
import musiclogo from '../images/musiclogo.jpg'
import {withRouter} from 'react-router'
import { Row,Col,Avatar } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

 class Header extends React.Component {

  state={
    srcObj:'',
    redirect:false 
  }

  callApi = (value)=>{
    
     fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "2779ea8e81mshcc01c202123b1b1p1324a9jsn02179dbc37f1"
	}
})
.then(response =>  response.json() )
.then(res=> {
console.log("response is",res)
  let songs=res
   
  this.setState({
    srcObj:songs.data[7].preview,
    redirect:true
  })
 
})
.catch(err => {
	console.log(err);
});
  }


  render() {

    //  if(this.state.redirect){
    //    return <Redirect to='/playlist' />
    //  }

    return (
        <React.Fragment>
          <div>
            <Row type="flex" justify="space-between" >
                  <Col   > 
                     <img src={musiclogo} alt="Music Logo" height="60px" ></img>
                     <span style={{fontSize:'24px'}}> MUSIC PLAYER </span>
                   </Col>
                   <Col  >
                             <span style={{fontSize:'18px'}}> Search The Music </span>
                            <Search
                                        placeholder="Search your songs"
                                        enterButton="Search"
                                        size="large"
                                        onSearch={value=> this.callApi(value)}
                                />
                   </Col> 

                   <Col style={{marginTop:'16px'}} >
                               <span style={{fontSize:'18px'}}> AMAN </span>
                               <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="large">
                                      A  
                                </Avatar>
                   </Col>

            </Row>

         <audio controls src={this.state.srcObj} >

         </audio>
         </div>
       </React.Fragment>    
    );
  }
}
export default withRouter(Header);

// Header.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }