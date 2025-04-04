import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { About } from './pages/About';
import { ArticleList } from './pages/ArticleList';
import { Navbar } from './components/Navbar';
import { NotFound } from './pages/NotFound';
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/articles-list' element={<ArticleList />}></Route>
        <Route path='/article/:name' element={<Article />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
