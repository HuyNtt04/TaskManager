# 📝 TaskManager

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Inertia.js](https://img.shields.io/badge/Inertia-9553E9?style=for-the-badge&logo=inertia&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> Ứng dụng quản lý công việc cá nhân đơn giản, hỗ trợ tạo danh sách, thêm nhiệm vụ và đánh dấu hoàn thành. Dự án được xây dựng theo hướng hiện đại, SPA (Single Page Application) với Laravel + React + Inertia.js.

---

## 📸 Demo / Screenshots

Dưới đây là một số hình ảnh thực tế của ứng dụng:

### 1. Giao diện Dashboard
Tổng quan về các danh sách và nhiệm vụ cần làm.
<img width="100%" alt="Dashboard Screenshot" src="https://github.com/user-attachments/assets/c5d1433e-baa0-4b29-a309-977f4a3073d8" />

### 2. Lists (Danh sách công việc)
Quản lý các nhóm công việc khác nhau.
<img width="100%" alt="Lists Screenshot" src="https://github.com/user-attachments/assets/2d6e155d-62ae-4543-885f-5a33a2e1e4a6" />

### 3. Tasks (Nhiệm vụ chi tiết)
Xem và chỉnh sửa chi tiết từng nhiệm vụ.
<img width="100%" alt="Tasks Screenshot" src="https://github.com/user-attachments/assets/1a751b4c-2ad3-45a2-aeb9-03042e63145c" />

### 4. Chức Năng
Thao tác thêm, sửa, xóa và đánh dấu hoàn thành.
<img width="100%" alt="Features Screenshot" src="https://github.com/user-attachments/assets/85a88459-6bbc-4f34-8f1f-f83969fd6fe2" />

---

## ✨ Tính năng chính

* ✅ **Quản lý Dashboard:** Xem tổng quan tiến độ công việc.
* ✅ **Quản lý Danh sách (Lists):** Tạo nhiều danh sách để phân loại công việc.
* ✅ **Quản lý Nhiệm vụ (Tasks):** Thêm mới, chỉnh sửa, xóa nhiệm vụ trong từng danh sách.
* ✅ **Trạng thái:** Đánh dấu hoàn thành/chưa hoàn thành công việc nhanh chóng.
* ✅ **Giao diện:** Hiện đại, tối giản với Shadcn UI và Tailwind CSS.

---

## 🛠 Tech Stack

Dự án này được xây dựng dựa trên các công nghệ mới nhất:

| Category | Technology |
|----------|------------|
| **Backend** | [Laravel](https://laravel.com/) (Starter Kit) |
| **Frontend** | [React](https://reactjs.org/) |
| **Glue** | [Inertia.js](https://inertiajs.com/) (Kết nối Laravel & React không cần API) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/) |
| **Database** | MySQL |

---

## 🚀 Yêu cầu (Prerequisites)

Hãy đảm bảo máy tính của bạn đã cài đặt các công cụ sau trước khi bắt đầu:

* **PHP** >= 8.1
* **Composer**
* **Node.js** >= 18.0.0
* **MySQL**
* **NPM** hoặc **Yarn**

---

## ⚙️ Cài đặt (Installation)

Hướng dẫn thiết lập môi trường phát triển:

### 1. Clone dự án
Tải mã nguồn về máy:

```bash
git clone https://github.com/username/task-manager.git
cd task-manager
```

### 2. Cài đặt dependencies cho Backend
Sử dụng Composer để cài đặt các gói PHP:

```bash
composer install
```

### 3. Cài đặt dependencies cho Frontend
Sử dụng NPM để cài đặt các gói JavaScript/React:

```bash
npm install
```

### 4. Cấu hình môi trường
Tạo file `.env`:

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Chạy Migration
Khởi tạo cấu trúc cơ sở dữ liệu:

```bash
php artisan migrate
```

### 6. Khởi động dự án

Bạn cần mở 2 terminal để chạy song song Backend và Frontend:

**Terminal 1 (Laravel Server):**
```bash
php artisan serve
```

**Terminal 2 (Vite Server - React):**
```bash
npm run dev
```

Sau đó, truy cập vào đường dẫn hiển thị trên terminal (thường là `http://localhost:8000`).
