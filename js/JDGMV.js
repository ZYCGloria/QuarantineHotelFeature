am4core.ready(function() {

    // Themes begin
    // am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
     // Create chart instance
    var chart = am4core.create("chartdiv1", am4charts.XYChart);

    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Company Financial Reports)";
    label.align = "center";
    label.isMeasured = false;
    label.fontSize = 13;
    label.x = 290;
    label.y = 390;
    
    // Add data
    chart.data = [{
      
      "year": 2018,
      "Alibaba": 85.9,
      "JD": 78.7
    },{
      "year": 2019,
      "Alibaba": 78.9,
      "JD": 72.7
    },{
      "year": 2020,
      "Alibaba": 64.3,
      "JD": 50.4
    },{
      "year": 2021,
      "Alibaba": 69.5,
      "JD": 59.9
    }];
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    
    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    valueAxis.renderer.opposite = true;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    });
    
    // Create series
    function createSeries(field, name) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;
    
      // var valueLabel = series.bullets.push(new am4charts.LabelBullet());
      // valueLabel.label.text = "{valueX}"+'%';
      // valueLabel.label.horizontalCenter = "left";
      // valueLabel.label.dx = 10;
      // valueLabel.label.hideOversized = false;
      // valueLabel.label.truncate = false;
    
      // var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      // categoryLabel.label.text = "{name}";
      // categoryLabel.label.horizontalCenter = "right";
      // categoryLabel.label.dx = -10;
      // categoryLabel.label.fill = am4core.color("#fff");
      // categoryLabel.label.hideOversized = false;
      // categoryLabel.label.truncate = false;
    }
    
    createSeries("Alibaba", "Mid-end Hotel");
    createSeries("JD", "Budget Hotel");

    var title = chart.titles.create();
    title.text = "Average occupancy rate of Jin Jiang Hotels (First 3 Quarters)";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    
    }); // end am4core.ready()