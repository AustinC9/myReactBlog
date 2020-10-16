import React from "react";

function Header(props) {
  console.log(props);

  //let output;
  // for (let i = 0; i < props.pages.length; i++) {
  //   output += <div> + { props.pages[i]} </div>;
  //  }
  //  //return output
  // }
  // if (props.currentPage === 1) {
  //   classname = 'active'
  // }
  // let classname = props.currentPage === 1 ? 'active' : '';

  return (
    <ul className="nav nav-pills">
      {props.pages.map((item, index) => {
        return (
          <li className="nav-item">
            <a
              onClick={() => props.setPage(index)}
              className={
                "nav-link " + (props.currentPage === 0 ? "active" : "")
              }
            >
              {item}
            </a>
          </li>
        );
      })}

      <li className="nav-item">
        <a
          onClick={() => props.setPage(1)}
          className={"nav-link " + (props.currentPage === 1 ? "active" : "")}
        >
          {props.pages[1]}
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => props.setPage(2)}
          className={"nav-link " + (props.currentPage === 2 ? "active" : "")}
        >
          {props.pages[2]}
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => props.setPage(3)}
          className={"nav-link " + (props.currentPage === 3 ? "active" : "")}
        >
          {props.pages[3]}
        </a>
      </li>
    </ul>
  );
}

export default Header;

// if (props.gardener) {
//   console.log(`${props.name} been gardenin for ${props.age} years!`);
// } else {
//   console.log(`${props.name} ain't no gardenerer`);
// }

// <div style={{border:'1px solid red'}}>
//   <div>
//     clicked: {props.clicked}
//   </div>
//   {/* <h1>Hello {props.name}</h1>
//   <h3>
//     {props.name} is {props.age} years old
//   </h3> */}
//   {/* App Layer Component */}
//     <div>
//     <a
//     classNameName='btn btn-primary'
//     onClick={props.clickHandler}>
//     Click Me!</a>
//     </div>
// </div>
