document.addEventListener("DOMContentLoaded", () => {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            const nameContainer = document.getElementById("full-name");
            nameContainer.innerHTML = `${data.name.first} <span class="text-6">${data.name.last}</span>`;

            const container = document.getElementById("skills-container");
            data.skills.forEach(skill => {
                const col = document.createElement("div");
                col.className = "col-6 px-0";

                const skillDiv = document.createElement("div");
                skillDiv.className = skill.type;

                const span = document.createElement("span");
                span.textContent = skill.name;

                const input = document.createElement("input");
                input.type = "range";
                input.value = skill.value;
                input.className = "range-input";

                skillDiv.appendChild(span);
                skillDiv.appendChild(input);
                col.appendChild(skillDiv);
                container.appendChild(col);
            });

            const dot = document.querySelector(".arrow");
            const content = document.querySelector(".text-9");

            dot.addEventListener("click", () => {
                dot.classList.toggle("active");
                content.style.display = content.style.display === "block" ? "none" : "block";
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
