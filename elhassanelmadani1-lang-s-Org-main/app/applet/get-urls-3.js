async function getUrls() {
  const urls = [
    "https://ibb.co/prkPjrHn",
    "https://ibb.co/JwyhGL3Y",
    "https://ibb.co/d4CxzN18",
    "https://ibb.co/Z6Sgjs3p"
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const html = await res.text();
      const match = html.match(/https:\/\/i\.ibb\.co\/[^\/]+\/[^"]+/);
      console.log(url, "->", match ? match[0] : "not found");
    } catch (err) {
      console.error(url, err);
    }
  }
}
getUrls();
