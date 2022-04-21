export function formatDate(ms) {
  const newDate = new Date(ms);
  return newDate.toLocaleString();
}

export function styleEmailCard(emailID, emailReadStatus, body, emailBodyID) {
  let style = "email__container";
  if (body && emailBodyID === emailID) {
    style = `${style} border-highlight`;
  }
  if (!emailReadStatus) {
    style = `${style} unread`;
  }

  return style;
}

export function checkEmailReadStatus(emailID, emails) {
  return emails?.includes(emailID);
}
export function checkEmailFavoriteStatus(emailID, emails) {
  return emails?.includes(emailID);
}
