document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('#content > section');
    const startbtn = document.querySelector('.start');
    startbtn.addEventListener('click', function (event) {

    })

    navButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            // 将所有按钮的颜色设置为白色
            // button.style.color = "white";不能这么写，必须得重新循环？？？
            navButtons.forEach(btn => btn.style.color = 'white');
            // 将当前点击的按钮颜色设置为红色
            this.style.color = '#19c987';
            const targetId = this.getAttribute('href').substring(1); // 获取目标ID
            sections.forEach(section => {
                section.style.display = 'none'; // 隐藏所有部分
            });
            document.getElementById(targetId).style.display = 'block'; // 显示目标部分
        });
    });

    // 默认显示首页
    document.getElementById('home').style.display = 'block';
});