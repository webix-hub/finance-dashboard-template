import {dataSidebarMenu} from "../../data/dataSidebarMenu";

export const sidebarMenu = {
	view: "sidebar",
	css: "webix_dark sidebarMenu",
	select: true,
	scroll: true,
	data: dataSidebarMenu,
	ready() {
		const id = this.getFirstId();
		this.select(id);
	}
};
