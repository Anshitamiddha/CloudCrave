const heading=React.createElement("h1",
    {id:"heading1"},"hello from react");

    console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root1"));

root.render(heading);

const hierarcy=React.createElement("div",{id:"parent"},
    React.createElement("div", {id:"child"},[React.createElement("h1",{},"hi tag"),React.createElement("h2",{},"hi tag2")]));
root.render(hierarcy);
console.log(hierarcy)