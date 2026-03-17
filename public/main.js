// Función para crear secciones dinámicas
function createSection(data) {
  const section = document.createElement("section");
  section.className = data.className || "";
  section.id = data.id || "";

  // =========================
  // INICIO
  // =========================
  if (data.id === "Inicio") {
    const fullTitle = data.content?.title || "";
    const titleParts = fullTitle.split(" ");
    const firstWord = titleParts[0] || "";
    const restWords = titleParts.slice(1).join(" ");

    section.innerHTML = `
      <div class="contenedorInicio container grid">
        <div class="contenidoInicio">
          <span class="letraChicaInicio">${data.content?.smallText || ""}</span>
          <h1 class="tituloInicio">
            <span>${firstWord} </span>${restWords}<br />
            <span>${data.content?.subtitle || ""}</span>
          </h1>
          <p class="descripcionInicio">${data.content?.description || ""}</p>
          <div class="botonesInicio">
            ${
              data.content?.buttons?.length
                ? data.content.buttons
                    .map(
                      (button) => `
                        <a href="${button.href || "#"}" class="${button.className || ""}">
                          ${button.text || "Button"}
                        </a>
                      `
                    )
                    .join("")
                : ""
            }
          </div>
        </div>

        <div class="contenedorImgInicio">
          <img
            src="${data.content?.image?.src || ""}"
            alt="${data.content?.image?.alt || "Imagen de inicio"}"
            class="imgInicio"
          />
        </div>
      </div>
    `;
  }

  // =========================
  // SOBRE MI
  // =========================
  else if (data.id === "SobreMi") {
    section.innerHTML = `
      <div class="contenedorSobreMi container grid">
        <div class="contenedorImgSobreMi">
          ${
            data.content?.images?.length
              ? data.content.images
                  .map(
                    (image) => `
                      <img
                        src="${image.src || ""}"
                        alt="${image.alt || "Imagen sobre mí"}"
                        class="imgSobreMi"
                      />
                    `
                  )
                  .join("")
              : ""
          }
        </div>

        <div class="about_content">
          <h2 class="section_title" data-title="¿Quién soy?">
            ${data.content?.title || ""}
          </h2>

          <p class="descripcionSobreMi">${data.content?.description || ""}</p>

          <ul class="dataSobreMi grid">
            ${
              data.content?.data?.length
                ? data.content.data
                    .map((item) => {
                      const isEmail = item.title === "Email:";
                      return `
                        <li class="itemSobreMi">
                          <h3 class="tituloDataSobreMi">${item.title || ""}</h3>
                          <span class="data_description ${isEmail ? "linkSobreMi" : ""}">
                            ${item.description || ""}
                          </span>
                        </li>
                      `;
                    })
                    .join("")
                : ""
            }
          </ul>

          <div class="abajoSobreMi">
            <a href="${data.content?.cvLink || "#"}" class="btn">Descargar CV</a>

            <div class="liksSocialSobreMi">
              ${
                data.content?.socialLinks?.length
                  ? data.content.socialLinks
                      .map(
                        (link) => `
                          <a
                            href="${link.link || "#"}"
                            class="likSocialSobreMi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="${link.platform || "Red social"}"
                          >
                            <i class="${link.icon || ""}"></i>
                          </a>
                        `
                      )
                      .join("")
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================
  // EXPERIENCIA
  // =========================
  else if (data.id === "Experiencia") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="Mi Trayectoria">
        Experiencia
      </h2>

      <div class="contenedorFormacion container grid">
        <div class="grupoFormacion">
          <h3 class="titularFormacion">Trabajos</h3>

          <div class="itemsFormacion">
            ${
              data.content?.trabajos?.length
                ? data.content.trabajos
                    .map(
                      (item) => `
                        <div class="itemFormacion">
                          <div class="encabezadoFormacion">
                            <h3 class="subtituloFormacion">${item.empresa || ""}</h3>
                            <span class="iconoFormacion">${item.icon || ""}</span>
                          </div>
                          <div class="contenidoFormacion">
                            <div class="dataTituloFormacion">
                              <h3 class="tituloResumen">${item.puesto || ""}</h3>
                              <span class="dataFormacion">${item.fecha || ""}</span>
                            </div>
                            <p class="descripcionFormacion">${item.descripcion || ""}</p>
                          </div>
                        </div>
                      `
                    )
                    .join("")
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  // =========================
  // FORMACIÓN
  // =========================
  else if (data.id === "Formacion") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="Mi Trayectoria">
        Formación
      </h2>

      <div class="contenedorFormacion container grid">
        <div class="grupoFormacion">
          <h3 class="titularFormacion">Educación</h3>

          <div class="itemsFormacion">
            ${
              data.content?.educacion?.length
                ? data.content.educacion
                    .map(
                      (item) => `
                        <div class="itemFormacion">
                          <div class="encabezadoFormacion">
                            <h3 class="subtituloFormacion">${item.institucion || ""}</h3>
                            <span class="iconoFormacion">${item.icon || ""}</span>
                          </div>
                          <div class="contenidoFormacion">
                            <div class="dataTituloFormacion">
                              <h3 class="tituloResumen">${item.curso || ""}</h3>
                              <span class="dataFormacion">${item.fecha || ""}</span>
                            </div>
                            <p class="descripcionFormacion">${item.descripcion || ""}</p>
                          </div>
                        </div>
                      `
                    )
                    .join("")
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  // =========================
  // SERVICIOS
  // =========================
  else if (data.id === "Servicios") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="Servicios">
        Lo que hago por ti
      </h2>

      <div class="contenedorServicios container grid">
        ${
          data.content?.services?.length
            ? data.content.services
                .map(
                  (service, index) => `
                    <div class="itemServicios">
                      <i class="${service.icon || ""} iconoServicios"></i>
                      <h3 class="tituloServicios">${service.title || ""}</h3>
                      <p class="descripcionServicios">${service.description || ""}</p>
                      <span class="numeroServicios">${index + 1}</span>
                    </div>
                  `
                )
                .join("")
            : ""
        }
      </div>
    `;
  }

  // =========================
  // HABILIDADES
  // =========================
  else if (data.id === "Habilidades") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="${data.content?.title?.subtitle || ""}">
        ${data.content?.title?.text || ""}
      </h2>

      <div class="contenedorHabilidades container grid">
        ${
          data.content?.skills?.length
            ? data.content.skills
                .map(
                  (skill) => `
                    <div class="itemHabilidades">
                      <div class="titulosHabilidades">
                        <h3 class="carreraHablidades">${skill.name || ""}</h3>
                        <span class="numeroHabilidades">${skill.percentage || ""}</span>
                      </div>

                      <p class="descripcionHabilidades">${skill.description || ""}</p>

                      <div class="barraHabilidades">
                        <div class="porcentajeHabilidades" style="width: ${skill.barWidth || "0%"};">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  `
                )
                .join("")
            : ""
        }
      </div>
    `;
  }

  // =========================
  // PORTAFOLIO
  // =========================
  else if (data.id === "Portafolio") {
    section.innerHTML = `
      <h2 class="section_title title_center" data-title="Portafolio">
        Trabajos Recientes
      </h2>

      <div class="portafolioContenedor container grid">
        ${
          data.content?.works?.length
            ? data.content.works
                .map(
                  (work) => `
                    <div class="cardPortafolio">
                      <a href="${work.url || "#"}" class="imgLink" target="_blank" rel="noopener noreferrer">
                        <div class="imgWrapper">
                          <img
                            src="${work.image || ""}"
                            alt="${work.title || "Proyecto de portafolio"}"
                            class="imgPortafolio"
                          />
                        </div>
                        <div class="detallesPortafolio">
                          <h3 class="tituloPortafolio">${work.title || ""}</h3>
                          <span class="descripcionPortafolios">${work.description || ""}</span>
                        </div>
                      </a>
                    </div>
                  `
                )
                .join("")
            : ""
        }
      </div>
    `;
  }

  return section;
}

// Ruta del JSON
const jsonPath = "assets/json/sections.json";

// Seleccionar contenedor principal
const mainContainer = document.getElementById("main-container");

// Orden personalizado de las secciones
const customOrder = [
  "Inicio",
  "Portafolio",
  "SobreMi",
  "Experiencia",
  "Formacion",
  "Servicios",
  "Habilidades"
];

// Cargar el JSON y renderizar las secciones
fetch(jsonPath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  })
  .then((sections) => {
    if (!Array.isArray(sections)) {
      throw new Error("El JSON no contiene un array válido de secciones");
    }

    // Ordenar secciones según el orden que vos querés
    const orderedSections = customOrder
      .map((id) => sections.find((section) => section.id === id))
      .filter(Boolean);

    const fragment = document.createDocumentFragment();

    orderedSections.forEach((sectionData) => {
      const section = createSection(sectionData);
      fragment.appendChild(section);
    });

    mainContainer.innerHTML = "";
    mainContainer.appendChild(fragment);
  })
  .catch((error) => {
    console.error("Error:", error);

    if (mainContainer) {
      mainContainer.innerHTML = `
        <section class="section">
          <div class="container">
            <p>No se pudieron cargar las secciones del portfolio.</p>
          </div>
        </section>
      `;
    }
  });