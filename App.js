const heading = React.createElement("h1",{id:"heading"},"Hello World from Javascript");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//  <script> //javascript way to add a heading
//         const heading = document.createElement("h1");
//         heading.innerHTML = "Hello world from javascript";

//         const root = document.getElementById("root");
//         root.appendChild(heading);
// </script> 

/* <div id ="parent">
      <div id="child">
            <h1>I am H1 tag</h1>
            <h2>I am H2 tag</h2>
      </div>
   </div>
   Make this using react js
*/

const headele = React.createElement(
"div",
{id:"parent"},
React.createElement(
    "div",
    {id:"child"},
    [
        React.createElement("h1",{},"I am H1 tag"),
        React.createElement("h2",{},"I am H2 tag")
    ]
    
    )
);

root.render(headele);