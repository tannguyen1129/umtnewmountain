export default {
    deleteZone: () => {
        // Kiểm tra xem có hàng nào được chọn hay không
        if (zoneTable.selectedRow) {
            const selectedZoneId = zoneTable.selectedRow.id; // Lấy ID của vùng được chọn

            // Thực thi query xóa vùng
            deleteZonemap.run({
                id: selectedZoneId
            })
            .then(() => {
                showAlert("Xóa vùng thành công!", "success"); // Hiển thị thông báo thành công
                getMapAPI.run(); // Làm mới dữ liệu bảng
            })
            .catch((err) => {
                showAlert(`Xóa vùng thất bại: ${err.message}`, "error"); // Hiển thị lỗi nếu xảy ra
            });
        } else {
            // Nếu không có hàng nào được chọn
            showAlert("Vui lòng chọn một hàng trước khi xóa.", "warning");
        }
    }
};
