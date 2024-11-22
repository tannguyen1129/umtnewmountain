export default {
	async handleRegister() {
		// Tạo payload từ các widget
		const payload = {
			email: emailInput.text,
			username: usernameInput.text,
			full_name: fullnameInput.text,
			gender: genderChoice.selectedOptionValue,
			role: roleChoice.selectedOptionValue,
			password: passwordInput.text,
			password2: passwordconfirmInput.text,
		};

		// Kiểm tra các trường thông tin không để trống
		if (
			!payload.email || 
			!payload.username || 
			!payload.full_name || 
			!payload.gender || 
			!payload.role || 
			!payload.password || 
			!payload.password2
		) {
			showAlert('All fields are required!', 'error');
			return;
		}

		try {
			// Gửi yêu cầu API
			await registerAPI.run({ data: payload });

			// Nếu thành công, hiển thị thông báo
			showAlert('Register Successfully', 'success');

			// Điều hướng dựa trên role
			if (payload.role === 'Citizen') {
				navigateTo('CitizenPage', {}, 'SAME_WINDOW');
			} else if (payload.role === 'Volunteer') {
				navigateTo('VolunteerPage', {}, 'SAME_WINDOW');
			} else {
				showAlert('Role not recognized. Please contact support.', 'error');
			}
		} catch (error) {
			// Nếu lỗi, hiển thị thông báo lỗi
			showAlert('Registration failed! Please try again.', 'error');
		}
	},

	navigateToLogin() {
		// Chuyển hướng đến RegisterPage
		navigateTo('LoginPage', {}, 'SAME_WINDOW');
	}
};
