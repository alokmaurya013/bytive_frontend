import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import './index.css';
import EditTask from './pages/EditTask';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen"> {/* Wrapper to make footer stick at bottom */}
          <Header />
          <main className="flex-grow"> {/* Ensures the main content takes the remaining space */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddTask />} />
              <Route path="/edit/:id" element={<EditTask />} />
            </Routes>
          </main>
          <Footer /> {/* Footer will be pushed to the bottom */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
