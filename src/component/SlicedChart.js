import React,{Component} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

var divStyle = {
  height:"100%"
 };
class SlicedChart extends Component {

    componentDidMount() {
        let chart = am4core.create("Slicedchartdiv", am4charts.SlicedChart);
        chart.data = [{
            "name": "Stage #1",
            "value": 600
          }, {
            "name": "Stage #2",
            "value": 300
          }, {
            "name": "Stage #3",
            "value": 200
          }, {
            "name": "Stage #4",
            "value": 180
          }, {
            "name": "Stage #5",
            "value": 50
          }, {
            "name": "Stage #6",
            "value": 20
          }, {
            "name": "Stage #7",
            "value": 10
          }];
          let series = chart.series.push(new am4charts.FunnelSeries());
          series.dataFields.value = "value";
          series.dataFields.category = "name";

        }
              render() {
                return (
                    <div id="Slicedchartdiv" style={divStyle} ></div>
                );
              }
}
export default SlicedChart