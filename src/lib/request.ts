
export async function getRequest(url: string) {
  try {
    const res = await fetch(url); // Use the correct URL
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [] };
  }
}

