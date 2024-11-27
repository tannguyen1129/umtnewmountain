export default {
	async createRequest () {
		// Payload cho API
		const payload = {
			requester_name: RequesterInput.text, // Lấy từ input requesterNameInput
			description: DescriptionInput.text, // Lấy từ input descriptionInput
			resource_type: resoureceType.selectedOptionValue, // Lấy từ dropdown resourceSelect
			quantity_needed: Quantity_neededInput.text, // Lấy từ input quantityInput
			unit: unitInput.text // Lấy từ input unitInput
		};

		// Kiểm tra dữ liệu đầu vào
		if (!payload.requester_name || !payload.description || !payload.resource_type || !payload.quantity_needed || !payload.unit) {
			showAlert('Vui lòng nhập đầy đủ thông tin!', 'error');
			return;
		}

		try {
			// Gửi API để tạo yêu cầu điều phối
			const response = await requestAPI.run({ data: payload });

			// Hiển thị thông báo thành công
			showAlert('Request được tạo thành công và đang chờ xử lý!', 'success');

			// Cập nhật bảng Dispatch_list
			await requestListAPI.run();

			// Optional: Log phản hồi để debug
			console.log('Create Request Response:', response);
		} catch (error) {
			// Hiển thị thông báo lỗi nếu thất bại
			showAlert('Đã xảy ra lỗi khi tạo request. Vui lòng thử lại!', 'error');
			console.error('Create Request Error:', error);
		}
	}
};
