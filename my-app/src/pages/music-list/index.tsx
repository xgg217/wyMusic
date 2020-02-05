import React, { useState, useEffect }  from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import HeadImgCmp from './cmp/imgbgc-cmp';
import MainCmp from './cmp/main-cmp';

import useScrollTop from 'compontes/useScrollTop';

import { getList  } from 'api/lists/index';
import { IAllCount } from './type';
import { setTextLength, getlength } from 'utils/fzm'

interface IProps extends RouteComponentProps {

}

interface IParams {
  id?:string
}

const Index: React.FC<IProps> = ({ history, location, match }) => {
  const [titleanme, setTitleanme] = useState<string>(''); // 标题
  const [description, setDescription] = useState<string>(''); // 提示
  const [updataTime, setUpdataTime] = useState<number>(0); // 更新日期
  const [coverImgUrl, setCoverImgUrl] = useState<string>(''); // 海报图片
  const [shareCount, setShareCount] = useState<number>(0); // 分享次数
  const [commentCount, setCommentCount] = useState<number>(0); // 评论次数

  const [subscribedCount, setSubscribedCount] = useState<number>(0)// 收藏次数
  const [allCount, setAllCount] = useState<IAllCount[]>([])// 全部歌曲

  // 滚动条复原
  useScrollTop(location.pathname);

  const obj:IParams = match.params;

  useEffect(() => {
    (async () => {
      const res = await getList(obj.id);
      console.log(res)

      const data = res.playlist;

      setTitleanme(data.name); // 标题
      setDescription(data.description);

      setUpdataTime(data.updateTime); // 更新日期

      setCoverImgUrl(data.coverImgUrl); // 海报图片

      setShareCount(data.shareCount);

      setCommentCount(data.commentCount);

      setSubscribedCount(data.subscribedCount);
      console.log(data.subscribedCount)
      console.log(data.tracks)
      const newTracks:any[] = data.tracks;
      // setAllCount(data.tracks);

      const newTracksArr = newTracks.map((item, index) => {

        // 歌唱者
        const ar = item.ar.map((item:any) => {
          return item.name
        })

        // const ar = ar.jion('/')
        console.log(item.alia.join(' '))
        // debugger
        const alia = setTextLen(item.al.name, item.alia.join(' '), 7);
        console.log(alia)

        const name = setTextLength(item.name, 10);



        return {
          id: item.id,
          name,
          index,
          ratio: data.trackIds[index].ratio || 0,
          ar: ar.join('/'),
          al: item.al.name,
          alia,
        };
      });
      setAllCount(newTracksArr);
    })();
  }, [obj.id]);

  // 返回上一页
  const goNextPage = () => {
    history.goBack();
  }

  // 提示
  const toastClick = () => {
    Toast.info(description, 2);
  };

  // 判断字体个数，当超过出现省略号
  const setTextLen = (str1:string, str2:string, len:number):string => {
    // debugger
    const str1Len = getlength(str1);
    // debugger
    const str2Len = getlength(str2);
    // 歌曲名字太长
    if(str1Len > len) {
      return '';
    }

    // 没有原唱
    if(str2Len === 0) {
      return ''
    }

    //
    const textLen = str1Len + str2Len;
    if(textLen <= len) {
      // 不出出现省略号
      return `(${str2})`;
    }

    return `(${setTextLength(str2, (len - textLen))})`;
  };

  return (
    <section>
      {/* 头部信息 */}
      <HeadImgCmp
        titleanme={ titleanme }
        updataTime={ updataTime }
        coverImgUrl={ coverImgUrl }
        shareCount={ shareCount }
        commentCount={ commentCount }
        goNextPage={ goNextPage }
        toastClick={ toastClick }
        ></HeadImgCmp>
      {/* 歌曲信息 */}

      <MainCmp
        subscribedCount={ subscribedCount }
        allCount={ allCount }
        ></MainCmp>

    </section>
  )
}

export default withRouter(Index)