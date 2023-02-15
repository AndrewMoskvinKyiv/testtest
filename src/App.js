// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to zalupanka.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import * as React from "react";
import S from "./root.module.css"
import {SimpleSlider} from "./components/slickSlider/SimpleSlider";
import {MobileMenu} from "./components/MobileMenu/MobileMenu";
import {Header} from "./components/common/Header/Header";
import {useState} from "react";

export default function App() {
  const [menuView, setMenuView] = useState(false);

  return (
      <div className={S.root}>
        <Header setMenuView={setMenuView} menuView={menuView}/>
        {menuView ? <MobileMenu/> : <SimpleSlider/> }
      </div>)


}
