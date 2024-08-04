import type { ReposListProps } from "./ReposListDataTypes";

const RepoList: React.FC<ReposListProps> = ({ repos }) => {
	return (
		<>
			{repos.map((repo) => (
				<div key={repo.id} className="bg-white p-4 w-[50rem] rounded-md">
					<div>
						<a
							className="text-blue-600 font-semibold text-lg"
							href={repo.html_url}
							target="_blank"
						>
							{repo.name}
						</a>
					</div>
					<div>{repo.description ? repo.description : "Empty description"}</div>
				</div>
			))}
		</>
	);
};

export default RepoList;
