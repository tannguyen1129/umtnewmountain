export default {
	async handleLogin() {
		// Tạo payload từ các widget
		const payload = {
			email: emailInput.text, // Email từ widget emailInput
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

			// Kiểm tra role từ phản hồi API
			const userRole = response.role; // Lấy role từ phản hồi API

			// Điều hướng dựa trên role
			if (userRole === 'citizen') {
				showAlert('Welcome Citizen!', 'success');
				navigateTo('CitizenPage', {}, 'SAME_WINDOW');
			} else if (userRole === 'volunteer') {
				showAlert('Welcome Volunteer!', 'success');
				navigateTo('VolunteerPage', {}, 'SAME_WINDOW');
			} else if (userRole === 'authority') {
				showAlert('Welcome Authority!', 'success');
				navigateTo('AuthorityPage', {}, 'SAME_WINDOW');
			} else {
				showAlert('Role not recognized. Please contact support.', 'error');
			}
		} catch (error) {
			// Nếu lỗi, hiển thị thông báo lỗi
			showAlert('Login failed! Please check your email and password.', 'error');
		}
	}
};
