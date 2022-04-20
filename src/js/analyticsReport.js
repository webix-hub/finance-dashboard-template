import {dataReports} from "../data/dataReports";
import {MARGIN} from "../helpers/constants";


export const analyticsReport = {
	minWidth: 570,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10, right: 10},
			margin: MARGIN,
			cols: [
				{
					view: "label",
					label: "Analytics Report"
				},
				{},
				{
					view: "richselect",
					value: "Month",
					css: "filter",
					width: 70,
					options: {
						fitMaster: false,
						width: 100,
						body: {
							css: "suggestList",
							data: [
								"Day", "Week", "Month", "Year"
							]
						}
					}
				}
			]
		},
		{
			view: "chart",
			type: "spline",
			value: "#value#",
			offset: 0,
			padding: {top: 15, right: 30},
			tooltip: {
				template: "<span class = 'thin'>20 Sep 2021</span><br><span class = 'thick'>$3,120.00</span><span class = 'thin'> -4%</span>"
			},
			item: {
				radius: 6,
				alpha: 0
			},
			line: {
				color: "#A6CEE3",
				width: 6
			},
			xAxis: {
				template: "#month#",
				lines(obj) {
					return !!(obj.month === "" || obj.month === "Dec");
				}
			},
			yAxis: {
				start: 0,
				end: 100,
				step: 20
			},
			data: dataReports
		}
	]
};
