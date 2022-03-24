am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv5", am4charts.XYChart);
    
    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Ministry of Finance of PRC)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 280;
    label.y = 350;

    // Add data
    chart.data = [{
      "year": "2017",
      "europe": 188.6,
      "namerica": 1256.5,
    }, {
      "year": "2018",
      "europe": 203.9,
      "namerica": 1358.5,
    }, {
      "year": "2019",
      "europe": 221.2,
      "namerica": 1445.3,
    }, {
        "year": "2020",
        "europe": 387.9,
        "namerica": 1532.2,
    }, {
        "year": "2021",
        "europe": 397.8,
        "namerica": 1522.7,
    }];
    
     

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inside = true;
    // valueAxis.renderer.labels.template.disabled = true;
    // valueAxis.min = 0;
    
    // Create series
    function createSeries(field, name) {
      
      // Set up series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = true;
      
      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
      
      // Add label
    //   var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    //   labelBullet.label.text = "{valueY}";
    //   labelBullet.locationY = 0.5;
    //   labelBullet.label.hideOversized = true;
      
      return series;
    }
    
    createSeries("europe", "Healthcare Expenditure");
    createSeries("namerica", "Other Public Health Expenditure");
    
    var title = chart.titles.create();
    title.text = "Surging Healthcare Expenditure due to Covid";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    
    }); // end am4core.ready()

// am4core.ready(function() {

//   // Themes begin
//   am4core.useTheme(am4themes_animated);
//   // Themes end
  
//   var chart = am4core.create("chartdiv5", am4charts.XYChart);
  
//   chart.data = [{
//           "year": "2017",
//           "income": 1445.1,
//           "expenses": 188.6
//       }, {
//           "year": "2018",
//           "income": 1562.4,
//           "expenses": 203.9
//       }, {
//           "year": "2019",
//           "income": 1666.5,
//           "expenses": 221.2
//       }, {
//           "year": "2020",
//           "income": 1920.1,
//           "expenses": 387.9
//       }, {
//           "year": "2021",
//           "income": 1920.5,
//           "expenses": 397.8
//       }];
  
//   //create category axis for years
//   var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.inversed = true;
//   categoryAxis.renderer.grid.template.location = 0;
  
//   //create value axis for income and expenses
//   var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
//   valueAxis.renderer.opposite = true;
  
  
//   //create columns
//   var series = chart.series.push(new am4charts.ColumnSeries());
//   series.dataFields.categoryY = "year";
//   series.dataFields.valueX = "income";
//   series.name = "Healthcare Expenditure";
//   series.columns.template.fillOpacity = 0.5;
//   series.columns.template.strokeOpacity = 0;
//   series.tooltipText = "Healthcare Expenditure in {categoryY}: {valueX.value}";
  
//   //create line
//   var lineSeries = chart.series.push(new am4charts.LineSeries());
//   lineSeries.dataFields.categoryY = "year";
//   lineSeries.dataFields.valueX = "expenses";
//   lineSeries.name = "Public Health Expenditure";
//   lineSeries.strokeWidth = 3;
//   lineSeries.tooltipText = "Public Health Expenditure in {categoryY}: {valueX.value}";
  
//   //add bullets
//   var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//   circleBullet.circle.fill = am4core.color("#fff");
//   circleBullet.circle.strokeWidth = 2;
  
//   //add chart cursor
//   chart.cursor = new am4charts.XYCursor();
//   chart.cursor.behavior = "zoomY";
  
//   //add legend
//   chart.legend = new am4charts.Legend();
  
//   }); // end am4core.ready()