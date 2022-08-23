import "./App.css";
import MainComponent from "./components/mainComponent/mainComponent";
import SideComponent from "./components/sideComponent/sideComponent";

function App() {
  return (
    <div className="w-4/5 mx-auto my-5 p-5 App shadow-lg flex flex-row">
      <MainComponent />
      <SideComponent />
    </div>
  );
}

export default App;
