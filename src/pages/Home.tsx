import { useState } from "react";
import type { FunctionComponent } from "../common/types";
import FoundUser from "../components/FoundUser/FoundUser";
import SearchNav from "../components/SearchNav/SearchNav";
import type {
	RepoData,
	UserData,
} from "../components/SearchNav/SearchNavDataTypes";
import StaticPage from "../components/StartSearch/StaticPage";
import "../styles/global.css";
import searchIcon from "../assets/icons/searchIconPage.svg";
import errorIcon from "../assets/icons/errorIcon.svg";

export const Home = (): FunctionComponent => {
	const [username, setUsername] = useState<string>("");
	const [userData, setUserData] = useState<UserData | null>(null);
	const [userRepo, setUserRepo] = useState<Array<RepoData>>([]);
	const [error, setError] = useState<string | null>(null);

	return (
		<div className="h-screen">
			<SearchNav
				setError={setError}
				setUserData={setUserData}
				setUserRepo={setUserRepo}
				setUsername={setUsername}
				username={username}
			/>
			{!userData && !error && (
				<StaticPage
					icon={searchIcon}
					title="Start with searching a GitHub user"
				/>
			)}
			{userData && <FoundUser userData={userData} userRepo={userRepo} />}
			{error && <StaticPage icon={errorIcon} title="User not found" />}
		</div>
	);
};
