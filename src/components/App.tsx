import Examples from "./Examples";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage/SearchPage";
import ObjectPage from "./ObjectPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<MainPage />} />
          <Route path='_' element={<Examples />} />
          <Route path='search' element={<SearchPage />} />
          {/* TODO: привязка по айдишникам */}
          <Route path='id=' element={<ObjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
