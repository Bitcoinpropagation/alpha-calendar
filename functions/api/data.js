// Cloudflare Pages Function - 获取今日空投数据
export async function onRequest(context) {
  // 设置 CORS 头
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
    // 从 alpha123.uk 获取数据
    const response = await fetch('https://alpha123.uk/api/data?fresh=1', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // 缓存 1 分钟
    headers.set('Cache-Control', 'public, max-age=60');
    
    return new Response(JSON.stringify(data), { headers, status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    
    // 返回空数据
    const fallbackData = {
      airdrops: [],
      alpha_checkins: [
        { key: 'today', count: 0 },
        { key: 'yesterday', count: 0 },
        { key: 'before_yesterday', count: 0 }
      ],
      error: error.message
    };
    
    return new Response(JSON.stringify(fallbackData), { headers, status: 200 });
  }
}
