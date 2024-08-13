import type { RepoData, UserData } from "../SearchNav/SearchNavDataTypes";

export interface FoundUserProps {
	userData: UserData;
	userRepo: Array<RepoData>;
}
