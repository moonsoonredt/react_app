import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
  return (

<div className="app-wrapper">
      <Header />
      <Navbar />


    <div class="app-wrapper-content">

          <div>
              <Routes>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/dialogs*" element={<Dialogs/>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/settings" element={<Settings/>}/>

              </Routes>
          </div>

    </div>

    </div>

);
}
export default App;