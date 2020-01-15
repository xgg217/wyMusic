import { useEffect } from 'react';

/**
 * 滚动条复位
 * @param pagtanme 当前页面的路径
 */

const Index = (pagtanme:string):void => {
  // console.log(pagtanme)
  
  useEffect(() => {
    const root = document.querySelector("#root");
    if(root) {
      // root.scrollIntoView();
      window.scrollTo(0, 0);
    }
  }, [pagtanme])
}

export default Index