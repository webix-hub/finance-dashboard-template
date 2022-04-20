import {sidebarUser} from "./sidebarUser";
import {sidebarMenu} from "./sidebarMenu";
import {MARGIN} from "../../helpers/constants";

const sidebar = {
	css: "leftSidebar",
	width: 320,
	body: {
		margin: MARGIN,
		rows: [
			sidebarUser,
			sidebarMenu
		]
	}
};

export default sidebar;
