import { MenuItem, Pagination, Select, Stack } from "@mui/material";
import { useEffect, useState } from "react";

interface PageDataProps {
	currentPage: number;
	rowsPerPage: number;
}

interface TablePaginationProps {
	dataNum: number;
	pageData: PageDataProps;
	setPageData: React.Dispatch<React.SetStateAction<PageDataProps>>;
}

const TablePagination = ({
	dataNum,
	pageData,
	setPageData,
}: TablePaginationProps) => {
	// useEffect(() => {}, []);
	const [totalPageNum, setTotalPageNum] = useState<number>(0);

	useEffect(() => {
		if (dataNum % pageData.rowsPerPage == 0) {
			setTotalPageNum(dataNum / pageData.rowsPerPage);
		} else {
			setTotalPageNum(Math.floor(dataNum / pageData.rowsPerPage) + 1);
		}
	}, [pageData.rowsPerPage, dataNum]);

	return (
		<Stack
			direction="row"
			alignItems="center"
			display="flex"
			justifyContent="center"
			sx={{ p: 2, position: "relative" }}
		>
			<Select
				variant="standard"
				value={pageData.rowsPerPage}
				disableUnderline={true}
				onChange={(e) => {
					setPageData({
						...pageData,
						currentPage: 1,
						rowsPerPage: Number(e.target.value),
					});
				}}
				sx={{ width: "fit-content", position: "absolute", left: "16px" }}
			>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={25}>25</MenuItem>
				<MenuItem value={50}>50</MenuItem>
			</Select>

			<Pagination
				showFirstButton
				showLastButton
				count={totalPageNum}
				page={pageData.currentPage}
				shape="rounded"
				onChange={(e, value) => {
					setPageData({
						...pageData,
						currentPage: value,
						rowsPerPage: pageData.rowsPerPage,
					});
				}}
				siblingCount={3}
				color="primary"
			/>
		</Stack>
	);
};
export default TablePagination;
