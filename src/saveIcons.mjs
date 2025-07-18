import http from "http";
import icons from "./allSvgs.js";
import { writeFile } from "fs/promises";

const server = http.createServer( async (req, res) => {
	if (req.method === "POST"  && req.url === "/write-file") {
		let body = "";
		req.on("data", chunk => (body += chunk));
		req.on("end", async () => {
			const {iconPaths, icon} = JSON.parse(body);
			const newObj = {[icon] : iconPaths}
			// const readFi = readFile("allSvgs.js");
			console.log(Object.assign(icons, newObj));
			await writeFile("allSvgs.js", `const icons = ${JSON.stringify(Object.assign(icons, newObj))};\nexport default icons`);
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end("File Written")
		})
		
	} else {
		res.writeHead(404);
		res.end("Not found");
	}
})

server.listen(4000, () => {console.log("server in listening at port 4000")})
