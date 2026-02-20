import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header  from './components/Header/Header';
import Footer from './components/Fotter/fotter';
import ProductHeader from './components/ProductHeader';
import Product from './components/product';

function App() {
  return (
    <>
      {/* header? */}
      <Header />
      {/* header? */}
      <ProductHeader />
      <Product />
      <Footer />

    </>
  );
}

export default App;
