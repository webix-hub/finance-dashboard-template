import {dataQuickTransactions} from "../data/dataQuickTransactions";

export const quickTransactions = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Quick transactions"
				}
			]
		},
		{
			view: "form",
			padding: 10,
			minWidth: 235,
			rows: [
				{
					view: "dataview",
					borderless: true,
					height: 210,
					xCount: 2,
					type: {
						width: "auto",
						height: "auto",
						css: "infoItem",
						template(obj) {
							return `
									<div class="container">
										<img class="infoImg" src="./images/transactions/${obj.img}" alt="${obj.title}" />
										<span class="thick align infoTitle">${obj.title}</span>
									</div>
								`;
						}
					},
					data: dataQuickTransactions
				},
				{
					view: "button",
					label: "Transaction",
					css: "webix_primary"
				}
			]
		}
	]
};
