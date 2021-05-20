import md5 from "md5";

const gravatar = (email) => {
  const base = "https://www.gravatar.com/avatar/";
  const formmattedEmail = email.trim().toLowerCase();
  const hash = md5(formmattedEmail, { encoding: "binary" });
  return `${base}${hash}`;
};

export default gravatar;
