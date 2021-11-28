import './App.css';

// Components
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';

// Pages
import HomePage from './Pages/HomePage/HomePage';

import { Routes, Route } from 'react-router';

function App() {
 return (
  <div className="App">
   <NavbarComponent />

   <div className="Home__Container_Div">
    <SideBarComponent />

    {/* Routes */}
    <Routes>
     <Route exact path="/Home" element={<HomePage />} />
    </Routes>
    {/* Routes */}
   </div>

   {/* Footer Component */}
  </div>
 );
}

export default App;
