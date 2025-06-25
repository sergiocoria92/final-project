export function debounce(fn, delay = 500) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
/*example*/
const previousEmails = ["juan@example.com", "ana@mail.com", "carlos@live.com"];

export function checkDuplicateEmail(email) {
  return previousEmails.includes(email.toLowerCase());
}
