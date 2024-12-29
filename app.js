
import React from "react";
import ReactDom from "react-dom/client";
// <div id="perent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
//     </div>

// </div>

const root=ReactDom.createRoot(document.getElementById("root"));
const perent = React.createElement("div" ,
    {id:"perent"},
    React.createElement("div" ,
        {id:"child"},
        [React.createElement("h1" ,{},"Hello Bhai "),React.createElement("h2" ,{},"I am H2 Tag")]));

root.render(perent);
console.log(perent);