import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import BreedDetails from './pages/BreedDetails/BreedDetails';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='breed/:id' element={<BreedDetails />} />
        </Route>
      <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
