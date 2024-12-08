export default {
	handleLogout() {
		// Xóa token từ Appsmith store
		removeValue('access_token');
		removeValue('refresh_token');

		// Hiển thị thông báo đăng xuất
		showAlert('Logged out successfully!', 'success');

		// Chuyển hướng về CitizenPage
		navigateTo('CitizenPage', {}, 'SAME_WINDOW'); // Chuyển hướng trong cùng cửa sổ
	},
};
