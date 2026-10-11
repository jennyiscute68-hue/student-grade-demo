const gradeData = {
  "期中考1": [
    ["259 選修物理-力學一", 68.00, 70.29],
    ["261 選修化學-物質與能量", 46.00, 62.61]
    ["301 必修英語文", 82.00, 72.97]
    ["003 數學A", 70.00, 64.12]
    ["009 選修生物", 78.00, 64.91]
    ["300 國語文", 79.00, 72.98]
  ],
  "日常考1": [
    ["301 英語文",	87.00,	83.89]
  ],
  "第一次段考": [
    ["259 選修物理-力學一", 71.00, 69.12],
    ["261 選修化學-物質與能量", 64.00, 65.73]
  ],
  "第二次段考": [
    ["259 選修物理-力學一", 88.00, 76.31],
    ["261 選修化學-物質與能量", 79.00, 70.14]
  ]
};

const exam = document.getElementById("exam");
const gradeBody = document.getElementById("gradeBody");
const total = document.getElementById("total");
const average = document.getElementById("average");
const dataTime = document.getElementById("dataTime");

function renderGrades() {
  const rows = gradeData[exam.value] || [];

  gradeBody.innerHTML = rows.map(row => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1].toFixed(2)}</td>
      <td>${row[2].toFixed(2)}</td>
    </tr>
  `).join("");

  const scores = rows.map(row => row[1]);
  const sum = scores.reduce((a, b) => a + b, 0);
  const avg = scores.length ? sum / scores.length : 0;

  total.textContent = sum.toFixed(2);
  average.textContent = avg.toFixed(2);

  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  dataTime.textContent =
    `${now.getFullYear()}/${pad(now.getMonth()+1)}/${pad(now.getDate())} ` +
    `${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

document.getElementById("searchBtn").addEventListener("click", renderGrades);

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("semester").selectedIndex = 0;
  exam.selectedIndex = 0;
  renderGrades();
});

document.querySelectorAll(".grade-tabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".grade-tabs button").forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
  });
});

document.querySelector(".collapse-btn").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
});

renderGrades();
