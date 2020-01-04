import React, { useEffect } from 'react'

import { getBanner } from 'api/index/index';

const Index: React.FC = () => {

  // 轮播图
  useEffect(() => {
    (async () => {
      const res = await getBanner();
      console.log(res)
    })();
  },[]);

  return (
    <div>
      轮播图
    </div>
  )
}

export default Index
