# Sintetizador Web

Un sintetizador web interactivo construido con Web Audio API que permite crear y experimentar con diferentes sonidos.

## Características

### Controles Básicos
- Control de volumen
- Selección de tipo de oscilador (Seno, Cuadrado, Sierra, Triángulo)
- Filtros de audio (Pasa Bajos, Pasa Altos, Pasa Banda, Rechaza Banda)
- Control de amplitud
- Control de frecuencia
- Control de duración
- Efectos de reverb y distorsión

### Envolvente ADSR
- Attack (Ataque)
- Decay (Decaimiento)
- Sustain (Sostenimiento)
- Release (Liberación)

### Presets de Sonido
Incluye múltiples categorías de sonidos predefinidos:
- Instrumentos Básicos (Bajo, Campana, Órgano, Flauta, etc.)
- Efectos de Sonido (Sirena, Láser, Viento Espacial, etc.)
- Sintetizadores (Lead, Bass, Crystal, Retro Game, etc.)
- Efectos Especiales (Voz Robot, Señal Alien, etc.)
- Sonidos Naturales (Lluvia, Viento, Arroyo, etc.)
- Sonidos de Animales (Maullido, Ladrido, Pájaro, etc.)
- Percusión (Tambor, Bombo, Hi-Hat, etc.)
- Ambientales (Drone, Atmósfera, Textura, etc.)

### Oscilador Personalizado
- Creación de formas de onda personalizadas mediante armónicos
- Previsualización de la forma de onda
- Presets de formas de onda comunes
- Visualización en tiempo real

### Piano Virtual
- Teclado interactivo con múltiples octavas
- Teclas blancas y negras
- Control mediante ratón y teclado
- Integración con los parámetros del sintetizador

### Visualización
- Visualización en tiempo real de la forma de onda
- Canvas para mostrar la señal de audio

## Tecnologías Utilizadas
- Web Audio API
- JavaScript (ES6+)
- HTML5 Canvas
- CSS3
- Módulos ES6

## Estructura del Proyecto
proyecto/
├── index.html
├── scripts/
│ ├── script.js
│ └── dibujaonda.js
└── README.md

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