import RepoList from "../RepoList/RepoList";
import MyImage from "../ui/image/MyImage";
import type { HasRepoProps } from "./HasRepoDataTypes";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import { useState } from "react";

const reposPerPage = 4;

const HasRepo: React.FC<HasRepoProps> = ({ quantity, repos }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages: number = Math.ceil(quantity / reposPerPage);

	const firstReposItemList: number = reposPerPage * (currentPage - 1) + 1;
	const lastReposItemList: number = Math.min(
		reposPerPage * currentPage,
		quantity
	);

	const currentRepos = repos.slice(
		(currentPage - 1) * reposPerPage,
		currentPage * reposPerPage
	);

	const handlePreviousPage = (): void => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = (): void => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const renderPageNumbers = (): Array<JSX.Element> => {
		const pages = [];
		const maxVisiblePages = 2;
		const totalPagesToShow = maxVisiblePages * 2;
		const nextMore = <div key="nextMore">...</div>;
		const previousMore = <div key="previousMore">...</div>;

		if (totalPages <= totalPagesToShow) {
			for (let index = 1; index <= totalPages; index++) {
				pages.push(
					<div
						key={index}
						className={`cursor-pointer ${
							index === currentPage
								? "bg-blue-700 text-white"
								: "text-slate-400"
						} px-2 py-1 rounded-md`}
						onClick={(): void => {
							setCurrentPage(index);
						}}
					>
						{index}
					</div>
				);
			}
			return pages;
		}

		//* первая страница фиксирована
		pages.push(
			<div
				key={1}
				className={`cursor-pointer ${
					1 === currentPage ? "bg-blue-700 text-white" : "text-slate-400"
				} px-2 py-1 rounded-md`}
				onClick={(): void => {
					setCurrentPage(1);
				}}
			>
				1
			</div>
		);

		//? "..." если далеко от начала
		if (currentPage > maxVisiblePages ** 2) {
			pages.push(previousMore);
		}

		const startPage = Math.max(2, currentPage - maxVisiblePages);
		const endPage = Math.min(totalPages, currentPage + maxVisiblePages);

		for (let index = startPage; index < endPage; index++) {
			pages.push(
				<div
					key={index}
					className={`cursor-pointer ${
						index === currentPage ? "bg-blue-700 text-white" : "text-slate-400"
					} px-2 py-1 rounded-md`}
					onClick={(): void => {
						setCurrentPage(index);
					}}
				>
					{index}
				</div>
			);
		}

		//? "..." если далеко до конца
		if (currentPage < totalPages - maxVisiblePages) {
			pages.push(nextMore);
		}

		//* последняя страница фиксирована
		pages.push(
			<div
				key={totalPages}
				className={`cursor-pointer ${
					totalPages === currentPage
						? "bg-blue-700 text-white"
						: "text-slate-400"
				} px-2 py-1 rounded-md`}
				onClick={(): void => {
					setCurrentPage(totalPages);
				}}
			>
				{totalPages}
			</div>
		);
		return pages;
	};

	return (
		<div className="flex flex-col gap-6 ">
			<div className="font-semibold text-3xl">Repositories ({quantity})</div>
			<div>
				<div className="flex flex-col gap-2">
					<RepoList repos={currentRepos} />
				</div>
			</div>

			<div className="flex justify-end gap-6">
				<div>
					{firstReposItemList}-{lastReposItemList} of {quantity} items
				</div>
				<div className="flex items-center gap-4">
					<div className="cursor-pointer" onClick={handlePreviousPage}>
						<MyImage alt="ArrowLeft" url={arrowLeft} />
					</div>
					<div className="flex gap-4">{renderPageNumbers()}</div>
					<div className="cursor-pointer" onClick={handleNextPage}>
						<MyImage alt="ArrowRight" url={arrowRight} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HasRepo;
