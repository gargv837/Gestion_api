const allowedOrigins = [
  // "http://localhost:3500",
  "http://localhost:3000",
  "https://gestion-bay.vercel.app"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (
      allowedOrigins.indexOf(origin) !== -1
      //! remove in production
      || !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
