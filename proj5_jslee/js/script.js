// https://rawgraphs.io

// DATA SET 
var d5 = "https://raw.githubusercontent.com/Zaken-SL/proj5/main/georgia-history.csv"
var d4 = "https://raw.githubusercontent.com/Zaken-SL/proj5/main/florida-history.csv"
  var d3 = "https://raw.githubusercontent.com/Zaken-SL/proj5/main/colorado-history.csv"
 var d2 = "https://raw.githubusercontent.com/Zaken-SL/proj5/main/alabama-history.csv"
var d1 = "https://raw.githubusercontent.com/Zaken-SL/proj5/main/virginia-history.csv"
	


  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Virginia Deaths',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'death'),
      line: {color: '#21A216'}
    }
    var t2 = {
      type: "scatter",
      mode: "lines",
      name: 'Hospitalized Cumulative',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'hospitalizedCumulative'),
      line: {color: '#822f72'}
    }
   
    var data = [t1,t2];
    var layout = {
      title: {
        text : 'Virginia Deaths and Hospitalizations'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Deaths and Hospitalizations'
        }
      }
    };    
    Plotly.newPlot('myplot1', data, layout);
  })

  Plotly.d3.csv(d2, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Alabama Deaths',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'death'),
      line: {color: '#21A216'}
    }
    var t2 = {
      type: "scatter",
      mode: "lines",
      name: 'Hospitalized Cumulative',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'hospitalizedCumulative'),
      line: {color: '#822f72'}
    }
   
    var data = [t1,t2];
    var layout = {
      title: {
        text : 'Alabama Deaths and Hospitalizations'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Deaths and Hospitalizations'
        }
      }
    };    
    Plotly.newPlot('myplot2', data, layout);
  })
  Plotly.d3.csv(d3, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Colorado Deaths',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'death'),
      line: {color: '#21A216'}
    }
    var t2 = {
      type: "scatter",
      mode: "lines",
      name: 'Hospitalized Cumulative',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'hospitalizedCumulative'),
      line: {color: '#822f72'}
    }
   
    var data = [t1,t2];
    var layout = {
      title: {
        text : 'Colorado Deaths and Hospitalizations'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Deaths and Hospitalizations'
        }
      }
    };    
    Plotly.newPlot('myplot3', data, layout);
  })
  Plotly.d3.csv(d4, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Florida Deaths',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'death'),
      line: {color: '#21A216'}
    }
    var t2 = {
      type: "scatter",
      mode: "lines",
      name: 'Hospitalized Cumulative',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'hospitalizedCumulative'),
      line: {color: '#822f72'}
    }
   
    var data = [t1,t2];
    var layout = {
      title: {
        text : 'Florida Deaths and Hospitalizations'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Deaths and Hospitalizations'
        }
      }
    };    
    Plotly.newPlot('myplot4', data, layout);
  })
  Plotly.d3.csv(d5, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Georgia Deaths',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'death'),
      line: {color: '#21A216'}
    }
    var t2 = {
      type: "scatter",
      mode: "lines",
      name: 'Hospitalized Cumulative',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'hospitalizedCumulative'),
      line: {color: '#822f72'}
    }
   
    var data = [t1,t2];
    var layout = {
      title: {
        text : 'Georgia Deaths and Hospitalizations'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Deaths and Hospitalizations'
        }
      }
    };    
    Plotly.newPlot('myplot5', data, layout);
  })
