import React, { lazy, Suspense, useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Resume = lazy(() => import('./components/Resume/ResumeNew'));

function App() {
	const [load, updateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false);
		}, 1200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div className='App' id={load ? 'no-scroll' : 'scroll'}>
				<Navbar />
				<ScrollToTop />
				<main className='app-main'>
					<Suspense fallback={<div className='route-loading-spacer' />}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/project' element={<Projects />} />
							<Route path='/experience' element={<Experience />} />
							<Route path='/about' element={<About />} />
							<Route path='/resume' element={<Resume />} />
							<Route path='*' element={<Navigate to='/' replace />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
