import http from "http";
import app from "./app";

let server = http.createServer(app);
let port: any = process.env.APP_PORT || 3000;

port = (typeof port === "number" && port) || parseInt(port);

export default function start(callBack?: () => void) {
  server.listen(port, () => {
    console.log(`Your app is listening on port ${port}`);
    if (callBack) callBack();
  });
}
