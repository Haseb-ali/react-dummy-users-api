import React from "react";
import {Route,BrowserRouter as Router,Link,Switch, useParams} from "react-router-dom";
import {Card} from "./Card";
import Footer from "./Footer";
import {NoMatch} from "./NoMatch";
const card1={
    cardImage:"https://images.unsplash.com/photo-1611095567319-2f4c389168a9?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    cardText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    firstBtnText:"Read more..",
    secondBtnText:"Add to faviroute",
    bgColor:'white',
    color:'black',

  }
const RouterDom=()=>{
    
    return(
        <>
         <Router>
             <Switch>
                 <Route path="/:route" children={<GetRoute />}/> 
                 <Route path="/" children={<Link to="/users">GO to cards</Link>}/>
             </Switch>
         </Router>
        </>
    );
}
const GetRoute=()=>{
    let {route}=useParams();
    return (
        <>
        {
            route=="users"?<Card card={card1}/>: route=="footer" ? <Footer/> :<NoMatch/>
        }
        </>
    );
}

export default RouterDom;