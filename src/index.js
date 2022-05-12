import ReactDOM from 'react-dom'
// import list,{yt2 ,learn, myParas , greeting} from './App' /* most used */
import * as intro from './App' /* less used */

ReactDOM.render(<>
<ol>
  <li> {intro.default}</li>
  <li>  {intro.yt2}</li>
  <li> {intro.learn} </li>
  <li>{intro.myParas()}</li>
  <li>{intro.greeting()}</li>
</ol>
</> ,
document.getElementById('root')
)