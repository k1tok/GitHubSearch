import type { FunctionComponent } from "../../common/types";
import ghLogo from "../../assets/icons/ghLogo.svg";
import MyInput from "../ui/input/MyInput";
import axios from "axios";
import { useEffect, useState } from "react";
import type { RepoData, UserData } from "./SearchNavDataTypes";

const SearchNav = (): FunctionComponent => {
	const [username, setUsername] = useState<string>("");
	const [userData, setUserData] = useState<UserData | null>(null);
	const [userRepo, setUserRepo] = useState<Array<RepoData>>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			if (username.length == 0) {
				setUserData(null);
				setError(null);
				setUserRepo([]);
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
		};

		const delayDebounce = setTimeout(() => {
			fetchData().catch((error) => {
				console.error("Error fetch", error);
			});
		}, 500);

		return (): void => {
			clearTimeout(delayDebounce);
		};
	}, [username]);

	return (
		<>
			<div className="flex items-center bg-blue-600 h-16 gap-x-6 px-10">
				<div>
					<img alt="githubLogo" src={ghLogo} />
				</div>
				<div>
					<MyInput
						placeholder="Поиск"
						value={username}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setUsername(event.target.value);
						}}
					/>
				</div>
			</div>
			{/* Проверка использования, будет удалено */}
			{userData && (
				<div>
					<img alt={userData.login} src={userData.avatar_url} />
					<p>{userData.name}</p>
					<ul>
						{userRepo.map((repo) => (
							<li key={repo.id}>
								<a href={repo.html_url}> {repo.name} </a>
							</li>
						))}
					</ul>
				</div>
			)}
			{error && <div> {error} </div>}
		</>
	);
};

export default SearchNav;
