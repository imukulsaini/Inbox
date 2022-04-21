import { useSelector } from "react-redux";

export function ShowEmails({ children }) {
  const { bodyStatus } = useSelector((state) => state.email);
  return (
    <div className={bodyStatus ? "show-emails width-50 " : "show-emails"}>
      {children}
    </div>
  );
}
