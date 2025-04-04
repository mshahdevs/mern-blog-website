import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/article-list' element={<ArticleList />}></Route>
          <Route path='/article/:name' element={<Article />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
