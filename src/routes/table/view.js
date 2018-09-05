import React, {Component} from 'react';
import {Button, Table} from 'antd'; 
import "./view.css";

const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name', },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '地址', dataIndex: 'address', key: 'address'},
];

const data = [];
for(let i = 0; i< 20; i++){
    data.push({
        key: i,
        name: `张 ${i} 风`,
        age: 20,
        address: `天津市西青区中${i}路`
    });
}

export default class View extends Component {
    constructor (props) {
        super(props);
        this.state = {
            columns: 3,
            rows: 10,
            columnsArr: [],
            rowsArr: []
        };
        // this.setRows = this.setRows.bind(this);
        // this.setColumns = this.setColumns.bind(this);
        // this.setAll = this.setAll.bind(this);
    }

    componentWillMount () {
        for (let i = 0; i<this.state.rows; i++) {

        }
    }


    render() {
        return (
        <div>
            <div className="btn-group">
                <Button type="primary">基本数据</Button>
                <Button>多列数据</Button>
                <Button>多行数据</Button>
                <Button>海量数据</Button>
            </div>
            <div className="table-wpt">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
        );
    }
} 