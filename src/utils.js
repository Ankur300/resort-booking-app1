export const CALL_API = async ({
    url,
    body,
    method = "GET",
  }) => {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    try {
      const response = await fetch(url, {
        body: body ? JSON.stringify(body) : undefined,
        headers,
        method,
      });
      const data = await response.json();
      if(response.status !== 200) throw Error(data.message);
      return data;
    } catch (err) {
      throw err;
    }
  };