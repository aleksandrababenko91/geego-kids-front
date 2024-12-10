 import createNextIntlPlugin from 'next-intl/plugin';

 const withNextIntl = createNextIntlPlugin()

 /** @type {import('next').NextConfig} */
 const nextConfig = {};

 export default withNextIntl(nextConfig);


// //2 variant for proxy
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'https://kehitys.geegokids.com/:path*', // Ваш API-сервер
//       },
//     ];
//   },
// };

// export default nextConfig;
