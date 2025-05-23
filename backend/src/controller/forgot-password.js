import resetPassword from "../services/forgot-password.js";

export async function handleForgotPassword(req, res){
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: "Email and new password are required." });
  }

  try {
    await resetPassword(email, newPassword);
    res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
