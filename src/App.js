import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import TaskApp from "./TaskApp";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import Logo from "./Logo";

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <Logo />
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
      <div>
      <TaskApp/>
      </div>
    </main>
    
    

  );
}

export default App;
