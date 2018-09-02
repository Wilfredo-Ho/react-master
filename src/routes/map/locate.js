import React, {Component} from 'react';
import BMap from 'BMap';
import { resolve } from 'path';
import { message } from 'antd';

let map = null;
class Locate extends Component {
    callback (data) {
        console.log(data)
        if(data.status === 0) {
            var marker = new BMap.Marker(data.points[0]);
            map.addOverlay(marker);
            map.setCenter(data.points[0]);
             //地址逆解析
            let geoc = new BMap.Geocoder(); 
            geoc.getLocation(data.points[0], function(rs){
                console.log(rs);
                var label = new BMap.Label(rs.address ,{offset:new BMap.Size(20,-10)});
                marker.setLabel(label); //添加百度label
            });
        }
    }

    componentDidMount () {
        map = new BMap.Map(this.refs.map);
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.enableScrollWheelZoom(true);
       
        //定位，百度地图定位不准确
        let geolocation = new BMap.Geolocation();
        let self = this;
        geolocation.getCurrentPosition(function(res) {
            console.log(res, this.getStatus())
            if(this.getStatus() === 0) {
                // 未转换坐标
                let originPoint = res.point;
                let convertor = new BMap.Convertor();
                convertor.translate([originPoint], 1, 5, self.callback);
                
            } else {
                message.error('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true, maximumAge: 0});

    }

    render() {
        return (
            <div ref="map" className="page"></div>
        );
    }
}

export default Locate;