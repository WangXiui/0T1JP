/**
* @name: about
* @description：about
* @author: wkk
* @date: 2022-11-06
*/
export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: true, // triggers 308
    },
  };
}
