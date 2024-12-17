import "./App.css";
import RegistrationFormData from "./components/registrationForm";
import flagofGreece from "./assets/FlagofGreece.png"
function App() {
  return (
    <div className="App">
      <div className="w-full h-fit py-5 px-20 shadow-md">
        <div className="flex justify-end items-center">
          <p className="leading-none">All addvantages</p>
          <img className="w-8 h-6 ml-2" src={flagofGreece} alt="flagIMG" />
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="flex justify-center mx-5 md:mx-20 py-20">
          <RegistrationFormData />
        </div>
      </div>
    </div>
  );
}

export default App;
