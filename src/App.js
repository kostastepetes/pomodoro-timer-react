import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import TaskApp from "./TaskApp";
import {useState} from "react";
import SettingsContext from "./SettingsContext";

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
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
