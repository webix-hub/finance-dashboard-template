export const sidebarUser = {
	view: "template",
	css: "sidebarUser",
	height: 204,
	template() {
		let html = `
            <div class="userWrapp flex">
                <div class="userImg flex">
                    <img src="./images/photos/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo flex">
                    <span class="welcome">Welcome back,</span>
                    <span class="userName thick">Adam Bennet</span>
                </div>
            </div>
        `;
		return html;
	}
};
