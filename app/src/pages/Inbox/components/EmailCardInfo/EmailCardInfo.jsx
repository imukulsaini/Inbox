import { useDispatch, useSelector } from "react-redux";
import { getEmailBody } from "../../../../api/emailApi";
import { emailIsOpened } from "../../../../reducers/email/emailSlice";
import NoAvatar from "../../../../assets/NoAvatar.png";
import "./emailcardInfo.css";

import {
  checkEmailFavoriteStatus,
  checkEmailReadStatus,
  formatDate,
  styleEmailCard,
} from "./utils";

export function EmailCardInfo({ email }) {
  const { id, subject, from, date, short_description } = email;

  const { readEmails, favoritesEmail, emailBody, bodyStatus } = useSelector(
    (state) => state.email
  );

  const dispatch = useDispatch();

  const hasEmailRead = checkEmailReadStatus(id, readEmails);
  const isEmailInFavorite = checkEmailFavoriteStatus(id, favoritesEmail);

  const formattedDate = formatDate(date);
  return (
    <div
      onClick={() => {
        emailBody?.id !== id && dispatch(getEmailBody({ id }));
        dispatch(emailIsOpened({ id }));
      }}
      className={styleEmailCard(id, hasEmailRead, bodyStatus, emailBody?.id)}
    >
      <div className="email__avatar">
        <img alt={from?.name} className="avatar-image" src={NoAvatar} />
      </div>

      <div className="email__right">
        <span className="email__address">
          From :
          <strong className="highlight__info">
            {from?.name} {from?.email}
          </strong>
        </span>

        <span className="email__subject">
          Subject : <strong className="highlight__info">{subject}</strong>
        </span>

        <p className="email__des">{short_description}</p>

        <div className="email__footer">
          <span className="email__date">{formattedDate}</span>
          {isEmailInFavorite && (
            <span className="email__isfavorite">Favorite</span>
          )}
        </div>
      </div>
    </div>
  );
}
