import http from "http";
import os from "os";
const PORT = process.env.PORT || 8080;
const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <html>
      <head>
        <title>Dockerized Node.js App</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            background: #f9f9f9; 
            display: flex; 
            height: 100vh; 
            justify-content: center; 
            align-items: center; 
            flex-direction: column;
          }
          h1 { color: #333; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <h1>Hello from Dockerized Node.js App!</h1>
        <p>Running on host: <b>${os.hostname()}</b></p>
        <p>Environment: <b>${process.env.NODE_ENV || "development"}</b></p>
      </body>
    </html>
  `);
};
 
const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Host: ${os.hostname()} | Environment: ${process.env.NODE_ENV || "development"}`);
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM, shutting down gracefully...");
  server.close(() => process.exit(0));
});
