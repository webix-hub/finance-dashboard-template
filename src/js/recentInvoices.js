import {dataRecentInvoices} from "../data/dataRecentInvoices";
import {MARGIN} from "../helpers/constants";

export const recentInvoices = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10, right: 10},
			margin: MARGIN,
			cols: [
				{
					view: "label",
					label: "Recent Invoices"
				},
				{},
				{
					view: "richselect",
					css: "filter",
					label: "<span class='mdi mdi-filter'></span>",
					labelWidth: 20,
					width: 92,
					placeholder: "Filters",
					options: {
						view: "suggest",
						fitMaster: false,
						width: 100,
						body: {
							view: "list",
							css: "suggestList",
							data: [
								{id: 1, value: "", $empty: true},
								{id: 2, value: "Filter 1"},
								{id: 3, value: "Filter 2"}
							]
						}
					}
				}
			]
		},
		{
			view: "datatable",
			css: "customTable",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				},
				recipientTemplate(obj) {
					return `<div class="flex recipient">
						<div class="recipientAvatar"><img src="./images/recipients/${obj.avatar}" /></div>
						<span class="strong">${obj.recipient}</span>
					</div>`;
				},
				statusTemplate(obj) {
					const html = `<div class = 'width'><span style = "width:52px;" class = "align status ${obj.color}">${obj.status}</span></div>`;
					return html;
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 41},
				{id: "number", header: "№", width: 120},
				{id: "recipient", header: "Recipient", minWidth: 150, fillspace: true, template: "{common.recipientTemplate()}"},
				{id: "date", header: "Date", minWidth: 150, fillspace: true},
				{id: "amount", header: "Amount", minWidth: 100, fillspace: true},
				{id: "status", header: "Status", template: "{common.statusTemplate()}", minWidth: 100, fillspace: true}
			],
			rowHeight: 48,
			data: dataRecentInvoices
		}
	]
};
