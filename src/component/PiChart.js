import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
var divStyle = {
  height:"100%"
 };
class PiChart extends Component {
    componentDidMount() {

        let chart = am4core.create("Pichartdiv", am4charts.PieChart);
        chart.data = [{
            "country": "Lithuania",
            "litres": 501.9
          }, {
            "country": "Czech Republic",
            "litres": 301.9
          }, {
            "country": "Ireland",
            "litres": 201.1
          }, {
            "country": "Germany",
            "litres": 165.8
          }, {
            "country": "Australia",
            "litres": 139.9
          }, {
            "country": "Austria",
            "litres": 128.3
          }, {
            "country": "UK",
            "litres": 99
          }, {
            "country": "Belgium",
            "litres": 60
          }, {
            "country": "The Netherlands",
            "litres": 50
          }];
          let pieSeries = chart.series.push(new am4charts.PieSeries());
          pieSeries.dataFields.value = "litres";
          pieSeries.dataFields.category = "country";
    }
  render() {
    return (
        <div id="Pichartdiv" style={divStyle} ></div>
    );
  }
}

export default PiChart;