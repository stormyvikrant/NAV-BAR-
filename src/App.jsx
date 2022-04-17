import logo from './logo.svg';
import './App.css';

function App() {
  var navitems=["ABOUT","GROCERY","ELECTRONICS","MOBILE","CONTACT US"]
  return (
    <div>
      <div id="navbar">
        <div id="logo">
          <img 
          width="50px"
          height="50px"
            src="https://zoom.us/docs/image/ZA_Hero-Animation_MLP_v2.gif"
            alt=""
          />
        </div>
        <div className='navitems'>
          {navitems.map((e) => {

            return <Link data={e} />;
          })}
        </div>
        <div className='button'>
          <button>Referal</button>
        </div>
      </div>
    </div>
  );
}
function Link(props){
  console.log("props:",props)
  return <div>{props.data}</div>
}

export default App;