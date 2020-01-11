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
  id:number
  third?:number
}

interface SongsItem {
  name:string
  id?:number
}


const Index: React.FC<IProps> = ({ titles }) => {
  const [lists, setLists] = useState<Lists[]>([]);

  useEffect(() => {
    (async () => {
      const res = await gettToplistTetail();
      console.log(res)

      const arrOne:Array<Lists> = [];

      res.list.forEach((item:Lists, index:number) => {
        if(index <= 3) {
          const arr = item.tracks.map((key,index) => {
            return {
              id: item.id + index + 10,
              first: key.first,
              second: key.second
            }
          });
          const obj = {
            id: item.id,
            updateFrequency: item.updateFrequency,
            coverImgUrl: item.coverImgUrl,
            tracks: arr
          }
          arrOne.push(obj);
        }
      })

      // 2
      const artistsTwo = res.artistToplist.artists.map((item:Tracks) => {
        return {
          first: item.first,
          second: item.second,
          id: item.third
        }
      });
      const newArtistTopTwo = {
        id: res.artistToplist.position,
        coverImgUrl: res.artistToplist.coverUrl,
        tracks: artistsTwo,
        updateFrequency: ''
      };

      // 3
      const tracks = res.rewardToplist.songs.map((item:SongsItem) => {
        return {
          first: item.name,
          second: '',
          id: item.id
        };
      })

      const newRewardToplist = {
        tracks,
        id: res.rewardToplist.position,
        coverImgUrl: res.rewardToplist.coverUrl,
        updateFrequency: res.rewardToplist.updateFrequency
      }

      const arr = [...arrOne, newArtistTopTwo, newRewardToplist];

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
