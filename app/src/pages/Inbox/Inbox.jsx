import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmailList } from "../../api/emailApi";
import { InboxHeader } from "./components/InboxHeader/InboxHeader";
import { ShowEmails } from "./components/ShowEmails";
import { getFilteredEmails } from "./utils";
import { EmailCardInfo } from "./components/EmailCardInfo/EmailCardInfo";
import { ShowEmailBody } from "./components/ShowEmailBody/ShowEmailBody";
import { Pagination } from "./components/Pagination/Pagination";
import "./inbox.css";

export function Inbox() {
    
  const [filterRoute, setFilter] = useState("unread");
  const { emails, readEmails, favoritesEmail, bodyStatus } = useSelector(
    (state) => state.email
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmailList({ number: 1 }));
  }, []);

  const memoizedEmail = useMemo(() => emails, [emails]);

  const filteredEmails = getFilteredEmails(memoizedEmail?.list, filterRoute, {
    favoritesEmail,
    readEmails,
  });


  return (
    <div className="inbox">
      <InboxHeader setFilter={setFilter} selectedFilterName={filterRoute} />

      <section className={bodyStatus ? "inbox__main flx" : "inbox__main"}>
        {filteredEmails?.length === 0 && filterRoute === "favorites" && (
          <h3>You have not added Any Emails In Favorites</h3>
        )}

        {filteredEmails?.length > 0 && (
          <ShowEmails>
            {filteredEmails &&
              filteredEmails?.map((email) => {
                return <EmailCardInfo key={email.id} email={email} />;
              })}
          </ShowEmails>
        )}

        {bodyStatus && <ShowEmailBody />}
      </section>
      {filterRoute !== "favorites" && (
        <Pagination totalEmails={memoizedEmail?.total} />
      )}
    </div>
  );
}
