// Lấy các phần tử từ DOM bằng `querySelector` và gán chúng vào các biến.
var progress = document.querySelector(".progress"); // Lấy phần tử có class "progress" để hiển thị tiến độ tải.
var percent = document.querySelector(".percent"); // Lấy phần tử có class "percent" để hiển thị % tiến độ.
var textBox = document.querySelector(".textBox"); // Lấy phần tử có class "textBox" để hiển thị nội dung hộp văn bản.
var button = document.querySelector(".button"); // Lấy phần tử có class "button" để xử lý sự kiện khi nhấn nút.
var textBtn = document.querySelector(".textBtn"); // Lấy phần tử có class "textBtn" để thay đổi nội dung khi hoàn tất tải.
var heartBox = document.querySelector(".heartBox"); // Lấy phần tử có class "heartBox" chứa các hình trái tim.
var cursor = document.querySelector(".buttonCLick img"); // Lấy phần tử con ảnh của phần tử có class "buttonCLick" để hiển thị con trỏ.
var heartItem1 = document.querySelector(".heartItem.item1"); // Lấy phần tử trái tim thứ nhất (item1) để gán hiệu ứng.
var heartItem2 = document.querySelector(".heartItem.item2"); // Lấy phần tử trái tim thứ hai (item2) để gán hiệu ứng.
var heartItem3 = document.querySelector(".heartItem.item3"); // Lấy phần tử trái tim thứ ba (item3) để gán hiệu ứng.

// Các biến dùng để theo dõi trạng thái tiến độ và vị trí.
var count = 0; // Biến `count` để theo dõi % tiến độ.
var percentWidth = 0; // Biến `percentWidth` để cập nhật chiều rộng thanh tiến trình (progress bar).
var heartLeft = -3.2; // Biến `heartLeft` để theo dõi vị trí của `heartBox` khi di chuyển.

// Bắt đầu chạy hàm `progressInterva` mỗi 100ms.
var progressLoad = setInterval(progressInterva, 100)

// Lắng nghe sự kiện khi nhấn vào nút `button`.
button.addEventListener("click", function(){
    // Khi nút được nhấn, thu nhỏ nút bằng cách giảm tỷ lệ xuống 0.8.
    button.style.transform = "scale(0.8)"; 
    
    // Sử dụng `setTimeout` để đợi 200ms, sau đó thực hiện các hành động khác.
    setTimeout(()=>{
        button.style.transform = "scale(1)"; // Đặt lại tỷ lệ của nút về ban đầu.
        
        // Chuyển hướng sang trang khác (love.html) sau khi nhấn nút.
        window.location.href = "./love/love.html"
    }, 200)
})

// Hàm `progressInterva` để cập nhật tiến độ và xử lý các hiệu ứng.
function progressInterva(){
    // Kiểm tra nếu `count` và `percentWidth` đều đạt 100%.
    if(count == 100 && percentWidth == 100){
        clearInterval(progressLoad) // Dừng hàm `setInterval` khi đạt 100%.
        
        percent.textContent = "Ok rùi đó:)"; // Thay đổi nội dung của `percent` khi tải hoàn tất.
        percent.style.letterSpacing = "1px"; // Điều chỉnh khoảng cách giữa các ký tự.
        
        textBox.style.transform = "scale(1.3)" // Phóng to hộp văn bản `textBox`.
        heartItem3.style.animation = "1s heartScale forwards" // Thêm hiệu ứng `heartScale` cho `heartItem3`.
        
        // Sau 400ms, thu nhỏ hộp văn bản `textBox`.
        setTimeout(()=>{
            textBox.style.transform = "scale(0)"
        }, 400)
        
        // Sau 600ms, ẩn hộp văn bản `textBox` bằng cách thay đổi độ trong suốt.
        setTimeout(()=>{
            textBox.style.opacity = "0"
        }, 600)
        
        // Sau 800ms, phóng to nút `button`.
        setTimeout(()=>{
            button.style.transform = "scale(1)";
        }, 800);
        
        // Sau 1500ms, thay đổi màu nền và kích thước của nút `button`.
        setTimeout(()=>{
            button.style.background = "rgb(244,118,121)" // Đặt lại màu nền nút thành màu hồng nhạt.
            button.style.width = "130px"; // Thay đổi chiều rộng của nút.
            button.style.borderRadius = "20px" // Làm tròn góc nút `button`.
        }, 1500)
        
        // Sau 2000ms, thay đổi chiều cao của nút `button`.
        setTimeout(()=>{
            button.style.height = "40px";
        }, 2000)
        
        // Sau 2500ms, thay đổi nội dung văn bản của `textBtn`.
        setTimeout(()=>{
            textBtn.textContent = "Click me!" // Hiển thị dòng chữ "Click me!" trên nút.
            textBtn.style.color = "#fff" // Đặt màu chữ của `textBtn` là màu trắng.
        }, 2500)
        
        // Sau 3000ms, hiển thị con trỏ `cursor`.
        setTimeout(()=>{
            cursor.style.opacity = "1";
        }, 3000)
    }
    else {
        // Kiểm tra các mốc tiến độ để áp dụng các hiệu ứng cho trái tim.
        if(count == 10){
            heartItem1.style.animation = "1s heartScale forwards" // Áp dụng hiệu ứng cho `heartItem1` khi `count` = 10.
        }
        if(count == 46){
            percent.style.color= "#fff" // Thay đổi màu chữ của `percent` thành màu trắng khi `count` = 46.
        }
        if(count == 60){
            heartItem2.style.animation = "1s heartScale forwards" // Áp dụng hiệu ứng cho `heartItem2` khi `count` = 60.
        }
        
        // Tăng giá trị `count` và `percentWidth` mỗi lần gọi hàm.
        count += 1; 
        percentWidth += 1; 
        
        // Cập nhật vị trí của `heartBox` để trái tim di chuyển sang phải.
        heartLeft += 0.968; 
        
        // Cập nhật chiều rộng của thanh tiến trình `progress` theo phần trăm.
        progress.style.width = percentWidth + '%' 
        
        // Hiển thị giá trị phần trăm hiện tại trên `percent`.
        percent.innerText = count + '%' 
        
        // Di chuyển `heartBox` theo giá trị `heartLeft`.
        heartBox.style.left = heartLeft + '%'
    }
}
