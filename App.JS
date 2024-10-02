import React from "react";
import ReactDOM from "react-dom/client";

// Creating React Element
const heading = React.createElement("h1", { id: "h1tag" }, "Nandini Travels Welcome You!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering React Element->
root.render(heading);
console.log(heading);

// As writing React.createElement and creating tags using this object is kinda clumsy so FB developers for developers perspective and to make their life easy came up with JSX.
// XML - HTML-like or XML like syntax , but it's not html in JS.
// JSX - transpiled before it reached JS Engine. - PARCEL is doing that using BABEL. - So Babel is transpiling that code so that React can understand it while rendering jsx element.
const jsxheading = <h2 id="jsxhead">"Creating h2 tag using JSX!"</h2>;
console.log(jsxheading);
root.render(jsxheading);

// React Component
// Class Based Component
// Functional Component
// Functional Component - Normal JS ARROW functions returning JSX/React Element.

const Title = () => {
    return <h2 id="title">I'm Title Sequence.</h2>
};

// Component Composition- Rendering One component inside another component.
const HeadingComponent = () => {
    return (
    <div>
     <Title/> 
     <h1 id="hc">this is heading component</h1>
    </div>
    );
};

// Without return also it's same, but we'll practice writing return keyword.
// const headingcomponent2 = () => (<h1>this is heading component1</h1>)

// Rendering Functional Component-> (Babel understand seeing < angular brackets that the rendering is of existing functional component.)
root.render(<HeadingComponent/>);

// eg2:-
const Home = () => {
    return(
        <div>
            <h1>
                "Welcome Aboard!"
            </h1>
        </div>
    )
}

const noOfFlights = "207";

// {} any piece of JS code we can pass using {}. - YOU CAN EVEN CALL A FUNCTION INSIDE IT.

const noOfFoodItem = (
   <h1> In our {noOfFlights} flights 100 food items available.</h1> 
);

// const flightAttendantData = api.getData();
// if this api contains some malicious data, JSX will not execute it, JSX will skip it. Kind of sanitizing the data.
// JSX Prevents Criss Site Scripting attacks for us.
const FlightTicketBooking = () => {
    return(
        <div>
            {Home()}
            <Home/>
            <Home></Home>
            {/* we can write it like that also <Home></Home>* OR CALL it using {Home()}/}
            {/* rendering React Element heading inside this FlightTicketBooking component. */}
            {heading}
            {/* {flightAttendantData} */}
            {noOfFoodItem}
            <h1>Please click on <a>discount</a> to save cost on your travel from {noOfFlights} available!</h1>
        </div>
    )
};

root.render(<FlightTicketBooking/>);


