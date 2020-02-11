import React, { useState, useEffect }  from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import HeadImgCmp from './cmp/imgbgc-cmp';
import MainCmp from './cmp/main-cmp';

import useScrollTop from 'compontes/useScrollTop';

import { getList  } from 'api/lists/index';
import { IAllCount } from './type';
import { setTextLength, getlength, beautySub } from 'utils/fzm'

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
      const newTracks:any[] = data.tracks;
      // setAllCount(data.tracks);

      const newTracksArr = newTracks.map((item, index) => {

        // 歌唱者
        const ar = item.ar.map((item:any) => {
          return item.name
        });

        // 歌曲名字
        const name = beautySub(item.name, 13);
        // 歌曲原唱
        const alia = setAliaText(name, item.alia.join(' '), 16);

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

  /**
   * 返回歌曲原唱
   * @param name 歌曲名字
   * @param alia 歌曲原唱
   * @param len  歌曲名字 + 歌曲原唱 最大字长度
   */
  const setAliaText = (name:string, alia:string, len:number):string => {
    // 歌曲名字已经出现了 省略号
    if(name.includes('...')) {
      return '';
    }

    // 没有原唱
    if(!alia.length) {
      return '';
    }

    // 原唱 + 歌曲名字 在容器中可以一起存在
    const nameLen = getlength(name);
    const aliaLen = getlength(alia); // 原唱长度
    if ((len - nameLen) >= aliaLen) {
      console.log(alia)
      return `(${alia})`
    } else {
      return `(${beautySub(name, (len - nameLen - 4))}`;
    }
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