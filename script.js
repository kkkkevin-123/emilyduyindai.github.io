document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".nav-links li, .logo");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;

      // 清除所有激活状态
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // 激活当前tab
      const target = document.getElementById(targetTab);
      if (target) target.classList.add("active");
    });
  });
});
