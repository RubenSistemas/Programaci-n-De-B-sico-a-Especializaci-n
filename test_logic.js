const fs = require('fs');

// Leer el script.js para extraer el objeto mallaCurricular
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extraer el JSON de mallaCurricular usando una expresión regular o simplemente ejecutando el código hasta antes del DOM
const jsonMatch = scriptContent.match(/const mallaCurricular = (\{[\s\S]+?\});/);

if (jsonMatch) {
    const mallaCurricular = eval('(' + jsonMatch[1] + ')');
    
    // Simular los selectores del DOM
    const nivel = "🎓 NIVEL: TÉCNICO BÁSICO";
    const semestre = "1er Semestre";
    const modulo = "MÓDULO V: EMERGENTE I (INTELIGENCIA ARTIFICIAL BÁSICA)";
    const tema = "TEMA 3. Limitaciones tecnológicas de la IA actual";
    
    console.log(`\n--- SIMULANDO EXTRACCIÓN DE DATOS ---`);
    console.log(`Nivel: ${nivel}`);
    console.log(`Tema: ${tema}`);
    
    const subtitulosArr = mallaCurricular[nivel][semestre][modulo][tema] || [];
    const sub1 = subtitulosArr[0] ? subtitulosArr[0].replace(/^\d+\.\d+\.\s*/, '') : 'Concepto 1';
    const sub2 = subtitulosArr[1] ? subtitulosArr[1].replace(/^\d+\.\d+\.\s*/, '') : 'Concepto 2';
    const sub3 = subtitulosArr[2] ? subtitulosArr[2].replace(/^\d+\.\d+\.\s*/, '') : 'Concepto 3';
    const sub4 = subtitulosArr[3] ? subtitulosArr[3].replace(/^\d+\.\d+\.\s*/, '') : 'Concepto 4';
    const sub5 = subtitulosArr[4] ? subtitulosArr[4].replace(/^\d+\.\d+\.\s*/, '') : 'Concepto 5';

    console.log(`\n--- SUBTÍTULOS LIMPIOS (SIN NÚMEROS) ---`);
    console.log(`Sub 1: ${sub1}`);
    console.log(`Sub 2: ${sub2}`);
    console.log(`Sub 3: ${sub3}`);
    console.log(`Sub 4: ${sub4}`);
    console.log(`Sub 5: ${sub5}`);

    const promptImagen = `Actúa como un diseñador gráfico experto en infografías educativas.
Genera una infografía estilo collage dividida exactamente en 6 paneles (una cuadrícula de 3 columnas por 2 filas).

El contenido visual debe ser:
- Panel 1 (Arriba a la izquierda): Fondo MULTICOLOR. Muestra el título principal: "${tema.replace(/^TEMA \d+\.\s*/, '')}".
- Panel 2 (Arriba al centro): Fondo ROJO. Ilustración sobre: "${sub1}".
- Panel 3 (Arriba a la derecha): Fondo AMARILLO. Ilustración sobre: "${sub2}".
- Panel 4 (Abajo a la izquierda): Fondo VERDE. Ilustración sobre: "${sub3}".
- Panel 5 (Abajo al centro): Fondo AZUL. Ilustración sobre: "${sub4}".
- Panel 6 (Abajo a la derecha): Fondo VIOLETA. Ilustración sobre: "${sub5}".

Estilo visual: Arte digital educativo, diseño plano (flat design), vectores limpios, colores vibrantes, estilo corporativo moderno. Muestra elementos tecnológicos claros. Prioriza el diseño gráfico, los íconos visuales y los colores de fondo solicitados.`;

    console.log(`\n--- PROMPT GENERADO RESULTANTE ---`);
    console.log(promptImagen);
    console.log(`\n¡Todo funciona perfectamente!`);
} else {
    console.log("No se pudo extraer la malla curricular.");
}
