import axios from "axios";
import { useCallback, useEffect } from "react";
import ghLogo from "../../assets/icons/ghLogo.svg";
import MyInput from "../ui/input/MyInput";
import type { RepoData, SearchNavProps, UserData } from "./SearchNavDataTypes";

const SearchNav: React.FC<SearchNavProps> = ({
	username,
	setUsername,
	setUserData,
	setUserRepo,
	setError,
}) => {
	const clearState = useCallback(() => {
		setUserData(null);
		setError(null);
		setUserRepo([]);
	}, [setUserData, setError, setUserRepo]);

	const fetchData = useCallback(async (): Promise<void> => {
		if (username.length == 0) {
			clearState();
			return;
		}
		try {
			const response = await axios.get<UserData>(
				`https://api.github.com/users/${username}`
			);
			setUserData(response.data);
			setError(null);

			const repoResponse = await axios.get<Array<RepoData>>(
				`https://api.github.com/users/${username}/repos`
			);
			setUserRepo(repoResponse.data);
		} catch {
			setError("User not found");
			setUserData(null);
			setUserRepo([]);
		}
	}, [username, clearState, setUserData, setError, setUserRepo]);

	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			fetchData().catch((error) => {
				console.error("Error fetch", error);
			});
		}, 500);

		return (): void => {
			clearTimeout(delayDebounce);
		};
	}, [username, fetchData]);

	return (
		<div className="flex items-center bg-blue-600 h-16 gap-x-6 px-10">
			<div>
				<img alt="githubLogo" src={ghLogo} />
			</div>
			<div>
				<MyInput
					placeholder="Enter GitHub username"
					value={username}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setUsername(event.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default SearchNav;
