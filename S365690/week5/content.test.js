// 引入 Jest 和 jsdom
const { JSDOM } = require('jsdom');

describe('QRCode Generation', () => {
  let dom;
  let window;
  let document;

  beforeAll((done) => {
    // 创建一个新的 JSDOM 实例
    dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, {
      runScripts: 'dangerously',
      resources: 'usable',
    });
    window = dom.window;
    document = window.document;

    // 模拟加载 QRCode 库
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js';
    document.head.appendChild(script);

    script.onload = () => {
      done();
    };
  });

  it('should create a QR code container with the correct elements', (done) => {
    // 模拟 window.location 和 document.title
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com',
        hostname: 'example.com',
      },
      writable: true,
    });
    Object.defineProperty(document, 'title', {
      value: 'Example Title',
      writable: true,
    });

    // 执行 QRCode 生成代码
    const script = document.createElement('script');
    script.textContent = `
      const url = window.location.href;
      const title = document.title.length > 15 ? document.title.substring(0, 15) + '...' : document.title;
      const hostname = window.location.hostname;

      const qrContainer = document.createElement('div');
      qrContainer.style.position = 'fixed';
      qrContainer.style.bottom = '10px';
      qrContainer.style.right = '10px';
      qrContainer.style.zIndex = '1000';
      qrContainer.style.backgroundColor = 'white';
      qrContainer.style.padding = '10px';
      qrContainer.style.border = '1px solid #ccc';
      qrContainer.style.textAlign = 'center';

      const qrCanvas = document.createElement('canvas');
      qrCanvas.width = 256;
      qrCanvas.height = 256;
      qrContainer.appendChild(qrCanvas);

      const siteName = document.createElement('div');
      siteName.textContent = hostname;
      qrContainer.appendChild(siteName);

      const pageTitle = document.createElement('div');
      pageTitle.textContent = title;
      qrContainer.appendChild(pageTitle);

      document.body.appendChild(qrContainer);

      QRCode.toCanvas(qrCanvas, url, { width: 256, height: 256 }, (error) => {
        if (error) console.error(error);
      });
    `;
    document.head.appendChild(script);

    // 等待 QRCode 生成完成
    setTimeout(() => {
      const qrContainer = document.querySelector('div');
      expect(qrContainer).not.toBeNull();
      expect(qrContainer.style.position).toBe('fixed');
      expect(qrContainer.style.bottom).toBe('10px');
      expect(qrContainer.style.right).toBe('10px');
      expect(qrContainer.style.zIndex).toBe('1000');
      expect(qrContainer.style.backgroundColor).toBe('white');
      expect(qrContainer.style.padding).toBe('10px');
      expect(qrContainer.style.border).toBe('1px solid #ccc');
      expect(qrContainer.style.textAlign).toBe('center');

      const qrCanvas = qrContainer.querySelector('canvas');
      expect(qrCanvas).not.toBeNull();
      expect(qrCanvas.width).toBe(256);
      expect(qrCanvas.height).toBe(256);

      const siteName = qrContainer.querySelector('div:nth-child(2)');
      expect(siteName).not.toBeNull();
      expect(siteName.textContent).toBe('example.com');

      const pageTitle = qrContainer.querySelector('div:nth-child(3)');
      expect(pageTitle).not.toBeNull();
      expect(pageTitle.textContent).toBe('Example Title');

      done();
    }, 1000);
  });
});