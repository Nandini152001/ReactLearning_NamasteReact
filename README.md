// Food Delivery App:- BiteBright
// Thought Process- Component Structure
// Headers->
// -logo
// -Nav Items
// Body->
// -Search
// - RestaurantContainer
// -RestaurantCard ->Name of res, image , star rating, cuisines, delivery time.
// Footer->
// -Copyright
// -Links
// -Address
// -Contact

#2 types of export and import

-Default Export/Import

export default Component;
import Component from "path";

(Mandatory: when more then 1 thing to export, use named export, not default.)
-Named Export/Import;

export const Component;
import {Component} from "path";

<!-- React Fiber: (React Diff and Reconciliation Algorithm) -->
READ: https://github.com/acdlite/react-fiber-architecture

<!-- React Hooks -->
-> These are nothing but Normal JS  Utility function superpowered with react.

useState() and useEffect() are mostly used Hooks.

