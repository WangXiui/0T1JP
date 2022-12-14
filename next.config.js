/**
* @name: next.config
* @description：next.config
* @author: wkk
* @date: 2022-11-06
*/

module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
}
