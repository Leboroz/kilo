
export async function getRequest(url: string) {
  try {
    const res = await fetch(url); // Use the correct URL
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    json.data = json.data.map((item, i) => item[i + 1])
    return json;
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [] };
  }
}

