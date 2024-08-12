import emptyRepo from "../../assets/icons/emptyRepoIcon.svg";
import followersIcon from "../../assets/icons/followersIcon.svg";
import followingIcon from "../../assets/icons/followingIcon.svg";
import HasRepo from "../HasRepo/HasRepo";
import StaticPage from "../StaticPage/StaticPage";
import MyImage from "../ui/image/MyImage";
import UserStats from "../UserStats/UserStats";
import type { FoundUserProps } from "./FoundUserDataTypes";

const FoundUser: React.FC<FoundUserProps> = ({ userData, userRepo }) => {
	return (
		<div className="flex gap-x-20 my-10 mx-10 h-5/6">
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

			{userData.public_repos > 0 ? (
				<HasRepo quantity={userData.public_repos} repos={userRepo} />
			) : (
				<StaticPage icon={emptyRepo} title="Repository list is empty" />
			)}
		</div>
	);
};

export default FoundUser;
