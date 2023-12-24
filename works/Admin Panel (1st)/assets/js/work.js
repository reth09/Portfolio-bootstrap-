
$(document).ready(function () {

  $('.loader').fadeOut(500);


  // form

  $('.inipu').click(function () {
    $('.uss').addClass('aft-span');
    $('.i').addClass('aft-span-i');
  })

  $('.inipu2').click(function () {
    $('.pss').addClass('aft-span');
    $('.i2').addClass('aft-span-i');
  })
  // ...........................................................................

  // aside

  $('.nav-control').on({
    click: function () {

      $('.nav-text').toggleClass('d-n');
      $('.ur-cm').toggle(200);
      $('.brand-title').toggle(200);
      $('.aside').toggleClass('asi-active');
      $('.aside').addClass('aaa');
      $('.page-area').toggleClass('page-area-ac');
      $('.as-icons').toggleClass('as-ico');
      $('.logo-header').toggleClass('logo-header-ac');
      $('.header-r').toggleClass('hdr-r-ac');
      $('.dd-icon').toggleClass('dd-icon-ac');
      $('.as-content').toggleClass('as-content-ac');
      $('.set-text i').toggleClass('pad-none');
    },


  });

  $('.x-mark').hide();

  $('.nav-c2').click(function () {
    $('.ri-menu-line').toggle();
    $('.x-mark').toggle();
    $('.aside').slideToggle();

  });



  // ................................................................................

  // settings

  $('.close').click(function () {
    $('.setting-box .main-box').hide(300);
  });

  $('.settings-btn').click(function () {

    $('.setting-box .main-box').toggle(500);

  })
});
// aside accordian
$(document).ready(function () {
  $(".as-set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".as-content")
        .slideUp(200);
      $(".as-set > a i")
        .removeClass("fa-caret-down")
        .addClass("fa-caret-right");
    } else {
      $(".as-set > a i")
        .removeClass("fa-caret-down")
        .addClass("fa-caret-right");
      $(this)
        .find("i")
        .removeClass("fa-caret-right")
        .addClass("fa-caret-down");
      $(".as-set > a").removeClass("active");
      $(this).addClass("active");
      $(".as-content").slideUp(200);
      $(this)
        .siblings(".as-content")
        .slideDown(200);
    }
  });
});

// theme switch

$(document).ready(function () {


  $('.light-mode , .limd').click
    (function () {
      $(':root').css('--aside-text', (color = ["#4a4a4a"]));
      $(':root').css('--gray-900', (color = ["white"]));
      $(':root').css('--aside-bg', (color = ["white"]));
      $(':root').css('--white', (color = ["#000000"]));
      $(':root').css('--black', (color = ["#ffffff"]));
      $(':root').css('--dark-theme', (color = ["#eae4f0"]));
      $(':root').css('--gray-800', (color = ["#adb5bd"]));
      $(':root').css('--white-hover', (color = ["0D99FF"]));
      $(':root').css('--bor-grey', (color = ["#c2c2c2"]));
      $(':root').css('--secondary-dark', (color = ["#c6c6c6"]));
      $(':root').css('--gray-500', (color = ["grey"]));
      $(':root').css('--msg', (color = ["#d2ecee"]));
      $('.c-area12').css("--calen-bg", "url(../images/calen-2.webp)");

    });


  $('.dark-mode , .dkmd').click
    (function () {
      $(':root').css('--aside-text', (color = ["#b3b3b3"]));
      $(':root').css('--gray-900', (color = ["#212529"]));
      $(':root').css('--aside-bg', (color = ["#212529"]));
      $(':root').css('--white', (color = ["#fff"]));
      $(':root').css('--black', (color = ["#000000"]));
      $(':root').css('--dark-theme', (color = ["#1e1e1e"]));
      $(':root').css('--gray-800', (color = ["#343a40"]));
      $(':root').css('--white-hover', (color = ["#fff"]));
      $(':root').css('--bor-grey', (color = ["#676767"]));
      $(':root').css('--secondary-dark', (color = ["#131313"]));
      $(':root').css('--gray-500', (color = ["#adb5bd"]));
      $(':root').css('--msg', (color = ["#3e3e3e"]));
      $('.c-area12').css("--calen-bg", "url(../images/calender-bg.webp)");
    });

  // color pallets header

  $('.header-change .blue').click(function () {
    $(':root').css('--header-bg', (color = ["#3250ff"]));
    $(':root').css('--hamburger', (color = ["#6b81ff"]));
    $(':root').css('--input-form', (color = ["#6b81ff"]));
  });

  $('.header-change .green').click(function () {
    $(':root').css('--header-bg', (color = ["#18A594"]));
    $(':root').css('--hamburger', (color = ["#96C4BF"]));
    $(':root').css('--input-form', (color = ["#96C4BF"]));
  });

  $('.header-change .green2').click(function () {
    $(':root').css('--header-bg', (color = ["#88a67e"]));
    $(':root').css('--hamburger', (color = ["#628058"]));
    $(':root').css('--input-form', (color = ["#628058"]));
  });


  $('.header-change .sky').click(function () {
    $(':root').css('--header-bg', (color = ["#40a7e2"]));
    $(':root').css('--hamburger', (color = ["#4A97C4"]));
    $(':root').css('--input-form', (color = ["#4A97C4"]));
  });

  $('.header-change .purple').click(function () {
    $(':root').css('--header-bg', (color = ["#B65FBD"]));
    $(':root').css('--hamburger', (color = ["#E79AED"]));
    $(':root').css('--input-form', (color = ["#E79AED"]));
  });

  $('.header-change .red').click(function () {
    $(':root').css('--header-bg', (color = ["#c6164f"]));
    $(':root').css('--hamburger', (color = ["#AC1C4B"]));
    $(':root').css('--input-form', (color = ["#AC1C4B"]));
  });

  // aside change

  $('.aside-change .blue').click(function () {
    $(':root').css('--aside-bg', (color = ["#3250ff"]));
    $(':root').css('--aside-text', (color = ["#fff"]));

  });

  $('.aside-change .green').click(function () {
    $(':root').css('--aside-bg', (color = ["#18A594"]));
    $(':root').css('--aside-text', (color = ["#fff"]));


  });

  $('.aside-change .green2').click(function () {
    $(':root').css('--aside-bg', (color = ["#88a67e"]));
    $(':root').css('--aside-text', (color = ["#fff"]));


  });

  $('.aside-change .sky').click(function () {
    $(':root').css('--aside-bg', (color = ["#40a7e2"]));
    $(':root').css('--aside-text', (color = ["#fff"]));


  });


  $('.aside-change .purple').click(function () {
    $(':root').css('--aside-bg', (color = ["#B65FBD"]));
    $(':root').css('--aside-text', (color = ["#fff"]));


  });

  $('.aside-change .red').click(function () {
    $(':root').css('--aside-bg', (color = ["#c6164f"]));
    $(':root').css('--aside-text', (color = ["#fff"]));


  });


  // page change

  $('.page-change .blue').click(function () {
    $(':root').css('--dark-theme', (color = ["#3250ff"]));
    $(':root').css('--gray-900', (color = ["#050D40"]));
    $(':root').css('--bor-grey', (color = ["#B9C1F4"]));
    $(':root').css('--setting', (color = ["#3250ff"]));

  });

  $('.page-change .green').click(function () {
    $(':root').css('--dark-theme', (color = ["#18A594"]));
    $(':root').css('--gray-900', (color = ["#0F574E"]));
    $(':root').css('--bor-grey', (color = ["#A9CCC8"]));
    $(':root').css('--setting', (color = ["#18A594  "]));

  });

  $('.page-change .green2').click(function () {
    $(':root').css('--dark-theme', (color = ["#88a67e"]));
    $(':root').css('--gray-900', (color = ["#244918"]));
    $(':root').css('--bor-grey', (color = ["#C1DFB8"]));
    $(':root').css('--setting', (color = ["#88a67e"]));

  });

  $('.page-change .sky').click(function () {
    $(':root').css('--dark-theme', (color = ["#40a7e2"]));
    $(':root').css('--gray-900', (color = ["#206084"]));
    $(':root').css('--bor-grey', (color = ["#98C6DF"]));
    $(':root').css('--setting', (color = ["#40a7e2"]));

  });

  $('.page-change .purple').click(function () {
    $(':root').css('--dark-theme', (color = ["#B65FBD"]));
    $(':root').css('--gray-900', (color = ["#350C38"]));
    $(':root').css('--bor-grey', (color = ["#E57497"]));
    $(':root').css('--setting', (color = ["#B65FBD"]));

  });

  $('.page-change .red').click(function () {
    $(':root').css('--dark-theme', (color = ["#c6164f"]));
    $(':root').css('--gray-900', (color = ["#44071A"]));
    $(':root').css('--bor-grey', (color = ["#E57497"]));
    $(':root').css('--setting', (color = ["#c6164f"]));


  });

});

// chart-1
var options = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 39, 19],
  }],
  chart: {
    height: '80%',
    type: 'area',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
  },

  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },

  dataLabels: {
    enabled: false
  },

  grid: {
    show: false,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 10
    },
  },

  stroke: {
    smooth: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    labels: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },



  yaxis: {
    labels: {
      show: false
    },
    axisTicks: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// chart-2
var options = {
  series: [
    {
      name: "",
      data: [330, 548, 740, 992],
    },
  ],
  chart: {
    type: 'bar',
    height: '80%',
    toolbar: {
      show: false
    },
    labels: {
      show: false
    },
    sparkline: {
      enabled: false,
    }
  },

  grid: {
    padding: {
      left: 10,
      right: 10,
      top: 0,
      bottom: 0,
    },
  },

  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '100%',
      isFunnel: true,
    },
  },
  colors: [
    '#F44F5E',
    '#E55A89',
    '#D863B1',
    '#CA6CD8',
    '#B57BED',
    '#8D95EB',
    '#62ACEA',
    '#4BC3E6',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
  },

  xaxis: {
    categories: ['Food', 'Work', 'Travel', 'Meetings'],


  },
  legend: {
    show: false,
  },

};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

//   chart-3
var options = {
  series: [{
    name: 'series1',
    data: [41, 28, 38, 29, 32, 25, 15],
  }],
  chart: {
    height: '80%',
    type: 'area',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
  },

  colors: ['#ff0000'],

  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },

  dataLabels: {
    enabled: false
  },

  grid: {
    show: false,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 10
    },
  },

  stroke: {
    smooth: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    labels: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },



  yaxis: {
    labels: {
      show: false
    },
    axisTicks: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

// chart-4
var options = {
  series: [{
    name: 'NEW',
    data: [44]
  }, {
    name: 'COMPLETED',
    data: [53]
  }, {
    name: 'IN PROGRESS',
    data: [12]
  }, {
    name: 'PENDING',
    data: [9]
  }],
  chart: {
    type: 'bar',
    height: '80%',
    stacked: true,
    dropShadow: {
      enabled: true,
      blur: 1,
      opacity: 0.25
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
      labels: {
        show: false
      }
    },
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      top: 15
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
  },
  xaxis: {
    categories: [2008],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

    }
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  legend: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

//   chart-5
var options = {
  series: [{
    name: 'NO OF PROJECTS',
    type: 'column',
    data: [53, 21, 32, 27, 33, 12, 37, 21, 44, 22, 30]
  }, {
    name: 'REVENUE',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    opacity: 0.5
  }, {
    name: 'ACTIVE PROJECTS',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],

  colors: ['#0096c7', '#2EFF2E', '#d00000'],

  chart: {
    height: '275',
    type: 'line',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'straight'
  },

  plotOptions: {
    bar: {
      columnWidth: '20%',
      borderRadius: 5
    }
  },

  fill: {
    opacity: [1, 0.1, 1],
    gradient: {
      enabled: true,
      opacityFrom: 0.1,
      opacityTo: 0
    }
  },

  grid: {
    colors: ['#212529'],
    show: true,
    position: 'back',
    xaxis: {
      lines: {
        show: false,
      },

    },
    yaxis: {
      lines: {
        show: true,
      }
    },
  },

  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003',
  ],

  markers: {
    size: 0
  },

  xaxis: {
    type: 'datetime',
  },

  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;

      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

// chart-6


var options = {
  series: [
    {
      data: [
        {
          x: 'Operations',
          y: [2800, 6500]
        },
        {
          x: 'Customer Success',
          y: [3200, 5100]
        },
        {
          x: 'Engineering',
          y: [2950, 7300]
        },
        {
          x: 'Marketing',
          y: [5000, 6500]
        },
        {
          x: 'Product',
          y: [3000, 5000]
        },
        {
          x: 'Data Science',
          y: [5000, 6500]
        },
        {
          x: 'Sales',
          y: [4100, 5600]
        }
      ]
    }
  ],
  chart: {
    height: '445',
    type: 'rangeBar',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#00b4d8', '#7209b7', '#ffffff'],
  plotOptions: {
    bar: {
      horizontal: true,
      isDumbbell: true,
      barHeight: '10%',
      dumbbellColors: [['#00b4d8', '#7209b7']]
    },

  },

  markers: {
    colors: ['#ffffff'],
    size: 15,
  },

  legend: {
    show: true,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'center',
    colors: '#ffffff',
    customLegendItems: ['Freelancing', 'Clint jobs']
  },
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#7209b7'],
      inverseColors: false,
      stops: [0, 100]
    }
  },

  xaxis: {
    labels: {
      show: true
    },
    axisTicks: {
      show: false
    }
  },

  yaxis: {
    labels: {
      show: false
    }
  },

  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();

// map


var continents = {
  "AF": 0,
  "AN": 1,
  "AS": 2,
  "EU": 3,
  "NA": 4,
  "OC": 5,
  "SA": 6
}


var root = am5.Root.new("chartdiv");
var colors = am5.ColorSet.new(root, {});




root.setThemes([
  am5themes_Animated.new(root)
]);



var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "rotateX",
  projection: am5map.geoMercator()
}));


var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_worldLow,
  exclude: ["AQ"]
}));

worldSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  interactive: true,
  fill: am5.color(0xaaaaaa),
  templateField: "polygonSettings"
});

worldSeries.mapPolygons.template.states.create("hover", {
  fill: colors.getIndex(9)
});

worldSeries.mapPolygons.template.events.on("click", (ev) => {
  var dataItem = ev.target.dataItem;
  var data = dataItem.dataContext;
  var zoomAnimation = worldSeries.zoomToDataItem(dataItem);

  Promise.all([
    zoomAnimation.waitForStop(),
    am5.net.load("https://cdn.amcharts.com/lib/5/geodata/json/" + data.map + ".json", chart)
  ]).then((results) => {
    var geodata = am5.JSONParser.parse(results[1].response);
    countrySeries.setAll({
      geoJSON: geodata,
      fill: data.polygonSettings.fill
    });

    countrySeries.show();
    worldSeries.hide(100);
    backContainer.show();
  });
});

// Create polygon series for the country map
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var countrySeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  visible: false
}));

countrySeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  interactive: true,
  fill: am5.color(0xaaaaaa)
});

countrySeries.mapPolygons.template.states.create("hover", {
  fill: colors.getIndex(9)
});


// Set up data for countries
var data = [];
for (var id in am5geodata_data_countries2) {
  if (am5geodata_data_countries2.hasOwnProperty(id)) {
    var country = am5geodata_data_countries2[id];
    if (country.maps.length) {
      data.push({
        id: id,
        map: country.maps[0],
        polygonSettings: {
          fill: colors.getIndex(continents[country.continent_code]),
        }
      });
    }
  }
}
worldSeries.data.setAll(data);


// Add button to go back to continents view
var backContainer = chart.children.push(am5.Container.new(root, {
  x: am5.p100,
  centerX: am5.p100,
  dx: -10,
  paddingTop: 5,
  paddingRight: 10,
  paddingBottom: 5,
  y: 30,
  interactiveChildren: false,
  layout: root.horizontalLayout,
  cursorOverStyle: "pointer",
  background: am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 0.2
  }),
  visible: false
}));

var backLabel = backContainer.children.push(am5.Label.new(root, {
  text: "Back to world map",
  centerY: am5.p50
}));

var backButton = backContainer.children.push(am5.Graphics.new(root, {
  width: 32,
  height: 32,
  centerY: am5.p50,
  fill: am5.color(0x555555),
  svgPath: "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM27.436,17.39c0.001,0.002,0.004,0.002,0.005,0.004c-0.022,0.187-0.054,0.37-0.085,0.554c-0.015-0.012-0.034-0.025-0.047-0.036c-0.103-0.09-0.254-0.128-0.318-0.115c-0.157,0.032,0.229,0.305,0.267,0.342c0.009,0.009,0.031,0.03,0.062,0.058c-1.029,5.312-5.709,9.338-11.319,9.338c-4.123,0-7.736-2.18-9.776-5.441c0.123-0.016,0.24-0.016,0.28-0.076c0.051-0.077,0.102-0.241,0.178-0.331c0.077-0.089,0.165-0.229,0.127-0.292c-0.039-0.064,0.101-0.344,0.088-0.419c-0.013-0.076-0.127-0.256,0.064-0.407s0.394-0.382,0.407-0.444c0.012-0.063,0.166-0.331,0.152-0.458c-0.012-0.127-0.152-0.28-0.24-0.318c-0.09-0.037-0.28-0.05-0.356-0.151c-0.077-0.103-0.292-0.203-0.368-0.178c-0.076,0.025-0.204,0.05-0.305-0.015c-0.102-0.062-0.267-0.139-0.33-0.189c-0.065-0.05-0.229-0.088-0.305-0.088c-0.077,0-0.065-0.052-0.178,0.101c-0.114,0.153,0,0.204-0.204,0.177c-0.204-0.023,0.025-0.036,0.141-0.189c0.113-0.152-0.013-0.242-0.141-0.203c-0.126,0.038-0.038,0.115-0.241,0.153c-0.203,0.036-0.203-0.09-0.076-0.115s0.355-0.139,0.355-0.19c0-0.051-0.025-0.191-0.127-0.191s-0.077-0.126-0.229-0.291c-0.092-0.101-0.196-0.164-0.299-0.204c-0.09-0.579-0.15-1.167-0.15-1.771c0-2.844,1.039-5.446,2.751-7.458c0.024-0.02,0.048-0.034,0.069-0.036c0.084-0.009,0.31-0.025,0.51-0.059c0.202-0.034,0.418-0.161,0.489-0.153c0.069,0.008,0.241,0.008,0.186-0.042C8.417,8.2,8.339,8.082,8.223,8.082S8.215,7.896,8.246,7.896c0.03,0,0.186,0.025,0.178,0.11C8.417,8.091,8.471,8.2,8.625,8.167c0.156-0.034,0.132-0.162,0.102-0.195C8.695,7.938,8.672,7.853,8.642,7.794c-0.031-0.06-0.023-0.136,0.14-0.153C8.944,7.625,9.168,7.708,9.16,7.573s0-0.28,0.046-0.356C9.253,7.142,9.354,7.09,9.299,7.065C9.246,7.04,9.176,7.099,9.121,6.972c-0.054-0.127,0.047-0.22,0.108-0.271c0.02-0.015,0.067-0.06,0.124-0.112C11.234,5.257,13.524,4.466,16,4.466c3.213,0,6.122,1.323,8.214,3.45c-0.008,0.022-0.01,0.052-0.031,0.056c-0.077,0.013-0.166,0.063-0.179-0.051c-0.013-0.114-0.013-0.331-0.102-0.203c-0.089,0.127-0.127,0.127-0.127,0.191c0,0.063,0.076,0.127,0.051,0.241C23.8,8.264,23.8,8.341,23.84,8.341c0.036,0,0.126-0.115,0.239-0.141c0.116-0.025,0.319-0.088,0.332,0.026c0.013,0.115,0.139,0.152,0.013,0.203c-0.128,0.051-0.267,0.026-0.293-0.051c-0.025-0.077-0.114-0.077-0.203-0.013c-0.088,0.063-0.279,0.292-0.279,0.292s-0.306,0.139-0.343,0.114c-0.04-0.025,0.101-0.165,0.203-0.228c0.102-0.064,0.178-0.204,0.14-0.242c-0.038-0.038-0.088-0.279-0.063-0.343c0.025-0.063,0.139-0.152,0.013-0.216c-0.127-0.063-0.217-0.14-0.318-0.178s-0.216,0.152-0.305,0.204c-0.089,0.051-0.076,0.114-0.191,0.127c-0.114,0.013-0.189,0.165,0,0.254c0.191,0.089,0.255,0.152,0.204,0.204c-0.051,0.051-0.267-0.025-0.267-0.025s-0.165-0.076-0.268-0.076c-0.101,0-0.229-0.063-0.33-0.076c-0.102-0.013-0.306-0.013-0.355,0.038c-0.051,0.051-0.179,0.203-0.28,0.152c-0.101-0.051-0.101-0.102-0.241-0.051c-0.14,0.051-0.279-0.038-0.355,0.038c-0.077,0.076-0.013,0.076-0.255,0c-0.241-0.076-0.189,0.051-0.419,0.089s-0.368-0.038-0.432,0.038c-0.064,0.077-0.153,0.217-0.19,0.127c-0.038-0.088,0.126-0.241,0.062-0.292c-0.062-0.051-0.33-0.025-0.367,0.013c-0.039,0.038-0.014,0.178,0.011,0.229c0.026,0.05,0.064,0.254-0.011,0.216c-0.077-0.038-0.064-0.166-0.141-0.152c-0.076,0.013-0.165,0.051-0.203,0.077c-0.038,0.025-0.191,0.025-0.229,0.076c-0.037,0.051,0.014,0.191-0.051,0.203c-0.063,0.013-0.114,0.064-0.254-0.025c-0.14-0.089-0.14-0.038-0.178-0.012c-0.038,0.025-0.216,0.127-0.229,0.012c-0.013-0.114,0.025-0.152-0.089-0.229c-0.115-0.076-0.026-0.076,0.127-0.025c0.152,0.05,0.343,0.075,0.622-0.013c0.28-0.089,0.395-0.127,0.28-0.178c-0.115-0.05-0.229-0.101-0.406-0.127c-0.179-0.025-0.42-0.025-0.7-0.127c-0.279-0.102-0.343-0.14-0.457-0.165c-0.115-0.026-0.813-0.14-1.132-0.089c-0.317,0.051-1.193,0.28-1.245,0.318s-0.128,0.19-0.292,0.318c-0.165,0.127-0.47,0.419-0.712,0.47c-0.241,0.051-0.521,0.254-0.521,0.305c0,0.051,0.101,0.242,0.076,0.28c-0.025,0.038,0.05,0.229,0.191,0.28c0.139,0.05,0.381,0.038,0.393-0.039c0.014-0.076,0.204-0.241,0.217-0.127c0.013,0.115,0.14,0.292,0.114,0.368c-0.025,0.077,0,0.153,0.09,0.14c0.088-0.012,0.559-0.114,0.559-0.114s0.153-0.064,0.127-0.166c-0.026-0.101,0.166-0.241,0.203-0.279c0.038-0.038,0.178-0.191,0.014-0.241c-0.167-0.051-0.293-0.064-0.115-0.216s0.292,0,0.521-0.229c0.229-0.229-0.051-0.292,0.191-0.305c0.241-0.013,0.496-0.025,0.444,0.051c-0.05,0.076-0.342,0.242-0.508,0.318c-0.166,0.077-0.14,0.216-0.076,0.292c0.063,0.076,0.09,0.254,0.204,0.229c0.113-0.025,0.254-0.114,0.38-0.101c0.128,0.012,0.383-0.013,0.42-0.013c0.039,0,0.216,0.178,0.114,0.203c-0.101,0.025-0.229,0.013-0.445,0.025c-0.215,0.013-0.456,0.013-0.456,0.051c0,0.039,0.292,0.127,0.19,0.191c-0.102,0.063-0.203-0.013-0.331-0.026c-0.127-0.012-0.203,0.166-0.241,0.267c-0.039,0.102,0.063,0.28-0.127,0.216c-0.191-0.063-0.331-0.063-0.381-0.038c-0.051,0.025-0.203,0.076-0.331,0.114c-0.126,0.038-0.076-0.063-0.242-0.063c-0.164,0-0.164,0-0.164,0l-0.103,0.013c0,0-0.101-0.063-0.114-0.165c-0.013-0.102,0.05-0.216-0.013-0.241c-0.064-0.026-0.292,0.012-0.33,0.088c-0.038,0.076-0.077,0.216-0.026,0.28c0.052,0.063,0.204,0.19,0.064,0.152c-0.14-0.038-0.317-0.051-0.419,0.026c-0.101,0.076-0.279,0.241-0.279,0.241s-0.318,0.025-0.318,0.102c0,0.077,0,0.178-0.114,0.191c-0.115,0.013-0.268,0.05-0.42,0.076c-0.153,0.025-0.139,0.088-0.317,0.102s-0.204,0.089-0.038,0.114c0.165,0.025,0.418,0.127,0.431,0.241c0.014,0.114-0.013,0.242-0.076,0.356c-0.043,0.079-0.305,0.026-0.458,0.026c-0.152,0-0.456-0.051-0.584,0c-0.127,0.051-0.102,0.305-0.064,0.419c0.039,0.114-0.012,0.178-0.063,0.216c-0.051,0.038-0.065,0.152,0,0.204c0.063,0.051,0.114,0.165,0.166,0.178c0.051,0.013,0.215-0.038,0.279,0.025c0.064,0.064,0.127,0.216,0.165,0.178c0.039-0.038,0.089-0.203,0.153-0.166c0.064,0.039,0.216-0.012,0.331-0.025s0.177-0.14,0.292-0.204c0.114-0.063,0.05-0.063,0.013-0.14c-0.038-0.076,0.114-0.165,0.204-0.254c0.088-0.089,0.253-0.013,0.292-0.115c0.038-0.102,0.051-0.279,0.151-0.267c0.103,0.013,0.243,0.076,0.331,0.076c0.089,0,0.279-0.14,0.332-0.165c0.05-0.025,0.241-0.013,0.267,0.102c0.025,0.114,0.241,0.254,0.292,0.279c0.051,0.025,0.381,0.127,0.433,0.165c0.05,0.038,0.126,0.153,0.152,0.254c0.025,0.102,0.114,0.102,0.128,0.013c0.012-0.089-0.065-0.254,0.025-0.242c0.088,0.013,0.191-0.026,0.191-0.026s-0.243-0.165-0.331-0.203c-0.088-0.038-0.255-0.114-0.331-0.241c-0.076-0.127-0.267-0.153-0.254-0.279c0.013-0.127,0.191-0.051,0.292,0.051c0.102,0.102,0.356,0.241,0.445,0.33c0.088,0.089,0.229,0.127,0.267,0.242c0.039,0.114,0.152,0.241,0.19,0.292c0.038,0.051,0.165,0.331,0.204,0.394c0.038,0.063,0.165-0.012,0.229-0.063c0.063-0.051,0.179-0.076,0.191-0.178c0.013-0.102-0.153-0.178-0.203-0.216c-0.051-0.038,0.127-0.076,0.191-0.127c0.063-0.05,0.177-0.14,0.228-0.063c0.051,0.077,0.026,0.381,0.051,0.432c0.025,0.051,0.279,0.127,0.331,0.191c0.05,0.063,0.267,0.089,0.304,0.051c0.039-0.038,0.242,0.026,0.294,0.038c0.049,0.013,0.202-0.025,0.304-0.05c0.103-0.025,0.204-0.102,0.191,0.063c-0.013,0.165-0.051,0.419-0.179,0.546c-0.127,0.127-0.076,0.191-0.202,0.191c-0.06,0-0.113,0-0.156,0.021c-0.041-0.065-0.098-0.117-0.175-0.097c-0.152,0.038-0.344,0.038-0.47,0.19c-0.128,0.153-0.178,0.165-0.204,0.114c-0.025-0.051,0.369-0.267,0.317-0.331c-0.05-0.063-0.355-0.038-0.521-0.038c-0.166,0-0.305-0.102-0.433-0.127c-0.126-0.025-0.292,0.127-0.418,0.254c-0.128,0.127-0.216,0.038-0.331,0.038c-0.115,0-0.331-0.165-0.331-0.165s-0.216-0.089-0.305-0.089c-0.088,0-0.267-0.165-0.318-0.165c-0.05,0-0.19-0.115-0.088-0.166c0.101-0.05,0.202,0.051,0.101-0.229c-0.101-0.279-0.33-0.216-0.419-0.178c-0.088,0.039-0.724,0.025-0.775,0.025c-0.051,0-0.419,0.127-0.533,0.178c-0.116,0.051-0.318,0.115-0.369,0.14c-0.051,0.025-0.318-0.051-0.433,0.013c-0.151,0.084-0.291,0.216-0.33,0.216c-0.038,0-0.153,0.089-0.229,0.28c-0.077,0.19,0.013,0.355-0.128,0.419c-0.139,0.063-0.394,0.204-0.495,0.305c-0.102,0.101-0.229,0.458-0.355,0.623c-0.127,0.165,0,0.317,0.025,0.419c0.025,0.101,0.114,0.292-0.025,0.471c-0.14,0.178-0.127,0.266-0.191,0.279c-0.063,0.013,0.063,0.063,0.088,0.19c0.025,0.128-0.114,0.255,0.128,0.369c0.241,0.113,0.355,0.217,0.418,0.367c0.064,0.153,0.382,0.407,0.382,0.407s0.229,0.205,0.344,0.293c0.114,0.089,0.152,0.038,0.177-0.05c0.025-0.09,0.178-0.104,0.355-0.104c0.178,0,0.305,0.04,0.483,0.014c0.178-0.025,0.356-0.141,0.42-0.166c0.063-0.025,0.279-0.164,0.443-0.063c0.166,0.103,0.141,0.241,0.23,0.332c0.088,0.088,0.24,0.037,0.355-0.051c0.114-0.09,0.064-0.052,0.203,0.025c0.14,0.075,0.204,0.151,0.077,0.267c-0.128,0.113-0.051,0.293-0.128,0.47c-0.076,0.178-0.063,0.203,0.077,0.278c0.14,0.076,0.394,0.548,0.47,0.638c0.077,0.088-0.025,0.342,0.064,0.495c0.089,0.151,0.178,0.254,0.077,0.331c-0.103,0.075-0.28,0.216-0.292,0.47s0.051,0.431,0.102,0.521s0.177,0.331,0.241,0.419c0.064,0.089,0.14,0.305,0.152,0.445c0.013,0.14-0.024,0.306,0.039,0.381c0.064,0.076,0.102,0.191,0.216,0.292c0.115,0.103,0.152,0.318,0.152,0.318s0.039,0.089,0.051,0.229c0.012,0.14,0.025,0.228,0.152,0.292c0.126,0.063,0.215,0.076,0.28,0.013c0.063-0.063,0.381-0.077,0.546-0.063c0.165,0.013,0.355-0.075,0.521-0.19s0.407-0.419,0.496-0.508c0.089-0.09,0.292-0.255,0.268-0.356c-0.025-0.101-0.077-0.203,0.024-0.254c0.102-0.052,0.344-0.152,0.356-0.229c0.013-0.077-0.09-0.395-0.115-0.457c-0.024-0.064,0.064-0.18,0.165-0.306c0.103-0.128,0.421-0.216,0.471-0.267c0.051-0.053,0.191-0.267,0.217-0.433c0.024-0.167-0.051-0.369,0-0.457c0.05-0.09,0.013-0.165-0.103-0.268c-0.114-0.102-0.089-0.407-0.127-0.457c-0.037-0.051-0.013-0.319,0.063-0.345c0.076-0.023,0.242-0.279,0.344-0.393c0.102-0.114,0.394-0.47,0.534-0.496c0.139-0.025,0.355-0.229,0.368-0.343c0.013-0.115,0.38-0.547,0.394-0.635c0.013-0.09,0.166-0.42,0.102-0.497c-0.062-0.076-0.559,0.115-0.622,0.141c-0.064,0.025-0.241,0.127-0.446,0.113c-0.202-0.013-0.114-0.177-0.127-0.254c-0.012-0.076-0.228-0.368-0.279-0.381c-0.051-0.012-0.203-0.166-0.267-0.317c-0.063-0.153-0.152-0.343-0.254-0.458c-0.102-0.114-0.165-0.38-0.268-0.559c-0.101-0.178-0.189-0.407-0.279-0.572c-0.021-0.041-0.045-0.079-0.067-0.117c0.118-0.029,0.289-0.082,0.31-0.009c0.024,0.088,0.165,0.279,0.19,0.419s0.165,0.089,0.178,0.216c0.014,0.128,0.14,0.433,0.19,0.47c0.052,0.038,0.28,0.242,0.318,0.318c0.038,0.076,0.089,0.178,0.127,0.369c0.038,0.19,0.076,0.444,0.179,0.482c0.102,0.038,0.444-0.064,0.508-0.102s0.482-0.242,0.635-0.255c0.153-0.012,0.179-0.115,0.368-0.152c0.191-0.038,0.331-0.177,0.458-0.28c0.127-0.101,0.28-0.355,0.33-0.444c0.052-0.088,0.179-0.152,0.115-0.253c-0.063-0.103-0.331-0.254-0.433-0.268c-0.102-0.012-0.089-0.178-0.152-0.178s-0.051,0.088-0.178,0.153c-0.127,0.063-0.255,0.19-0.344,0.165s0.026-0.089-0.113-0.203s-0.192-0.14-0.192-0.228c0-0.089-0.278-0.255-0.304-0.382c-0.026-0.127,0.19-0.305,0.254-0.19c0.063,0.114,0.115,0.292,0.279,0.368c0.165,0.076,0.318,0.204,0.395,0.229c0.076,0.025,0.267-0.14,0.33-0.114c0.063,0.024,0.191,0.253,0.306,0.292c0.113,0.038,0.495,0.051,0.559,0.051s0.33,0.013,0.381-0.063c0.051-0.076,0.089-0.076,0.153-0.076c0.062,0,0.177,0.229,0.267,0.254c0.089,0.025,0.254,0.013,0.241,0.179c-0.012,0.164,0.076,0.305,0.165,0.317c0.09,0.012,0.293-0.191,0.293-0.191s0,0.318-0.012,0.433c-0.014,0.113,0.139,0.534,0.139,0.534s0.19,0.393,0.241,0.482s0.267,0.355,0.267,0.47c0,0.115,0.025,0.293,0.103,0.293c0.076,0,0.152-0.203,0.24-0.331c0.091-0.126,0.116-0.305,0.153-0.432c0.038-0.127,0.038-0.356,0.038-0.444c0-0.09,0.075-0.166,0.255-0.242c0.178-0.076,0.304-0.292,0.456-0.407c0.153-0.115,0.141-0.305,0.446-0.305c0.305,0,0.278,0,0.355-0.077c0.076-0.076,0.151-0.127,0.19,0.013c0.038,0.14,0.254,0.343,0.292,0.394c0.038,0.052,0.114,0.191,0.103,0.344c-0.013,0.152,0.012,0.33,0.075,0.33s0.191-0.216,0.191-0.216s0.279-0.189,0.267,0.013c-0.014,0.203,0.025,0.419,0.025,0.545c0,0.053,0.042,0.135,0.088,0.21c-0.005,0.059-0.004,0.119-0.009,0.178C27.388,17.153,27.387,17.327,27.436,17.39zM20.382,12.064c0.076,0.05,0.102,0.127,0.152,0.203c0.052,0.076,0.14,0.05,0.203,0.114c0.063,0.064-0.178,0.14-0.075,0.216c0.101,0.077,0.151,0.381,0.165,0.458c0.013,0.076-0.279,0.114-0.369,0.102c-0.089-0.013-0.354-0.102-0.445-0.127c-0.089-0.026-0.139-0.343-0.025-0.331c0.116,0.013,0.141-0.025,0.267-0.139c0.128-0.115-0.189-0.166-0.278-0.191c-0.089-0.025-0.268-0.305-0.331-0.394c-0.062-0.089-0.014-0.228,0.141-0.331c0.076-0.051,0.279,0.063,0.381,0c0.101-0.063,0.203-0.14,0.241-0.165c0.039-0.025,0.293,0.038,0.33,0.114c0.039,0.076,0.191,0.191,0.141,0.229c-0.052,0.038-0.281,0.076-0.356,0c-0.075-0.077-0.255,0.012-0.268,0.152C20.242,12.115,20.307,12.013,20.382,12.064zM16.875,12.28c-0.077-0.025,0.025-0.178,0.102-0.229c0.075-0.051,0.164-0.178,0.241-0.305c0.076-0.127,0.178-0.14,0.241-0.127c0.063,0.013,0.203,0.241,0.241,0.318c0.038,0.076,0.165-0.026,0.217-0.051c0.05-0.025,0.127-0.102,0.14-0.165s0.127-0.102,0.254-0.102s0.013,0.102-0.076,0.127c-0.09,0.025-0.038,0.077,0.113,0.127c0.153,0.051,0.293,0.191,0.459,0.279c0.165,0.089,0.19,0.267,0.088,0.292c-0.101,0.025-0.406,0.051-0.521,0.038c-0.114-0.013-0.254-0.127-0.419-0.153c-0.165-0.025-0.369-0.013-0.433,0.077s-0.292,0.05-0.395,0.05c-0.102,0-0.228,0.127-0.253,0.077C16.875,12.534,16.951,12.306,16.875,12.28zM17.307,9.458c0.063-0.178,0.419,0.038,0.355,0.127C17.599,9.675,17.264,9.579,17.307,9.458zM17.802,18.584c0.063,0.102-0.14,0.431-0.254,0.407c-0.113-0.027-0.076-0.318-0.038-0.382C17.548,18.545,17.769,18.529,17.802,18.584zM13.189,12.674c0.025-0.051-0.039-0.153-0.127-0.013C13.032,12.71,13.164,12.725,13.189,12.674zM20.813,8.035c0.141,0.076,0.339,0.107,0.433,0.013c0.076-0.076,0.013-0.204-0.05-0.216c-0.064-0.013-0.104-0.115,0.062-0.203c0.165-0.089,0.343-0.204,0.534-0.229c0.19-0.025,0.622-0.038,0.774,0c0.152,0.039,0.382-0.166,0.445-0.254s-0.203-0.152-0.279-0.051c-0.077,0.102-0.444,0.076-0.521,0.051c-0.076-0.025-0.686,0.102-0.812,0.102c-0.128,0-0.179,0.152-0.356,0.229c-0.179,0.076-0.42,0.191-0.509,0.229c-0.088,0.038-0.177,0.19-0.101,0.216C20.509,7.947,20.674,7.959,20.813,8.035zM14.142,12.674c0.064-0.089-0.051-0.217-0.114-0.217c-0.12,0-0.178,0.191-0.103,0.254C14.002,12.776,14.078,12.763,14.142,12.674zM14.714,13.017c0.064,0.025,0.114,0.102,0.165,0.114c0.052,0.013,0.217,0,0.167-0.127s-0.167-0.127-0.204-0.127c-0.038,0-0.203-0.038-0.267,0C14.528,12.905,14.65,12.992,14.714,13.017zM11.308,10.958c0.101,0.013,0.217-0.063,0.305-0.101c0.088-0.038,0.216-0.114,0.216-0.229c0-0.114-0.025-0.216-0.077-0.267c-0.051-0.051-0.14-0.064-0.216-0.051c-0.115,0.02-0.127,0.14-0.203,0.14c-0.076,0-0.165,0.025-0.14,0.114s0.077,0.152,0,0.19C11.117,10.793,11.205,10.946,11.308,10.958zM11.931,10.412c0.127,0.051,0.394,0.102,0.292,0.153c-0.102,0.051-0.28,0.19-0.305,0.267s0.216,0.153,0.216,0.153s-0.077,0.089-0.013,0.114c0.063,0.025,0.102-0.089,0.203-0.089c0.101,0,0.304,0.063,0.406,0.063c0.103,0,0.267-0.14,0.254-0.229c-0.013-0.089-0.14-0.229-0.254-0.28c-0.113-0.051-0.241-0.28-0.317-0.331c-0.076-0.051,0.076-0.178-0.013-0.267c-0.09-0.089-0.153-0.076-0.255-0.14c-0.102-0.063-0.191,0.013-0.254,0.089c-0.063,0.076-0.14-0.013-0.217,0.012c-0.102,0.035-0.063,0.166-0.012,0.229C11.714,10.221,11.804,10.361,11.931,10.412zM24.729,17.198c-0.083,0.037-0.153,0.47,0,0.521c0.152,0.052,0.241-0.202,0.191-0.267C24.868,17.39,24.843,17.147,24.729,17.198zM20.114,20.464c-0.159-0.045-0.177,0.166-0.304,0.306c-0.128,0.141-0.267,0.254-0.317,0.241c-0.052-0.013-0.331,0.089-0.242,0.279c0.089,0.191,0.076,0.382-0.013,0.472c-0.089,0.088,0.076,0.342,0.052,0.482c-0.026,0.139,0.037,0.229,0.215,0.229s0.242-0.064,0.318-0.229c0.076-0.166,0.088-0.331,0.164-0.47c0.077-0.141,0.141-0.434,0.179-0.51c0.038-0.075,0.114-0.316,0.102-0.457C20.254,20.669,20.204,20.489,20.114,20.464zM10.391,8.802c-0.069-0.06-0.229-0.102-0.306-0.11c-0.076-0.008-0.152,0.06-0.321,0.06c-0.168,0-0.279,0.067-0.347,0C9.349,8.684,9.068,8.65,9.042,8.692C9.008,8.749,8.941,8.751,9.008,8.87c0.069,0.118,0.12,0.186,0.179,0.178s0.262-0.017,0.288,0.051C9.5,9.167,9.569,9.226,9.712,9.184c0.145-0.042,0.263-0.068,0.296-0.119c0.033-0.051,0.263-0.059,0.263-0.059S10.458,8.861,10.391,8.802z"
}));

backContainer.events.on("click", function () {
  chart.goHome();
  worldSeries.show();
  countrySeries.hide();
  backContainer.hide();
});

// calender

$(document).ready(function () {

  $(".date__number").click(function () {
    $(".date__number").removeClass("date__number--true");
    $(this).addClass("date__number--true");
  });


  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Monate beginnen bei 0, daher +1
  var day = date.getDate();

  $(".yer").each(function () {
    if (Number($(this).text()) === (year)) {
      $(this).prop("selected", true);
    }
  });

  $(".mon").each(function () {
    if ($(this).attr("name") === String(month)) {
      $(this).prop("selected", true);
    }
  });

  $(".date__number").each(function () {
    if (Number($(this).text()) === day) { // Number verwandelt den Text in eine Zahl --> Computer kann 123 als Zahl erkennen, aber 123 als Text nicht
      $(this).addClass("date__number--true");
    }
  });


  $(".choosen").text(day + '.' + month + '.' + year);


  $(".date").click(function () {

    day = $(".date__number--true").text();
    month = $(".month option:selected").attr("name");
    year = $(".year option:selected").text();

    $(".choosen").text(day + '.' + month + '.' + year);

  });


});

// cc11

var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: 450,
    type: 'donut',
  },
  colors: ['#7B2CCB', '#382CCB', '#2C85CB', '#2CCBC4','#3BFCB9'],
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    show:false,
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    },
    // position:'center-right'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#cc11"), options);
chart.render();


