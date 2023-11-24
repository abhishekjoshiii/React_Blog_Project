import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CreatePostPage from './components/CreatePostPage';
import UpdatePostPage from './components/UpdatePostPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/update" element={<UpdatePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;