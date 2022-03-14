import Footer from 'components/Footer';
import MainMenu from 'components/Menu';
import StandardPage from 'components/StandardPage';
import Aboutus from 'pages/Aboutus';
import Begin from 'pages/Begin';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Order from 'pages/Order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <MainMenu />
        <Routes>
          <Route path="/" element={<StandardPage />}>
            <Route index element={<Begin />} />
            <Route path="menu" element={<Menu />} />
            <Route path="aboutus" element={<Aboutus />} />
          </Route>
          <Route path="order/:id" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
