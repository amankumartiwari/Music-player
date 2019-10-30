import React from "react"
import '../App.css'
import coldplay from '../images/coldplay.jpg'
import panda from '../images/panda.jpg'
import imagine from '../images/imagine.jpg'

let myObj=[
  {
      id:1,
      imgsrc: panda,
      figCaption:'EMINEM'
  },
  {
    id:2,
    imgsrc:coldplay,
    figCaption:'JUSTIN BIEBER'
  },
  {
    id:3,
    imgsrc:panda,
    figCaption:'JUSTIN BIEBER'
 },
 {
    id:4,
    imgsrc: imagine,
    figCaption:'JUSTIN BIEBER'
 },
]

class PopArtist extends React.Component{

    render(){
        return(
            <div key="id" className="pm" style={{ width: "70%" , height: "70px",margin: "40px 0" }} >{
          myObj.map((val,id)=>{
              return(
                  <div   style={{margin:'0 15px', width: "200px" , height: "100px" }}>
                       <img   src={val.imgsrc}  ></img>
                      <figcaption style={{textAlign: 'center'}} >{val.figCaption}</figcaption>
                 </div>
              )
          })
        }
           </div>
        );
    }
}

export default PopArtist;