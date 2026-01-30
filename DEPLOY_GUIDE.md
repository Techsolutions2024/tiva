# Hướng Dẫn Deploy Lên AWS Amplify

Vì dự án này là Static Site (React + Vite), việc deploy lên AWS Amplify rất đơn giản và hoàn toàn miễn phí (trong giới hạn Free Tier).

## Cách 1: Kéo thả thủ công (Nhanh nhất nếu chưa có GitHub)

1.  Mở terminal tại thư mục dự án `d:\tiva`, chạy lệnh build:
    ```bash
    npm run build
    ```
    *(Sẽ tạo ra thư mục `dist` chứa code đã đóng gói)*

2.  Đăng nhập [AWS Amplify Console](https://console.aws.amazon.com/amplify/home).
3.  Chọn **"Create new app"** (hoặc "Host web app").
4.  Chọn **"Deploy without Git provider"**.
5.  Đặt tên App (ví dụ: `AIoT Edge Landing`).
6.  Tại Environment name nhập: `dev` hoặc `prod`.
7.  Chọn phương thức **"Drag and drop"**.
8.  Kéo thả toàn bộ nội dung **bên trong** thư mục `d:\tiva\dist` vào vùng upload.
9.  Bấm **"Save and Deploy"**.

---

## Cách 2: Kết nối GitHub (Khuyên dùng để CI/CD)

Cách này giúp website tự động cập nhật mỗi khi bạn push code mới.

1.  **Đẩy code lên GitHub:**
    Tạo một repository mới trên GitHub, sau đó chạy các lệnh sau tại `d:\tiva`:
    ```bash
    git remote add origin https://github.com/TÊN_USER/TÊN_REPO.git
    git branch -M main
    git push -u origin main
    ```

2.  **Kết nối Amplify:**
    *   Vào [AWS Amplify Console](https://console.aws.amazon.com/amplify/home).
    *   Chọn **"Host web app"**.
    *   Chọn **"GitHub"** -> Bấm **Continue**.
    *   Ủy quyền cho AWS truy cập GitHub của bạn.
    *   Chọn Repo và Branch (`main`) bạn vừa tạo.

3.  **Cấu hình Build:**
    *   AWS sẽ tự động phát hiện đây là project Vite.
    *   Kiểm tra phần "Build settings":
        *   Build command: `npm run build`
        *   Output directory: `dist`
    *   *(Tôi đã tạo sẵn file `amplify.yml` trong project để AWS tự nhận diện cấu hình này)*.

4.  **Deploy:**
    *   Bấm **"Save and Deploy"**.
    *   Đợi khoảng 2-3 phút, bạn sẽ có đường link `https://...amplifyapp.com`.

## Lưu ý về Domain
Sau khi deploy xong, bạn có thể vào phần **Domain management** trong Amplify để trỏ domain thực (ví dụ: `aiot-edge.com`) vào website này. Amplify hỗ trợ cấp chứng chỉ SSL (HTTPS) miễn phí tự động.
