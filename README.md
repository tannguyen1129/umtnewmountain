# RESCUE SYSTEM - UMT.NEWMOUNTAIN

<a href="https://github.com/tannguyen1129/umtnewmountain/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBug%5D%3A+%3CM%C3%B4+t%E1%BA%A3+ng%E1%BA%AFn+g%E1%BB%8Dn+v%E1%BB%81+l%E1%BB%97i%3">Báo cáo lỗi (Bug Report)🆘🆘
</a>

Ứng dụng hỗ trợ điều phối, thông báo, cập nhật thông tin ứng phó thiên tai, tham họa. Ở dự án này nhom tác giả chọn Appsimth để dựng Frontend và Django để dựng API Backend

Phát triển hệ thống ứng dụng công nghệ thông tin trong ứng phó và hỗ trợ khắc phục thiên tai.

Dự án được thực hiện nhằm mục đích tham gia bảng [Phần mềm Nguồn Mở](https://www.olp.vn/procon-pmmn/ph%E1%BA%A7n-m%E1%BB%81m-ngu%E1%BB%93n-m%E1%BB%9F) trong khuôn khổ [Kỳ thi Olympic Tin học sinh viên Việt Nam lần thứ 33](https://www.olp.vn/olympic-tin-h%E1%BB%8Dc-sinh-vi%C3%AAn) tổ chức tại [Trường Đại học Công nghiệp Hà Nội](https://www.haui.edu.vn/vn) từ ngày 10/12/2024 đến ngày 13/12/2024.

Phần mềm được đội ngũ tác giả của UMT.NewMountain open source theo giấy phép [The MIT License](https://opensource.org/license/mit)

## Mục lục tài liệu

1. [Giới Thiệu](#1-Giới-thiệu)
2. [Tổng quan hệ thống](#2-Tổng-quan-hệ-thống)
3. [Chức năng](#3-Chức-năng)
4. [Cấu trúc thư mục dự án](#4-Cấu-trúc-thư-mục-dự-án)
5. [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
    - [5.1.📋 Yêu cầu - Prerequisites](#yêu-cầu-📋)
    - [5.2.🔨 Cài đặt](#🔨-cài-đặt)
6. [Đóng góp](#6-Đóng-góp)
7. [License (Giấy phép)](#7-License-(-Giấy-phép-))

### 1. Giới thiệu

### 2. Tổng quan hệ thống

### 3. Chức năng

### 4. Cấu trúc thư mục dự án

### 5. Hướng dẫn cài đặt

#### 5.1. Yêu cầu

a. Nếu bạn sử dụng [Appsmith](https://www.appsmith.com/) để clone dự án thì chỉ cần đăng nhập vào website

b. Nếu bạn muốn tự host trên máy chủ thì thực hiện như sau (tham khảo chi tiết tại [Appsmith Docs](https://docs.appsmith.com/getting-started/setup/installation-guides/docker)):

Trước khi bắt đầu, hãy cài đặt đầy đủ [Docker](https://docs.docker.com/get-started/get-docker/) (version 20.10.7 or later) và [Docker-compose](https://docs.docker.com/compose/install/) (version 1.29.2 or later)

Thực hiện theo các bước sau để cài đặt Appsmith:

1. Create a folder named `appsmith` on your machine for deployment and data storage. Navigate to this folder using the `cd` command.

2. Tạo tệp `docker-compose.yml` bằng:

```
version: "3"
services:
   appsmith:
     image: index.docker.io/appsmith/appsmith-ee
     container_name: appsmith
     ports:
         - "80:80"
         - "443:443"
     volumes:
         - ./stacks:/appsmith-stacks
     environment:
        - APPSMITH_CUSTOM_DOMAIN=tên địa chỉ máy chủ
     restart: unless-stopped
```
Hình ảnh `appsmith-ee` cài đặt phiên bản Thương mại (khuyến nghị), cung cấp gói miễn phí và tính linh hoạt để nâng cấp lên gói trả phí bất kỳ lúc nào. Để cài đặt phiên bản Cộng đồng, hãy thay `appsmith-ee` bằng `appsmith-ce` trong thuộc tính hình ảnh trong tệp `docker-compose.yml`.

3. Khởi động Docker `container` bằng lệnh bên dưới. Bạn có thể cần sử dụng sudo nếu bạn không có quyền chạy `docker-compose`:

```
docker-compose up -d
```
Lệnh này sẽ tải xuống hình ảnh Docker cần thiết nếu nó không tồn tại cục bộ và khởi động container.

4. Mở `http://localhost` và đợi máy chủ khởi động. Quá trình này có thể mất tới 5 phút. Khi máy chủ đã khởi động và chạy, bạn có thể truy cập Appsmith tại `http://localhost`.

5. Điền thông tin của bạn để tạo tài khoản quản trị viên.

6. Sau khi tạo tài khoản, bạn có thể bắt đầu với gói miễn phí hoặc kích hoạt phiên bản của mình bằng khóa cấp phép. Nếu bạn muốn tạo khóa cấp phép, hãy đăng ký trên `customer.appsmith.com` để tạo một khóa, sau đó tiến hành kích hoạt phiên bản của bạn bằng khóa cấp phép mới tạo

### 6. Đóng góp

### 7. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# umtnewmountain![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/appsmith_logo_primary.png)

This app is built using Appsmith. Turn any datasource into an internal app in minutes. Appsmith lets you drag-and-drop components to build dashboards, write logic with JavaScript objects and connect to any API, database or GraphQL source.

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/images/integrations.png)

### [Github](https://github.com/appsmithorg/appsmith) • [Docs](https://docs.appsmith.com/?utm_source=github&utm_medium=social&utm_content=appsmith_docs&utm_campaign=null&utm_term=appsmith_docs) • [Community](https://community.appsmith.com/) • [Tutorials](https://github.com/appsmithorg/appsmith/tree/update/readme#tutorials) • [Youtube](https://www.youtube.com/appsmith) • [Discord](https://discord.gg/rBTTVJp)
