

// <div id="perent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
//     </div>

// </div>

const root=ReactDOM.createRoot(document.getElementById("root"));
const perent = React.createElement("div" ,
    {id:"perent"},
    React.createElement("div" ,
        {id:"child"},
        [React.createElement("h1" ,{},"I am H1 Tag"),React.createElement("h2" ,{},"I am H2 Tag")]));

root.render(perent);
console.log(perent);