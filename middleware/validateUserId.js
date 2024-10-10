// middleware/validateUserId.js
const validateUserId = (req, res, next) => {
  const { userId } = req.body;

  // Check if userId is provided
  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  // If userId is present, proceed to the next middleware or controller
  next();
};

module.exports = validateUserId;