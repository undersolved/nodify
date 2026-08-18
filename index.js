const express = require("express");
require("dotenv/config");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		message: `Your server is up and running.`,
	});
});

app.listen(PORT, () => {
	console.log(`Your app is running on ${PORT}`);
});
