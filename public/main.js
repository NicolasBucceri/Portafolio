// Función para crear secciones dinámicas
function createSection(data) {
  const section = document.createElement("section"); // Crear una sección
  section.className = data.className;
  section.id = data.id; // Asignar el ID único de cada sección

  // Generar contenido dinámico basado en el ID
  if (data.id === "Inicio") {
    section.innerHTML = `
      <div class="contenedorInicio container grid">
        <div class="contenidoInicio">
          <span class="letraChicaInicio">${data.content.smallText || ""}</span>
          <h1 class="tituloInicio">
            <span>${
              data.content.title.split(" ")[0]
            } </span>${data.content.title.split(" ").slice(1).join(" ")}<br />
            <span>${data.content.subtitle}</span>
          </h1>
          <p class="descripcionInicio">${data.content.description}</p>
          <div class="botonesInicio">
            ${
              data.content.buttons
                ? data.content.buttons
                    .map(
                      (button) =>
                        `<a href="${button.href || "#"}" class="${
                          button.className || ""
                        }">${button.text || "Button"}</a>`
                    )
                    .join("")
                : ""
            }
          </div>
        </div>
        <div class="contenedorImgInicio">
          <img src="${data.content.image.src}" alt="${
      data.content.image.alt
    }" class="imgInicio" />
        </div>
      </div>
    `;
  } else if (data.id === "SobreMi") {
    section.innerHTML = `
    <div class="contenedorSobreMi container grid">
      <div class="contenedorImgSobreMi">
        ${data.content.images
          .map(
            (image) =>
              `<img src="${image.src}" alt="${image.alt}" class="imgSobreMi" />`
          )
          .join("")}
      </div>
  
      <div class="about_content">
        <h2 class="section_title" data-title="¿Quién soy?">${
          data.content.title
        }</h2>
        <p class="descripcionSobreMi">${data.content.description}</p>
  
        <ul class="dataSobreMi grid">
          ${data.content.data
            .map((item) => {
              if (item.title === "Email:") {
                return `
                    <li class="itemSobreMi">
                      <h3 class="tituloDataSobreMi">${item.title}</h3>
                      <span class="data_description linkSobreMi">${item.description}</span>
                    </li>`;
              } else {
                return `
                    <li class="itemSobreMi">
                      <h3 class="tituloDataSobreMi">${item.title}</h3>
                      <span class="data_description">${item.description}</span>
                    </li>`;
              }
            })
            .join("")}
        </ul>
  
        <div class="abajoSobreMi">
          <a href="${data.content.cvLink || "#"}" class="btn">Descargar CV</a>
  
          <div class="liksSocialSobreMi">
            ${data.content.socialLinks
              .map(
                (link) => `
              <a href="${link.link || "#"}" class="likSocialSobreMi">
                <i class="${link.icon || ""}"></i>
              </a>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
  }
  if (data.id === "Formacion") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="Mi Trayectoria">
        Formación
      </h2>
      <div class="contenedorFormacion container grid">
        <div class="grupoFormacion">
          <h3 class="titularFormacion">Educación</h3>

          <div class="itemsFormacion">
            ${data.content.educacion
              .map(
                (item) => `
              <div class="itemFormacion">
                <div class="encabezadoFormacion">
                  <h3 class="subtituloFormacion">${item.institucion}</h3>
                  <span class="iconoFormacion">${item.icon}</span>
                </div>
                <div class="contenidoFormacion">
                  <div class="dataTituloFormacion">
                    <h3 class="tituloResumen">${item.curso}</h3>
                    <span class="dataFormacion">${item.fecha}</span>
                  </div>
                  <p class="descripcionFormacion">${item.descripcion}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        
        <div class="grupoFormacion">
          <h3 class="titularFormacion">Trabajos</h3>

          <div class="itemsFormacion">
            ${data.content.trabajos
              .map(
                (item) => `
              <div class="itemFormacion">
                <div class="encabezadoFormacion">
                  <h3 class="subtituloFormacion">${item.empresa}</h3>
                  <span class="iconoFormacion">${item.icon}</span>
                </div>
                <div class="contenidoFormacion">
                  <div class="dataTituloFormacion">
                    <h3 class="tituloResumen">${item.puesto}</h3>
                    <span class="dataFormacion">${item.fecha}</span>
                  </div>
                  <p class="descripcionFormacion">${item.descripcion}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }
  if (data.id === "Servicios") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="Servicios">
        Lo que hago por ti
      </h2>

      <div class="contenedorServicios container grid">
        ${data.content.services
          .map(
            (service, index) => `
          <div class="itemServicios">
            <i class="${service.icon} iconoServicios"></i>

            <h3 class="tituloServicios">${service.title}</h3>
            <p class="descripcionServicios">${service.description}</p>
            <span class="numeroServicios">${index + 1}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
  if (data.id === "Habilidades") {
    section.innerHTML = `
    <h2 class="section_title title_center" data-title="${data.content.title.subtitle}">
      ${data.content.title.text}
    </h2>
  
    <div class="contenedorHabilidades container grid">
      ${data.content.skills
        .map(
          (skill) => `
        <div class="itemHabilidades">
          <div class="titulosHabilidades">
            <h3 class="carreraHablidades">${skill.name}</h3>
            <span class="numeroHabilidades">${skill.percentage}</span>
          </div>
          <p class="descripcionHabilidades">${skill.description}</p>
  
          <div class="barraHabilidades">
            <div class="porcentajeHabilidades" style="width: ${skill.barWidth};">
              <span></span>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  
  }
  if (data.id === "Portafolio") {
    section.innerHTML = `
    <h2 class="section_title title_center" data-title="Portafolio">
      Trabajos Recientes
    </h2>
  
    <div class="portafolioContenedor container grid">
      ${data.content.works
        .map(
          (work) => `
        <div class="cardPortafolio">
          <a href="${work.url}" class="imgLink" target="_blank">
            <div class="imgWrapper">
              <img src="${work.image}" alt="${work.title}" class="imgPortafolio" />
            </div>
            <div class="detallesPortafolio">
              <h3 class="tituloPortafolio">${work.title}</h3>
              <span class="descripcionPortafolios">${work.description}</span>
            </div>
          </a>
        </div>
      `
        )
        .join("")}
    </div>
  `;  
  } 
  return section;
}

// Ruta del JSON
const jsonPath = "assets/json/sections.json";

// Seleccionar el contenedor principal donde se agregarán las secciones
const mainContainer = document.getElementById("main-container"); // Asegúrate de que este ID exista en tu HTML

// Cargar el JSON y renderizar las secciones
fetch(jsonPath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  })
  .then((sections) => {
    sections.forEach((sectionData) => {
      const section = createSection(sectionData);
      mainContainer.appendChild(section); // Agregar cada sección al contenedor principal
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  function sendMail() {
    emailjs.send("service_wgqca7a", "service_wgqca7a", {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value,
      })
      .then((response) => {
        console.log("Correo enviado con éxito", response);
        alert("Correo enviado correctamente.");
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
        alert("Hubo un error al enviar el correo.");
      });
  }
  
