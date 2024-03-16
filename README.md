1. React là gì? Tại sao lại chọn React?

ReactJs là một framework Javascript dùng để xây dựng các Single Page Application (SPA)

SPA là những trang web mà không bị reload khi chúng ta chuyển trang. Ví dụ: Facebook, Twitter, Instagram, Youtube, Gmail,...

Ngoài React thì còn có rất nhiều JS Framework có thể tạo được SPA như Angular,...

SPA tăng trải nghiệm người dùng vì không phải tải lại toàn bộ trang web
SPA giúp phân chia rõ ràng code giữa frontend và backend => phát triển dễ dàng

2. Cách build project dự án em thực hiện:

-Cài đặt Create React App:
+npx create-react-app google-maps-app
+cd google-maps-app

-Chạy ứng dụng React:
+npm start
-->Chạy ứng dụng thấy http://localhost:3000 để xem trình duyệt chạy ứng dụng của bạn

-Cài đặt maps/api:
+npm install @react-google-maps/api
+Lấy keyApiMap để map hoạt động
Vào trang https://mapsplatform.google.com/ để tạo dự án lấy API key map
Bước 1: nhấn vào dự án vừa tạo
Bước 2: nhấn vào nút menu 3 gạch ngang
Bước 3: bạn chọn vào tab APIs & Services => và chọn vào Credentials.
Bước 4: lúc này bạn sẽ cần phải chọn cho mình một loại giấy mô tả phù hợp để sử dụng nhé!
Bước 5: nhấn chọn vào API key để hiển thị cửa sổ API key.

3.  Lí do dung Fetch API là gì?

+Fetch API là một API đơn giản cho việc gửi và nhận requesst bằng js. Fetch giúp cho việc thực hiện các yêu cầu web
+Hỗ trợ Promises
+Fetch API thường được sử dụng để thực hiện các yêu cầu AJAX
( AJAX:
Cập nhật lại website mà không cần reload lại trang
Yêu cầu dữ liệu từ server sau khi trang đã load
Nhận dữ liệu từ server sau khi trang đã load
Gửi data lên server ở chế độ ngầm
)

4.  Cách deploy react js with aws ec2 (.pem For use with OpenSSH)

-Tạo và cấu hình máy chủ EC2:
(Các bước EC2 instance)
+Instances
+Launch an instance (để tạo key)
+Name and tags (e.g My Web server)
+Application and OS Images (Amazon Machine Image) chọn Amazon Machine Image (AMI)  
+Instance type t2.micro
+Key pair (login ) Info -> .pem For use with OpenSSH
.ppk For use with PuTTY
(Dowdload OpenSSH,PuTTY để có thể đẩy code lên máy)
+Network settings -> để nguyên hoặc cấu hình
+Configure storage -> để nguyên hoặc cấu hình
+Advanced details -> để nguyên hoặc cấu hình

-Đẩy code lên máy ảo --> .pem For use with OpenSSH () -> Chạy dự án nếu nó hoạt động
1.Đưa code của ứng dụng React lên máy chủ EC2 -> clone git repository
2.Chạy lệnh npm install để cài đặt các phụ thuộc.
3.Chạy lệnh npm run build để build ứng dụng React. Điều này sẽ tạo ra các 4.Tệp tĩnh trong thư mục build.
5.npm start chạy chương trình trên máy ảo
6.Vào lại Instances chọn Instance ID tương ứng có Public IPv4 address hoặc Public IPv4 DNS kết hợp với API tương ứng
(eg. http://54.251.142.187::8081/api/food-trucks or
ec2-13-212-117-39.ap-southeast-1.compute.amazonaws.com::8081/api/food-trucks)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# font_end_findtruckfood
