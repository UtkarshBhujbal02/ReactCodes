/*Steps for Parcel  app 
         1/. npm init 
         2.npm install -D parcel 
         3.npm install react   
         4. npm i react-dom   
         5.npx parcel index.html



*/

/*

*Pros of using parcel

* HMR = hot module reload
* File Watcher algorithm - c++
* BUNDLING 
* Minify code
* Cleaning our code : reduce console vlog etc
* Super fast build algorithm
* Image optimization 
* Dev abd production Build
* Caching while development
* compression
* compatible with older version of browsers
* Gives us option to build or run app on https- we have to use --https 
   example: npx parcel index.html --https
* manage port number
* parcel is zero config 
* Tree Shaking : Removing unwanted


Transitive dependancies

*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 from parcel"
);

const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const HeaderComponent = () => {
  return (
    <div>
      {(container)}
      <h1>This is a functional component</h1>
      <h2>This is typed in H2 </h2>
    </div>
  );
};

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
