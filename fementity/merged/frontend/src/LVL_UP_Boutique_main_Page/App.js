import Showcase from './components/Showcase';
import Sidebar from './components/Sidebar';
import Header from './Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="SideBar20">
          <Sidebar />
        </div>
        <div className="Showcases80">
          <div className="Showcasestop">
            <div className="showcase ">
              <Showcase />
            </div>
            <div className="showcase ">
              <Showcase />
            </div>
          </div>
          <div className="Showcasesbot">
            <div className="showcase ">
              <Showcase />
            </div>
            <div className="showcase ">
              <Showcase />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
