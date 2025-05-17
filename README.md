# Hospital ERP - Hệ thống Quản lý Kho Bệnh viện

## Giới thiệu

Hospital ERP là một hệ thống quản lý kho bệnh viện hiện đại, được xây dựng bằng công nghệ Nuxt 3 và Vuetify. Hệ thống cung cấp giao diện người dùng thân thiện và các tính năng quản lý kho toàn diện cho bệnh viện.

## Công nghệ sử dụng

- **Framework**: Nuxt 3
- **UI Framework**: Vuetify 3
- **State Management**: Pinia
- **Ngôn ngữ**: TypeScript
- **Style**: SCSS
- **Các thư viện chính**:
  - Vue 3
  - Vuetify 3.8.5 (Material Design Framework)
  - Axios
  - date-fns
  - vue3-perfect-scrollbar
  - @nuxt/image
  - @vueuse/nuxt
  - @mdi/font (Material Design Icons)
  - vite-plugin-vuetify

## Cấu trúc thư mục

```
src/
├── assets/        # Tài nguyên tĩnh (SCSS, hình ảnh)
├── components/    # Components Vue
│   ├── common/    # Components dùng chung
│   ├── features/  # Components cho tính năng cụ thể
│   ├── forms/     # Components form
│   └── layouts/   # Components layout
├── composables/   # Composables Vue
├── constants/     # Các hằng số
├── layouts/       # Layouts trang
├── middleware/    # Middleware Nuxt
├── pages/         # Các trang
├── plugins/       # Plugins Vue/Nuxt
├── stores/        # Pinia stores
├── types/         # TypeScript types
└── utils/         # Các hàm tiện ích
```

## Yêu cầu hệ thống

- Node.js phiên bản mới nhất
- npm hoặc yarn

## Cài đặt

1. Clone repository

```bash
git clone [repository-url]
```

2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

3. Tạo file môi trường
   Tạo file `.env` với các biến môi trường sau:

```env
NODE_ENV=development
API_BASE_URL=your_api_url
WS_BASE_URL=your_websocket_url
```

## Các lệnh có sẵn

### Phát triển

```bash
# Chạy môi trường development
npm run dev

# Chạy với clean cache
npm run dev:clean

# Chạy bản preview
npm run dev:preview
```

### Build và Production

```bash
# Build project
npm run build

# Tạo static files
npm run generate

# Chạy bản preview
npm run preview
```

### Linting và Formatting

```bash
# Kiểm tra lỗi ESLint
npm run lint

# Sửa lỗi ESLint
npm run lint:fix

# Format code với Prettier
npm run format

# Kiểm tra lỗi StyleLint
npm run stylelint

# Sửa lỗi StyleLint
npm run stylelint:fix
```

## Tính năng chính

- Giao diện người dùng hiện đại với Vuetify 3
- Quản lý state với Pinia
- Tích hợp TypeScript
- Hỗ trợ SCSS
- Auto-import components
- Tối ưu hóa SEO
- Responsive design

## Quy ước phát triển

- Sử dụng TypeScript cho type-safety
- Tuân thủ ESLint và Prettier cho code style
- Tổ chức components theo tính năng và mục đích sử dụng
- Sử dụng Composables cho logic tái sử dụng
- Tuân thủ quy tắc đặt tên và cấu trúc thư mục
