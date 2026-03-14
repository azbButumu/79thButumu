import {HashRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Tenji from './pages/tenji_buturi'
import { ROUTES } from './assets/const'
import Butumu from './pages/Butumu'
import Sidetab from './sidetab'
import Katudou from './pages/katudou'
import Class from './pages/tenji_class'
import ScrollToTop from './scroll'

function App() {

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Sidetab />
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BUTURI} element={<Tenji />} />
          <Route path={ROUTES.CLASS} element={<Class/>} />
          <Route path={ROUTES.BUTUMU} element={<Butumu />} />
          <Route path={ROUTES.KATUDOU} element={<Katudou />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App