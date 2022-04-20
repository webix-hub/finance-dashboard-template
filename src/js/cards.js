import {MARGIN} from "../helpers/constants";

let img = obj => `<img src='${obj.src}' />`;

export const cards = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10, right: 10},
			margin: MARGIN,
			cols: [
				{
					view: "label",
					label: "Cards"
				},
				{},
				{
					view: "richselect",
					css: "filter",
					width: 70,
					options: {
						view: "suggest",
						fitMaster: false,
						width: 100,
						body: {
							view: "list",
							css: "suggestList",
							data: [
								"Credit", "Debit"
							]
						}
					}
				}
			]
		},
		{
			view: "form",
			padding: 0,
			cols: [
				{
					view: "template",
					template: img,
					data: {src: "./images/cards/payCard.png"},
					css: "cardImg",
					borderless: true
				},
				{
					type: "clean",
					borderless: true,
					rows: [
						{
							view: "radio",
							value: 1,
							css: "space",
							height: 232,
							width: 180,
							options: [
								{id: 1, value: "<span class = 'thick'>Visa classic</span><br><span>$5,300.00</span>"},
								{id: 2, value: "<span class = 'thick'>Mastercard Gold</span><br><span>$2,500.00</span>"},
								{id: 3, value: "<span class = 'thick'>Mastercard Black</span><br><span>$10,565.00</span>"}
							],
							vertical: true
						},
						{
							view: "button",
							type: "icon",
							icon: "mdi mdi-plus",
							label: "New card",
							css: "webix_transparent cardButton noHover"
						}
					]
				}
			]
		}
	]
};
