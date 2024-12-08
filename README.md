# RESCUE SYSTEM - UMT.NEWMOUNTAIN

<a href="https://github.com/tannguyen1129/umtnewmountain/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBug%5D%3A+%3CM%C3%B4+t%E1%BA%A3+ng%E1%BA%AFn+g%E1%BB%8Dn+v%E1%BB%81+l%E1%BB%97i%3E">Báo cáo lỗi (Bug Report)🆘🆘
</a>

Ứng dụng hỗ trợ điều phối, thông báo, cập nhật thông tin ứng phó thiên tai, tham họa. Ở dự án này nhóm tác giả chọn Appsimth để dựng Frontend và Django để dựng APIs Backend

Phát triển hệ thống ứng dụng công nghệ thông tin trong ứng phó và hỗ trợ khắc phục trong các tình huống khẩn cấp.

Dự án được thực hiện nhằm mục đích tham gia bảng [Phần mềm Nguồn Mở](https://www.olp.vn/procon-pmmn/ph%E1%BA%A7n-m%E1%BB%81m-ngu%E1%BB%93n-m%E1%BB%9F) trong khuôn khổ [Kỳ thi Olympic Tin học sinh viên Việt Nam lần thứ 33](https://www.olp.vn/olympic-tin-h%E1%BB%8Dc-sinh-vi%C3%AAn) tổ chức tại [Trường Đại học Công nghiệp Hà Nội](https://www.haui.edu.vn/vn) từ ngày 10/12/2024 đến ngày 13/12/2024.

Phần mềm được đội ngũ tác giả của UMT.NewMountain open source theo giấy phép [The MIT License](https://opensource.org/license/mit)

## Mục lục tài liệu

1. [Giới Thiệu](#1-giới-thiệu)
2. [Tổng quan hệ thống](#2-tổng-quan-hệ-thống)
3. [Chức năng](#3-Chức-năng)
4. [Cấu trúc thư mục dự án](#4-Cấu-trúc-thư-mục-dự-án)
5. [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
    - [5.1.📋 Yêu cầu - Prerequisites](#51-Yêu-cầu)
    - [5.2.🔥 Dựng APIs](#52-dựng-apis-bằng-django)
    - [5.3.🔨 Cài đặt](#53-hướng-dẫn-cài-đặt)
6. [Đóng góp](#6-Đóng-góp)
7. [License (Giấy phép)](#7-License-(-Giấy-phép-))

### 1. Giới thiệu

- Nền tảng phát triển ứng dụng LCDP (Low-Code Development Platform) ít mã nguồn thường cung cấp một môi trường giúp phát triển ứng dụng mà không yêu cầu viết nhiều mã nguồn thủ công. Các nền tảng này giúp giảm thiểu công sức lập trình bằng cách sử dụng giao diện kéo và thả hoặc các công cụ cấu hình để tạo ra các ứng dụng. Đây là một trong những đặc điểm quan trọng của LCDP trong hoàn cảnh ứng phó tình huống khẩn cấp.

- Nước ta vừa qua cũng trải qua những tình huống khẩn cấp như dịch bệnh hoặc thiên tai. Vào những thời điểm này xuất hiện nhu cầu kết nối với cộng động, cơ quan chức năng phục vụ các hoạt động ứng phó và khắc phục hậu quả do các tình huống khẩn cấp gây ra.

### 2. Tổng quan hệ thống

[Django](https://www.djangoproject.com/): Dựng APIs cho hệ thống.

[Django REST Framework (DRF)](https://www.django-rest-framework.org/): phát triển các API RESTful nhanh chóng và dễ dàng. DRF cung cấp các công cụ mạnh mẽ để xây dựng các API, cho phép dễ dàng chuyển đổi dữ liệu thành các định dạng như JSON, XML và hỗ trợ các phương thức HTTP như GET, POST, PUT, DELETE.

[Appsmith](https://www.appsmith.com/): Xây dựng giao diện người dùng.

[SQLite](https://docs.djangoproject.com/en/5.1/ref/databases/): SQLite là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) nhẹ và đơn giản, được tích hợp sẵn trong Django.

![Frontend](https://github.com/user-attachments/assets/4ff23cfb-938c-4dbb-a95c-6d44edfdf227)

### 3. Chức năng

Dự án có các chứng năng như sau:

Đối với phân quyền Người dân:
- Không cần đăng nhập;
- Xem dự báo thiên tai;
- Thông báo đến từ cơ quan chức năng;
- Đăng ký nhận tin tức;
- Xem bản đồ đánh dấu vùng thiên tai;
- Gửi yêu cầu giúp đỡ đến cơ quan chức năng, cứu hộ.


Đối với phân quyền cơ quan chức năng, cứu hộ
- Đăng nhập để thực hiện được thao tác;
- Gửi thông báo đến người dân;
- Gửi yêu cầu điều phối vật tư, vật lực, nhân lực;
- Nhận yêu cầu hỗ trợ từ người dân;
- Điều phối các vật tư, vật lực, nhân lực;
- Đánh dấu vùng nguy hiểm trên bản đồ;
- Nhận đăng ký tin tức từ người dân để gửi thông tin, thông báo qua email hoặc số điện thoại.

Đối với phân quyền của cơ quan quản lý vật tư, vật lực:
- Xem yêu cầu điều phối;
- Thêm vật tư, vật lực cần điều phối;
- Phê duyệt các yêu cầu điều phối vật tư.

### 4. Screens Flow của dự án

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

#### 5.2. Dựng APIs bằng Django

Xem trực tiếp hướng dẫn trong repo sau: [Backend Django](https://github.com/tannguyen1129/backend)

#### 5.3. Hướng dẫn cài đặt 

Trước tiên bạn hãy `fork` repository của dự án về Github của mình, sau đó đặt tên repository tùy thích theo ý muốn của bạn.

<img width="938" alt="image" src="https://github.com/user-attachments/assets/9423a12e-ac90-488c-a87c-449fa5623925">

Chọn Create Fork để fork repository về:

<img width="550" alt="image" src="https://github.com/user-attachments/assets/7af3ab3d-5a09-4f63-8950-dba9f936f6af">

Sau đó, hãy truy cập vào Website của Appsmith (nếu bạn muốn dùng Appsimth Cloud) hoặc truy cập địa chỉ máy chủ Appsmith bạn đã tự cài đặt. Rồi đăng nhập, bạn sẽ ở Workspace của Appsimth:

<img width="958" alt="image" src="https://github.com/user-attachments/assets/7fe9e38d-46b5-4580-9b78-445bdeb78d64">

Chọn Create New , rồi chọn chọn Import:

<img width="167" alt="image" src="https://github.com/user-attachments/assets/1223391e-f782-4eee-8668-faaaf732aca9">

Tới đây bạn chọn `Import from Git repository (Beta)`:

<img width="529" alt="image" src="https://github.com/user-attachments/assets/b996bcff-04b2-4cec-92fd-f5b5eafa4523">

Ở bước 1, Tiếp tục chọn Github -> Tích vào ô `I have an existing appsmith app connected to Git*` -> Chọn `Configure Git` (theo thứ tự 1, 2, 3) 

<img width="481" alt="image" src="https://github.com/user-attachments/assets/8dd6b38e-bf62-4547-b09a-426107f2b50d">

Ở bước 2, Generate SSH Key hãy quay lại Repository của bạn rồi thực hiện theo các bước: Chọn biểu tượng `<> Code` -> Chọn `SSH` -> Copy `Remote SSH URL` (theo thứ tự 1, 2, 3). Sau đó, dán vào ô `Remote SSH URL` rồi chọn `Generate SSH Key`

<img width="944" alt="image" src="https://github.com/user-attachments/assets/e568f452-3464-49db-a9d4-8002fb75672f">

<img width="481" alt="image" src="https://github.com/user-attachments/assets/cd1ead85-af51-4443-97e8-0834aac7d81f">

Ở bước 3, bạn copy SSH Key và paste vào Repository của bạn.

<img width="478" alt="image" src="https://github.com/user-attachments/assets/1ca0e6d8-8a3f-4653-8c70-24a3eb4009fc">

Trong repository của bạn, chọn `Settings`. Trong tab `Settings` bạn chọn `Deploy keys` rồi chọn `Add Deploy Key` (thứ tự 1, 2)

<img width="936" alt="image" src="https://github.com/user-attachments/assets/dbd053a5-026e-453e-bf74-76c208003b3e">

Trong `Add Deploy Keys` bạn đặt tên cho key tùy ý, ví dụ như đặt `olp-key` chẳng hạn. Rồi bạn paste Key ở Appsmith bạn đã copy vào ô Key rồi tích vào ô `Allow write access`.
Cuối cùng chọn `Add Key` rồi nhập mật khẩu của Repository để key được thêm.

<img width="947" alt="image" src="https://github.com/user-attachments/assets/e5da9f57-4196-4f08-8ed8-5ad70e308534">

Key được thêm thành công

<img width="590" alt="image" src="https://github.com/user-attachments/assets/c85cf514-7986-42d3-86b4-90eb66648e4f">

Quay lại ứng dụng Appsmith, tích vào ô `I've added the deploy key and gave it write acsess*` rồi chọn Import để bắt đầu thêm dự áo vào Appsmith (thứ tự 1, 2)

<img width="481" alt="image" src="https://github.com/user-attachments/assets/6d4f9a7b-c880-425d-bed0-6aa4362027e4">

Khi đã `Import dự án thành công, dự án sẽ chuyển tới màn hình để bạn điền URL của APIs. 

Đối với restAPI, các bạn nhập link domain APIs bạn đang chạy hoặc địa chỉ máy chủ chạy API (nếu bạn không có domain). Nhập thêm Header `Authorization` và `Bearer {{appsmith.store.access_token}}`

Đối với APInoAuthorization thì chỉ cần nhập link truy vấn của API là được.

<img width="863" alt="image" src="https://github.com/user-attachments/assets/ead70490-e504-452e-baca-fe0808b8aa21">

Xong bạn chỉ cần bấm `Save` là ứng dụng có thể sẵn sàng sử dụng

<img width="960" alt="image" src="https://github.com/user-attachments/assets/95f9c74f-5173-4c9c-8251-5e7a822a9b5a">

**Để có thể tránh lỗi không mong muốn, bạn cần thực hiện dựng APIs theo hướng dẫn cho chính xác**

### 6. Đóng góp

### 7. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# umtnewmountain![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/appsmith_logo_primary.png)

This app is built using Appsmith. Turn any datasource into an internal app in minutes. Appsmith lets you drag-and-drop components to build dashboards, write logic with JavaScript objects and connect to any API, database or GraphQL source.

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/images/integrations.png)

### [Github](https://github.com/appsmithorg/appsmith) • [Docs](https://docs.appsmith.com/?utm_source=github&utm_medium=social&utm_content=appsmith_docs&utm_campaign=null&utm_term=appsmith_docs) • [Community](https://community.appsmith.com/) • [Tutorials](https://github.com/appsmithorg/appsmith/tree/update/readme#tutorials) • [Youtube](https://www.youtube.com/appsmith) • [Discord](https://discord.gg/rBTTVJp)
