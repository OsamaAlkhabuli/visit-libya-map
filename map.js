
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://raw.githubusercontent.com/OsamaAlkhabuli/visit-libya-map/data/visitlibya_map_data.json")
    .then(res => res.json())
    .then(data => {
      const section = data["map"];
      const container = document.getElementById("map-container");

      if (Array.isArray(section)) {
        section.forEach(item => {
          const div = document.createElement("div");
          div.style.background = "#fff";
          div.style.border = "1px solid #ccc";
          div.style.padding = "15px";
          div.style.marginBottom = "10px";
          div.style.borderRadius = "6px";
          div.innerHTML = `<p>${JSON.stringify(item)}</p>`;
          container.appendChild(div);
        });
      } else {
        const div = document.createElement("div");
        div.style.background = "#fff";
        div.style.border = "1px solid #ccc";
        div.style.padding = "15px";
        div.style.borderRadius = "6px";
        div.innerHTML = `<pre>${JSON.stringify(section, null, 2)}</pre>`;
        container.appendChild(div);
      }
    })
    .catch(err => {
      document.getElementById("map-container").innerHTML = "<p>تعذر تحميل البيانات.</p>";
    });
});
