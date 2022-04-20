import {dataGoalsBudget} from "../data/dataGoalsBudget";

export const goalsBudget = {
	minWidth: 235,
	height: 315,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Goals budget"
				}
			]
		},
		{
			type: "clean",
			rows: [
				{
					view: "carousel",
					css: "carousel",
					cols: [
						{
							type: "clean",
							rows: [
								{
									view: "chart",
									type: "donut",
									donutInnerText: "<span class = 'thick number'>83%</span>",
									value: "#value#",
									color: "#color#",
									padding: {
										top: 23,
										right: 5,
										bottom: 10,
										left: 5
									},
									innerRadius: 65,
									data: dataGoalsBudget
								},
								{
									view: "template",
									template: "<span class = 'thick'>Travel</span><br><span>$415.00 / $500.00</span>",
									height: 70,
									css: "align space"
								}
							]
						}
					],
					navigation: {
						type: "side",
						items: false
					}
				}

			]
		}
	]
};
