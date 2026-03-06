const config = {
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "fallback-secret",
  nodeEnv: process.env.NODE_ENV || "development",
};

module.exports = { config };
