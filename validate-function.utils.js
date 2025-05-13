export function validateEmail(email) {
  if (!email.trim()) return "Email is required";
  if (email && !email.includes("@")) return "Email is invalid";
  return null;
}
