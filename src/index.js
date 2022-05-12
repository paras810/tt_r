import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

let time = new Date(2022 ,1, 1, 1)
let hr = time.getHours()
let grt = ""
const cssStyle ={
  fontSize:"40px",
  textTransform:'capitalize',
  backgroundColor: "black"

}


if( hr >= 0 && hr < 12){
grt= 'good mrng'
cssStyle.color = 'red'
cssStyle.backgroundColor = "yellow"
cssStyle.paddingLeft  = '100px'
}
else if (hr >=12 && hr <19){
grt = 'good afternoon'
cssStyle.color = 'blue'
cssStyle.paddingLeft  = '35px'
}
else{
  grt = 'good night'
  cssStyle.color = 'green'
  cssStyle.backgroundColor = "orange"
  cssStyle.paddingLeft = '75px'
}

ReactDOM.render(<>
<h1 >hello sir <span style={cssStyle}> {grt} </span></h1>
</>, document.getElementById('root'))

