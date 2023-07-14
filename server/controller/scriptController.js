const { Configuration, OpenAIApi } = require("openai");

exports.creatScript = async (req, res) => {
  //API_KEY configuration on open api
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openAi = new OpenAIApi(config);
  const { formData } = req.body;
  console.log(formData);
  const query = `write a full movie script with seperate scenes which contains plot is ${formData.plot} and genre is ${formData.genre} `;

  try {
    const response = await openAi.createCompletion({
      model: "text-davinci-003",
      max_tokens: 1000,
      temperature: 0,
      prompt: query,
    });
    res.send(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
};
