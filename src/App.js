import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import MenuTop from './components/MenuTop';

// Pages
import Home from './pages/home';
import NewMoviews from './pages/new-movies';
import Popular from './pages/popular';
import Search from './pages/search';
import Movie from './pages/movie';
import Error404 from './pages/Error404';

export default function App() {
	const { Header, Content } = Layout;

	return (
		<div className="App">
			<Layout>
				<Router>
					<Header style={{ zIndex: 1 }}>
						<MenuTop />
					</Header>

					<Content>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/new-movies" element={<NewMoviews />} />
							<Route exact path="/popular" element={<Popular />} />
							<Route exact path="/search" element={<Search />} />
							<Route exact path="/movie/:id" element={<Movie />} />
							<Route exact path="*" element={<Error404 />} />
						</Routes>
					</Content>
				</Router>
			</Layout>
		</div>
	);
}
