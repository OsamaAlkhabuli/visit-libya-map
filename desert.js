document.addEventListener("DOMContentLoaded", () => {
  fetch("https://raw.githubusercontent.com/OsamaAlkhabuli/visit-libya-map/data/visitlibya_textual_content_updated.json")
    .then(res => {
      if (!res.ok) throw new Error("فشل في تحميل الملف");
      return res.json();
    })
    .then(data => {
      const section = data["desert"];
      const container = document.getElementById("desert-container");

      if (!section) {
        container.innerHTML = "<p>❌ لا توجد بيانات عن الصحراء.</p>";
        return;
      }

      const div = document.createElement("div");
      div.style.background = "#fff";
      div.style.border = "1px solid #ccc";
      div.style.padding = "15px";
      div.style.borderRadius = "6px";
      div.innerHTML = `<p>${section.description}</p>`;
      container.appendChild(div);
    })
    .catch(error => {
      document.getElementById("desert-container").innerHTML = `<p>⚠️ حدث خطأ: ${error.message}</p>`;
    });
});
