import express from "express";
import db from "./config/database.js";
import routes from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import fs from "fs";
import https from "https";
import "dotenv/config"; // Import .env file from root folder

const app = express();
try {
  await db.authenticate();
  console.info("Database connected...");
} catch (err) {
  console.error("Error connecting!");
  throw err;
}

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "aejrkfriyrqtl3ndufhruifhWEKFGUUy7tr454y8g5fyqoitfyix48ry137tp",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 100,
      sameSite: "lax",
      secure: false
    },
  })
);

app.use(express.json());
app.use("/", routes);

var use_https = false;

if (use_https){
    const options = {
      key: fs.readFileSync(process.env.SSL_KEY_FILE),
      cert: fs.readFileSync(process.env.SSL_CERT_FILE)
    };

    const server = https.createServer(
      options,
      app
    )

    const port = 443
    server.listen(port, () => console.info("Server listening on port " + port + "..."));
} else {
    const port = 5000;
    app.listen(port, () => console.log('Server running at port ' + port + '...'));
}
