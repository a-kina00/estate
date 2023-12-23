import Examples from "./Examples";
import MainPage from "./MainPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<MainPage />} />
          <Route path='_' element={<Examples />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
