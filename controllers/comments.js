const { articlesInfo } = require('../_data/comments');

const comments = (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
};
module.exports = { comments };
