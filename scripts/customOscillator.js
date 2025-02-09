export class CustomOscillator {
    constructor(audioContext) {
        this.audioContext = audioContext;
        this.waveformInput = document.getElementById('customWaveform');
        this.applyButton = document.getElementById('applyCustomWaveform');
        this.previewButton = document.getElementById('previewWaveform');
        this.previewCanvas = document.getElementById('waveformPreview');
        this.presetSelect = document.getElementById('waveformPreset');
        
        this.ctx = this.previewCanvas.getContext('2d');
        
        // Presets de formas de onda comunes
        this.waveformPresets = {
            square: [1, 0, 0.33, 0, 0.2, 0, 0.14, 0, 0.11],
            sawtooth: [0.5, 0.25, 0.125, 0.06, 0.03, 0.015],
            triangle: [1, 0, -0.11, 0, 0.04, 0, -0.02],
            organ: [0.5, 1, 0.3, 0.2, 0.15, 0.1, 0.05]
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.waveformInput.addEventListener('input', () => this.validateInput());
        this.previewButton.addEventListener('click', () => this.previewWaveform());
        this.applyButton.addEventListener('click', () => this.applyWaveform());
        this.presetSelect.addEventListener('change', () => this.applyPreset());
    }

    validateInput() {
        const values = this.parseWaveformValues();
        const isValid = values !== null && values.every(v => Math.abs(v) <= 1);
        this.applyButton.disabled = !isValid;
        return isValid;
    }

    parseWaveformValues() {
        try {
            return this.waveformInput.value
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));
        } catch {
            return null;
        }
    }

    drawWaveform(harmonics) {
        const canvas = this.previewCanvas;
        const ctx = this.ctx;
        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;

        // Limpiar el canvas
        ctx.clearRect(0, 0, width, height);

        // Dibujar línea central
        ctx.beginPath();
        ctx.strokeStyle = '#ccc';
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();

        // Dibujar la forma de onda
        ctx.beginPath();
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 2;

        for (let x = 0; x < width; x++) {
            let y = centerY;
            const t = (x / width) * Math.PI * 2;

            // Sumar todos los armónicos
            for (let i = 0; i < harmonics.length; i++) {
                y += harmonics[i] * Math.sin((i + 1) * t) * (height / 4);
            }

            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }

    createPeriodicWave(harmonics) {
        const real = new Float32Array(harmonics.length + 1);
        const imag = new Float32Array(harmonics.length + 1);
        
        real[0] = 0; // DC offset
        for (let i = 0; i < harmonics.length; i++) {
            real[i + 1] = harmonics[i];
        }

        try {
            return this.audioContext.createPeriodicWave(real, imag, {
                disableNormalization: false
            });
        } catch (error) {
            console.error('Error al crear la onda periódica:', error);
            return null;
        }
    }

    previewWaveform() {
        const values = this.parseWaveformValues();
        if (values && values.length > 0) {
            this.drawWaveform(values);
        }
    }

    applyWaveform() {
        const values = this.parseWaveformValues();
        if (!values || values.length === 0) return;

        const periodicWave = this.createPeriodicWave(values);
        if (periodicWave) {
            window.customPeriodicWave = periodicWave;
        }
    }

    applyPreset() {
        const selectedPreset = this.presetSelect.value;
        if (selectedPreset && this.waveformPresets[selectedPreset]) {
            this.waveformInput.value = this.waveformPresets[selectedPreset].join(', ');
            this.validateInput();
            this.previewWaveform();
        }
    }
} 