document.addEventListener("DOMContentLoaded", function() {
    console.log(datos);

    function mostrarInformacion(ciudad) {
        let section = document.getElementById("informacion");
        let resultados = "";

        for (let dato of datos) {
            if (dato.Cidade.toLowerCase() === ciudad.toLowerCase()) {
                resultados += `
                <h1>${dato.Cidade}</h1>
                <p>${dato.Descripcion}</p>
                <p><strong>Localização:</strong> ${dato.Ubicacion}</p>
                <p><strong>Cultura:</strong> ${dato.Cultura}</p>
                <p><strong>Gastronomía:</strong> ${dato.Gastronomia}</p>
                <p><strong>Clima:</strong> ${dato.Clima}</p>
                `;
                break;
            }
        }

        if (resultados === "") {
            resultados = "<p>No se encontró información para la ciudad seleccionada.</p>";
        }

        section.innerHTML = resultados;
    }

    function Pesquisar() {
        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        mostrarInformacion(searchInput);
    }

    function Autocompletar() {
        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        let suggestions = document.getElementById("suggestions");
        suggestions.innerHTML = "";

        if (searchInput.length > 0) {
            let matches = datos.filter(dato => dato.Cidade.toLowerCase().startsWith(searchInput));
            matches.forEach(match => {
                let suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = match.Cidade;
                suggestionItem.addEventListener("click", function() {
                    document.getElementById("searchInput").value = match.Cidade;
                    suggestions.innerHTML = "";
                    mostrarInformacion(match.Cidade);
                });
                suggestions.appendChild(suggestionItem);
            });
        }
    }

    document.getElementById("searchButton").addEventListener("click", Pesquisar);
    document.getElementById("searchInput").addEventListener("input", Autocompletar);

  
    document.querySelectorAll('.img').forEach(img => {
        img.addEventListener('click', function() {
            let ciudad = this.getAttribute('data-city');
            mostrarInformacion(ciudad);
        });
    });

   
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const width = carousel.clientWidth / 4; 
        carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 4) {
            currentIndex++;
            updateCarousel();
        }
    });

    
    updateCarousel();

    window.addEventListener('resize', updateCarousel);
});