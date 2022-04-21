import { useDispatch } from "react-redux";
import { emailAddedInFavorites } from "../../../../../reducers/email/emailSlice";

export function AddInFavoriteBtn({emailID}) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(emailAddedInFavorites({ id:emailID }))}
      className="favorite__btn"
    >
      Mark as Favorite
    </button>
  );
}
