import MyImage from "../ui/image/MyImage";
import type { FoundUserProps } from "./FoundUserDataTypes";
import followersIcon from "../../assets/icons/followersIcon.svg";
import followingIcon from "../../assets/icons/followingIcon.svg";
import UserStats from "../UserStats/UserStats";
import RepoList from "../RepoList/RepoList";

const FoundUser: React.FC<FoundUserProps> = ({ userData, userRepo }) => {
	return (
		<div className="flex gap-x-20 my-10 mx-10">
			<div className="flex flex-col gap-3">
				<div>
					<MyImage
						alt={userData.name}
						css={"rounded-full"}
						h={260}
						url={userData.avatar_url}
						w={260}
					/>
				</div>
				<div className="font-semibold text-3xl">{userData.name}</div>
				<div className="text-blue-700 font-normal">
					<a href={userData.html_url} target="_blank">
						{userData.login}
					</a>
				</div>
				<div className="flex gap-5">
					<UserStats
						icon={followersIcon}
						label="followers"
						value={userData.followers}
					/>
					<UserStats
						icon={followingIcon}
						label={"following"}
						value={userData.following}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<div className="font-semibold text-3xl">
					Repositories ({userData.public_repos})
				</div>
				<div>
					<div className="flex flex-col gap-2">
						<RepoList repos={userRepo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoundUser;
