import Form from "./pages/form";
import "./style.scss";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster/>
      <Form/>
    </div>
  );
}

export default App;
