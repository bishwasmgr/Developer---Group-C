// 引入 QRCode 库
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js';
document.head.appendChild(script);

script.onload = () => {
  // 获取当前网站信息
  const url = window.location.href;
  const title = document.title.length > 15 ? document.title.substring(0, 15) + '...' : document.title;
  const hostname = window.location.hostname;

  // 创建二维码容器
  const qrContainer = document.createElement('div');
  qrContainer.style.position = 'fixed';
  qrContainer.style.bottom = '10px';
  qrContainer.style.right = '10px';
  qrContainer.style.zIndex = '1000';
  qrContainer.style.backgroundColor = 'white';
  qrContainer.style.padding = '10px';
  qrContainer.style.border = '1px solid #ccc';
  qrContainer.style.textAlign = 'center';

  // 创建二维码画布
  const qrCanvas = document.createElement('canvas');
  qrCanvas.width = 256;
  qrCanvas.height = 256;
  qrContainer.appendChild(qrCanvas);

  // 创建网站名称和标题
  const siteName = document.createElement('div');
  siteName.textContent = hostname;
  qrContainer.appendChild(siteName);

  const pageTitle = document.createElement('div');
  pageTitle.textContent = title;
  qrContainer.appendChild(pageTitle);

  document.body.appendChild(qrContainer);

  // 生成二维码
  QRCode.toCanvas(qrCanvas, url, { width: 256, height: 256 }, (error) => {
    if (error) console.error(error);
  });
};