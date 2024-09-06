const http = require("http");
const port = 3000;
const server = http.createServer(
    (req, res) => {
        res.setHeader("Content-Type", "text/html");
        if (req.url === "/") {
            res.writeHead(200);
            res.end(`
                <html>
                    <head><title>Home</title></head>
                    <body>
                        <h1>Home page</h1>
                        <a href="/about">Go to About page</a>
                    </body>
                </html>
            `);
        } else if (req.url === "/about") {
            res.writeHead(200);
            res.end(`
                <html>
                    <head><title>About</title></head>
                    <body>
                        <h1>About page</h1>
                        <a href="/">Back to Home</a>
                    </body>
                </html>
            `);
        } else {
            res.writeHead(404);
            res.end(`
                <html>
                    <head><title>404 - Not Found</title></head>
                    <body>
                        <h1>404 - Page not found</h1>
                        <a href="/">Back to Home</a>
                    </body>
                </html>
            `);
        }
    }
);

server.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
