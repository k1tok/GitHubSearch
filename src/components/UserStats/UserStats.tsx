import MyImage from "../ui/image/MyImage";
import type { UserStatsProps } from "./UserStatsDataTypes";

const UserStats: React.FC<UserStatsProps> = ({ value, label, icon }) => {
	const displayValue = value > 1000 ? `${(value / 1000).toFixed(1)}k` : value;

	return (
		<div className="flex justify-center items-center gap-1">
			<div>
				<MyImage alt={"UserIcon"} url={icon}></MyImage>
			</div>
			<div>
				{displayValue} {label}
			</div>
		</div>
	);
};

export default UserStats;
