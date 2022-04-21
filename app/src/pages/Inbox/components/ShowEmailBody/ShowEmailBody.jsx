import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { formatDate } from "../EmailCardInfo/utils";
import NoAvatar from "../../../../assets/NoAvatar.png";
import { AddInFavoriteBtn } from "./components/AddInFavoriteBtn";
import "./showemailbody.css";

export function ShowEmailBody() {
  const { bodyStatus, emailBody } = useSelector((state) => state.email);
  const { id, subject, bodyText, date, from } = emailBody;

  const formattedDate = formatDate(date);

  return (
    <div className={bodyStatus ? "email-body" : "display-hidden"}>
      <div className="email-body__header">
        <div className="email-header__left">
          <div className="email-header__image-container">
            <img
              className="email-header__image"
              src={NoAvatar}
              alt={from?.name}
            />
          </div>

          <div className="email-header__info">
            <h2 className="email-header__subject">{subject}</h2>
            <span className="email-header__time">{formattedDate}</span>
          </div>
        </div>

        <div className="email-header__right">
          <AddInFavoriteBtn emailID={id} />
        </div>
      </div>
      <div className="email-body__des">{parse(bodyText)}</div>
    </div>
  );
}
