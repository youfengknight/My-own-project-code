document.addEventListener('DOMContentLoaded', function () {
    const helpIcon = document.getElementById('help-icon');

    // 当点击图标时添加active类
    helpIcon.addEventListener('click', function () {
        this.classList.toggle('active');
    });

    // 当鼠标离开图标区域时移除active类
    helpIcon.addEventListener('mouseleave', function () {
        this.classList.remove('active');
    });
});