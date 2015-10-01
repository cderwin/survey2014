$(document).ready(function(){

// redirect inner links to a smooth scroll
$("a[href^='#']").click(function(){
	var href = $(this).attr("href");
	var offset;
	if (href == '#welcome'){
		offset = -30;
	}
	else {
		offset = 3;
	}
	$('html, body').animate({scrollTop: $(href).offset().top + offset}, 500);
	$('#sidebar ul li.active').removeClass('active');
	$(href + '-link').addClass('active');
	return false;
});

// hide comments if testing locally
if (location.protocol == 'file:'){
  $('#discussion').css('display', 'none');
}

// instantiate gpa tabs instance
$("ul#grade-tabs li a").click(function(e){
	e.preventDefault();
	$(this).tab('show');
	$('#academics-link').addClass('active');
});

// instantiate effort tabs instance
$('ul#effort-tabs li a').click(function(e){
	e.preventDefault();
	$(this).tab('show');
	$('#academics-link').addClass('active');
});

// instantiate happiness tabs instance
$("ul#sleep-tabs li a").click(function(e){
	e.preventDefault();
	$(this).tab('show');
	$('#campus_life-link').addClass('active');
});

// instantiate diversity tabs instance
$("ul#diversity-tabs li a").click(function(e){
	e.preventDefault();
	$(this).tab('show');
	$('#diversity-link').addClass('active');
});

// instantiate drugs tab instance
$("ul#drug-tabs li a").click(function(e){
	e.preventDefault();
	$(this).tab('show');
	$('#drugs-link').addClass('active');
});

// instantiate comments tab instance
$('ul#comment-tabs li a').click(function(e){
	e.preventDefault();
	$(this).tab('show');
	$('#comments-link').addClass('active');
});

// activate the contributors popover
$('#contributors').popover({content: "<p style='color: black; line-height: 15px; font-size: 14px;'>Cameron Derwin and Shangyan Li conceived the project, Alaric Krapf contributed analysis, and Michael Gates and JJ Kim helped put together the survey.</p>",
	trigger: 'hover', placement: 'bottom', html: true});
	
// change names of footer on hover
$('#right-foot').hover(function(){
	$(this).html('Alaric Krapf, Michael Gates, and JJ Kim');
},
function(){
	$(this).html('Shangyan Li and Cameron Derwin');
});

// waypoints for each section (welcome - sex)

// welcome waypoint
$('#welcome').waypoint(function(direction){
	
});

// change active function for future waypoints
function change_active(div_id){
	$('#sidebar ul li.active').removeClass('active');
	$('#' + div_id + '-link').addClass('active');
};

// general waypoint for sidebar
$('#general').waypoint(function(direction){
	var sidebar = $('#sidebar');
	if (direction == 'down'){
		sidebar.addClass('affix');
		$('#general-section').addClass('col-md-offset-3');
		sidebar.removeClass('affix-top');
	}
	else if (direction =='up'){
		sidebar.addClass('affix-top');
		sidebar.removeClass('affix');
		$('#general-section').removeClass('col-md-offset-3');
	}
}, {offset: -50});

// general waypoint
$('#general').waypoint(function(direction){
	if (direction == 'down'){
		change_active($(this).attr('id'));
	}
	else if (direction =='up'){
		change_active($(this).prev().attr('id'));
	}
});

// academics waypoint
$('#academics').waypoint(function(direction){
	if (direction == 'down'){
		change_active($(this).attr('id'));
	}
	else if (direction =='up'){
		change_active($(this).prev().attr('id'));
	}
});

// campus life waypoint
$('#campus_life').waypoint(function(direction){
	if (direction == 'down'){
		change_active($(this).attr('id'));
	}
	else if (direction =='up'){
		change_active($(this).prev().attr('id'));
	}
});

// diversity waypoint
$('#diversity').waypoint(function(direction){
	if (direction == 'down'){
		change_active($(this).attr('id'));
	}
	else if (direction =='up'){
		change_active($(this).prev().attr('id'));
	}
});

// drugs waypoint
$('#drugs').waypoint(function(direction){
	if (direction == 'down'){
		change_active($(this).attr('id'));
	}
	else if (direction =='up'){
		change_active($(this).prev().attr('id'));
	}
});

// sex waypoint
$('#sex').waypoint(function(direction){
	if (direction == 'down'){
		change_active($(this).attr('id'));
	}
	else if (direction =='up'){
		change_active($(this).prev().attr('id'));
	}
});

// BEGIN page code (code to be run on each page, just not for charts)

$('.carousel').carousel('pause');

// END page code.  BEGIN function declarations -- functions to make chart creation quicker (MAKE OOP)

var wide = $('#campus_life h1').width();

Highcharts.setOptions({
    chart: {
        style: {
            color: "#000"
        }

    },
    title: {
      style: {
         color: '#FFF',
      }
   },
   labels: {
		style: {
			color: '#FFF'
		}
   },
   
   legend: {
		itemStyle: {
			"color": "#FFF"
		}
   },
   
   plotOptions: {
		pie: {
			dataLabels: {
				color: '#FFF'
			}
		}
   },
   
    xAxis: {
      lineColor: '#FFF',
      tickColor: '#FFF',
      labels: {
         style: {
            color: '#FFF',
         }
      },
      title: {
         style: {
            color: '#FFF'
         }            
      }
   },
   yAxis: {
      minorTickInterval: null,
	  gridLineColor: '#FFF',
      lineColor: '#FFF',
      labels: {
         style: {
            color: '#FFF'
         }
      },
      title: {
         style: {
            color: '#FFF',
         }            
      }
   },
});

function pie_chart(number, title, data_list, options) {

	$('#q' + number.toString()).highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			backgroundColor: 'transparent',
			width: wide,
			style: {
				color: "#FFF"
			}
		},
		
		title: {
			text: title
		},
		
		plotOptions: {
			pie: {
				dataLabels: {
					format: '<b>{point.name}</b>: {point.percentage:.2f} %'
				},
				size: 200
			}
		},
		
		series: [{
			type: 'pie',
			name: title,
			data: data_list
		}],
		
		credits: {
			enabled: false
		}
	});
};

function part_pie(number, title, data_list, fact){
	$('#q' + number.toString()).highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			backgroundColor: 'transparent',
			width: fact*wide
		},
		
		title: {
			text: title
		},
		
		tooltip: {
    	    pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
		
		plotOptions: {
			pie: {
				dataLabels: {
					format: '<b>{point.name}</b>: {point.percentage:.2f} %'
				},
				size: 200
			}
		},
		
		series: [{
			type: 'pie',
			name: title,
			data: data_list
		}],
		
		credits: {
			enabled: false
		}
	});
};

function vertical_bar_chart(number, title, category_list, data_list, options){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'column',
			backgroundColor: 'transparent',
			width: wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list
		},
		
		yAxis: {
			title: {
				text: 'Respondents'
			}
		},
		
		series: data_list,
		
		credits: {
			enabled: false
		}
	});
};

function bar_by_percent(number, title, category_list, data_list, options){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'column',
			backgroundColor: 'transparent',
			width: wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list
		},
		
		yAxis: {
			title: {
				text: 'Percent of Respondents'
			}
		},
		
		tooltip: {
			valueSuffix: '%'
		},
		
		series: data_list,
		
		credits: {
			enabled: false
		}
	});
};

function horizontal_bar_chart(number, title, category_list, data_list, options){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'bar',
			backgroundColor: 'transparent',
			width: wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list
		},
		
		series: data_list,
		
		credits: {
			enabled: false
		}
	});
};

function horizontal_stack(number, title, category_list, data_list, options){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'bar',
			backgroundColor: 'transparent',
			width: wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list
		},
		
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		
		series: data_list,
		
		credits: {
			enabled: false
		}
	});
};

function horizontal_stack_by_percent(number, title, category_list, data_list, options){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'bar',
			backgroundColor: 'transparent',
			width: wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list,
		},
		
		yAxis: {
			title: {
				text: 'Percent'
			}
		},
		
		legend: {
			reversed: true
		},
		
		plotOptions: {
			series: {
				stacking: 'percent'
			}
		},
		
		series: data_list.reverse(),
		
		credits: {
			enabled: false
		}
	});
};

function stack_in_carousel(number, title, category_list, data_list){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'bar',
			backgroundColor: 'transparent',
			width: 0.75*wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list,
		},
		
		yAxis: {
			title: {
				text: 'Percent'
			}
		},
		
		legend: {
			reversed: true
		},
		
		plotOptions: {
			series: {
				stacking: 'percent'
			}
		},
		
		series: data_list.reverse(),
		
		credits: {
			enabled: false
		}
	});
};

function vertical_bar_in_carousel(number, title, category_list, data_list, options){
	$('#q' + number.toString()).highcharts({
		chart: {
			type: 'column',
			backgroundColor: 'transparent',
			width: 0.75*wide
		},
		
		title: {
			text: title
		},
		
		xAxis: {
			categories: category_list
		},
		
		yAxis: {
			title: {
				text: 'Respondents'
			}
		},
		
		series: data_list,
		
		credits: {
			enabled: false
		}
	});
};
// END function definitions.  BEGIN page 1 code

// General

pie_chart(1,
	'Respondents by Form',
	[
		['II Form', 19],
		['III Form', 78],
		['IV Form', 64],
		['V Form', 67],
		['VI Form', 64]
	]);
	
pie_chart(2,
	'Respondents by Race',
	[
		['Caucasian', 186],
		['Hispanic', 8],
		['Black', 23],
		['Middle Eastern', 3],
		['South Asian', 9],
		['East Asian/Asian-American', 40],
		['Pacific Islander', 1],
		['Multiracial', 22]
	]);

pie_chart(3, 'Sex', [['Male', 141], ['Female', 151]]);

pie_chart(4,
	'Respondents by Home',
	[['New England', 140],
	['Mid Atlantic', 47],
	['South', 31],
	['Midwest', 8],
	['Southwest', 2],
	['West Coast', 17],
	['North West', 7],
	['Europe', 4],
	['Asia', 27],
	['Africa', 1],
	['South America', 2],
	['Oceania', 2],
	['North America (excluding the U. S.)', 5]
]);

pie_chart(5, 'Respondents by Religion', [['Christianity', 173], ['Islam', 1], ['Judaism', 11], ['Buddhism', 9], ['Hinduism', 1], ['Atheist/Agnostic', 84], ['Other', 16]]);
	
vertical_bar_chart(6,
	'Political Preference by Gender',
	['Male', 'Female'],
	[{
		name: 'No Preference',
		data: [38, 68]
	},
	{
		name: 'Liberal',
		data: [38, 55]
	},
	{
		name: 'Centrist',
		data: [21, 10]
	},
	{
		name: 'Conservative',
		data: [45, 18]
	}
	],
	{'percent': 'True'});
	
pie_chart(7,
	'Socioeconomic Class',
	[['Upper Class', 122], ['Middle Class', 149], ['Lower Class', 22]]);
	
horizontal_bar_chart(8,
	'Sexual Orientation',
	['Heterosexual', 'Homosexual', 'Bisexual', 'Questioning'],
	[{
		name: 'Sexual Orientation',
		data: [256, 5, 19, 13]
	}]);
	
// END page 1 code.  BEGIN page 2 code

// Academics

vertical_bar_in_carousel(10,
	'How many credits are you taking?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: '5 Credits',
		data: [0, 0, 6, 17, 25]
	},
	{
		name: '5.5 Credits',
		data: [12, 3, 10, 19, 18]
	},
	{
		name: '6 Credits',
		data: [6, 10, 29, 21, 17]
	},
	{
		name: '6.5 Credits',
		data: [0, 65, 16, 8, 4]
	}]);
	
vertical_bar_in_carousel(11,
	'How many hours per day do you spend on homework?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Less than 1',
		data: [2, 2, 2, 2, 13]
	},
	{
		name: '1',
		data: [4, 6, 3, 2, 9]
	},
	{
		name: '2',
		data: [8, 28, 22, 8, 21]
	},
	{
		name: '3',
		data: [2, 35, 20, 23, 9]
	},
	{
		name: '4',
		data: [2, 6, 9, 19, 8]
	},
	{
		name: '5',
		data: [0, 0, 5, 5, 0]
	},
	{
		name: '6',
		data: [0, 1, 2, 2, 3]
	},
	{
		name: '7 or more',
		data: [0, 0, 0, 4, 1]
	}]);
	
vertical_bar_chart(12,
	'What is your GPA?',
	['GPA'],
	[{
		name: 'Above 95',
		data: [2]
	},
	{
		name: '93-95',
		data: [15]
	},
	{
		name: '90-93',
		data: [66]
	},
	{
		name: '87-90',
		data: [91]
	},
	{
		name: '85-87',
		data: [54]
	},
	{
		name: '83-85',
		data: [32]
	},
	{
		name: '80-83',
		data: [18]
	},
	{
		name: '75-80',
		data: [8]
	},
	{
		name: 'Below 75',
		data: [2]
	}]);
	
vertical_bar_chart('12_g',
	'What is your GPA?',
	['Male', 'Female'],
	[{
		name: 'Above 95',
		data: [2, 0]
	},
	{
		name: '93-95',
		data: [8, 7]
	},
	{
		name: '90-93',
		data: [28, 38]
	},
	{
		name: '87-90',
		data: [47, 44]
	},
	{
		name: '85-87',
		data: [24, 30]
	},
	{
		name: '83-85',
		data: [17, 15]
	},
	{
		name: '80-83',
		data: [14, 4]
	},
	{
		name: '75-80',
		data: [0, 7]
	},
	{
		name: 'Below 75',
		data: [0, 2]
	}]);
	
bar_by_percent('12_r',
	'What is your GPA?',
	['Caucasian', 'Black', 'East Asian', 'Multiracial'],
	[{
		name: 'Above 95',
		data: [0.54, 0, 2.63, 0]
	},
	{
		name: '93-95',
		data: [2.16, 0, 21.05, 4.55]
	},
	{
		name: '90-93',
		data: [21.62, 17.39, 39.47, 18.18]
	},
	{
		name: '87-90',
		data: [35.14, 17.39, 18.42, 40.91]
	},
	{
		name: '85-87',
		data: [19.46, 21.74, 13.16, 13.64]
	},
	{
		name: '83-85',
		data: [10.81, 26.09, 5.26, 9.09]
	},
	{
		name: '80-83',
		data: [7.57, 4.35, 0, 0.09]
	},
	{
		name: '75-80',
		data: [2.70, 8.70, 0, 4.55]
	},
	{
		name: 'Below 75',
		data: [0, 4.35, 0, 0]
	}]);
	
vertical_bar_chart(13,
	'How do you feel about Grade Inflation at Groton?',
	['Very Deflated', 'Deflated', 'Neutral', 'Inflated', 'Very Inflated'],
	[{
		name: 'Respondents',
		data: [14, 70, 146, 53, 5]
	}]);
	
pie_chart('14_l',
	'How do you feel about the Latin requirement?',
	[['Highly Agree', 47], ['Agree', 95], ['Neutral', 63], ['Disagree', 49], ['Highly Disagree', 34]]);
	
pie_chart('14_a',
	'How do you feel about the Arts requirement?',
	[['Highly Agree', 49], ['Agree', 86], ['Neutral', 68], ['Disagree', 46], ['Highly Disagree', 38]]);
	
pie_chart('14_r',
	'How do you feel about the Religious Studies requirement?',
	[['Highly Agree', 62], ['Agree', 108], ['Neutral', 66], ['Disagree', 34], ['Highly Disagree', 18]]);
	
pie_chart('14_e',
	'How do you feel about the Ethics requirement? (V Form and below)',
	[['Highly Agree', 23], ['Agree', 80], ['Neutral', 82], ['Disagree', 24], ['Highly Disagree', 14]]);
	
pie_chart('14_e6',
	'How do you feel about the Ethics requirement? (VI Form)',
	[['Highly Agree', 4], ['Agree', 12], ['Neutral', 15], ['Disagree', 15], ['Highly Disagree', 18]]);

vertical_bar_in_carousel(15,
	'What three academic departments do you spend the most time preparing for?',
	['Science', 'History', 'English', 'Classics', 'Math', 'Foreign Language', 'Religion and Ethics', 'Music', 'Art'],
	[{
		name: "Respondents' answers",
		data: [213, 197, 167, 141, 59, 51, 28, 6, 2]
	}]);
	
var form_happiness_data = {2: [0, 2, 0, 0, 2, 0, 3, 11, 0, 0], 3: [1, 0, 2, 1, 2, 3, 20, 25, 12, 12], 4: [0, 0, 1, 0, 4, 0, 14, 21, 13, 10], 5: [0, 0, 0, 2, 0, 2, 13, 22, 19, 7], 6: [0, 0, 0, 0, 3, 4, 15, 29, 9, 4]};
var form_strs = {2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI'};
for (var i = 2; i <= 6; i++){
	var form_str = form_strs[i];

	vertical_bar_in_carousel('16_' + i.toString(),
		'Happiness of ' + form_str + ' Formers',
		['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		[{
			name: form_str + ' Form Respondents',
			data: form_happiness_data[i]
		}]);
}

pie_chart(17,
	'Do your grades reflect your effort?',
	[['Yes', 145], ['No', 143]]);
	
vertical_bar_chart('17_a',
	'Do your grades reflect your effort, by GPA',
	['Above 95', '93-95', '90-93', '87-90', '85-87', '83-85', '80-83', '75-80', 'Below 75'],
	[{
		name: 'Yes',
		data: [2, 11, 47, 49, 14, 14, 6, 1, 1]
	},
	{
		name: 'No',
		data: [0, 4, 19, 42, 40, 18, 12, 7, 1]
	}]);
	
pie_chart(18,
	'In what departments do grades not represent effort?',
	[['Science', 89], ['History', 74], ['English', 60], ['Math', 53], ['Modern Languages', 35], ['Classics', 34], ['Art', 23], ['Religion & Ethics', 19], ['Music', 8]]);

// END page 2 code/  BEGIN page 3 code

// Campus Life
	
vertical_bar_chart(20,
	'Average Sleep per Night',
	['Less than 3', '3', '4', '5', '6', '7', '8', '9', 'More than 9'],
	[{
		name: 'Hours of Sleep per Night',
		data: [3, 0, 7, 15, 60, 137, 56, 4, 0]
	}]);
	
pie_chart(21,
	'How much do you use caffeine?',
	[['Never', 85],
	['Rarely', 74],
	['Weekly', 34],
	['Every Few Days', 41],
	['Daily', 31],
	['Multiple Times a Day', 17]]);
	
pie_chart(22, 'If you have a problem in your dorm, who would you turn to?',
	[['Peer Counselor', 15],
	['Prefect (other than Peer Counselors)', 35],
	['Peer', 147],
	['Faculty Member', 13],
	['Family', 34],
	['No one', 38]]);
	
vertical_bar_chart(24,
	'Social Requirements',
	['Daily Chapel', 'Weekend Religious Requirement', 'Dresscode', 'Sit Down', 'Atletic Requirement'],
	[{
		name: 'Strongly Agree',
		data: [74, 23, 40, 36, 107]
	},
	{
		name: 'Agree',
		data: [93, 46, 118, 93, 90]
	},
	{
		name: 'Neutral',
		data: [69, 50, 66, 92, 51]
	},
	{
		name: 'Disagree',
		data: [32, 82, 40, 38, 24]
	},
	{
		name: 'Strongly Disagree',
		data: [14, 81, 18, 23, 10]
	}]);
	
pie_chart(26,
	'Do you feel overcommited?',
	[['Yes', 118], ['No', 164]]);
	
pie_chart(27,
	'What is your primary motivation for club involvement?',
	[['Extracurricular Interest', 172], ['College', 75], ['Academic Reasons', 2], ['Peer Pressure', 10], ['Other', 23]]);

pie_chart(28,
	'What is your greatest source of pressure?',
	[['I have no pressure', 12], ['Courses', 52], ['Sports', 11], ['Peers', 26], ['College', 58], ['Personal Expectations', 107], ['Other', 15]]);

/*$('#q28').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			backgroundColor: 'transparent',
			width: $('#happiness2').width()
		},
		
		title: {
			text: 'What is your greatest source of pressure?'
		},
		
		plotOptions: {
			pie: {
				dataLabels: {
					format: '<b>{point.name}</b>: {point.percentage:.2f} %',
					crop: false,
					overflow: 'none'
				},
				size: 200
			}
		},
		
		series: [{
			type: 'pie',
			name: 'What is your greatest source of pressure?',
			data: [['I have no pressure', 12], ['Courses', 52], ['Sports', 11], ['Peers', 26], ['College', 58], ['Personal Expectations', 107], ['Other', 15]]
		}],
		
		credits: {
			enabled: false
		}
	});*/
	
pie_chart(29,
	'Do you think the DC system is fair?',
	[['Yes', 196], ['No', 86]]);
	
vertical_bar_in_carousel(30,
	'Rate your happiness/stress at Groton',
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
	[{
		name: 'Happiness rating',
		data: [1, 5, 6, 9, 35, 34, 64, 79, 41, 8]
	},
	{
		name: 'Stress rating',
		data: [4, 8, 11, 13, 21, 28, 61, 67, 42, 27]
	}]);

part_pie(32,
	'Are you happy?',
	[["Yes", 247], ['No', 35]], 0.75);
	
part_pie(33,
	'If you had the chance to start again, would you still come to Groton?',
	[['Yes', 204], ['No', 22], ['Unsure', 56]], 0.75);
	
// END page 3 code.  BEGIN page 4 code

// Diversity

horizontal_stack_by_percent('35_r',
	'There is Racism at Groton',
	['Everyone', 'Caucasian', 'Asian', 'Hispanic', 'Black'],
	[{
		name: 'Highly Disagree',
		data: [31, 25, 2, 0, 0]
	},
	{
		name: 'Disagree',
		data: [67, 45, 11, 2, 4]
	},
	{
		name: 'Neutral',
		data: [68, 49, 8, 1, 4]
	},
	{
		name: 'Agree',
		data: [98, 56, 13, 4, 11]
	},
	{
		name: 'Highly Agree',
		data: [18, 6, 3, 1, 4]
	}]);
	
horizontal_stack_by_percent('35_s',
	'There is Sexism at Groton',
	['Everyone', 'Males', 'Females'],
	[{
		name: 'Highly Disagree',
		data: [18, 16, 2]
	},
	{
		name: 'Disagree',
		data: [40, 36, 4]
	},
	{
		name: 'Neutral',
		data: [36, 27, 9]
	},
	{
		name: 'Agree',
		data: [108, 48, 60]
	},
	{
		name: 'Highly Agree',
		data: [80, 11, 69]
	}]);
	
horizontal_stack_by_percent('35_h',
	'There is Homophobia at Groton',
	['Everyone', 'Heterosexual', 'LGBTQ'],
	[{
		name: 'Highly Disagree',
		data: [15, 14, 1]
	},
	{
		name: 'Disagree',
		data: [47, 46, 1]
	},
	{
		name: 'Neutral',
		data: [61, 58, 3]
	},
	{
		name: 'Agree',
		data: [112, 90, 22]
	},
	{
		name: 'Highly Agree',
		data: [46, 36, 10]
	}]);
	
pie_chart(36,
	'How has the Diversity and Inclusion Task Force affected Groton?',
	[['Positively', 70], ["It hasn't changed Groton", 167], ['Negatively', 45]]);
	
horizontal_stack_by_percent(37,
	'Do you think Groton is supportive of coming out?',
	['Everyone', 'Heterosexual', 'Homosexual', 'Bisexual', 'Questioning'],
	[{
		name: 'Yes',
		data: [157, 144, 3, 7, 3]
	},
	{
		name: 'No',
		data: [125, 101, 2, 12, 10]
	}]);

// END page 4 code.  BEGIN page 5 code

// Sex

vertical_bar_chart(41,
	'You feel pressured into hookups at Groton',
	['Highly Disagree', 'Disagree', 'Neutral', 'Agree', 'Highly Agree'],
	[{
		name: 'Male',
		data: [24, 44, 29, 26, 8]
	},
	{
		name: 'Female',
		data: [10, 34, 43, 40, 9]
	}]);
	
horizontal_stack_by_percent(42,
	'The campus fosters healthy relationships',
	['Everyone', 'Males', 'Females'],
	[{
		name: 'Highly Disagree',
		data: [46, 15, 31]
	},
	{
		name: 'Disagree',
		data: [102, 42, 60]
	},
	{
		name: 'Neutral',
		data: [77, 49, 28]
	},
	{
		name: 'Agree',
		data: [39, 23, 16]
	},
	{
		name: 'Highly Agree',
		data: [3, 2, 1]
	}]);
	
stack_in_carousel(39,
	'How many hookups have you had this year?',
	['Everyone', 'Males', 'Females', 'II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: '0',
		data: [112, 65, 47, 12, 36, 26, 23, 15]
	},
	{
		name: '1',
		data: [50, 16, 34, 2, 13, 11, 9, 15]
	},
	{
		name: '2',
		data: [36, 13, 23, 1, 10, 9, 10, 6]
	},
	{
		name: '3-10',
		data: [37, 18, 19, 0, 10, 12, 8, 7]
	},
	{
		name: '11-30',
		data: [17, 11, 6, 0, 5, 2, 5, 5]
	},
	{
		name: 'More than 30',
		data: [15, 8, 7, 0, 1, 0, 5, 9]
	}]);
	
stack_in_carousel(40,
	'How many relationships have you had this year?',
	['Everyone', 'Males', 'Females', 'II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: '0',
		data: [134, 73, 61, 11, 39, 34, 27, 23]
	},
	{
		name: '1',
		data: [89, 39, 50, 4, 21, 19, 20, 25]
	},
	{
		name: '2',
		data: [30, 12, 18, 0, 11, 4, 9, 6]
	},
	{
		name: '3',
		data: [8, 4, 4, 0, 2, 2, 3, 1]
	},
	{
		name: '4',
		data: [4, 1, 3, 0, 2, 1, 0, 1]
	},
	{
		name: '5',
		data: [2, 2, 0, 0, 0, 0, 1, 1]
	}]);
	
stack_in_carousel(43,
	'Have you had sexual intercourse?',
	['Everyone', 'II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, on campus',
		data: [10, 0, 0, 0, 4, 6]
	},
	{
		name: 'Yes, off campus',
		data: [17, 0, 0, 4, 8, 5]
	},
	{
		name: 'Yes, on and off campus',
		data: [31, 0, 0, 3, 8, 20]
	},
	{
		name: 'No',
		data: [209, 15, 75, 53, 40, 26]
	}]);
	
stack_in_carousel(44,
	'Have you had oral sex?',
	['Everyone', 'II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, on campus',
		data: [17, 0, 2, 1, 7, 7]
	},
	{
		name: 'Yes, off campus',
		data: [27, 1, 3, 5, 13, 5]
	},
	{
		name: 'Yes, on and off campus',
		data: [45, 0, 0, 9, 10, 26]
	},
	{
		name: 'No',
		data: [178, 14, 70, 45, 30, 19]
	}]);
	
stack_in_carousel(45,
	'Have you ever watched porn?',
	['Everyone', 'Males', 'Females'],
	[{
		name: 'Yes, only off campus',
		data: [31, 17, 14]
	},
	{
		name: 'Yes, both on and off campus',
		data: [109, 96, 13]
	},
	{
		name: 'No',
		data: [127, 18, 109]
	}]);
	
stack_in_carousel('45b',
	'Have you ever watched porn?',
	['II Form, Males', 'III Form, Males', 'IV Form, Males', 'V Form, Males', 'VI Form, Males', 'II Form, Females', 'III Form, Females', 'IV Form, Females', 'V Form, Females', 'VI Form, Females'],
	[{
		name: 'Yes, only off campus',
		data: [1, 5, 7, 3, 1, 0, 1, 2, 4, 6]
	},
	{
		name: 'Yes, both on and off campus',
		data: [6, 18, 21, 31, 20, 0, 1, 2, 4, 6]
	},
	{
		name: 'No',
		data: [3, 11, 1, 2, 1, 5, 39, 27, 18, 20]
	}]);

// END page 5 code.  BEGIN page 6 code

// Drugs & Wellness

horizontal_stack_by_percent('46_a',
	'Have you consumed alcohol?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, only on campus',
		data: [0, 1, 3, 1, 3]
	},
	{
		name: 'Yes, only off campus',
		data: [4, 16, 17, 26, 16]
	},
	{
		name: 'Yes, both on and off campus',
		data: [0, 0, 12, 12, 25]
	},
	{
		name: 'No',
		data: [11, 58, 28, 21, 13]
	}]);

horizontal_stack_by_percent('46_c',
	'Have you used cigarettes?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, only on campus',
		data: [0, 0, 0, 0, 1]
	},
	{
		name: 'Yes, only off campus',
		data: [0, 4, 8, 18, 10]
	},
	{
		name: 'Yes, both on and off campus',
		data: [0, 0, 1, 2, 6]
	},
	{
		name: 'No',
		data: [15, 71, 51, 40, 40]
	}]);
	
horizontal_stack_by_percent('46_t',
	'Have you used chewing tobacco?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, only on campus',
		data: [0, 0, 6, 2, 2]
	},
	{
		name: 'Yes, only off campus',
		data: [0, 0, 1, 2, 0]
	},
	{
		name: 'Yes, both on and off campus',
		data: [0, 0, 3, 4, 4]
	},
	{
		name: 'No',
		data: [15, 75, 50, 52, 51]
	}]);
	
horizontal_stack_by_percent('46_m',
	'Have you used marijuana?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, only on campus',
		data: [0, 1, 3, 1, 2]
	},
	{
		name: 'Yes, only off campus',
		data: [1, 5, 6, 14, 12]
	},
	{
		name: 'Yes, both on and off campus',
		data: [0, 0, 5, 9, 17]
	},
	{
		name: 'No',
		data: [14, 69, 46, 36, 26]
	}]);
	
horizontal_stack_by_percent('46_p',
	'Have you used prescription drugs?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, only on campus',
		data: [1, 2, 6, 4, 3]
	},
	{
		name: 'Yes, only off campus',
		data: [2, 4, 3, 6, 2]
	},
	{
		name: 'Yes, both on and off campus',
		data: [1, 9, 8, 4, 7]
	},
	{
		name: 'No',
		data: [11, 60, 43, 46, 45]
	}]);
	
horizontal_stack_by_percent('46_h',
	'Have you used hard drugs?',
	['II Form', 'III Form', 'IV Form', 'V Form', 'VI Form'],
	[{
		name: 'Yes, only on campus',
		data: [0, 0, 0, 1, 1]
	},
	{
		name: 'Yes, only off campus',
		data: [0, 0, 0, 3, 1]
	},
	{
		name: 'Yes, both on and off campus',
		data: [0, 0, 0, 0, 4]
	},
	{
		name: 'No',
		data: [15, 75, 60, 56, 51]
	}]);

part_pie(47,
	'Have you ever inflicted harm upon yourself? (Males)',
	[['Yes', 6], ['No', 125]], 0.5);

part_pie('47b',
	'Have you ever inflicted harm upon yourself? (Females)',
	[['Yes', 17], ['No', 119]], 0.5);
	
part_pie(48,
	'Have you experienced an eating disorder at Groton? (Males)',
	[['Yes', 10], ['No', 121]], 0.5);
	
part_pie('48b',
	'Have you experienced an eating disorder at Groton? (Females)',
	[['Yes', 45], ['No', 91]], 0.5);
	
part_pie(49,
	'Have you experienced major depression at Groton? (Males)',
	[['Yes', 29], ['No', 102]], 0.5);
	
part_pie('49b',
	'Have you experienced major depression at groton? (Females)',
	[['Yes', 57], ['No', 79]], 0.5);

// END page 6 code.  END charts.
	
});