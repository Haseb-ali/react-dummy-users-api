import './App.css';
// import {useState} from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import {Card} from "./components/Card";
import {Hooks} from "./components/Hooks";
import RouterDOM from "./components/RouterDOM";
import {Users} from "./components/Users";

 function App() {
  //styling for components//
  // const cardBox={
  //   display:'flex',
  //   flexWrap:'wrap',
  // }
  // const [visible,setVisible]=useState(true);
  // const [textTranformation,setTextTranformation]=useState('lowercase');
  // const [cardBgColor,setCardBgColor]=useState("white");
  // const [selectedColor,setSelectedColor]=useState('');
  // //handlers
  // const card1={
  //   cardImage:"https://images.unsplash.com/photo-1611095567319-2f4c389168a9?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  //   cardText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   firstBtnText:"Read more..",
  //   secondBtnText:"Add to faviroute",
  //   bgColor:cardBgColor,
  //   color:'black',

  // }
  // const card2={
  //   cardImage:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //   cardText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   firstBtnText:"Read more..",
  //   secondBtnText:"Add to faviroute",
  //   bgColor:'blue',
  //   color:'white',
    
  // }
  // const setCardColor=()=>{
  //   setCardBgColor(selectedColor);
  // }
  // const handleClick=()=>{
  //   setVisible(!visible);
  // }
  // const handleTextTranFormation=()=>{
  //   setTextTranformation(textTranformation=='lowercase' ? 'uppercase' :'lowercase')
  // }
  // return (
  //   <div className="App">
  //     {visible && <Header visibility={visible}/>}
  //     <br></br>
  //     <br></br>
  //     <button onClick={handleClick}>
  //       {visible ? 'Hide Header' :'Show Header'}
  //     </button>
  //     <button onClick={handleTextTranFormation}>
  //       {textTranformation=='uppercase' ? 'Make Lowercase':'Make Uppercase'}
  //     </button>
  //     <Footer textTranformation={textTranformation}/>
  //     <br></br>
  //     <input type="color" id="selectedColor" value={selectedColor} onChange={(e)=>{
  //       setSelectedColor(e.target.value);
  //     }} />
  //     <button onClick={setCardColor}>changeColor</button>
  //     <br></br>
  //     <br></br>
      
  //     {/* this is card wideght */}
      
  //     <div style={cardBox}>
  //       <Card
  //       //  cardImage={cardImageUrl1}
  //       //  cardText={cardText}
  //       //  firstBtnText={firstButtonText}
  //       //  secondBtnText={secondButtonText}
  //       card={card1}
  //       />
  //       <Card 
  //       card={card2}
  //       />
        
  //     </div>
  //     </div>
  // );
  return(
    <>
    <RouterDOM/>
    <Users/>
    
    </>
);
}
export default App;
