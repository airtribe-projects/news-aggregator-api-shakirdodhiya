const axios = require('axios');

exports.getNews = async (preferences) => {
  const preferences_str = preferences.join(' OR ');

  const url = `https://newsapi.org/v2/everything?q=${preferences_str}`;

  const res = await axios({
    url,
    headers : {
      'Authorization' : process.env.NEWS_API_KEY
    }
  })

  return res.data
}
