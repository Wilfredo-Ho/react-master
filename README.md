# react-master
masterpieces build with react

---
### Library
* react
* react-router-dom
* antd
* axios

---
### Main Function
  * CRUD
  * Routine on BMap
  * Tree
  * Charts


---
 * 优化菜单，手风琴
 * 开发定位
 * json数据
 * redux 管理数据：
    1. 全局高度


--- 
### 爬坑指南
1. 同时引用router和redux，路由切换时route不渲染
  > 这是因为redux的connect等方法修改了componentShouldUpdate方法，所以需要将connect外层用withRouter包裹起来。

2. 百度地图引入时， 报错: *BMap is not defined*

  ```
    //react-scripts/config/
    performance: {
      hints: false,
    },
    externals: {
      'BMap': 'BMap'
    }

    //需要引入的页面
    import BMap from 'BMap'

    let map = new BMap.Map(this.refs.map);
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  ```
