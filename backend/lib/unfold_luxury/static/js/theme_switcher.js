(function() {
    // 1. Áp dụng theme ngay lập tức để tránh bị nháy trang (Flash of unstyled content)
    const savedTheme = localStorage.getItem('unfold-luxury-theme') || 'indigo';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Lắng nghe sự kiện storage để đồng bộ theme giữa các tab (nếu cần)
    window.addEventListener('storage', (e) => {
        if (e.key === 'unfold-luxury-theme') {
            document.documentElement.setAttribute('data-theme', e.newValue);
        }
    });

    // 3. Logic bổ sung sau khi DOM load xong (nếu cần)
    window.addEventListener('DOMContentLoaded', () => {
        // Có thể thêm logic highlight nút Active ở đây nếu không dùng Alpine.js
        const activeTheme = localStorage.getItem('unfold-luxury-theme') || 'indigo';
        document.documentElement.setAttribute('data-theme', activeTheme);
    });
})();
