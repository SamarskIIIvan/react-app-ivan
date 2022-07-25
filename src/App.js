
import './App.css';
import {Header} from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Professions} from "./Components/Pages/Professions/Professions";
import {ForWhom} from "./Components/Pages/ForWhom/ForWhom";
import {Kareer} from "./Components/Pages/Kareer/Kareer";
import {Employer} from "./Components/Pages/Employer/Employer";
import {Salary} from "./Components/Pages/Salary/Salary";
import {Responsibilities} from "./Components/Pages/Responsibilities/Responsibilities";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/professions'} element={<Professions/>}/>
            <Route path={'/forWhom'} element={<ForWhom/>}/>
            <Route path={'/kareer'} element={<Kareer/>}/>
            <Route path={'/employer'} element={<Employer/>}/>
            <Route path={'/salary'} element={<Salary/>}/>
            <Route path={'/responsibilities'} element={<Responsibilities/>}/>
        </Routes>
    </div>
  );
}

export default App;
