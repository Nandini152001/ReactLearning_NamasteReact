const heading = React.createElement("h1", {id: "h1tag" ,xyz: "abc"}, "Hello World from React CDN!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

//nested html h1 tag using React.
const nestedele = React.createElement(
    "div", {id: "parent"},
     [React.createElement("div", {id: "child1"},
        [ React.createElement("h1", {id: "h1tagnested1"}, "I'm 1st nested h1 tag"),
             React.createElement("h2", {id: "h2tagnested1"}, "I'm 1st nested h2 tag")]
            ),
        React.createElement("div", {id: "child2"},
            [ React.createElement("h1", {id: "h1tagnested2"}, "I'm 2nd nested h1 tag"),
                 React.createElement("h2", {id: "h2tagnested2"}, "I'm 2nd nested h2 tag")]
                )
     ]
    );
root.render(nestedele);
console.log(nestedele);

