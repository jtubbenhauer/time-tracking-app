import "./styles/app.css";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="container">
      <div className="grid-wrapper">
        <ProfileCard name="Jeremy Robson" />
      </div>
    </div>
  );
};

export default App;
