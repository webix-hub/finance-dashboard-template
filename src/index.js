
import sidebar from "./js/sidebar";
import {header} from "./js/header";
import {topbar} from "./js/topbar";
import "./helpers/headerCheckbox";
import {totalInfo} from "./js/totalInfo";
import {stocks} from "./js/stocks";
import {cards} from "./js/cards";
import {goalsBudget} from "./js/goalsBudget";
import {category} from "./js/category";
import {quickTransactions} from "./js/quickTransactions";
import {analyticsReport} from "./js/analyticsReport";
import {recentInvoices} from "./js/recentInvoices";
import {MARGIN} from "./helpers/constants";

// SCSS
import "./styles/main.scss";


webix.ready(() => {
	webix.CustomScroll.init();

	webix.ui({
		rows: [
			header,
			{
				cols: [
					sidebar,
					{
						view: "scrollview",
						scroll: true,
						body: {
							type: "space",
							margin: MARGIN,
							rows: [
								topbar,
								{
									margin: MARGIN,
									cols: [
										{
											margin: MARGIN,
											rows: [
												totalInfo,
												recentInvoices
											]
										},
										{
											margin: MARGIN,
											cols: [
												{
													margin: MARGIN,
													minWidth: 400,
													rows: [
														cards,
														category
													]
												},
												{
													margin: MARGIN,
													width: 270,
													rows: [
														goalsBudget,
														quickTransactions
													]
												}
											]
										}
									]
								},
								{
									margin: MARGIN,
									minHeight: 190,
									cols: [
										analyticsReport,
										stocks
									]
								}
							]
						}
					}
				]
			}
		]
	});
});
