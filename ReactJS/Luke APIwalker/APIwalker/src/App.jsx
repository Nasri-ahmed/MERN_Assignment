import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import People from './views/People';
import Planet from './views/Planet';
import ErrorPage from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <SearchForm />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
