import {dataStocks} from "../data/dataStocks";

export const stocks = {
	minWidth: 686,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Stocks"
				}
			]
		},
		{
			view: "datatable",
			header: false,
			rowHeight: 48,
			css: "customTable",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				},
				growthTemplate(obj) {
					const html = `<span class = "status ${obj.color}">${obj.growth}</span>`;
					return html;
				}
			},
			columns: [
				{id: "ch1", template: "{common.customCheckbox()}", width: 41},
				{id: "company", template: "<div class='company flex'><span class='thick' style = 'font-size: 16px;'>#abbreviation#</span><br><span>#companyName#</span></div>", width: 250},
				{id: "cost", template: "<div>#cost#</div>", width: 150},
				{id: "growth", template: "{common.growthTemplate()}", width: 90},
				{
					id: "income",
					template(obj, common, value, column, index) {
						let red = webix.Sparklines.getTemplate({type: "splineArea", color: "#DE2F2F"});
						let green = webix.Sparklines.getTemplate({type: "splineArea", color: "#1B9D63"});
						let template = obj.color === "green" ? green : red;
						return template.apply(this, [obj, common, value, column, index]);
					},
					fillspace: true
				}
			],
			data: dataStocks
		}
	]
};
