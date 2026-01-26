const OPENAI_BASE_URL = process.env.OPENAI_API_BASE_URL || "https://api.openai.com/v1";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: "Method Not Allowed",
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: "OpenAI API key missing. Set OPENAI_API_KEY in Netlify environment.",
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: "Invalid JSON body.",
    };
  }

  try {
    const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    return {
      statusCode: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") || "application/json",
      },
      body: text,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error instanceof Error ? error.message : "OpenAI request failed.",
    };
  }
};
