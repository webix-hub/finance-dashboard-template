import {dataCategory} from "../data/dataCategory";

export const category = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Category"
				}
			]
		},
		{
			view: "list",
			type: {
				height: 86,
				css: "categoryItemWrapp"
			},
			template(obj) {
				const html = `
                    <div class='categorytItem flex'>
                        <span class='thick'>${obj.title}</span>
						<span class='categoryLevel flex ${obj.color}'>
							<span style='width: ${obj.level}%'></span>
						</span>
						<span class='categoryInfo flex'>
							<span class='categoryTransactions'>${obj.transactions} transactions</span>
							<span>
								<span class='categoryTotal'>${obj.total}</span>
							</span>
						</span>
                    </div>
                `;
				return html;
			},
			data: dataCategory
		}
	]
};
