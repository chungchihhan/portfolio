/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // 來源：當使用者造訪 chih-han.com/blog 時
        source: "/blog",
        // 目標：重新導向到您的 HackMD 網址
        destination: "https://hackmd.io/@chih-han",
        // 狀態：設定為 true 會傳回 HTTP 301 狀態碼 (永久轉址)，對 SEO 最好
        permanent: true,
      },
      // (可選) 處理 /blog/ 之後的任何路徑，全部導回 HackMD 主頁
      {
        source: "/blog/:path*",
        destination: "https://hackmd.io/@chih-han",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
