# Sintetizador Web

Un sintetizador web modular construido con Web Audio API que permite crear y experimentar con diferentes sonidos.

## Características

### Controles Básicos
- Control de volumen
- Selección de tipo de oscilador (Seno, Cuadrado, Sierra, Triángulo)
- Filtros de audio (Pasa Bajos, Pasa Altos, Pasa Banda, Rechaza Banda)
- Control de amplitud y frecuencia
- Control de duración
- Efectos de reverb y distorsión

### Envolvente ADSR
- Attack (Ataque)
- Decay (Decaimiento)
- Sustain (Sostenimiento)
- Release (Liberación)

### Presets de Sonido
Incluye múltiples categorías predefinidas:
- Instrumentos Básicos
- Efectos de Sonido
- Sintetizadores
- Efectos Especiales
- Sonidos Naturales
- Sonidos de Animales
- Percusión
- Ambientales

### Características Avanzadas
- Oscilador personalizado con armónicos
- Piano virtual interactivo
- Visualización en tiempo real de la forma de onda
- Interfaz modular y responsive

## Tecnologías Utilizadas
- Web Audio API
- JavaScript (ES6+)
- HTML5 Canvas
- CSS3
- Módulos ES6

## Estructura del Proyecto
proyecto/
├── index.html
├── style.css
├── scripts/
│ ├── main.js # Punto de entrada principal
│ ├── components/
│ │ ├── AudioEngine.js # Motor de audio principal
│ │ ├── Controls.js # Manejo de controles UI
│ │ ├── customOscillator.js # Oscilador personalizado
│ │ ├── piano.js # Componente del piano
│ ├── utils/
│ │ ├── audioUtils.js # Funciones de utilidad para audio
│ │ └── uiUtils.js # Funciones de utilidad para UI
│ └── config/
│ ├── presets.js # Configuraciones de presets
└── styles/


## Descripción de los archivos
- `index.html`: Página principal que muestra el visualizador
- `scripts/script.js`: Contiene la lógica principal de la aplicación
- `scripts/dibujaonda.js`: Maneja la lógica específica para el dibujo de ondas

## Contribución
Si deseas contribuir al proyecto, por favor:
1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Haz Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto
Tu Nombre - [@tutwitter](https://twitter.com/tutwitter)
Enlace del proyecto: [https://github.com/usuario/visualizador-ondas](https://github.com/usuario/visualizador-ondas)