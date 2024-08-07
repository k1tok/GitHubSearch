import axios from "axios";
import type { RepoData } from "../SearchNav/SearchNavDataTypes";

export const fetchAllRepos = async (
	username: string
): Promise<Array<RepoData>> => {
	const allRepos: Array<RepoData> = [];
	let page = 1;
	const perPage = 100;

	while (true) {
		// eslint-disable-next-line no-await-in-loop
		const response = await axios.get<Array<RepoData>>(
			`https://api.github.com/users/${username}/repos?per_page=100`,
			{
				params: {
					perPage: perPage,
					page: page,
				},
			}
		);

		allRepos.push(...response.data);

		if (response.data.length < perPage) {
			break;
		}

		page++;
	}

	return allRepos;
};
