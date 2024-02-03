export const playlistId = "PLvtUcr-iolHajTv-6vIDR-xhu3gWjR2mL"
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${process.env.GOOGLE_API_KEY}`;

export const GET = async () => {
    if (!process.env.GOOGLE_API_KEY) {
    return new Response("No API key found.", { status: 500 });
  }

  try {
    const res = await fetch(URL);
    const data = await res.json();
    
    console.log("api response: ", data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log("api error: ", error);
    return new Response(`Failed to load playlist: ${error}`, { status: 200 })
  }
};