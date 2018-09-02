export default [
    {
        key: '/', title: '首页', icon: 'home', component: 'Home'
    }, 
    {
        key: '/table', title: '表格组件', icon: 'table',
        children: [
            { key: '/table/view', title: '基本使用', component: 'TableView'}
        ]
    }, 
    {
        key: '/map', title: '地图组件', icon: 'environment',
        children: [
            { key: '/map/locate', title: '当前定位', component: 'MapLocate'}
        ]
    }, 
    {
        key: '/tree', title: '树组件', icon: 'fork',
        children: [
            { key: '/tree/view', title: '基本使用', component: 'TreeView'}
        ]
    }, 
    {
        key: '/exception', title: '异常页', icon: 'warning',
        children: [
            { key: '/exception/403', title: '403', component: 'Page403'},
            { key: '/exception/404', title: '404', component: 'Page404'},
            { key: '/exception/500', title: '500', component: 'Page500'}
        ]
    }
];