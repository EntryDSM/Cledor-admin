export const toEmail = (url: string) => {
  return url.replace('-', '.');
};

export const toUrl = (email: string) => {
  return email.replace('.', '-');
};
