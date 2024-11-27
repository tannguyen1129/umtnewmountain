export default {
	async handleLogin() {
		// Tạo payload từ các widget
		const payload = {
			email: usernameInput.text, // Email từ widget emailInput
			password: passwordInput.text // Password từ widget passwordInput
		};

		// Kiểm tra các trường thông tin không để trống
		if (!payload.email || !payload.password) {
			showAlert('Email and Password are required!', 'error');
			return;
		}

		try {
			// Gửi yêu cầu API để đăng nhập
			const response = await loginAPI.run({ data: payload });

			// Log toàn bộ response để kiểm tra
			console.log('Login response:', response);

			// Chuyển hướng đến AuthorityPage nếu đăng nhập thành công
			showAlert('Welcome Authority!', 'success');
			navigateTo('AuthorityPage', {}, 'SAME_WINDOW');
		} catch (error) {
			// Nếu lỗi, hiển thị thông báo lỗi
			showAlert('Login failed! Please check your username and password.', 'error');
			console.error('Login error:', error); // Log lỗi để dễ debug
		}
	},

	navigateToRegister() {
		// Chuyển hướng đến RegisterPage
		navigateTo('RegisterPage', {}, 'SAME_WINDOW');
	}
};
