export interface UserData {
	login: string;
	name: string;
	avatar_url: string;
	followers: number;
	following: number;
	public_repos: number;
	html_url: string;
}

export interface RepoData {
	html_url: string;
	id: number;
	name: string;
	description: string;
}

export interface SearchNavProps {
	username: string;
	setUsername: (username: string) => void;
	setUserData: (userData: UserData | null) => void;
	setUserRepo: (userRepo: Array<RepoData>) => void;
	setError: (error: string | null) => void;
}
