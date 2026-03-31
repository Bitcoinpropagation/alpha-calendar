// Cloudflare Pages Function - 获取历史空投数据
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

  const historyData = [
    { token: 'EDGE', name: 'edgeX', points: 242, amount: '1.5万份', price: 66, priceUsd: 43.5, mc: '229.7M', date: '03-31' },
    { token: 'BASED', name: 'Based', points: 241, amount: '3.1万份', price: 320, priceUsd: 33.9, mc: '24.9M', date: '03-30' },
    { token: 'R2', name: 'R2 Protocol', points: 252, amount: '1.3万份', price: 750, priceUsd: 6.6, mc: '943.9K', date: '03-30' },
    { token: 'TRADOOR', name: 'TRADOOR', points: 242, amount: '1.7万份', price: 14, priceUsd: 42.2, mc: '43.1M', date: '03-26' },
    { token: 'PRL', name: 'Perle', points: 242, amount: '2.1万份', price: 485, priceUsd: 71.9, mc: '26.0M', date: '03-25', tag: 'TGE' },
    { token: 'AIA', name: 'AIA', points: 251, amount: '0.8万份', price: 335, priceUsd: 35.4, mc: '19.9M', date: '03-24' },
    { token: 'SIGMA', name: 'Sigma', points: 251, amount: '0.8万份', price: 375, priceUsd: 30.6, mc: '17.2M', date: '03-24' },
    { token: 'CYS', name: 'CYS', points: 240, amount: '1.7万份', price: 60, priceUsd: 20.0, mc: '54.8M', date: '03-20' },
    { token: 'IN', name: 'IN', points: 240, amount: '0.8万份', price: 470, priceUsd: 26.3, mc: '17.0M', date: '03-19' },
    { token: 'BLUAI', name: 'BLUAI', points: 240, amount: '0.8万份', price: 5000, priceUsd: 29.9, mc: '7.4M', date: '03-19' },
    { token: 'KAT', name: 'Katana', points: 241, amount: '1.5万份', price: 6814, priceUsd: 71.0, mc: '24.4M', date: '03-16', tag: 'Pre-TGE' },
    { token: 'UP', name: 'Unitas', points: 226, amount: '3.1万份', price: 327, priceUsd: 51.1, mc: '22.8M', date: '03-13', tag: 'TGE' },
    { token: 'SN3', name: 'Nebula3', points: 241, amount: '1万份', price: 1000, priceUsd: 1.0, mc: '353.6K', date: '03-11' },
    { token: 'LAB', name: 'LAB', points: 241, amount: '1.7万份', price: 207, priceUsd: 43.5, mc: '98.2M', date: '03-10' },
    { token: 'MAGMA', name: 'Magma Finance', points: 241, amount: '1.6万份', price: 320, priceUsd: 39.2, mc: '28.4M', date: '03-06' },
    { token: 'OPN', name: 'Opinion', points: 235, amount: '5万份', price: 100, priceUsd: 17.9, mc: '35.6M', date: '03-05' },
    { token: 'BSB', name: 'Block Street', points: 245, amount: '3.1万份', price: 320, priceUsd: 67.1, mc: '43.8M', date: '03-04' },
    { token: 'ROBO', name: 'Fabric Protocol', points: 240, amount: '3.3万份', price: 600, priceUsd: 13.0, mc: '50.0M', date: '03-04' },
    { token: 'LYN', name: 'LYN', points: 256, amount: '1.6万份', price: 95, priceUsd: 4.7, mc: '12.6M', date: '02-25' },
    { token: 'GUA', name: 'GUA', points: 256, amount: '1.6万份', price: 200, priceUsd: 77.8, mc: '85.5M', date: '02-24' }
  ];

  headers.set('Cache-Control', 'public, max-age=3600');
  
  return new Response(JSON.stringify(historyData), { headers, status: 200 });
}
