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

// 1. 定义菜单数据（与原菜单结构一一对应，可直接修改/扩展）
const menuData = [
    {
        title: "Home", // 一级菜单文本
        submenus: [
        ]
    },
    {
        title: "Research Project", // 一级菜单文本
        submenus: [ // 二级下拉菜单
            { text: "Investigating Protein Interactions in Prostate Cancer", link: "research-1.html" },
            { text: "Uncovering Immune Evasion Mechanisms in Breast Cancer Cells", link: "research-2.html" },
            { text: "Sustainable Bioconversion of Paper Waste Using Synthetic Biology (iGEM HS-Alpha)", link: "research-3.html" },
            { text: "Exploring the Relationship Between Carbon Dioxide Emissions and Malaria in Africa", link: "research-4.html" },
            { text: "Developing MP6-UTT to Accelerate Microbial Adaptation", link: "research-5.html" }
        ]
    },
    {
        title: "Leadership & Community",
        submenus: [
            { text: "School Clubs", link: "leadership-1.html" },
            { text: "Providence Hospice & Senior Facilitiy", link: "leadership-2.html" },
            { text: "Public Library", link: "leadership-3.html" }
        ]
    },
    {
        title: "Programs & Art",
        submenus: [
            { text: "JHU Summer Pre-College", link: "art-programs.html" },
            { text: "Stanford Anesthesia Summer Insitutute (SASI)", link: "art-cat2.html" },
            { text: "Piano", link: "art-cat3.html" }
        ]
    },
    {
        title: "Honors",
        submenus: [
            { text: "Academic", link: "academic.html" },
            { text: "Non-academic", link: "non-academic.html" }

        ]
    }
];

// 2. 获取菜单容器
const navLinks = document.querySelector(".nav-links");

// 3. 动态生成菜单
function renderMenu(data) {
    // 遍历一级菜单数据
    data.forEach(menuItem => {
        // 创建一级菜单 li.dropdown
        const dropdownLi = document.createElement("li");
        if (menuItem.title == "Home") {
            dropdownLi.className = "dropdown222";
        } else {
            dropdownLi.className = "dropdown";
        }

        // 创建一级菜单文本 span
        const dropdownSpan = document.createElement("span");
        if (menuItem.title == "Home") {
            const aa = document.createElement("a");
            aa.textContent = menuItem.title;
            aa.href = "index.html";
            aa.classList.add("white-link");
            dropdownSpan.appendChild(aa);
            // dropdownSpan.textContent = menuItem.title;
            dropdownLi.appendChild(dropdownSpan);
        } else {
            dropdownSpan.textContent = menuItem.title;
            dropdownLi.appendChild(dropdownSpan);
        }

        // 创建二级下拉菜单 ul.dropdown-menu
        const dropdownMenu = document.createElement("ul");
        dropdownMenu.className = "dropdown-menu";

        // 遍历二级菜单数据，生成下拉项
        menuItem.submenus.forEach(submenu => {
            const submenuLi = document.createElement("li");
            const submenuA = document.createElement("a");
            submenuA.textContent = submenu.text;
            submenuA.href = submenu.link; // 设置链接地址
            submenuLi.appendChild(submenuA);
            dropdownMenu.appendChild(submenuLi);
        });

        // 把下拉菜单添加到一级菜单 li 中
        dropdownLi.appendChild(dropdownMenu);

        // 把一级菜单 li 添加到菜单容器中
        navLinks.appendChild(dropdownLi);
    });
}

// 4. 执行渲染函数（生成菜单）
renderMenu(menuData);