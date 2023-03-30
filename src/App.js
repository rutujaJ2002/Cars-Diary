import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
  return (
    <div className="mt-20 ml-auto mr-auto shadow-md p-12 lg:w-1/2">
        <CarForm/>
        <CarSearch/>
        <CarList/>
        <CarValue/>
    </div>
  );
}

export default App;
