import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import Branch from './components/Branch';

import Semesters from './components/Semesters';
import Mechanical from './components/Mechanical';
import Production from './components/Production';
import InformationTechnology from './components/InformationTechnology';
import ECE from './components/ECE';
import Civil from './components/Civil'
import BT from './components/BT'
import Chemical from './components/Chemical'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ComputerScience from './components/ComputerScience';
import Electrical from './components/Electrical';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
   
    <Routes>
    <Route path="/" element={<Branch/>}/>
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/Civil" element={<Semesters br='civil'/>}/>
    <Route path="/Biotech" element={<Semesters br='biotech'/>}/>
    <Route path="/Mechanical" element={<Semesters br='mechanical'/>}/>
    <Route path="/Electrical" element={<Semesters br='electrical'/>}/>
    <Route path="/Electronics%20and%20Communication" element={<Semesters br='ece'/>}/>
    <Route path="/Computer%20Science" element={<Semesters br='cse'/>}/>
    <Route path="/Production%20and%20Industrial" element={<Semesters br='pie'/>}/>
    <Route path="/Chemical" element={<Semesters br='chemical'/>}/>
    <Route path="/Information%20Technology" element={<Semesters br='it'/>}/>
    
{/* MECHANICAL */}
    <Route path="/Mechanical/Sem-3" element={<Mechanical  sno='3' />}/>
    <Route path="/Mechanical/Sem-4" element={<Mechanical  sno='4'/>}/>
    <Route path="/Mechanical/Sem-5" element={<Mechanical  sno='5' />}/>
    <Route path="/Mechanical/Sem-6" element={<Mechanical  sno='6'/>}/>
    <Route path="/Mechanical/Sem-7" element={<Mechanical  sno='7' />}/>
    <Route path="/Mechanical/Sem-8" element={<Mechanical  sno='8'/>}/>
   {/* PRODUCTION AND INDUSTRIAL  */}
    <Route path="/pie/Sem-3" element={<Production  sno='3' />}/>
    <Route path="/pie/Sem-4" element={<Production  sno='4'/>}/>
    <Route path="/pie/Sem-5" element={<Production  sno='5' />}/>
    <Route path="/pie/Sem-6" element={<Production  sno='6'/>}/>
    <Route path="/pie/Sem-7" element={<Production  sno='7' />}/>
    <Route path="/pie/Sem-8" element={<Production  sno='8'/>}/>
  {/* COMPUTER SCIENCE  */}
    <Route path="/cse/Sem-3" element={<ComputerScience  sno='3' />}/>
    <Route path="/cse/Sem-4" element={<ComputerScience  sno='4'/>}/>
    <Route path="/cse/Sem-5" element={<ComputerScience  sno='5' />}/>
    <Route path="/cse/Sem-6" element={<ComputerScience  sno='6'/>}/>
    <Route path="/cse/Sem-7" element={<ComputerScience  sno='7' />}/>
    <Route path="/cse/Sem-8" element={<ComputerScience  sno='8'/>}/>
{/* INFORMATION TECHNOLOGY */}
    <Route path="/it/Sem-3" element={<InformationTechnology  sno='3' />}/>
    <Route path="/it/Sem-4" element={<InformationTechnology  sno='4'/>}/>
    <Route path="/it/Sem-5" element={<InformationTechnology  sno='5' />}/>
    <Route path="/it/Sem-6" element={<InformationTechnology  sno='6'/>}/>
    <Route path="/it/Sem-7" element={<InformationTechnology  sno='7' />}/>
    <Route path="/it/Sem-8" element={<InformationTechnology  sno='8'/>}/>

    {/* ELECTRONICS COMMUNICATION */}
    <Route path="/ece/Sem-3" element={<ECE sno='3' />}/>
    <Route path="/ece/Sem-4" element={<ECE sno='4'/>}/>
    <Route path="/ece/Sem-5" element={<ECE sno='5' />}/>
    <Route path="/ece/Sem-6" element={<ECE sno='6'/>}/>
    <Route path="/ece/Sem-7" element={<ECE sno='7' />}/>
    <Route path="/ece/Sem-8" element={<ECE sno='8'/>}/>
    
     {/* Civil Engg*/}
    <Route path="/civil/Sem-3" element={<Civil sno='3' />}/>
    <Route path="/civil/Sem-4" element={<Civil sno='4'/>}/>
    <Route path="/civil/Sem-5" element={<Civil sno='5' />}/>
    <Route path="/civil/Sem-6" element={<Civil sno='6'/>}/>
    <Route path="/civil/Sem-7" element={<Civil sno='7' />}/>
    <Route path="/civil/Sem-8" element={<Civil sno='8'/>}/>
    
    {/* Biotechnology*/}
    <Route path="/biotech/Sem-3" element={<BT sno='3' />}/>
    <Route path="/biotech/Sem-4" element={<BT sno='4'/>}/>
    <Route path="/biotech/Sem-5" element={<BT sno='5' />}/>
    <Route path="/biotech/Sem-6" element={<BT sno='6'/>}/>
    <Route path="/biotech/Sem-7" element={<BT sno='7' />}/>
    <Route path="/biotech/Sem-8" element={<BT sno='8'/>}/>

    {/* Electrical*/}
    <Route path="/electrical/Sem-3" element={<Electrical sno='3' />}/>
    <Route path="/electrical/Sem-4" element={<Electrical sno='4'/>}/>
    <Route path="/electrical/Sem-5" element={<Electrical sno='5' />}/>
    <Route path="/electrical/Sem-6" element={<Electrical sno='6'/>}/>
    <Route path="/electrical/Sem-7" element={<Electrical sno='7' />}/>
    <Route path="/electrical/Sem-8" element={<Electrical sno='8'/>}/>

    {/*  CHEMICAL */}
    <Route path="/chemical/Sem-3" element={<Chemical  sno='3' />}/>
    <Route path="/chemical/Sem-4" element={<Chemical  sno='4'/>}/>
    <Route path="/chemical/Sem-5" element={<Chemical  sno='5' />}/>
    <Route path="/chemical/Sem-6" element={<Chemical  sno='6'/>}/>
    <Route path="/chemical/Sem-7" element={<Chemical  sno='7' />}/>
    <Route path="/chemical/Sem-8" element={<Chemical  sno='8'/>}/>
    </Routes>
    </div>

     </Router>

  );
}

export default App;
/*  <Routes>
          
          <Route path="/" element={<News key="general" category="general" q={this.val} />} />
          <Route path="/general"  element={<News key="general2" category="general" q={this.val}/>}/>
          <Route path="/business" element={<News key="business" category="business" q={this.val}/>}/>
          
          <Route path="/search" element={<News key="search"  q={this.val}/>}/>
        </Routes>*/