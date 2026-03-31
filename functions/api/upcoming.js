// Cloudflare Pages Function - 获取预告空投数据
export async function onRequest(context) {
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  });

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers, status: 200 });
  }

  try {
    const response = await fetch('https://alpha123.uk/api/upcoming?fresh=1', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (response.ok) {
      const data = await response.json();
      headers.set('Cache-Control', 'public, max-age=300');
      return new Response(JSON.stringify(data), { headers, status: 200 });
    }
  } catch (error) {
    console.error('Error fetching upcoming:', error);
  }

  // 返回空数组
  return new Response(JSON.stringify([]), { headers, status: 200 });
}
