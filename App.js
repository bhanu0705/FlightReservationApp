import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",
{
    id:"title"
},
"head1");
const heading2=React.createElement("h2",
{
    id:"title2"
},
"head2");
const button=React.createElement("button",{},"submit");
const container=React.createElement("div",
{
    id:"container"
},
[heading,heading2,button])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);