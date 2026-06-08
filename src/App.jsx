import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Departments from './pages/Departments';
import EntryTests from './pages/EntryTests';
import Mcqs from './pages/Mcqs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import PaperViewer from './pages/PaperViewer';
import CpnCalculator from './pages/CpnCalculator';
import EntryTestSyllabus from './pages/EntryTestSyllabus';
import SecureDownload from './pages/SecureDownload';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar with Contact Link */}
      <nav className="bg-blue-600 p-4 text-white flex gap-6 justify-center shadow-md flex-wrap">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/entry-test-past-papers" className="hover:underline ">Entry Test Past Papers </Link>
        <Link to="/sindh-university-past-papers" className="hover:underline">University Past papers </Link>
        <Link to="/mcqs" className="hover:underline">MCQs Test</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/cpn-calculator" className="bg-yellow-400 text-black px-3 py-1 rounded font-bold hover:bg-yellow-300">CPN Calculator</Link>
      </nav>

      {/* Pages Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entry-test-past-papers" element={<EntryTests />} />
        <Route path="/sindh-university-past-papers" element={<Departments />} />
        <Route path="/mcqs" element={<Mcqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/paper/:paperId" element={<PaperViewer />} />
        <Route path="/cpn-calculator" element={<CpnCalculator />} />
        <Route path="/entry-test-syllabus" element={<EntryTestSyllabus />} />
        <Route path="/download/:paperId" element={<SecureDownload />} />
      </Routes>

      {/* Final Footer with All Important Links */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
        <div className="mb-4 flex justify-center gap-6">
          <Link to="/about" className="text-gray-300 hover:text-white hover:underline">About Us</Link>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-white hover:underline">Privacy Policy</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white hover:underline">Contact Us</Link>
        </div>
        <p className="text-sm text-gray-400">© 2026 Uni Papers. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  )
}

export default App;