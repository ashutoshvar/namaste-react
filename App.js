import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", 
    {id: "parent"}, 
    React.createElement("div",
        { id: "Child"},
        React.createElement("h1",
            {id: "heading"},
            "h1 tag"
        )
    ));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);