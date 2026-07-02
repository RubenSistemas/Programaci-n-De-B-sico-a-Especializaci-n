// Estructura de Datos de la Malla Curricular: CEA Herman Ortiz Camargo
const mallaCurricular = {
    "🎓 NIVEL: TÉCNICO BÁSICO": {
        "1er Semestre": {
            "MÓDULO I: TALLER DE SISTEMAS OPERATIVOS I": {
                "TEMA 1. Introducción a los sistemas operativos": [
                    "1.1. Historia y evolución de los sistemas operativos.",
                    "1.2. Arquitectura básica: Núcleo (Kernel) y el intérprete de comandos (Shell).",
                    "1.3. Clasificación y tipos de sistemas operativos.",
                    "1.4. Ciclo de vida y estados de un proceso (Listo, ejecución, bloqueado).",
                    "1.5. Diferencia entre procesos pesados, procesos ligeros e hilos (Threads)."
                ],
                "TEMA 2. Máquinas virtuales y Emulación": [
                    "2.1. Introducción, conceptos básicos y casos de uso.",
                    "2.2. Diferencia estructural entre Hipervisores de Tipo 1 y Tipo 2.",
                    "2.3. Ventajas, desventajas y rendimiento de la virtualización.",
                    "2.4. Comparativa de software (VirtualBox, VMware, Hyper-V).",
                    "2.5. Requisitos de hardware y configuración del entorno (Práctica)."
                ],
                "TEMA 3. Administración de recursos de hardware": [
                    "3.1. Planificación de CPU y administración del procesador.",
                    "3.2. Gestión de sistemas con múltiples procesadores y núcleos.",
                    "3.3. Administración de la memoria principal y memoria virtual.",
                    "3.4. Paginación, segmentación y swapping de memoria.",
                    "3.5. Gestión de periféricos y controladores de entrada/salida (I/O)."
                ],
                "TEMA 4. Administración de plataforma Windows": [
                    "4.1. Características principales y versiones del sistema operativo.",
                    "4.2. Gestión de usuarios, grupos y asignación de permisos (NTFS).",
                    "4.3. Uso de herramientas administrativas (Visor de eventos, Administrador de tareas).",
                    "4.4. Estructura del registro de Windows y directorios del sistema.",
                    "4.5. Políticas de seguridad locales y configuración de copias de seguridad."
                ]
            },
            "MÓDULO II: MATEMÁTICA PARA LA INFORMÁTICA": {
                "TEMA 1. Fundamentos y Sistemas de Numeración": [
                    "1.1. Definiciones y aplicaciones matemáticas en computación.",
                    "1.2. Funcionamiento de los sistemas Binario y Octal.",
                    "1.3. Funcionamiento de los sistemas Decimal y Hexadecimal.",
                    "1.4. Métodos de conversión entre diferentes bases numéricas.",
                    "1.5. Operaciones aritméticas (suma, resta) en diferentes sistemas."
                ],
                "TEMA 2. Lógica Matemática y Álgebra Booleana": [
                    "2.1. Proposiciones lógicas y construcción de tablas de verdad.",
                    "2.2. Compuertas lógicas básicas (AND, OR, NOT).",
                    "2.3. Compuertas derivadas y funciones lógicas complejas (NAND, NOR, XOR).",
                    "2.4. Axiomas, teoremas y propiedades del Álgebra de Boole.",
                    "2.5. Simplificación de expresiones booleanas."
                ],
                "TEMA 3. Teoría de Conjuntos, Relaciones y Funciones": [
                    "3.1. Definición y representación de conjuntos.",
                    "3.2. Operaciones principales (unión, intersección, diferencia, complemento).",
                    "3.3. Definición y propiedades de relaciones matemáticas.",
                    "3.4. Tipos de funciones (inyectiva, sobreyectiva, biyectiva).",
                    "3.5. Representación gráfica de funciones matemáticas."
                ],
                "TEMA 4. Sucesiones y series numéricas": [
                    "4.1. Concepto, clasificación y gráfica de una sucesión.",
                    "4.2. Fórmulas y aplicación de la progresión aritmética.",
                    "4.3. Fórmulas y aplicación de la progresión geométrica.",
                    "4.4. Concepto de límite de una sucesión.",
                    "4.5. Aplicación de sucesiones en algoritmos computacionales."
                ]
            },
            "MÓDULO III: PROGRAMACIÓN I-A": {
                "TEMA 1. Diseño de algoritmos": [
                    "1.1. Concepto y características fundamentales de los algoritmos.",
                    "1.2. Representación mediante Pseudocódigo.",
                    "1.3. Representación mediante Diagramas de flujo.",
                    "1.4. Tipos de datos: Constantes, variables y expresiones.",
                    "1.5. Uso de operadores aritméticos, relacionales y lógicos."
                ],
                "TEMA 2. Lenguaje de programación e IDEs": [
                    "2.1. Fases de la programación y tipos de lenguajes.",
                    "2.2. Diferencia entre proceso de compilación y ejecución.",
                    "2.3. Descripción del entorno de desarrollo (IDE) e instalación.",
                    "2.4. Estructura sintáctica básica de un programa.",
                    "2.5. Codificación, guardado y recuperación de código fuente."
                ],
                "TEMA 3. Estructuras básicas de control": [
                    "3.1. Implementación de estructuras secuenciales.",
                    "3.2. Estructuras condicionales simples y dobles (if / else).",
                    "3.3. Estructuras condicionales múltiples (switch / case).",
                    "3.4. Lógica de anidamiento en condiciones.",
                    "3.5. Introducción teórica a las estructuras repetitivas."
                ],
                "TEMA 4. Resolución de Problemas y Pruebas de Escritorio": [
                    "4.1. Metodología para el análisis lógico de problemas computacionales.",
                    "4.2. Técnicas de trazado manual (pruebas de escritorio).",
                    "4.3. Identificación de errores de sintaxis vs. errores lógicos.",
                    "4.4. Detección y corrección de errores mediante casos de prueba.",
                    "4.5. Buenas prácticas de indentación y comentarios en el código."
                ]
            },
            "MÓDULO IV: HARDWARE DE COMPUTADORAS I": {
                "TEMA 1. Evolución y generación de computadoras": [
                    "1.1. Historia de los primeros dispositivos de cálculo.",
                    "1.2. Generaciones de computadoras (1ra a 3ra generación).",
                    "1.3. Era del microprocesador (4ta y 5ta generación).",
                    "1.4. Ley de Moore y evolución de los semiconductores.",
                    "1.5. Tendencias futuras en hardware informático."
                ],
                "TEMA 2. Arquitectura y Partes de una computadora": [
                    "2.1. Funcionamiento del Procesador (CPU) y Tarjeta Madre (Motherboard).",
                    "2.2. Tecnologías de Memoria RAM y Tarjetas de Video (GPU).",
                    "2.3. Unidades de almacenamiento (HDD, SSD, NVMe).",
                    "2.4. Fuentes de poder (PSU), Case y sistemas de refrigeración.",
                    "2.5. Puertos de conexión y periféricos de entrada/salida."
                ],
                "TEMA 3. Instalación de sistemas operativos y software": [
                    "3.1. Accesos y configuración básica del BIOS/UEFI.",
                    "3.2. Estilos de particionado (MBR vs GPT) y preparación de medios booteables.",
                    "3.3. Proceso de instalación del Sistema Operativo paso a paso.",
                    "3.4. Búsqueda, instalación y actualización de controladores (Drivers).",
                    "3.5. Instalación de software ofimático, utilitarios y antivirus."
                ],
                "TEMA 4. Internet de las cosas (IoT)": [
                    "4.1. Concepto de IoT y Sistemas Ciberfísicos (CPS) en la Industria 4.0.",
                    "4.2. Componentes del ecosistema IoT y su arquitectura básica.",
                    "4.3. Dispositivos Wearables y Smart Home.",
                    "4.4. Protocolos de comunicación y plataformas en la nube para IoT.",
                    "4.5. Desafíos de seguridad y privacidad en entornos conectados."
                ]
            },
            "MÓDULO V: EMERGENTE I (INTELIGENCIA ARTIFICIAL BÁSICA)": {
                "TEMA 1. Fundamentos de la Inteligencia Artificial": [
                    "1.1. Definición de IA y breve historia de su evolución.",
                    "1.2. Diferencias entre IA Estrecha (ANI) e IA General (AGI).",
                    "1.3. Conceptos básicos de Machine Learning y Deep Learning.",
                    "1.4. Redes neuronales y Modelos de Lenguaje Grande (LLMs).",
                    "1.5. Aplicaciones actuales de la IA en la vida cotidiana."
                ],
                "TEMA 2. Uso incorrecto de la IA en la informática": [
                    "2.1. El riesgo de la dependencia excesiva en herramientas generativas.",
                    "2.2. Atrofia de la lógica computacional en estudiantes.",
                    "2.3. Plagio de código y violaciones de derechos de autor.",
                    "2.4. Generación e inyección de código con vulnerabilidades de seguridad.",
                    "2.5. El impacto negativo en la resolución de problemas (Troubleshooting)."
                ],
                "TEMA 3. Limitaciones tecnológicas de la IA actual": [
                    "3.1. Entendimiento de las \"Alucinaciones\" en respuestas generadas.",
                    "3.2. Sesgos algorítmicos derivados de los datos de entrenamiento.",
                    "3.3. Restricciones de tokens, memoria y barreras de contexto.",
                    "3.4. Dificultad en razonamiento espacial y matemáticas complejas.",
                    "3.5. Dependencia de infraestructura en la nube y latencia."
                ],
                "TEMA 4. Uso responsable y ético como futuros profesionales": [
                    "4.1. Transparencia: Cuándo y cómo declarar el uso de IA en proyectos.",
                    "4.2. Privacidad de datos confidenciales al usar chatbots públicos.",
                    "4.3. Desarrollo de un criterio humano para auditar resultados de la IA.",
                    "4.4. Políticas institucionales y marcos legales emergentes.",
                    "4.5. La IA como copiloto (asistente) y no como reemplazo del profesional."
                ]
            }
        }
    },
    "🎓 NIVEL: TÉCNICO AUXILIAR": {
        "2do Semestre": {
            "MÓDULO VI: TALLER DE SISTEMAS OPERATIVOS II": {
                "TEMA 1. Administración plataforma Linux": [
                    "1.1. Filosofía del software libre y tipos de distribuciones (Debian, Red Hat, Arch).",
                    "1.2. Estructura del sistema de archivos (FHS) en Linux.",
                    "1.3. Instalación de Linux (Dual-boot, particiones Swap, Root, Home).",
                    "1.4. Administración básica desde el Modo Gráfico (GUI).",
                    "1.5. Navegación y gestión de archivos por consola (CLI)."
                ],
                "TEMA 2. Contenedores y Virtualización Ligera": [
                    "2.1. Diferencias entre Máquinas Virtuales tradicionales y Contenedores.",
                    "2.2. Arquitectura, componentes y funcionamiento de Docker.",
                    "2.3. Instalación de Docker y comandos esenciales básicos.",
                    "2.4. Descarga y gestión de imágenes desde repositorios (Docker Hub).",
                    "2.5. Despliegue de un contenedor básico de prueba."
                ],
                "TEMA 3. Utilitarios de Sistema": [
                    "3.1. Uso de gestores de paquetes (APT, YUM/DNF, Pacman).",
                    "3.2. Añadir y administrar repositorios de software externos.",
                    "3.3. Herramientas de compresión y empaquetado (tar, gzip).",
                    "3.4. Monitoreo de recursos y procesos por consola (top, htop).",
                    "3.5. Análisis de disco y soluciones de antivirus en entornos Linux."
                ],
                "TEMA 4. Seguridad y Gestión de Redes en Linux": [
                    "4.1. Configuración básica de interfaces de red (IP estática, DNS).",
                    "4.2. Comandos de diagnóstico de red (ping, traceroute, netstat).",
                    "4.3. Gestión avanzada de usuarios y permisos (chmod, chown).",
                    "4.4. Configuración de firewall básico (UFW / iptables).",
                    "4.5. Conexión remota segura mediante SSH."
                ]
            },
            "MÓDULO VII: OFIMÁTICA Y TECNOLOGÍA MULTIMEDIA I": {
                "TEMA 1. Procesador de texto avanzado": [
                    "1.1. Configuración de páginas, márgenes y saltos de sección.",
                    "1.2. Encabezados, pies de página y numeración avanzada.",
                    "1.3. Creación y aplicación de Estilos personalizados.",
                    "1.4. Generación automática de índices y tablas de contenidos.",
                    "1.5. Herramientas de revisión, control de cambios y combination de correspondencia."
                ],
                "TEMA 2. Hoja de cálculo avanzado": [
                    "2.1. Uso de funciones lógicas, matemáticas y de búsqueda (BUSCARV/X).",
                    "2.2. Herramientas de validación de datos y formatos condicionales.",
                    "2.3. Creación y segmentación de Tablas dinámicas.",
                    "2.4. Generación de gráficos avanzados y mini-gráficos.",
                    "2.5. Introducción a la grabación y ejecución de Macros."
                ],
                "TEMA 3. Presentaciones interactivas": [
                    "3.1. Reglas de diseño visual aplicadas a diapositivas.",
                    "3.2. Personalización del Patrón de diapositivas.",
                    "3.3. Configuración de transiciones y animaciones por tiempos.",
                    "3.4. Inserción, edición y sincronización de multimedia (video/sonido).",
                    "3.5. Uso de hipervínculos, botones de acción y exportación a video."
                ],
                "TEMA 4. Herramientas Colaborativas en la Nube": [
                    "4.1. Ecosistemas principales: Google Workspace y Microsoft 365.",
                    "4.2. Gestión de archivos y carpetas en la nube (Drive/OneDrive).",
                    "4.3. Compartición de documentos y niveles de acceso (Lector, Editor).",
                    "4.4. Edición simultánea y revisión del historial de versiones.",
                    "4.5. Formularios en la nube para recolección de datos."
                ]
            },
            "MÓDULO VIII: PROGRAMACIÓN I-B": {
                "TEMA 1. Estructuras Iterativas (Bucles)": [
                    "1.1. Concepto de iteración y contadores/acumuladores.",
                    "1.2. Sintaxis y funcionamiento del bucle while.",
                    "1.3. Sintaxis y funcionamiento del bucle do-while.",
                    "1.4. Sintaxis y funcionamiento del bucle for.",
                    "1.5. Anidamiento de bucles y uso de sentencias de salto (break, continue)."
                ],
                "TEMA 2. Programación modular": [
                    "2.1. Concepto de \"Divide y Vencerás\" y acoplamiento de código.",
                    "2.2. Creación e invocación de Procedimientos (sin retorno).",
                    "2.3. Creación e invocación de Funciones (con retorno).",
                    "2.4. Diferencia entre paso de parámetros por Valor y por Referencia.",
                    "2.5. Ámbito de las variables (Locales vs Globales)."
                ],
                "TEMA 3. Estructuras de Datos Estáticas": [
                    "3.1. Definición, declaración y llenado de arreglos unidimensionales (Vectores).",
                    "3.2. Operaciones con vectores (búsqueda y ordenamiento básico).",
                    "3.3. Declaración, llenado y recorrido de arreglos bidimensionales (Matrices).",
                    "3.4. Declaración y asignación de Cadenas de texto (Strings).",
                    "3.5. Funciones nativas para manipulación, concatenación y corte de cadenas."
                ],
                "TEMA 4. Introducción a la Programación Orientada a Objetos": [
                    "4.1. Paradigma de la POO vs Programación Estructurada.",
                    "4.2. Definición del concepto de Clases y Objetos.",
                    "4.3. Declaración de Atributos y Métodos.",
                    "4.4. Principio de Encapsulamiento y modificadores de acceso (Public, Private).",
                    "4.5. Instanciación de objetos y uso de constructores básicos."
                ]
            },
            "MÓDULO IX: HARDWARE DE COMPUTADORAS II": {
                "TEMA 1. Software de mantenimiento e imágenes de sistema": [
                    "1.1. Herramientas Booteables de diagnóstico (Ej. Hiren’s Boot, WinPE).",
                    "1.2. Programas para testeo de RAM y salud de Discos Duros (SMART).",
                    "1.3. Concepto y creación de imágenes de disco (Clonación).",
                    "1.4. Configuración de Puntos de Restauración del sistema.",
                    "1.5. Estrategias de respaldo de información (Backups)."
                ],
                "TEMA 2. Mantenimiento preventivo": [
                    "2.1. Diagnóstico preliminar, inventario y planificación del mantenimiento.",
                    "2.2. Herramientas adecuadas e insumos para limpieza física.",
                    "2.3. Técnicas de ensamblaje, desensamblaje y aplicación de pasta térmica.",
                    "2.4. Mantenimiento lógico: eliminación de temporales y malware.",
                    "2.5. Optimización del inicio del sistema y desfragmentación/TRIM."
                ],
                "TEMA 3. Mantenimiento correctivo": [
                    "3.1. Metodología para la detección de fallas (Pitidos POST, códigos LED).",
                    "3.2. Reemplazo seguro de hardware dañado en CPUs de escritorio.",
                    "3.3. Particularidades e intervención básica en Laptops.",
                    "3.4. Diagnóstico de fallas comunes en impresoras (atascos, consumibles).",
                    "3.5. Procedimiento de soldadura básica de componentes."
                ],
                "TEMA 4. Principios de electrónica aplicados": [
                    "4.1. Conceptos de voltaje, amperaje y resistencia.",
                    "4.2. Diferencias entre corriente continua (CC/DC) y alterna (CA/AC).",
                    "4.3. Identificación de componentes: Interruptores, bobinas y transformadores.",
                    "4.4. Identificación de componentes: Diodos, capacitores, y transistores.",
                    "4.5. Uso del multímetro y lectura del código de colores en resistencias."
                ]
            },
            "MÓDULO X: EMERGENTE II (PROMPTS BÁSICOS)": {
                "TEMA 1. Fundamentos de Prompts": [
                    "1.1. Definición exacta de un \"Prompt\" como instrucción estructurada.",
                    "1.2. Anatomía de un prompt efectivo: Contexto, Tarea, Formato.",
                    "1.3. Importancia de la asignación de Roles a la IA.",
                    "1.4. Ajuste del Tono y Audiencia objetivo.",
                    "1.5. Diferencias entre prompting de un solo intento (Zero-shot) y con ejemplos (Few-shot)."
                ],
                "TEMA 2. Prompts para tareas ofimáticas y soporte técnico": [
                    "2.1. Diseño de prompts para redactar correos e informes técnicos.",
                    "2.2. Generación y depuración de fórmulas complejas para hojas de cálculo.",
                    "2.3. Resumen y extracción de datos clave de documentos largos.",
                    "2.4. Estructuración de consultas para diagnóstico de errores de software.",
                    "2.5. Prompts para generar guías de Troubleshooting de hardware."
                ],
                "TEMA 3. Errores comunes en Modelos de Lenguaje": [
                    "3.1. Resultados ambiguos causados por instrucciones vagas.",
                    "3.2. Falta de contexto y omisión de restricciones de formato.",
                    "3.3. Cómo evitar el sesgo de confirmación al interrogar a la IA.",
                    "3.4. Manejo de respuestas excesivamente largas o genéricas.",
                    "3.5. Riesgos de compartir logs del sistema con información sensible."
                ],
                "TEMA 4. Buenas prácticas y refinamiento": [
                    "4.1. Técnicas de iteración y ajuste progresivo del prompt.",
                    "4.2. División de tareas complejas en sub-tareas simples (encadenamiento).",
                    "4.3. Verificación cruzada (Cross-checking) de la información generada.",
                    "4.4. Evaluación crítica de la precisión técnica de la respuesta.",
                    "4.5. Creación de una biblioteca personal de prompts efectivos."
                ]
            }
        }
    },
    "🎓 NIVEL: TÉCNICO MEDIO I": {
        "3er Semestre": {
            "MÓDULO XI: INGLÉS TÉCNICO": {
                "TEMA 1. Estructuras Gramaticales y Entorno Personal": [
                    "1.1. Uso del verbo \"To Be\" en contextos técnicos.",
                    "1.2. Formulación de oraciones y preguntas en Presente Simple.",
                    "1.3. Vocabulario de información personal y presentaciones.",
                    "1.4. Ocupaciones y roles dentro de un departamento de TI.",
                    "1.5. Uso de adjetivos comunes para describir estados (encendido, roto, lento)."
                ],
                "TEMA 2. Vocabulario de Informática e Internet": [
                    "2.1. Términos técnicos para periféricos y componentes de hardware.",
                    "2.2. Verbos comunes de acciones de software (Install, Update, Run).",
                    "2.3. Vocabulario esencial de redes (Router, Bandwidth, Server).",
                    "2.4. Terminología de navegación web y aplicaciones en la nube.",
                    "2.5. Interpretación de mensajes de error comunes del sistema operativo."
                ],
                "TEMA 3. Inglés para Programación y Sistemas de Medida": [
                    "3.1. Terminología estándar en código fuente y tipos de variables (String, Integer).",
                    "3.2. Vocabulario de estructuras de control (If, While, Loop).",
                    "3.3. Términos básicos de bases de datos (Query, Table, Row).",
                    "3.4. Unidades de medida informáticas (Bytes, Hertz, Pixels).",
                    "3.5. Abreviaturas y acrónimos más usados en tecnología."
                ],
                "TEMA 4. Seguridad Industrial y Manuales Técnicos": [
                    "4.1. Vocabulario de Seguridad Industrial y prevención de riesgos.",
                    "4.2. Identificación de Equipos de Protección Personal (EPP) en inglés.",
                    "4.3. Comandos imperativos para instrucciones de seguridad (Do not touch, Wear).",
                    "4.4. Estructura y lectura comprensiva de manuales técnicos.",
                    "4.5. Traducción técnica guiada de hojas de datos (Datasheets)."
                ]
            },
            "MÓDULO XII: DISEÑO Y PROGRAMACIÓN WEB I-A": {
                "TEMA 1. Introducción al diseño web": [
                    "1.1. Historia de la Web y versiones (Web 1.0 a 4.0).",
                    "1.2. Funcionamiento de la arquitectura Cliente-Servidor.",
                    "1.3. Diferencias entre Perfiles Frontend y Backend.",
                    "1.4. Conceptos básicos de UI/UX (Interfaz y Experiencia de usuario).",
                    "1.5. Planificación y creación de prototipos (Wireframes) con herramientas como Figma."
                ],
                "TEMA 2. HTML (Lenguaje de marcas de hipertexto)": [
                    "2.1. Estructura semántica básica de un documento HTML5.",
                    "2.2. Etiquetas de formato de texto, títulos y párrafos.",
                    "2.3. Creación de listas (ordenadas/desordenadas), enlaces e imágenes.",
                    "2.4. Estructuración de datos mediante tablas.",
                    "2.5. Maquetación de Formularios interactivos y validación nativa."
                ],
                "TEMA 3. CSS (Hojas de estilo en cascada)": [
                    "3.1. Sintaxis de CSS, formas de inclusión y selectores básicos (clase, ID, etiqueta).",
                    "3.2. Comprensión y uso del Modelo de Caja (Box Model: margin, padding, border).",
                    "3.3. Propiedades de colores, fondos y tipografía.",
                    "3.4. Selectores avanzados y pseudo-clases (:hover, :nth-child).",
                    "3.5. Técnicas clásicas de posicionamiento (static, relative, absolute, fixed)."
                ],
                "TEMA 4. Diseño Responsivo y Frameworks Básicos": [
                    "4.1. Concepto de Diseño Responsivo y uso del Viewport.",
                    "4.2. Implementación de Media Queries y metodología Mobile-First.",
                    "4.3. Maquetación moderna con CSS Flexbox.",
                    "4.4. Maquetación bidimensional con CSS Grid.",
                    "4.5. Introducción, instalación y sistema de grillas de Bootstrap."
                ]
            },
            "MÓDULO XIII: PROGRAMACIÓN I-C": {
                "TEMA 1. Programación Orientada a Objetos (POO Avanzada)": [
                    "1.1. Concepto e implementación de la Herencia de clases.",
                    "1.2. Palabra reservada super y herencia múltiple (si el lenguaje lo soporta).",
                    "1.3. Comprensión y aplicación del Polimorfismo.",
                    "1.4. Sobrecarga de métodos y sobreescritura (Override).",
                    "1.5. Declaración y uso de Clases Abstractas e Interfaces."
                ],
                "TEMA 2. Modelado de Software": [
                    "2.1. Relaciones entre clases: Asociación, Agregación y Composición.",
                    "2.2. Conceptos de Generalización y Especialización.",
                    "2.3. Introducción a UML (Lenguaje Unificado de Modelado).",
                    "2.4. Creación de Diagramas de Casos de Uso.",
                    "2.5. Creación e interpretación de Diagramas de Clases."
                ],
                "TEMA 3. Estructuras de Datos Lineales": [
                    "3.1. Concepto teórico y arquitectura de Pilas (LIFO).",
                    "3.2. Implementación de Pilas mediante arreglos/vectores.",
                    "3.3. Concepto teórico y arquitectura de Colas (FIFO).",
                    "3.4. Implementación de Colas simples y circulares.",
                    "3.5. Casos de aplicación práctica de Pilas y Colas en el SO."
                ],
                "TEMA 4. Listas Enlazadas y Colecciones": [
                    "4.1. Concepto de Nodos y punteros en memoria.",
                    "4.2. Implementación estructural de Listas Simples.",
                    "4.3. Implementación y ventajas de las Listas Doblemente Enlazadas.",
                    "4.4. Uso de frameworks de colecciones nativos del lenguaje (Ej. ArrayList, List).",
                    "4.5. Colecciones basadas en Clave-Valor (Diccionarios o Mapas)."
                ]
            },
            "MÓDULO XIV: OFIMÁTICA Y TECNOLOGÍA MULTIMEDIA II": {
                "TEMA 1. Edición de audio digital": [
                    "1.1. Entorno de trabajo, formatos de audio y frecuencias de muestreo.",
                    "1.2. Grabación, importación y limpieza de ruido de fondo.",
                    "1.3. Herramientas de corte, fundido y edición multipista.",
                    "1.4. Uso de ecualización, compresores y efectos sonoros.",
                    "1.5. Renderizado y exportación en formatos comprimidos y sin pérdida."
                ],
                "TEMA 2. Edición de video": [
                    "2.1. Entorno del editor, resolución, framerates y formatos de video.",
                    "2.2. Importación de medios, organización y uso de la línea de tiempo.",
                    "2.3. Herramientas de corte, ensamblaje y aplicación de transiciones.",
                    "2.4. Inserción de textos, títulos y corrección de color básica.",
                    "2.5. Configuración de códecs y técnicas de renderizado para web/TV."
                ],
                "TEMA 3. Tratamiento de imágenes": [
                    "3.1. Diferencias profundas entre gráficos vectoriales y matriciales (mapa de bits).",
                    "3.2. Interfaz, resoluciones (DPI) y modos de color (RGB vs CMYK).",
                    "3.3. Uso no destructivo de Capas y Máscaras de capa.",
                    "3.4. Herramientas de selección, recorte y clonación para retoque.",
                    "3.5. Aplicación de filtros, ajustes de iluminación y exportación (PNG, JPG, WebP)."
                ],
                "TEMA 4. Producción multimedia integral": [
                    "4.1. Etapa de preproducción: Guionización y Storyboard.",
                    "4.2. Maquetación y organización de archivos del proyecto.",
                    "4.3. Agregación y sincronización de imagen, video y audio en un solo proyecto.",
                    "4.4. Aplicación de efectos especiales visuales (VFX) básicos.",
                    "4.5. Revisión final y exportación empaquetada del proyecto."
                ]
            },
            "MÓDULO XV: EMPRENDIMIENTO PRODUCTIVO E IA APLICADA": {
                "TEMA 1. Emprendimiento Productivo en Tecnología": [
                    "1.1. Metodologías para la identificación de necesidades informáticas en la comunidad.",
                    "1.2. Elaboración de presupuestos y cotización de servicios tecnológicos.",
                    "1.3. Modelos de negocio I: Trabajo Freelance y Consultoría.",
                    "1.4. Modelos de negocio II: Soporte Técnico, Mantenimiento y Redes.",
                    "1.5. Modelos de negocio III: Software as a Service (SaaS) y Venta de Activos Digitales."
                ],
                "TEMA 2. Prompt Estructurado para Resolución Lógica": [
                    "2.1. Diseño de prompts para generar y validar algoritmos pseudocódigo.",
                    "2.2. Prompts para creación de estructuras de diagramas de flujo.",
                    "2.3. Definición de Restricciones estrictas en el prompt para programación.",
                    "2.4. Inyección de Ejemplos de entrada/salida (I/O) en el prompt.",
                    "2.5. Adaptación del output de IA a formatos específicos (Markdown, CSV)."
                ],
                "TEMA 3. Uso de IA en Programación y Desarrollo": [
                    "3.1. Generación de estructuras de código repetitivas (Boilerplate).",
                    "3.2. Asistencia en el diseño y consultas complejas de bases de datos.",
                    "3.3. Uso de la IA para explicar y comentar bloques de código complejos.",
                    "3.4. Refactorización asistida para mejorar el rendimiento del código.",
                    "3.5. Generación automática de datos de prueba (Mock data) para testeo."
                ],
                "TEMA 4. Mejora de Resultados mediante Técnicas de Prompting": [
                    "4.1. Implementación de Prompting de cadena de pensamiento (Chain of Thought).",
                    "4.2. Validación y evaluación de la seguridad del código generado.",
                    "4.3. Depuración interactiva: Pegar errores del compilador para obtener soluciones.",
                    "4.4. Creación de documentación técnica (Readmes, Manuales) asistida por IA.",
                    "4.5. Preparación de un \"Pitch\" o presentación de ventas usando IA."
                ]
            }
        }
    },
    "🎓 NIVEL: TÉCNICO MEDIO II": {
        "4to Semestre": {
            "MÓDULO XVI: REDES DE COMPUTADORAS I": {
                "TEMA 1. Fundamentos y Topologías de Red": [
                    "1.1. Definición de red informática y sus componentes principales.",
                    "1.2. Clasificación de redes según su alcance (PAN, LAN, MAN, WAN).",
                    "1.3. Topologías lógicas de transmisión de datos.",
                    "1.4. Topologías físicas tradicionales (Estrella, Bus, Anillo, Malla).",
                    "1.5. Topologías híbridas y redundancia en redes."
                ],
                "TEMA 2. Medios de Transmisión, Dispositivos y Modelos": [
                    "2.1. Cables de cobre (UTP/STP) y categorías de par trenzado.",
                    "2.2. Fibra óptica y medios de transmisión no guiados (Inalámbricos).",
                    "2.3. Funciones de NICs, Switches, Routers y Access Points.",
                    "2.4. Comprensión de las 7 capas del Modelo de referencia OSI.",
                    "2.5. Comparativa con las 4 capas del Modelo TCP/IP."
                ],
                "TEMA 3. Direccionamiento IP y Subredes": [
                    "3.1. Estructura binaria y decimal de direcciones IPv4.",
                    "3.2. Clases de direcciones IP (A, B, C, D, E) y rangos privados.",
                    "3.3. Concepto y aplicación de Máscaras de subred (Subnetting por defecto).",
                    "3.4. Configuración de Puerta de enlace (Gateway) y DNS en equipos cliente.",
                    "3.5. Introducción a la asignación dinámica (DHCP) vs estática."
                ],
                "TEMA 4. Protocolos y Servicios en TCP/IP": [
                    "4.1. Funcionamiento del servicio de nombres de dominio (DNS).",
                    "4.2. Protocolos de navegación web (HTTP vs HTTPS) y puertos asociados.",
                    "4.3. Protocolo de Transferencia de Archivos (FTP) y configuraciones básicas.",
                    "4.4. Servicios de acceso remoto seguro e inseguro (SSH, Telnet).",
                    "4.5. Protocolos de correo electrónico (SMTP, POP3, IMAP)."
                ]
            },
            "MÓDULO XVII: DISEÑO Y PROGRAMACIÓN WEB I-B": {
                "TEMA 1. Programación Frontend con JavaScript": [
                    "1.1. Inclusión de JS en HTML, consola del navegador y variables (let, const).",
                    "1.2. Estructuras de control, bucles y arrays en JavaScript.",
                    "1.3. Creación de funciones tradicionales y funciones flecha (Arrow functions).",
                    "1.4. Manipulación del DOM (Document Object Model) y eventos del ratón/teclado.",
                    "1.5. Estructura y manejo de objetos y datos en formato JSON."
                ],
                "TEMA 2. Desarrollo de aplicaciones Backend": [
                    "2.1. Arquitectura y lógica del lado del servidor.",
                    "2.2. Configuración de un entorno de servidor local (XAMPP/Node.js).",
                    "2.3. Introducción a un lenguaje backend (Ej. PHP o Node.js básico).",
                    "2.4. Conexión del backend a una base de datos local.",
                    "2.5. Ejecución de operaciones CRUD (Crear, Leer, Actualizar, Borrar) desde backend."
                ],
                "TEMA 3. Consumo e Integración de APIs": [
                    "3.1. Concepto de Interfaz de Programación de Aplicaciones (API RESTful).",
                    "3.2. Métodos HTTP (GET, POST, PUT, DELETE) y códigos de estado.",
                    "3.3. Uso de la API Fetch para peticiones asíncronas en JS.",
                    "3.4. Manejo de Promesas (Promises) y sintaxis Async/Await.",
                    "3.5. Pruebas de endpoints con herramientas externas (Ej. Postman)."
                ],
                "TEMA 4. Administración y publicación de sitios web": [
                    "4.1. Registro y diferencias entre Dominio, Hosting y VPS.",
                    "4.2. Panel de control del servidor (cPanel, bases de datos remotas).",
                    "4.3. Despliegue de aplicaciones mediante clientes FTP (Ej. FileZilla).",
                    "4.4. Introducción a la gestión de archivos por comandos SSH en servidores.",
                    "4.5. Configuración básica de certificados de seguridad SSL."
                ]
            },
            "MÓDULO XVIII: BASE DE DATOS I": {
                "TEMA 1. Introducción a Bases de Datos": [
                    "1.1. Conceptos de Dato, Información, Tablas y Bases de datos.",
                    "1.2. Evolución histórica desde archivos planos a BD relacionales.",
                    "1.3. Arquitectura y niveles de abstracción de datos.",
                    "1.4. Funciones de un SGBD (Sistema Gestor de Bases de Datos).",
                    "1.5. Roles en BD (DBA, Desarrollador, Usuario Final)."
                ],
                "TEMA 2. Diseño Conceptual: Modelo Entidad-Relación (E-R)": [
                    "2.1. Identificación y tipos de Entidades (Fuertes y Débiles).",
                    "2.2. Tipos de Atributos (Simples, Compuestos, Derivados, Multivaluados).",
                    "2.3. Definición de claves (Superclave, Clave Primaria, Clave Candidata).",
                    "2.4. Correspondencia de cardinalidades (1:1, 1:N, N:M) y roles.",
                    "2.5. Construcción e interpretación de diagramas E-R."
                ],
                "TEMA 3. Diseño Lógico y Normalización": [
                    "3.1. Conversión del diagrama E-R a Modelo Relacional (Tablas).",
                    "3.2. Claves Foráneas (Foreign Keys) e Integridad Referencial.",
                    "3.3. Concepto de anomalías de inserción, borrado y actualización.",
                    "3.4. Primera y Segunda Forma Normal (1FN, 2FN).",
                    "3.5. Tercera Forma Normal (3FN) y Forma Normal de Boyce-Codd (BCNF)."
                ],
                "TEMA 4. Lenguaje SQL y Software para Bases de Datos": [
                    "4.1. Instalación y entorno del motor de base de datos (Ej. MySQL/MariaDB o PostgreSQL).",
                    "4.2. Sentencias DDL: Creación, alteración y eliminación de bases y tablas.",
                    "4.3. Sentencias DML: Inserción, actualización y borrado de registros.",
                    "4.4. Consultas de selección (SELECT), alias y ordenamiento (ORDER BY).",
                    "4.5. Filtros avanzados (WHERE, LIKE, IN) y funciones de agregación (COUNT, SUM)."
                ]
            },
            "MÓDULO XIX: PROGRAMACIÓN MÓVIL I": {
                "TEMA 1. Introducción a las Tecnologías Móviles": [
                    "1.1. Evolución, características y limitaciones de hardware móvil.",
                    "1.2. Comparativa de Sistemas operativos (Android vs iOS).",
                    "1.3. Diferencias entre desarrollo Nativo, Híbrido y PWA.",
                    "1.4. Instalación de SDKs y entornos de desarrollo (Ej. Android Studio).",
                    "1.5. Configuración de dispositivos físicos y emuladores (AVD)."
                ],
                "TEMA 2. Arquitectura y Componentes para el Desarrollo": [
                    "2.1. Estructura de directorios de un proyecto móvil.",
                    "2.2. Comprensión del ciclo de vida de una Actividad/Pantalla.",
                    "2.3. Uso del archivo de Manifiesto y gestión de Permisos (Cámara, Internet).",
                    "2.4. Patrones de arquitectura recomendados (MVC, MVP o MVVM básico).",
                    "2.5. Manejo de dependencias y librerías externas."
                ],
                "TEMA 3. Diseño de Interfaz (UI) y Experiencia de Usuario (UX)": [
                    "3.1. Tipos de Layouts (Linear, Constraint, Relative) para pantallas pequeñas.",
                    "3.2. Vistas comunes (TextView, Button, EditText, ImageView).",
                    "3.3. Implementación de eventos Click y navegación entre pantallas (Intents).",
                    "3.4. Inserción de íconos, tipografías y recursos multimedia locales.",
                    "3.5. Interacción con alertas (Toasts, Snackbars) y diálogos."
                ],
                "TEMA 4. Aplicación práctica y conexión IoT (Microcontroladores)": [
                    "4.1. Introducción al ecosistema Arduino y su IDE.",
                    "4.2. Programación de entradas y salidas digitales en microcontroladores.",
                    "4.3. Módulos de conectividad inalámbrica (Bluetooth HC-05 o ESP32/WiFi).",
                    "4.4. Desarrollo de interfaz móvil para envío de comandos de control.",
                    "4.5. Recepción de datos de sensores desde el hardware a la aplicación móvil."
                ]
            },
            "MÓDULO XX: MODALIDADES DE GRADUACIÓN Y PROYECTO FINAL": {
                "TEMA 1. Reglamentación y Elección de Modalidad": [
                    "1.1. Normativa y requisitos ministeriales/institucionales vigentes.",
                    "1.2. Perfil de proyecto de Emprendimiento productivo.",
                    "1.3. Perfil de proyecto de Innovación tecnológica.",
                    "1.4. Lineamientos para Práctica laboral comunitaria.",
                    "1.5. Estructura del documento de perfil de proyecto y marco lógico."
                ],
                "TEMA 2. Planificación del Proyecto Tecnológico asistido por IA": [
                    "2.1. Definición del problema, justificación y objetivos con asistencia de IA.",
                    "2.2. Elaboración del árbol de problemas y soluciones.",
                    "2.3. Definición de alcances, límites y viabilidad del proyecto.",
                    "2.4. Generación de un diagrama de Gantt (cronograma) optimizado.",
                    "2.5. Estructuración del presupuesto y análisis de costos."
                ],
                "TEMA 3. Desarrollo y Generación Estructural con IA": [
                    "3.1. Creación rápida de diagramas de bases de datos mediante prompts.",
                    "3.2. Generación del esqueleto y scripts SQL iniciales asistidos.",
                    "3.3. Prototipado rápido de interfaces gráficas (HTML/CSS/Móvil).",
                    "3.4. Creación de archivos JSON de configuración y datos semilla (Seeders).",
                    "3.5. Integración de los componentes generados en un repositorio unificado."
                ],
                "TEMA 4. Iteración, Refinamiento y Defensa Final": [
                    "4.1. Depuración de errores lógicos y pruebas unitarias (Debugging).",
                    "4.2. Redacción técnica de los capítulos finales del documento con IA.",
                    "4.3. Creación de la estructura de la presentación en diapositivas.",
                    "4.4. Ensayo, oratoria y manejo del tiempo de exposición.",
                    "4.5. Defensa final del proyecto ante tribunal evaluador."
                ]
            }
        }
    }
};

const selectNivel = document.getElementById('nivel');
const selectSemestre = document.getElementById('semestre');
const selectModulo = document.getElementById('modulo');
const selectTema = document.getElementById('tema');

for (let nivel in mallaCurricular) {
    let option = document.createElement('option');
    option.value = nivel;
    option.text = nivel;
    selectNivel.add(option);
}

function actualizarSemestres() {
    selectSemestre.innerHTML = '<option value="">-- Elige un Semestre --</option>';
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';
    
    if (selectNivel.value) {
        const semestres = mallaCurricular[selectNivel.value];
        for (let semestre in semestres) {
            let option = document.createElement('option');
            option.value = semestre;
            option.text = semestre;
            selectSemestre.add(option);
        }
        selectSemestre.disabled = false;
        selectModulo.disabled = true;
        selectTema.disabled = true;
    } else {
        selectSemestre.disabled = true;
        selectModulo.disabled = true;
        selectTema.disabled = true;
    }
}

function actualizarModulos() {
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectSemestre.value) {
        const modulos = mallaCurricular[selectNivel.value][selectSemestre.value];
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
        const temasObj = mallaCurricular[selectNivel.value][selectSemestre.value][selectModulo.value];
        Object.keys(temasObj).forEach(tema => {
            let option = document.createElement('option');
            option.value = tema;
            option.text = tema;
            selectTema.add(option);
        });
        selectTema.disabled = false;
    } else {
        selectTema.disabled = true;
    }
}

function generarPrompt(plataforma) {
    const nivel = selectNivel.value;
    const semestre = selectSemestre.value;
    const modulo = selectModulo.value;
    const tema = selectTema.value;

    if (!nivel || !semestre || !modulo || !tema) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar.");
        return;
    }

    const subtitulosArr = mallaCurricular[nivel][semestre][modulo][tema];
    const subtitulosTexto = subtitulosArr ? subtitulosArr.map(s => `- ${s}`).join('\n') : '';

    const promptMaestro = `${tema}

Actúa como un experto desarrollador de currículas técnicas y redactor académico senior. Tu tarea es generar un documento de estudio exhaustivo, didáctico y visualmente excelente sobre este tema para el módulo de ${modulo} / ${semestre} dirigido a estudiantes de Sistemas Informáticos de un Centro de Educación Alternativa (CEA).

CONTEXTO LOCAL OBLIGATORIO:
Todos los ejemplos, problemas, laboratorios y casos de uso prácticos DEBEN estar enfocados y adaptados a la realidad del CEA Herman Ortiz Camargo. Este CEA está ubicado en el departamento de Santa Cruz, provincia Chiquitos, población de Pailón, específicamente en el Barrio Saó (a 5 cuadras de la población). El CEA acaba de construir un módulo educativo propio y bien equipado. Utiliza como escenarios de los problemas los barrios de la población de Pailón: Barrio Central Fátima (comercio formal e iglesia), Barrio 24 de Septiembre (estación de tren y campos deportivos), Barrio Residencial Norte (parques infantiles), Barrio 27 de Mayo (coliseo municipal), y otros como Saó, María Belén, San Antonio, Jardines de Pailón, Oto Waver, Ovidio Barberi, San Expedito, Las Misiones y San José.

Asegúrate de cubrir los siguientes subtítulos principales de nuestra malla curricular:
${subtitulosTexto}

REGLAS ESTRICTAS DE GENERACIÓN:
•	Tono de Escritura: Didáctico, motivador, empático y profesional, evitando palabras rebuscadas para que un estudiante principiante lo comprenda fácilmente.
•	Nomenclatura Obligatoria: NUNCA utilices el término "Técnico Superior". Dirígete al estudiante o profesional únicamente como "Técnico en Sistemas Informáticos" o simplemente como "Técnico".
•	Extensión y Profundidad: El documento DEBE tener entre 10 y 12 páginas (aproximadamente 2500 palabras). Explica cada tema para que se entienda perfectamente, pero no des vueltas innecesarias ni agregues relleno.
•	Prohibición de Arte ASCII: TIENES ESTRICTAMENTE PROHIBIDO generar diagramas dibujados con símbolos de texto (ASCII art), mapas conceptuales con líneas (\`+---\`, \`|\`, \`->\`) o cuadros de texto dibujados. Si necesitas estructurar información, usa ÚNICAMENTE tablas Markdown estandarizadas o listas con viñetas.
•	Tablas: Usa tablas Markdown con encabezados en negrita y contenido centrado para comparaciones.
•	Códigos y Consolas: NO uses bloques de código negros de Markdown (\`\`\`). En su lugar, escribe todo fragmento de código, comando o configuración usando texto normal indentado o viñetas. Asegúrate de que cada comando o línea de código vaya en un salto de línea independiente para evitar que se mezclen al copiar a Word. Añade comentarios explicando qué hace cada parte.
•	Marcadores Visuales: EXCLUSIVAMENTE dentro del MOMENTO 2 (TEORÍA), sugiere al menos 3 lugares donde el profesor deba insertar un gráfico, usando este formato resaltado: [🖼️ PROFESOR: Inserte aquí un diagrama/imagen que muestre...]. PROHIBIDO usar este marcador en los demás momentos.

ESTRUCTURA EXACTA DEL DOCUMENTO:
${tema}
HOJA DE RUTA (Introducción)
•	Título: "En este tema serás capaz de..."
•	Plantea 3 objetivos de aprendizaje directos y motivadores.
MOMENTO 1: PRÁCTICA
•	Inicia con una pregunta detonante.
•	Plantea un problema tecnológico real enfocado ESPECÍFICAMENTE en el contexto del CEA Herman Ortiz Camargo y los barrios de la población de Pailón descritos arriba. Sin teoría, solo inducción.
MOMENTO 2: TEORÍA (Núcleo del aprendizaje)
•	Desarrolla 8 subtítulos en total: Los 5 primeros DEBEN ser los obligatorios de la malla curricular. Los 3 últimos deben ser subtítulos avanzados propuestos por ti, estrictamente relacionados con el tema principal, que lo vinculen con la actualidad tecnológica (por ejemplo, el uso de la Inteligencia Artificial o tendencias modernas en esta área).
•	Cada subtítulo debe contener explicaciones directas y muy bien explicadas, pero sin ser demasiado amplias o redundantes. Lo importante es que el concepto se entienda claramente con casos de uso prácticos.
•	Cierre Teórico Obligatorio:
o	Mitos vs. Realidades: Tabla comparativa centrada desmintiendo 2 creencias erróneas comunes.
o	Glosario de Términos: Lista de los 5 conceptos más técnicos.
o	Ponte a Prueba: 3 preguntas rápidas de opción múltiple.
3. MOMENTO 3: VALORACIÓN
•	Reflexión profunda sobre el impacto ético, social y medioambiental (ej. e-waste, seguridad, privacidad) de la tecnología aprendida.
4. MOMENTO 4: PRODUCCIÓN
•	Diseña un 'Reto Final' o 'Laboratorio' paso a paso para aplicar lo aprendido en la computadora.
5. RECURSOS ADICIONALES
•	Proporciona 3 enlaces o recomendaciones de herramientas/documentación oficial (ej. MDN, GitHub, manuales) para profundizar.

6. FORMATO DE ENTREGA (REGLA CRÍTICA)
•	PROHIBIDO GENERAR PDF: Tienes terminantemente prohibido usar Python o cualquier otra herramienta para generar un archivo PDF o documento descargable.
•	Inicio Directo (Sin Saludos): Tu respuesta debe comenzar ÚNICA Y EXCLUSIVAMENTE con el Título Principal en Markdown (ejemplo: # ${tema}). NO incluyas saludos iniciales ni texto introductorio como "Aquí tienes el documento". Esto garantiza que al exportarse, el archivo tome automáticamente el nombre del tema.
•	Jerarquía de Títulos: Usa estrictamente encabezados Markdown para la estructura (# para Título principal, ## para Subtítulos, ### para Secciones menores). De este modo, al exportarse, los títulos mantendrán su formato y negritas correctamente.
•	Exportación a Google Docs: Escribe toda tu respuesta ÚNICA Y EXCLUSIVAMENTE como texto directamente aquí en la ventana del chat. NO añadas mensajes de despedida, notas finales ni recordatorios sobre cómo exportar a Google Docs.`;

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
    const semestre = selectSemestre.value;
    const modulo = selectModulo.value;
    const tema = selectTema.value;

    if (!nivel || !semestre || !modulo || !tema) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar la imagen.");
        return;
    }

    const subtitulosArr = mallaCurricular[nivel][semestre][modulo][tema] || [];
    const sub1 = subtitulosArr[0] || 'Concepto 1';
    const sub2 = subtitulosArr[1] || 'Concepto 2';
    const sub3 = subtitulosArr[2] || 'Concepto 3';
    const sub4 = subtitulosArr[3] || 'Concepto 4';
    const sub5 = subtitulosArr[4] || 'Concepto 5';

    const promptImagen = `Actúa como un diseñador gráfico experto en infografías educativas.
Genera una infografía estilo collage dividida exactamente en 6 paneles (una cuadrícula de 3 columnas por 2 filas).

REGLA CRÍTICA Y ESTRICTA: Tienes TOTALMENTE PROHIBIDO generar o escribir las palabras "Rojo", "Amarillo", "Verde", "Azul", "Violeta" o "Multicolor" dentro de la imagen, ya sea como títulos, etiquetas o marcas. Esos nombres de colores son solo instrucciones para que sepas de qué color pintar el fondo de cada panel. NO los escribas como texto.

El contenido visual debe ser exactamente este:
- Panel 1 (Arriba a la izquierda): Fondo con combinación de colores. Título principal bien centrado en el medio del panel en letras grandes: "${tema}". Alrededor del título, dibuja nubes, iconos y pequeñas ilustraciones tecnológicas decorativas.
- Panel 2 (Arriba al centro): Fondo de color rojo. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub1}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 3 (Arriba a la derecha): Fondo de color amarillo. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub2}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 4 (Abajo a la izquierda): Fondo de color verde. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub3}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 5 (Abajo al centro): Fondo de color azul. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub4}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 6 (Abajo a la derecha): Fondo de color violeta. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub5}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.

INSTRUCCIÓN ESTRUCTURAL PARA LOS PANELES 2 AL 6:
Adapta el diseño interno de la ilustración según el tema que trate el subtítulo:
- Si el subtítulo trata sobre "Ventajas y desventajas", dibuja obligatoriamente DOS sub-cuadros divididos (uno para ventajas con un ícono de check, y otro para desventajas con una X).
- Si el subtítulo trata sobre "Comparativa" o "Diferencia", dibuja un diseño comparativo en columnas o tablas visuales.
- Si es un concepto general, dibuja diagramas bien organizados dentro de un cuadro o lienzo que resalte sobre el fondo.

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
    const semestre = selectSemestre.value;
    const modulo = selectModulo.value;

    if (!nivel || !semestre || !modulo) {
        alert("⚠️ Por favor, selecciona el Nivel, Semestre y Módulo antes de generar la imagen de la carátula.");
        return;
    }

    const temasObj = mallaCurricular[nivel][semestre][modulo] || {};
    const listaTemas = Object.keys(temasObj).map(t => t.replace(/^TEMA \d+\.\s*/, '')).join(", ");

    let promptImagen = `Actúa como un diseñador gráfico experto. Genera una imagen con fondo TOTALMENTE TRANSPARENTE (sin fondo), ideal para la carátula de un módulo educativo.
El módulo se llama: "${modulo.replace(/^MÓDULO [IVX]+:\s*/, '')}".
Este módulo abarca los siguientes temas: ${listaTemas}.
Tu objetivo es crear una ilustración que englobe y represente todos estos conceptos de forma general y visual.

`;

    if (opcion === 1) {
        promptImagen += `Estilo y composición (OPCIÓN 1):
- Diseño radial o de red: En el centro coloca un elemento principal representativo del tema (ej. unas pantallas de computadora o un servidor).
- Alrededor, distribuye múltiples íconos coloridos y modernos relacionados con informática y tecnología (ej. logos genéricos de software, sistemas operativos, herramientas, seguridad, redes).
- Conecta el elemento central con los íconos mediante flechas rojas o líneas dinámicas que apunten hacia afuera.
- Estilo: Arte digital, iconos 3D o flat design brillante, muy llamativo y educativo.`;
    } else {
        promptImagen += `Estilo y composición (OPCIÓN 2):
- Diseño tipo explosión o árbol de ideas: En la parte inferior coloca un elemento base (ej. un globo terráqueo brillante de color azul o una placa base).
- Desde este elemento base, haz brotar hacia arriba muchas líneas o ramas de colores brillantes.
- Cada rama debe terminar en un círculo o burbuja que contenga un ícono tecnológico diferente (símbolos de redes sociales, nube, wifi, engranajes, candados, código, etc.).
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