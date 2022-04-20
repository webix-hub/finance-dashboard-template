import {MARGIN} from "../helpers/constants";

export const header = {
	view: "toolbar",
	css: "webix_dark darkHeader",
	padding: {left: 5, right: 20, top: 8, bottom: 8},
	margin: MARGIN,
	cols: [
		{
			view: "icon",
			icon: "mdi mdi-menu"
		},
		{
			view: "label",
			label: "FINANCE BOARD"
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-information"
		},
		{
			view: "icon",
			icon: "mdi mdi-bell",
			badge: 5
		},
		{
			view: "icon",
			icon: "mdi mdi-settings"
		}
	]
};
