const selectNivel = document.getElementById('nivel');
const selectModulo = document.getElementById('modulo');
const selectTema = document.getElementById('tema');

for (let nivel in mallaCurricular) {
    let option = document.createElement('option');
    option.value = nivel;
    option.text = nivel;
    selectNivel.add(option);
}

function actualizarModulos() {
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectNivel.value) {
        const modulos = mallaCurricular[selectNivel.value];
        for (let modulo in modulos) {
            let option = document.createElement('option');
            option.value = modulo;
            option.text = modulo;
            selectModulo.add(option);
        }
        selectModulo.disabled = false;
        selectTema.disabled = true;
    } else {
        selectModulo.disabled = true;
        selectTema.disabled = true;
    }
}

function actualizarTemas() {
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectModulo.value) {
        const temasArr = mallaCurricular[selectNivel.value][selectModulo.value];
        temasArr.forEach(tema => {
            let option = document.createElement('option');
            option.value = tema;
            option.text = tema.split(':')[0]; // Show only the title part before the colon
            selectTema.add(option);
        });
        selectTema.disabled = false;
    } else {
        selectTema.disabled = true;
    }
}

function generarPrompt(plataforma) {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;
    const temaCompleto = selectTema.value;

    if (!nivel || !modulo || !temaCompleto) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar.");
        return;
    }

    const temaTitulo = temaCompleto.split(':')[0].trim();
    const temaDescripcion = temaCompleto.split(':')[1] ? temaCompleto.split(':')[1].trim() : '';

    const promptMaestro = `${temaTitulo}

Actúa como un experto desarrollador de currículas técnicas y redactor académico senior. Tu tarea es generar un documento de estudio exhaustivo, didáctico y visualmente excelente sobre este tema para el módulo de ${modulo} (${nivel}) dirigido a estudiantes de Sistemas Informáticos de la academia tecnológica online EduconnectRuben.

CONTEXTO DE ENSEÑANZA Y APLICACIÓN PRÁCTICA:
Todos los ejemplos, problemas, laboratorios y casos de uso prácticos DEBEN estar enfocados en proyectos de software reales, de alto impacto y demanda comercial. IMPORTANTE: Sé muy creativo y varía siempre la industria. Imagina escenarios como: el sector salud (clínicas, doctores), sector gastronómico (venta de comidas, refrescos, sodas, delivery), seguridad y fuerzas armadas (sistemas policiales, militares), educación, logística, tiendas online, o software empresarial corporativo de cualquier tipo. Mantén un enfoque en el "aprender haciendo" para que el estudiante sienta que el código que escribe soluciona problemas reales en todo tipo de negocios modernos. Redacta todo el contenido utilizando un Español Neutro, profesional y universal (evita modismos o jerga local). Además, cuando incluyas ejemplos o retos prácticos que involucren dinero, costos o presupuestos de proyectos, utiliza siempre Dólares (USD) como moneda estándar para mantener un enfoque internacional.

DESCRIPCIÓN DEL TEMA A CUBRIR:
${temaDescripcion}

REGLAS ESTRICTAS DE GENERACIÓN:
•	Tono de Escritura: Didáctico, motivador, empático y profesional, evitando palabras rebuscadas para que un estudiante principiante lo comprenda fácilmente.
•	Nomenclatura Obligatoria: NUNCA utilices el término "Técnico Superior". Dirígete al estudiante o profesional únicamente como "Técnico en Sistemas Informáticos" o simplemente como "Técnico".
•	Extensión y Profundidad: El documento DEBE tener entre 10 y 12 páginas (aproximadamente 2500 palabras). Explica cada tema para que se entienda perfectamente, pero no des vueltas innecesarias ni agregues relleno.
•	Prohibición de Arte ASCII: TIENES ESTRICTAMENTE PROHIBIDO generar diagramas dibujados con símbolos de texto (ASCII art), mapas conceptuales con líneas (\`+---\`, \`|\`, \`->\`) o cuadros de texto dibujados. Si necesitas estructurar información, usa ÚNICAMENTE tablas Markdown estandarizadas o listas con viñetas.
•	Tablas: Usa tablas Markdown con encabezados en negrita y contenido centrado para comparaciones.
•	Códigos y Consolas: NO uses bloques de código negros de Markdown (\`\`\`). En su lugar, escribe todo fragmento de código, comando o configuración usando texto normal indentado o viñetas. Asegúrate de que cada comando o línea de código vaya en un salto de línea independiente para evitar que se mezclen al copiar a Word. Añade comentarios explicando qué hace cada parte.
•	Marcadores Visuales: Exclusivamente dentro del punto "La Teoría Clave", sugiere al menos 3 lugares donde el profesor deba insertar un gráfico, usando este formato resaltado: [🖼️ PROFESOR: Inserte aquí un diagrama/imagen que muestre...].

ESTRUCTURA EXACTA DEL DOCUMENTO (Usa estos 6 puntos estrictamente):

# ${temaTitulo}

## 1. El Gancho (Contexto y Analogía)
Explica el concepto general del tema comparándolo con algo de la vida cotidiana o una analogía clara e internacional, antes de usar palabras técnicas.

## 2. La Teoría Clave (El "Qué")
Da la definición técnica y formal de los conceptos de este tema. 
Detalla cómo funciona en viñetas y añade una "Regla de Oro" o error común que deben evitar.

## 3. El Caso de Uso (El "Para Qué")
Conecta la teoría con el mundo laboral. Da un ejemplo de en qué tipo de proyecto real (enfocado en PYMES, startups o trabajo remoto) se utiliza exactamente este conocimiento o herramienta.

## 4. Laboratorio Práctico (Manos al Código / Práctica)
Haz una demostración paso a paso. Incluye:
- Preparación (qué archivos o circuitos abrir).
- El fragmento de código, configuración o comando exacto (con comentarios explicativos en cada línea).
- El resultado esperado (qué debería verse en la pantalla al ejecutarlo).

## 5. El Reto de la Clase
Fomenta el "aprender haciendo" y perder el miedo a equivocarse. Plantea una tarea inmediata y pequeña. Pídele al estudiante que modifique una línea del código o configuración que acaban de hacer para obtener un resultado distinto.

## 6. Glosario Técnico
Construye vocabulario profesional. Haz una lista de 3 a 5 palabras técnicas nuevas aprendidas en esta clase, con una definición de una sola línea cada una.

FORMATO DE ENTREGA (REGLA CRÍTICA)
•	PROHIBIDO GENERAR PDF: Tienes terminantemente prohibido usar Python o cualquier otra herramienta para generar un archivo PDF o documento descargable.
•	Inicio Directo (Sin Saludos): Tu respuesta debe comenzar ÚNICA Y EXCLUSIVAMENTE con el Título Principal en Markdown. NO incluyas saludos iniciales ni texto introductorio.
•	Exportación a Google Docs: Escribe toda tu respuesta ÚNICA Y EXCLUSIVAMENTE como texto directamente aquí en la ventana del chat.`;

    navigator.clipboard.writeText(promptMaestro).then(() => {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        
        const nombrePlataforma = plataforma === 'gemini' ? 'Gemini' : 'ChatGPT';
        toastText.textContent = `¡Prompt copiado! Abriendo ${nombrePlataforma}...`;
        
        toast.classList.add("show");
        
        setTimeout(function(){ 
            toast.classList.remove("show"); 
        }, 3000);
        
        setTimeout(() => {
            if (plataforma === 'gemini') {
                window.open('https://gemini.google.com/app', '_blank');
            } else if (plataforma === 'chatgpt') {
                window.open('https://chatgpt.com/', '_blank');
            }
        }, 1200);
    }).catch(err => {
        alert('Hubo un error al intentar copiar el prompt. Asegúrate de dar permisos al navegador.');
        console.error(err);
    });
}

function generarPromptImagen(plataforma) {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;
    const temaCompleto = selectTema.value;

    if (!nivel || !modulo || !temaCompleto) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar la imagen.");
        return;
    }

    const temaTitulo = temaCompleto.split(':')[0].trim();

    const promptImagen = `Actúa como un diseñador gráfico experto en infografías educativas.
Genera una infografía estilo collage dividida exactamente en 6 paneles (una cuadrícula de 3 columnas por 2 filas).

REGLA CRÍTICA Y ESTRICTA: Tienes TOTALMENTE PROHIBIDO generar o escribir las palabras "Rojo", "Amarillo", "Verde", "Azul", "Violeta" o "Multicolor" dentro de la imagen, ya sea como títulos, etiquetas o marcas. Esos nombres de colores son solo instrucciones para que sepas de qué color pintar el fondo de cada panel. NO los escribas como texto.

El contenido visual debe ser exactamente este:
- Panel 1 (Arriba a la izquierda): Fondo con combinación de colores. Título principal bien centrado en el medio del panel en letras grandes: "${temaTitulo}". Alrededor del título, dibuja iconos y pequeñas ilustraciones tecnológicas decorativas.
- Panel 2 (Arriba al centro): Fondo de color rojo. En la parte superior del panel escribe textualmente: "1. El Gancho". Debajo, ilustra una analogía de la vida cotidiana relacionada con el tema.
- Panel 3 (Arriba a la derecha): Fondo de color amarillo. En la parte superior del panel escribe textualmente: "2. Teoría Clave". Debajo, dibuja conceptos técnicos, diagramas o reglas esenciales del tema.
- Panel 4 (Abajo a la izquierda): Fondo de color verde. En la parte superior del panel escribe textualmente: "3. Caso de Uso". Debajo, ilustra una aplicación real de este concepto en el mundo del software (por ejemplo: un sistema médico, app de logística, software militar/policial, delivery de comidas/bebidas, o un dashboard corporativo).
- Panel 5 (Abajo al centro): Fondo de color azul. En la parte superior del panel escribe textualmente: "4. Práctica". Debajo, ilustra una pantalla de computadora mostrando código de programación moderno o interfaces de usuario atractivas.
- Panel 6 (Abajo a la derecha): Fondo de color violeta. En la parte superior del panel escribe textualmente: "5. Reto". Debajo, dibuja un estudiante programando, superando un desafío o construyendo un proyecto.

Estilo visual: Arte digital educativo, diseño plano (flat design), vectores limpios, corporativo moderno. Muestra elementos tecnológicos.
Formato de imagen: Horizontal panorámico (relación de aspecto 16:9) para acomodar perfectamente la cuadrícula.`;

    navigator.clipboard.writeText(promptImagen).then(() => {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        
        const nombrePlataforma = plataforma === 'gemini' ? 'Gemini' : 'ChatGPT (DALL-E)';
        toastText.textContent = `¡Prompt de Imagen copiado! Abriendo ${nombrePlataforma}...`;
        toast.classList.add("show");
        
        setTimeout(function(){ 
            toast.classList.remove("show"); 
        }, 3000);
        
        setTimeout(() => {
            if (plataforma === 'gemini') {
                window.open('https://gemini.google.com/app', '_blank');
            } else if (plataforma === 'chatgpt') {
                window.open('https://chatgpt.com/', '_blank');
            }
        }, 1200);
    }).catch(err => {
        alert('Hubo un error al intentar copiar el prompt. Asegúrate de dar permisos al navegador.');
        console.error(err);
    });
}

function generarPromptImagenModulo(opcion) {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;

    if (!nivel || !modulo) {
        alert("⚠️ Por favor, selecciona el Nivel y Módulo antes de generar la imagen de la carátula.");
        return;
    }

    const temasArr = mallaCurricular[nivel][modulo] || [];
    const listaTemas = temasArr.map(t => t.split(':')[0].replace(/^TEMA \d+\.\s*/, '')).join(', ');

    let promptImagen = `Actúa como un diseñador gráfico experto. Genera una imagen con fondo TOTALMENTE TRANSPARENTE (sin fondo), ideal para la carátula de un módulo educativo.
El módulo se llama: "${modulo.replace(/^Módulo \d+:\s*/, '')}".
Este módulo abarca los siguientes temas: ${listaTemas}.
Tu objetivo es crear una ilustración que englobe y represente todos estos conceptos de forma general y visual.

`;

    if (opcion === 1) {
        promptImagen += `Estilo y composición (OPCIÓN 1):
- Diseño radial o de red: En el centro coloca un elemento principal representativo del tema.
- Alrededor, distribuye múltiples íconos coloridos y modernos relacionados con informática y tecnología.
- Conecta el elemento central con los íconos mediante flechas o líneas dinámicas que apunten hacia afuera.
- Estilo: Arte digital, iconos 3D o flat design brillante, muy llamativo y educativo.`;
    } else {
        promptImagen += `Estilo y composición (OPCIÓN 2):
- Diseño tipo explosión o árbol de ideas: En la parte inferior coloca un elemento base (ej. un globo terráqueo brillante o una placa base).
- Desde este elemento base, haz brotar hacia arriba muchas líneas o ramas de colores brillantes.
- Cada rama debe terminar en un círculo o burbuja que contenga un ícono tecnológico diferente.
- Estilo: Vectores limpios, muy colorido, vibrante, con estilo corporativo y moderno.`;
    }

    promptImagen += `

RECUERDA: La imagen debe tener fondo 100% transparente y no incluir texto escrito, solo elementos visuales e íconos. Formato de imagen: Cuadrado (relación de aspecto 1:1).`;

    navigator.clipboard.writeText(promptImagen).then(() => {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        
        toastText.textContent = `¡Prompt de Módulo copiado! Abriendo Gemini...`;
        toast.classList.add("show");
        
        setTimeout(function(){ 
            toast.classList.remove("show"); 
        }, 3000);
        
        setTimeout(() => {
            window.open('https://gemini.google.com/app', '_blank');
        }, 1200);
    }).catch(err => {
        alert('Hubo un error al intentar copiar el prompt. Asegúrate de dar permisos al navegador.');
        console.error(err);
    });
}
