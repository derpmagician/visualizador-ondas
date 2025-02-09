// Configuración del piano
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const START_OCTAVE = 3;
const END_OCTAVE = 5;

// Mapeo de teclas del teclado a notas
const KEYBOARD_MAPPING = {
    'a': 'C3', 'w': 'C#3', 's': 'D3', 'e': 'D#3', 'd': 'E3', 'f': 'F3',
    't': 'F#3', 'g': 'G3', 'y': 'G#3', 'h': 'A3', 'u': 'A#3', 'j': 'B3',
    'k': 'C4', 'o': 'C#4', 'l': 'D4', 'p': 'D#4', ';': 'E4'
};

export class Piano {
    constructor(audioContext, synthControls) {
        this.audioContext = audioContext;
        this.synthControls = synthControls;
        this.isPlaying = false;
        this.currentOscillator = null;
        this.currentGainNode = null;
        
        this.createPiano();
        this.setupKeyboardEvents();
    }

    createPiano() {
        const piano = document.getElementById('piano');
        
        for (let octave = START_OCTAVE; octave <= END_OCTAVE; octave++) {
            NOTES.forEach((note) => {
                const key = document.createElement('div');
                const isBlack = note.includes('#');
                const noteWithOctave = `${note}${octave}`;
                
                key.className = `piano-key ${isBlack ? 'black-key' : 'white-key'}`;
                key.dataset.note = noteWithOctave;
                key.dataset.frequency = this.getNoteFrequency(note, octave);
                
                // Eventos para mouse
                key.addEventListener('mousedown', () => this.playNote(key.dataset.frequency));
                key.addEventListener('mouseup', () => this.stopNote());
                key.addEventListener('mouseleave', () => this.stopNote());
                
                piano.appendChild(key);
            });
        }
    }

    getNoteFrequency(note, octave) {
        const A4 = 440; // Frecuencia de referencia A4
        const A4_INDEX = NOTES.indexOf('A') + (4 * 12); // Índice de A4
        const noteIndex = NOTES.indexOf(note.replace('#', '')) + (octave * 12);
        const halfSteps = noteIndex - A4_INDEX;
        
        return A4 * Math.pow(2, halfSteps / 12);
    }

    setupKeyboardEvents() {
        document.addEventListener('keydown', (event) => {
            if (!event.repeat && KEYBOARD_MAPPING[event.key]) {
                const note = KEYBOARD_MAPPING[event.key];
                const key = document.querySelector(`[data-note="${note}"]`);
                if (key) {
                    key.classList.add('active');
                    this.playNote(parseFloat(key.dataset.frequency));
                }
            }
        });

        document.addEventListener('keyup', (event) => {
            if (KEYBOARD_MAPPING[event.key]) {
                const note = KEYBOARD_MAPPING[event.key];
                const key = document.querySelector(`[data-note="${note}"]`);
                if (key) {
                    key.classList.remove('active');
                    this.stopNote();
                }
            }
        });
    }

    playNote(frequency) {
        this.stopNote(); // Detener nota anterior si existe
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        // Aplicar los parámetros actuales del sintetizador
        oscillator.type = this.synthControls.oscillatorType.value;
        if (this.synthControls.oscillatorType.value === 'custom' && window.customPeriodicWave) {
            oscillator.setPeriodicWave(window.customPeriodicWave);
        }
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        
        // Configurar ADSR
        const now = this.audioContext.currentTime;
        const attackTime = parseFloat(this.synthControls.attack.value);
        const decayTime = parseFloat(this.synthControls.decay.value);
        const sustainLevel = parseFloat(this.synthControls.sustain.value);
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(1, now + attackTime);
        gainNode.gain.linearRampToValueAtTime(sustainLevel, now + attackTime + decayTime);
        
        // Conectar nodos
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        this.isPlaying = true;
        this.currentOscillator = oscillator;
        this.currentGainNode = gainNode;
    }

    stopNote() {
        if (this.isPlaying && this.currentOscillator && this.currentGainNode) {
            const now = this.audioContext.currentTime;
            const releaseTime = parseFloat(this.synthControls.release.value);
            
            this.currentGainNode.gain.cancelScheduledValues(now);
            this.currentGainNode.gain.setValueAtTime(this.currentGainNode.gain.value, now);
            this.currentGainNode.gain.linearRampToValueAtTime(0, now + releaseTime);
            
            this.currentOscillator.stop(now + releaseTime);
            
            this.isPlaying = false;
            this.currentOscillator = null;
            this.currentGainNode = null;
        }
    }
} 