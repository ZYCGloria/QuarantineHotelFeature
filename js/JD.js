// am4core.ready(function() {

//   // Themes begin
//   am4core.useTheme(am4themes_animated);
//   // Themes end
  
//   // Create chart instance
//   var chart = am4core.create("chartdiv6", am4charts.XYChart);
  
//   // Export
//   chart.exporting.menu = new am4core.ExportMenu();
  
//   // Data for both series
//   var data = [ {
//     "year": "2017",
//     "expenses": 188.6,
//     "income": 1445.1
//   }, {
//     "year": "2018",
//     "expenses": 203.9,
//     "income": 1562.4
//   }, {
//     "year": "2019",
//     "expenses": 221.2,
//     "income": 1666.5
//   }, {
//     "year": "2020",
//     "expenses": 387.9,
//     "income": 1920.1
//   }, {
//     "year": "2021",
//     "expenses": 397.8,
//     "income": 1920.5,
//     "lineDash": "5,5",
//   }, {
//     "year": "2022",
//     "expenses": 400.6,
//     "income": 2030.5,
//     "strokeWidth": 1,
//     "columnDash": "5,5",
//     "fillOpacity": 0.2,
//     "additional": "(projection)"
//   } ];
  
//   /* Create axes */
//   var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.minGridDistance = 30;
  
//   /* Create value axis */
//   var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
//   /* Create series */
//   var columnSeries = chart.series.push(new am4charts.ColumnSeries());
//   columnSeries.name = "Public Health Expenditure";
//   columnSeries.dataFields.valueY = "income";
//   columnSeries.dataFields.categoryX = "year";
  
//   columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
//   columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
//   columnSeries.columns.template.propertyFields.stroke = "stroke";
//   columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
//   columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
//   columnSeries.tooltip.label.textAlign = "middle";
  
//   var lineSeries = chart.series.push(new am4charts.LineSeries());
//   lineSeries.name = "Healthcare Expenditure";
//   lineSeries.dataFields.valueY = "expenses";
//   lineSeries.dataFields.categoryX = "year";
  
//   lineSeries.stroke = am4core.color("#fdd400");
//   lineSeries.strokeWidth = 3;
//   lineSeries.propertyFields.strokeDasharray = "lineDash";
//   lineSeries.tooltip.label.textAlign = "middle";
  
//   var bullet = lineSeries.bullets.push(new am4charts.Bullet());
//   bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
//   bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
//   var circle = bullet.createChild(am4core.Circle);
//   circle.radius = 4;
//   circle.fill = am4core.color("#fff");
//   circle.strokeWidth = 3;
  
//   chart.legend = new am4charts.Legend();
//   chart.data = data;
  
//   }); // end am4core.ready()

am4core.ready(function() {

      // Apply chart themes
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_kelly);

  // Create chart instance
  var chart = am4core.create("chartdiv6", am4charts.XYChart);

  // Add data
  chart.data = [{
    "country": "2019Q4",
    "litres": 56.7,
    "units": 1
  }, {
    "country": "2020Q1",
    "litres": 22.83,
    "units": 80977
  }, {
    "country": "2020Q2",
    "litres": 33.08,
    "units": 2011
  }, {
    "country": "2020Q3",
    "litres": 49.02,
    "units": 1878
  }, {
    "country": "2020Q4",
    "litres": 49.81,
    "units": 1659
  }, {
    "country": "2021Q1",
    "litres": 35.39,
    "units": 3146
  }, {
    "country": "2021Q2",
    "litres": 50.06,
    "units": 1675
  }, {
    "country": "2021Q3",
    "litres": 43.68,
    "units": 4375
  }, {
    "country": "2021Q4",
    "litres": 42.22,
    "units": 6152
  }];

  var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Ministry of Culture and Tourism of PRC, National Health Commission)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 300;
    label.y = 400;

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  // categoryAxis.title.text = "Quarters";

  // First value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Average Occupancy Rate (%)";
  // am4core.NumberFormatter();
  // valueAxis.numberFormatter = new
  // valueAxis.numberFormatter.numberFormat = "#'%'"
  valueAxis.renderer.labels.template.adapter.add("text", function(text) {
    return text + "%";
  });

  // Second value axis
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.title.text = "New Cases";
  valueAxis2.renderer.opposite = true;
  valueAxis2.logarithmic = true;
  // valueAxis2.numberFormatter.numberFormat = false;
  

  // First series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "litres";
  series.dataFields.categoryX = "country";
  series.name = "Occupancy";
  series.tooltipText = "{name}: [bold]{valueY}[/]";

  // Second series
  var series2 = chart.series.push(new am4charts.LineSeries());
  series2.dataFields.valueY = "units";
  series2.dataFields.categoryX = "country";
  series2.name = "Cases";
  series2.tooltipText = "{name}: [bold]{valueY}[/]";
  series2.strokeWidth = 3;
  series2.yAxis = valueAxis2;

  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  // chart.legend.position = "left";


  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  
  var title = chart.titles.create();
    title.text = "Repeated outbreaks hurt the hotel industry";
    title.fontSize = 20;
    title.marginTop = 20;
    title.textAlign = "left";
    title.marginBottom = 20;
  
  }); // end am4core.ready()


  