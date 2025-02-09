import { AudioEngine } from './components/AudioEngine.js';
import { Controls } from './components/Controls.js';
import { Piano } from './components/Piano.js';
import { CustomOscillator } from './components/CustomOscillator.js';
import { Visualizer } from './components/Visualizer.js';

class SynthesizerApp {
    constructor() {
        this.audioEngine = new AudioEngine();
        this.controls = new Controls(this.audioEngine);
        this.piano = new Piano(this.audioEngine);
        this.customOscillator = new CustomOscillator(this.audioEngine);
        this.visualizer = new Visualizer(this.audioEngine);
    }

    initialize() {
        // Inicialización de la aplicación
        this.controls.setupEventListeners();
        this.piano.initialize();
        this.visualizer.start();
    }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const app = new SynthesizerApp();
    app.initialize();
}); 