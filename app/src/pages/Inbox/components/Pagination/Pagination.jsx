import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEmailList } from "../../../../api/emailApi";
import { calTotalPagesNumber } from "./utils";

export function Pagination({ totalEmails }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const totalPageCount = calTotalPagesNumber(totalEmails);

  return (
    <div className="email__page-actions">
      {totalPageCount.map((text, index) => {
        const isPageSelected = text === currentPage ? true : false;
        return (
          <button
            key={index}
            className={
              isPageSelected ? "page__btn page__btn-selected " : "page__btn"
            }
            onClick={() => {
             currentPage !== text && dispatch(getEmailList({ number: text }));
              setCurrentPage(text);
            }}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}
