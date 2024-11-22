export default {
	fetchAndSetFullName: async () => {
		try {
			// Gọi API
			const response = await profileAPI.run();
			if (response && response.length > 0) {
				// Lưu tên vào Appsmith store
				storeValue("full_name", response[0].full_name);
			} else {
				// Lưu giá trị mặc định nếu không có dữ liệu
				storeValue("full_name", "Không có dữ liệu");
			}
		} catch (error) {
			// Xử lý lỗi
			storeValue("full_name", "Lỗi khi tải dữ liệu");
		}
	},
};
