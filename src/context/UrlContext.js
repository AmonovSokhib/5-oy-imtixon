import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
export const UrlContext = createContext();
export const UrlProvider = ({ children }) => {
	const [state, setState] = useState([]);
	const [repo, setRepo] = useState([]);
	const [follow, setFollow] = useState([]);

	useEffect(() => {
		axios
			.get(`https://api.github.com/users/AmonovSokhib`)
			.then((res) => setState(res.data))
			.catch((err) => console.log(err));
		axios
			.get(`https://api.github.com/users/AmonovSokhib/repos`)
			.then((res) => setRepo(res.data))
			.catch((err) => console.log(err));
		axios
			.get(`https://api.github.com/users/AmonovSokhib/followers`)
			.then((res) => setFollow(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<UrlContext.Provider value={{ state, repo, follow }}>
			{children}
		</UrlContext.Provider>
	);
};
