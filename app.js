/* <div id = "parents">
    <div id = "child">
        <h1>H1 Tags</h1>
        <h2>H2 tags</h2>
    </div>
</div> */


const heading = React.createElement(
  "div",
  { id: "parents" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 Tags"),
    React.createElement("h2", {}, "H2 tags"),
  ])
], [React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 Tags"),
    React.createElement("h2", {}, "H2 tags"),
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// const heading =  React.createElement("h1",{},"Hello Manimaran SDE")
// const root = ReactDOM.createRoot(document.getElementById("root"))