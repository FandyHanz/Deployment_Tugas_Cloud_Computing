module.exports = (req, res) => {
  // Requirement: Mengambil nilai dari Environment Variable
  const appOwner = process.env.APP_OWNER || "Mahasiswa Polinema";
  const appVersion = process.env.APP_VERSION || "1.0.0";

  res.status(200).send(`
    <h1>Tugas 6: Cloud Deployment Berhasil!</h1>
    <p>Owner: <b>${appOwner}</b></p>
    <p>Version: <b>${appVersion}</b></p>
  `);
};