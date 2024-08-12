import MyImage from "../ui/image/MyImage";
import type { StaticPageProps } from "./StaticPageDataTypes";

const StaticPage: React.FC<StaticPageProps> = ({ title, icon }) => {
	return (
		<div className="flex flex-col justify-center items-center h-5/6 gap-10 w-full">
			<div>
				<MyImage alt="searchIcon" url={icon} />
			</div>
			<div className="font-normal text-xl text-center text-slate-500 w-48">
				{title}
			</div>
		</div>
	);
};

export default StaticPage;
