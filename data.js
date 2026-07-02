// Estructura de Datos de la Malla Curricular: CEA Herman Ortiz Camargo
const mallaCurricular = {
    "🟢 NIVEL BÁSICO": {
        "Módulo 1: Fundamentos Matemáticos para la Informática": [
            "TEMA 1. Sistemas de Numeración: Conceptos de base binaria, octal, hexadecimal y conversiones matemáticas.",
            "TEMA 2. Lógica Matemática: Tablas de verdad, compuertas lógicas y operadores booleanos (AND, OR, NOT, XOR).",
            "TEMA 3. Matemática Discreta Básica: Teoría de conjuntos y su aplicación, introducción a grafos y relaciones."
        ],
        "Módulo 2: Arquitectura de Computadoras y Sistemas Operativos": [
            "TEMA 1. Hardware y Componentes Físicos: Arquitectura interna (CPU, RAM, almacenamiento) y periféricos.",
            "TEMA 2. Sistemas Operativos: Gestión de procesos, hilos, memoria y jerarquías de directorios.",
            "TEMA 3. Entorno de Consola (CLI): Navegación por terminal, comandos esenciales y gestión de permisos."
        ],
        "Módulo 3: Introducción a los Lenguajes de Programación y Nuestro Entorno": [
            "TEMA 1. La Torre de Babel del Código: Lenguaje máquina vs. alto nivel, lógica universal y sintaxis.",
            "TEMA 2. El Stack Tecnológico: El rol del Frontend, Backend y Bases de Datos.",
            "TEMA 3. Entorno de Trabajo: Instalación de editores de código (VS Code) y extensiones indispensables."
        ],
        "Módulo 4: Lógica de Programación y Estructuras de Datos": [
            "TEMA 1. Algoritmia Básica: Pensamiento computacional, diagramas de flujo y pseudocódigo.",
            "TEMA 2. Variables y Tipos de Datos: Primitivos (enteros, flotantes, strings, booleanos) y operadores.",
            "TEMA 3. Control de Flujo: Estructuras condicionales (if, switch) y ciclos iterativos (for, while).",
            "TEMA 4. Estructuras de Datos Universales: Arreglos (arrays), matrices, objetos y diccionarios."
        ]
    },
    "🟡 NIVEL INTERMEDIO": {
        "Módulo 5: Paradigmas de Programación": [
            "TEMA 1. Programación Orientada a Objetos (POO): Conceptos de Clases, Objetos, Atributos y Métodos.",
            "TEMA 2. Los Pilares de la POO: Herencia, Polimorfismo, Encapsulamiento y Abstracción.",
            "TEMA 3. Programación Funcional: Funciones puras, inmutabilidad y funciones callback."
        ],
        "Módulo 6: Redes y Protocolos de Comunicación": [
            "TEMA 1. Arquitectura de Redes: Capas del Modelo OSI, pila TCP/IP, direccionamiento y subredes.",
            "TEMA 2. Protocolos de la Web: Funcionamiento detallado de HTTP/HTTPS, URLs y puertos.",
            "TEMA 3. Resolución de Nombres: Funcionamiento del Sistema de Nombres de Dominio (DNS)."
        ],
        "Módulo 7: Control de Versiones y Trabajo Colaborativo": [
            "TEMA 1. Git Local: Inicialización, staging area y comandos esenciales (add, commit, status, log).",
            "TEMA 2. Repositorios en GitHub: Clonación, vinculación remota y sincronización de código (push, pull).",
            "TEMA 3. Flujo de Trabajo en Equipo: Creación de ramas (branch), fusiones (merge) y resolución de conflictos."
        ],
        "Módulo 8: Desarrollo Frontend (HTML, CSS y JavaScript)": [
            "TEMA 1. Maquetación con HTML5: Etiquetas semánticas, validaciones de formularios y multimedia.",
            "TEMA 2. Estilos y Diseño con CSS3: Modelo de caja, Flexbox, CSS Grid y diseño responsivo (Mobile First).",
            "TEMA 3. JavaScript e Interactividad: Manipulación del DOM, gestión de eventos y LocalStorage."
        ]
    },
    "🟠 NIVEL AVANZADO": {
        "Módulo 9: Bases de Datos Relacionales": [
            "TEMA 1. Modelado de Información: Diagramas Entidad-Relación, llaves primarias/foráneas y normalización.",
            "TEMA 2. Lenguaje SQL: Operaciones CRUD (INSERT, SELECT, UPDATE, DELETE).",
            "TEMA 3. SQL Avanzado: Filtrado, agrupaciones, subconsultas y cruce de tablas (JOIN).",
            "TEMA 4. Motores Prácticos: Implementación y conexión en PostgreSQL y MySQL."
        ],
        "Módulo 10: Arquitectura Backend y APIs": [
            "TEMA 1. Lógica del Servidor: Ciclo Petición-Respuesta, métodos HTTP y Códigos de Estado.",
            "TEMA 2. Backend con Python: Entornos virtuales y configuración del servidor.",
            "TEMA 3. Frameworks y ORM: Implementación de lógica de negocio usando Django.",
            "TEMA 4. Creación de APIs RESTful: Diseño de endpoints y serialización a formato JSON."
        ],
        "Módulo 11: Integración Full-Stack y Seguridad": [
            "TEMA 1. Consumo de APIs: Promesas, async/await y uso de fetch para conectar Frontend y Backend.",
            "TEMA 2. Autenticación: Manejo de sesiones, Login, tokens (JWT) y encriptación de contraseñas.",
            "TEMA 3. Seguridad Web: Políticas CORS, prevención de inyecciones SQL y ataques XSS."
        ],
        "Módulo 12: Testing y Aseguramiento de Calidad (QA)": [
            "TEMA 1. Estrategias de Pruebas: Pruebas Unitarias, de Integración y End-to-End.",
            "TEMA 2. El Rol del Tester: Metodologías de validación, reporte de bugs y pruebas de estrés en sistemas de gestión segura de contraseñas y accesos."
        ]
    },
    "🔴 NIVEL EXPERTO": {
        "Módulo 13: Electrónica Básica e Internet de las Cosas (IoT)": [
            "TEMA 1. Microcontroladores: Arquitectura, flasheo y configuración de pines GPIO del ESP32.",
            "TEMA 2. Control de Potencia: Aislamiento de circuitos y programación de sistemas de relés de 8 canales.",
            "TEMA 3. Integración IoT Práctica: Conexión WiFi, recepción de peticiones HTTP y automatización de hardware."
        ],
        "Módulo 14: Infraestructura y Contenedores": [
            "TEMA 1. Aislamiento con Docker: Virtualización, imágenes vs. contenedores y creación de archivos Dockerfile.",
            "TEMA 2. Orquestación de Servicios: Uso de docker-compose para levantar entornos complejos simultáneamente."
        ],
        "Módulo 15: Despliegue en la Nube (Deploy)": [
            "TEMA 1. Producción: Separación de credenciales y gestión segura de variables de entorno (.env).",
            "TEMA 2. Despliegue Estático: Publicación e integración continua (CI/CD) de interfaces en Netlify.",
            "TEMA 3. Servicios Dinámicos: Configuración y alojamiento de aplicaciones Backend y bases de datos en la nube (Render, Railway)."
        ]
    },
    "🟣 NIVEL DE ESPECIALIZACIÓN": {
        "Módulo 16: Metodologías Ágiles y Entorno Laboral": [
            "TEMA 1. Marcos de Trabajo Ágiles: Roles, Sprints en Scrum y gestión visual mediante tableros Kanban.",
            "TEMA 2. Habilidades Blandas: Comunicación técnica, resolución de bloqueos y estimación de tiempos.",
            "TEMA 3. Marca Personal: Optimización de GitHub, portafolio digital y empleabilidad."
        ],
        "Módulo 17: Inteligencia Artificial para Desarrolladores": [
            "TEMA 1. Asistentes de Código: Uso de IA para autocompletado, refactorización y debugging.",
            "TEMA 2. Ingeniería de Prompts: Técnicas para solicitar arquitecturas y soluciones de código precisas.",
            "TEMA 3. Integración de APIs: Conexión del Backend con modelos de lenguaje de IA de terceros."
        ],
        "Módulo 18: Introducción al Desarrollo Móvil": [
            "TEMA 1. El Ecosistema Móvil: Aplicaciones Web Responsivas, PWA, Nativas e Híbridas.",
            "TEMA 2. Tecnologías Multiplataforma: Conceptos de frameworks modernos para compilar a Android y iOS."
        ]
    }
};
