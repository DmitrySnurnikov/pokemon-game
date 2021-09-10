import './App.css';
import Header from './components/HeaderBlock';
import Layout from './components/LayoutBlock';
import Footer from './components/FooterBlock';

import ReactLogo from './assets/bg1.jpg'
function App() {
  return (
    <> 
      <Header title="This is title" descr ="This is Description!"/>
      <Layout title="" descr="" urlBg={ReactLogo} />
      <Layout title="" descr="" colorBg="#e2e2e2" />
      <Layout title="" descr="" urlBg={ReactLogo} />
      <Footer />
    </>
  );
}

export default App;
