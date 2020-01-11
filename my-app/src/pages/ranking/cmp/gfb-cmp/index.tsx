import React,{ useState, useEffect } from 'react'

import Titles from 'compontes/titles';
import ListCmp from './../gfb-list-cmp';

import { gettToplistTetail } from 'api/rankin/rankin';

interface IProps {
  titles:string
}

interface Lists {
  id:number
  tracks:Array<Tracks> // 歌曲列表
  updateFrequency:string // 更新频率
  coverImgUrl:string // 图片
}

interface Tracks {
  first:string
  second:string
}

const Index: React.FC<IProps> = ({ titles }) => {
  const [lists, setLists] = useState<Lists[]>([]);

  useEffect(() => {
    (async () => {
      const res = await gettToplistTetail();
      console.log(res)
      
      const arr = res.list.filter((item:Array<Lists>, index:number) => {
        if(index <=2) {
          return item
        }
      });
      console.log(arr)
      // 最多6个
      setLists(arr);
    })();
  }, [])

  const listContent = lists.map(item => {
    return (
      <ListCmp
        key={ item.id }
        id={ item.id }
        tracks={ item.tracks } 
        updateFrequency={ item.updateFrequency }
        coverImgUrl={ item.coverImgUrl }></ListCmp>
    )
  })



  return (
    <section>
      <Titles titles={ titles }></Titles>
      <ul>
        { listContent.length && listContent }
      </ul>
    </section>
  )
}

Index.defaultProps= {
  titles: '榜单标题'
}

export default Index
