/**
 * 方泽铠个人网站 — 自定义交互
 * 滚动进度条 + 导航栏效果
 */
(function () {
  'use strict';

  // ===== 滚动进度条 =====
  function initProgressBar() {
    var bar = document.getElementById('reading-progress');
    if (!bar) { bar = document.createElement('div'); bar.id = 'reading-progress'; document.body.prepend(bar); }
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    });
  }

  // ===== 导航栏滚动效果 =====
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ===== 下拉菜单增强交互 =====
  function initDropdownMenu() {
    var menuItems = document.querySelectorAll('.menu-item-has-children');
    menuItems.forEach(function(item) {
      var subMenu = item.querySelector('.sub-menu');
      if (!subMenu) return;

      var timer = null;

      // 鼠标进入父菜单项
      item.addEventListener('mouseenter', function() {
        clearTimeout(timer);
        subMenu.style.opacity = '1';
        subMenu.style.visibility = 'visible';
        subMenu.style.transform = 'translateX(-50%) translateY(0)';
      });

      // 鼠标离开父菜单项
      item.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
          subMenu.style.opacity = '0';
          subMenu.style.visibility = 'hidden';
          subMenu.style.transform = 'translateX(-50%) translateY(6px)';
        }, 100);
      });

      // 鼠标进入子菜单
      subMenu.addEventListener('mouseenter', function() {
        clearTimeout(timer);
      });

      // 鼠标离开子菜单
      subMenu.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
          subMenu.style.opacity = '0';
          subMenu.style.visibility = 'hidden';
          subMenu.style.transform = 'translateX(-50%) translateY(6px)';
        }, 100);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initProgressBar();
    initNavScroll();
    initDropdownMenu();
  });
})();
