import WebFont from 'webfontloader';
import React from "react"
import './App.css';



function App() {

  const [expanded, setExpanded] = React.useState(false)
  const [shopping, setShopping] = React.useState(false)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Oswald', 'Bodoni Moda']
      }
    });
   }, [])

  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", overflow: "scroll"}}>
          {shopping ? <div style={{backgroundColor: "white", height: "52vh", width: "100vw", overflow: "scroll"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", paddingLeft: "10vw", paddingRight: "10vw"}}>
              <div style={{display: "flex", flexDirection: "column", width: 330, alignItems: "center", paddingBottom: "5vh"}}>
                <img src={require("./model1.jpeg")} style={{width: 190, height: 290}}/>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15, fontWeight: "bold", textAlign: "left"}}>Blue Slip Dress</div>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15,  textAlign: "left"}}>$69.90</div>
              </div>
              <div style={{display: "flex", flexDirection: "column", width: 330, alignItems: "center", paddingBottom: "5vh"}}>
                <img src={require("./model2.jpeg")} style={{width: 190, height: 290}}/>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15, fontWeight: "bold", textAlign: "left"}}>White Flowy Shirt</div>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15,  textAlign: "left"}}>$50.29</div>
              </div>
              <div style={{display: "flex", flexDirection: "column", width: 330, alignItems: "center", paddingBottom: "5vh"}}>
                <img src={require("./model3.jpeg")} style={{width: 190, height: 290}}/>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15, fontWeight: "bold", textAlign: "left"}}>Tan Collared Jacket</div>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15,  textAlign: "left"}}>$100.89</div>
              </div>
              <div style={{display: "flex", flexDirection: "column", width: 330, alignItems: "center", paddingBottom: "5vh"}}>
                <img src={require("./model4.jpg")} style={{width: 190, height: 290}}/>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15, fontWeight: "bold", textAlign: "left"}}>Straight Leg Light Wash Jeans</div>
                <div style={{fontFamily: "Oswald", color: "black", textTransform: "uppercase", fontSize: 15,  textAlign: "left"}}>$200.29</div>
              </div>

            </div>
          </div> : <img style={{height: "100vh"}} src={require("./model.png")} /> }
          
        </div>
        <div style={{position: 'absolute', width: "100vw", display: "flex", justifyContent: "space-between"}}>
          <div style={{fontFamily: 'Bodoni Moda', textTransform: 'uppercase', fontSize: 160, color: shopping ? 'black' : 'white', marginTop: '-5vh', marginLeft: '1vw'}}>Zara</div>
          <div style={{width: '10vw', display: 'flex', flexDirection: 'row', padding: '2vh'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={shopping ? "black" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={shopping ? "black" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </div>
        </div>
        <div style={{position: "absolute", marginTop: expanded ? "52vh" : "75vh", width: "100vw", backgroundColor: "white", height: expanded ? "48vh" : "25vh", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: "2vh"}}>
            <div style={{textTransform: "uppercase", fontSize: 35, fontFamily: "Oswald"}}>Login</div>
            <div style={{textAlign: "left", textTransform: "uppercase", fontSize: 35, fontFamily: "Oswald", borderBottom: "1px solid black", width: "15vw"}}>Search</div>
          </div>
          
            {expanded ? 
            <div style={{display: "flex", flexDirection: "column", width: "100vw", alignItems: "center"}}>
            <div style={{display: "flex", flexWrap: "wrap", width: "100vw", fontSize: 20, textTransform: "uppercase", fontFamily: "Oswald", justifyContent: "center"}}>
            <button
            style={{
              border: 0, background: 'transparent'
            }}
            onClick={() => {
              setShopping(true)
            }}
            ><div style={{paddingTop: "1.8vh", width: "15vw", fontSize: 20, textTransform: "uppercase", fontFamily: "Oswald"}}>New Sensuality</div></button>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Ski Coll</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>New</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Party</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Gift Ideas</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Bestsellers</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Basics</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Coats, Down Coats</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Jackets</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Overshirts</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Blazers</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Tops, Corsets</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Shorts</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Blouses, T Shirts</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Hoodies, Sweaters</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Pants</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Leggings</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Suits</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Shoes</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Waistcoats</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Dresses, Jumpsuits</div>
            <div style={{paddingTop: "1.8vh", width: "15vw"}}>Knitwear</div>
            </div>
            <br />
            <button style={{border: 0, background: "transparent"}}
            onClick={() => {
              setExpanded(false)
            }}
            >
            <svg style={{paddingBottom: "1vh"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
            </button>
            </div>
            : 
            <div style={{display: "flex", flexWrap: "wrap", width: "100vw", fontSize: 20, textTransform: "uppercase", fontFamily: "Oswald", justifyContent: "center"}}>
            <button 
            onClick={() => {
              setExpanded(true)
            }}
            style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw", border: 0, background: 'transparent', fontSize: 20, textTransform: "uppercase", fontFamily: "Oswald"}}>Woman
          </button>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Man</div>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Kids</div>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Massimo Dutti</div>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Lookbook</div>
            <button 
            style={{
              border: 0, background: 'transparent'
            }}
            onClick={() => {
              setShopping(false)
            }}>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw", fontSize: 20, textTransform: "uppercase", fontFamily: "Oswald"}}>Home</div>
            </button>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Beauty</div>
            <div style={{paddingTop: "1.8vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Origins</div>
            </div> }
          
        </div>
      </div>
      
      

    </div>
  );
}

export default App;
