import type { RepoData } from "../SearchNav/SearchNavDataTypes";

export interface HasRepoProps {
	quantity: number;
	repos: Array<RepoData>;
}
