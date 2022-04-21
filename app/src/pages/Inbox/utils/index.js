
export function getFilteredEmails(
  emailList,
  value,
  { favoritesEmail, readEmails }
) {
  // make sure readEmails and favoritesEmail are not undefined

  // filter the favorites emails
  if (value === "favorites" && emailList && favoritesEmail !== undefined) {
    const getEmails = emailList?.filter((email) =>
      favoritesEmail.includes(email.id)
    );
    return Array.from(new Set([...getEmails]));
  }

  // filter the read emails

  if (value === "read" && emailList) {
    const getEmail = emailList?.filter((email) =>
      readEmails.includes(email.id)
    );

    return Array.from(new Set([...getEmail, ...emailList]));
  }
  // filter the unread emails

  if (value === "unread" && emailList) {
    const getEmail = emailList?.filter(
      (email) => !readEmails.includes(email.id)
    );

    return emailList && Array.from(new Set([...getEmail, ...emailList]));
  }
}
