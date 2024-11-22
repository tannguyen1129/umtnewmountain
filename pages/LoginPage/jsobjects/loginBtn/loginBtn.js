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

            // Log toàn bộ response để kiểm tra
            console.log('Login response:', response);

            // Lấy role từ phản hồi API
            const userRole = response.role; // Giả sử API trả về trường `role`

            // Điều hướng dựa trên role
            if (userRole === 'Citizen') {
                showAlert('Welcome Citizen!', 'success');
                navigateTo('CitizenPage', {}, 'SAME_WINDOW');
            } else if (userRole === 'Volunteer') {
                showAlert('Welcome Volunteer!', 'success');
                navigateTo('VolunteerPage', {}, 'SAME_WINDOW');
            } else if (userRole === 'Authority') {
                showAlert('Welcome Authority!', 'success');
                navigateTo('AuthorityPage', {}, 'SAME_WINDOW');
            } else {
                // Trường hợp role không khớp
                showAlert(`Role "${response.role}" not recognized. Please contact support.`, 'error');
            }
        } catch (error) {
            // Nếu lỗi, hiển thị thông báo lỗi
            showAlert('Login failed! Please check your email and password.', 'error');
            console.error('Login error:', error); // Log lỗi để dễ debug
        }
    },
	
	  navigateToRegister() {
        // Chuyển hướng đến RegisterPage
        navigateTo('RegisterPage', {}, 'SAME_WINDOW');
    }
};
