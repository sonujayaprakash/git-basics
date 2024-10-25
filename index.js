import ReactDOM from 'react-dom/client';
import './index.css';

/*const myFirstElement = (<table>

   <tr>
      <th>Name</th> <th>Age</th>
   </tr>
   <tr>
   <td>
      Nisa
   </td>
   <td>
      19
   </td>
   </tr>
</table>)
*/
const x = 19;
let text = "Goodbye";
if (x < 10) {
text = "Hello";
}

const myElement = <h1>{text}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement
 // <React.StrictMode>
   //<App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
