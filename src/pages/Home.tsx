import type { FunctionComponent } from "../common/types";
import SearchNav from "../components/SearchNav/SearchNav";

export const Home = (): FunctionComponent => {
	return (
		<div>
			<SearchNav></SearchNav>
		</div>
	);
};
