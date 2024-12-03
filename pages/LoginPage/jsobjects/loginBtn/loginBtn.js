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

			// Lưu JWT token vào Appsmith store
			storeValue('access_token', response.access); // Lưu access token
			storeValue('refresh_token', response.refresh); // Lưu refresh token (nếu có)

			// Kiểm tra vai trò từ phản hồi và điều hướng
			if (response.role === 'agency') {
				showAlert('Welcome Agency!', 'success');
				navigateTo('AgencyPage', {}, 'SAME_WINDOW'); // Điều hướng đến AgencyPage
			} else if (response.role === 'authority') {
				showAlert('Welcome Authority!', 'success');
				navigateTo('AuthorityResourcePage', {}, 'SAME_WINDOW'); // Điều hướng đến AuthorityResourcePage
			} else {
				showAlert('Login successful, but role is unknown.', 'warning');
			}
		} catch (error) {
			// Nếu lỗi, hiển thị thông báo lỗi
			showAlert('Login failed! Please check your username and password.', 'error');
			console.error('Login error:', error); // Log lỗi để dễ debug
		}
	},

	handleLogout() {
		// Xóa token từ Appsmith store
		removeValue('access_token');
		removeValue('refresh_token');

		// Hiển thị thông báo đăng xuất
		showAlert('Logged out successfully!', 'success');

		// Chuyển hướng về LoginPage
		navigateTo('LoginPage', {}, 'SAME_WINDOW');
	},
};
