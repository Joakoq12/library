import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import Create from "./pages/create";
import View from "./pages/view";
import Store from './store/store';

function App() {
  return (
  
      <Store>
        <div className="App">
      
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
    
      </div>
      </Store>
  
  );
}

export default App;
