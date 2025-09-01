"use client";
import { Pagination } from "antd";
import { useFilter } from "@/hooks/useFilter";

interface PageProps {
  limit: number;
  total: number;
}

const CategoryPagination = ({ limit, total }: PageProps) => {
  const { page, changePage } = useFilter();

  return (
    <div className="flex items-center justify-center">
      <Pagination
        current={page}
        total={total}
        pageSize={limit}
        onChange={changePage}
        className="custom-pagination"
      />
    </div>
  );
};

export default CategoryPagination;
