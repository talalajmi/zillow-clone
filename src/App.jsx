import { X } from "react-feather";
import Header from "./Header/Header";
import PropertyDetails from "./PropertyDetails/PropertyDetails";

const App = () => {
  return (
    <div className="flex justify-center lg:bg-black/40">
      <div className="lg:max-w-screen-lg bg-white">
        <Header />
        <PropertyDetails />
      </div>
      <X className="ml-5 mt-3 hidden lg:block" color="white" size={26} />
    </div>
  );
};

export default App;
