import searchIcon from "../../assets/icons/searchIconPage.svg";
import MyImage from "../ui/image/MyImage";
import type { StartSearchProps } from "./StartSearchDataTypes";

const StartSearch: React.FC<StartSearchProps> = ({ title }) => {
	return (
		<div className="flex flex-col justify-center items-center h-5/6 gap-10 w-full">
			<div>
				<MyImage alt="searchIcon" url={searchIcon} />
			</div>
			<div className="font-normal text-xl text-center text-slate-500 w-48">
				{title}
			</div>
		</div>
	);
};

export default StartSearch;
