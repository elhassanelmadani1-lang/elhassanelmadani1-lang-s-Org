async function getUrls() {
  const urls = [
    "https://ibb.co/v6hN7qs7",
    "https://ibb.co/LzSqBHdY",
    "https://ibb.co/6RCNzvGz",
    "https://ibb.co/6RN11Tp3",
    "https://ibb.co/0pjmSLZ1",
    "https://ibb.co/wFhxgt7n",
    "https://ibb.co/pgsPctW"
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
