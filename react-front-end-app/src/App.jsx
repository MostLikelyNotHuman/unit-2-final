import { Route, Routes } from 'react-router';
import './App.css'
import HelpPage from './components/HelpPage';
import HomePage from './components/HomePage';
import IntervalPractice from './components/IntervalPractice';
import NotePractice from './components/NotePractice';
import ReviewPage from './components/ReviewPage';
import Header from './components/pieces/Header';
import Footer from './components/pieces/Footer';
import ContactPage from './components/ContactPage';
import { useState } from 'react';

function App() {

  const [ reviewNotes, setReviewNotes ] = useState([]);
  const [ reviewIntervals, setReviewIntervals ] = useState([]);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ reviewMode, setReviewMode ] = useState(false);
  const [ reviewModeText, setReviewModeText ] = useState('');

  return (
    <>
      <Header 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}
        reviewMode={reviewMode}
        setReviewMode={setReviewMode}
        reviewModeText={reviewModeText}
        setReviewModeText={setReviewModeText}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice-notes" element={<NotePractice 
          notesReview={reviewNotes}
          setNotesReview={setReviewNotes}
          isLoggedIn={isLoggedIn}
          reviewMode={reviewMode}
          setReviewMode={setReviewMode}
          reviewModeText={reviewModeText}
          setReviewModeText={setReviewModeText}/>} />
        <Route path="/practice-intervals" element={<IntervalPractice 
          intervalsReview={reviewIntervals}
          setIntervalsReview={setReviewIntervals}
          isLoggedIn={isLoggedIn}/>} />
        <Route path="/review" element={<ReviewPage
          reviewNotes={reviewNotes}
          setReviewNotes={setReviewNotes}
          reviewIntervals={reviewIntervals}
          setReviewIntervals={setReviewIntervals} 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          reviewMode={reviewMode}
          setReviewMode={setReviewMode}/>} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
