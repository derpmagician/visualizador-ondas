import { updateUI } from '../utils/uiUtils.js';

export class Controls {
    constructor(audioEngine) {
        this.audioEngine = audioEngine;
        this.controls = this.initializeControls();
        this.setupEventListeners();
    }

    initializeControls() {
        return {
            volume: document.getElementById('volume'),
            oscillatorType: document.getElementById('oscillatorType'),
            filterType: document.getElementById('filterType'),
            // ... más controles
        };
    }

    setupEventListeners() {
        this.controls.volume.addEventListener('input', (e) => 
            this.audioEngine.setVolume(e.target.value));
        
        this.controls.oscillatorType.addEventListener('change', (e) => 
            this.audioEngine.setOscillatorType(e.target.value));
        
        // ... más event listeners
    }

    resetToDefaults() {
        // Restablecer valores predeterminados
        Object.entries(this.defaultValues).forEach(([control, value]) => {
            this.controls[control].value = value;
        });
        updateUI();
    }
} 