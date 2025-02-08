export const PRESETS = {
    // Instrumentos básicos
    bass: {
        oscillatorType: 'sine',
        frequency: 60,
        attack: 0.1,
        decay: 0.3,
        sustain: 0.8,
        release: 0.4,
        amplitude: 0.8,
        filterType: 'lowpass',
        filterFrequency: 500,
        distortion: 0.3,
        duration: 1
    },
    bell: {
        oscillatorType: 'sine',
        frequency: 880,
        attack: 0.01,
        decay: 0.3,
        sustain: 0.2,
        release: 1.5,
        amplitude: 0.6,
        filterType: 'highpass',
        filterFrequency: 500,
        distortion: 0,
        duration: 2
    },
    organ: {
        oscillatorType: 'square',
        frequency: 440,
        attack: 0.2,
        decay: 0.2,
        sustain: 0.8,
        release: 0.3,
        amplitude: 0.5,
        filterType: 'lowpass',
        filterFrequency: 2000,
        distortion: 0.1,
        duration: 2
    },
    drum: {
        oscillatorType: 'triangle',
        frequency: 100,
        attack: 0.01,
        decay: 0.2,
        sustain: 0.1,
        release: 0.2,
        amplitude: 0.9,
        filterType: 'lowpass',
        filterFrequency: 300,
        distortion: 0.4,
        duration: 0.5
    },

    // Efectos de sonido
    siren: {
        oscillatorType: 'triangle',
        frequency: 440,
        attack: 0.1,
        decay: 0.1,
        sustain: 1,
        release: 0.1,
        amplitude: 0.7,
        filterType: 'bandpass',
        filterFrequency: 1000,
        distortion: 0.1,
        duration: 3
    },
    laser: {
        oscillatorType: 'sawtooth',
        frequency: 1200,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
        amplitude: 0.6,
        filterType: 'highpass',
        filterFrequency: 800,
        distortion: 0.2,
        duration: 0.5
    },
    space_wind: {
        oscillatorType: 'sine',
        frequency: 220,
        attack: 0.8,
        decay: 0.3,
        sustain: 0.8,
        release: 1.2,
        amplitude: 0.5,
        filterType: 'bandpass',
        filterFrequency: 1000,
        distortion: 0.1,
        duration: 4
    },
    submarine: {
        oscillatorType: 'sine',
        frequency: 150,
        attack: 0.3,
        decay: 0.4,
        sustain: 0.7,
        release: 0.8,
        amplitude: 0.7,
        filterType: 'lowpass',
        filterFrequency: 300,
        distortion: 0.1,
        duration: 3
    },

    // Sintetizadores
    synth_lead: {
        oscillatorType: 'sawtooth',
        frequency: 440,
        attack: 0.05,
        decay: 0.2,
        sustain: 0.6,
        release: 0.4,
        amplitude: 0.7,
        filterType: 'lowpass',
        filterFrequency: 2000,
        distortion: 0.2,
        duration: 1
    },
    deep_bass: {
        oscillatorType: 'triangle',
        frequency: 55,
        attack: 0.1,
        decay: 0.4,
        sustain: 0.8,
        release: 0.6,
        amplitude: 0.9,
        filterType: 'lowpass',
        filterFrequency: 200,
        distortion: 0.3,
        duration: 2
    },
    crystal: {
        oscillatorType: 'sine',
        frequency: 1200,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.3,
        release: 1.2,
        amplitude: 0.5,
        filterType: 'highpass',
        filterFrequency: 1000,
        distortion: 0,
        duration: 2
    },
    retro_game: {
        oscillatorType: 'square',
        frequency: 660,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.2,
        release: 0.1,
        amplitude: 0.5,
        filterType: 'lowpass',
        filterFrequency: 1000,
        distortion: 0.15,
        duration: 0.3
    },

    // Efectos especiales
    robot_voice: {
        oscillatorType: 'square',
        frequency: 180,
        attack: 0.01,
        decay: 0.1,
        sustain: 1,
        release: 0.1,
        amplitude: 0.6,
        filterType: 'bandpass',
        filterFrequency: 1200,
        distortion: 0.4,
        duration: 1.5
    },
    alien_signal: {
        oscillatorType: 'sawtooth',
        frequency: 880,
        attack: 0.05,
        decay: 0.1,
        sustain: 0.9,
        release: 0.3,
        amplitude: 0.6,
        filterType: 'bandpass',
        filterFrequency: 1500,
        distortion: 0.2,
        duration: 1.5
    },

    // Nuevos presets
    flute: {
        oscillatorType: 'sine',
        frequency: 523.25,
        attack: 0.1,
        decay: 0.1,
        sustain: 0.7,
        release: 0.3,
        amplitude: 0.6,
        filterType: 'lowpass',
        filterFrequency: 2000,
        distortion: 0.05,
        duration: 2
    },
    thunder: {
        oscillatorType: 'sawtooth',
        frequency: 50,
        attack: 0.02,
        decay: 0.3,
        sustain: 0.5,
        release: 1.5,
        amplitude: 0.8,
        filterType: 'lowpass',
        filterFrequency: 150,
        distortion: 0.6,
        duration: 2.5
    },
    water_drop: {
        oscillatorType: 'sine',
        frequency: 2000,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 0.3,
        amplitude: 0.4,
        filterType: 'highpass',
        filterFrequency: 1500,
        distortion: 0,
        duration: 0.5
    },
    horror_ambient: {
        oscillatorType: 'sawtooth',
        frequency: 100,
        attack: 0.5,
        decay: 0.3,
        sustain: 0.8,
        release: 2,
        amplitude: 0.6,
        filterType: 'bandpass',
        filterFrequency: 500,
        distortion: 0.3,
        duration: 4
    },
    telephone: {
        oscillatorType: 'square',
        frequency: 440,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.9,
        release: 0.1,
        amplitude: 0.7,
        filterType: 'bandpass',
        filterFrequency: 800,
        distortion: 0.1,
        duration: 0.8
    },
    cat_meow: {
        oscillatorType: 'sine',
        frequency: 800,
        attack: 0.1,
        decay: 0.2,
        sustain: 0.3,
        release: 0.4,
        amplitude: 0.6,
        filterType: 'bandpass',
        filterFrequency: 1000,
        distortion: 0.1,
        duration: 1
    },

    // Instrumentos básicos adicionales
    violin: {
        oscillatorType: 'sine',
        frequency: 440,
        attack: 0.1,
        decay: 0.1,
        sustain: 0.8,
        release: 0.3,
        amplitude: 0.7,
        filterType: 'lowpass',
        filterFrequency: 2500,
        distortion: 0.05,
        duration: 2
    },
    piano: {
        oscillatorType: 'triangle',
        frequency: 440,
        attack: 0.01,
        decay: 0.2,
        sustain: 0.5,
        release: 0.5,
        amplitude: 0.8,
        filterType: 'lowpass',
        filterFrequency: 3000,
        distortion: 0,
        duration: 1.5
    },

    // Sonidos naturales
    rain: {
        oscillatorType: 'white-noise',
        frequency: 1000,
        attack: 0.1,
        decay: 0.1,
        sustain: 1,
        release: 0.3,
        amplitude: 0.3,
        filterType: 'bandpass',
        filterFrequency: 5000,
        distortion: 0.1,
        duration: 3
    },
    wind: {
        oscillatorType: 'noise',
        frequency: 200,
        attack: 0.5,
        decay: 0.3,
        sustain: 0.8,
        release: 1,
        amplitude: 0.4,
        filterType: 'bandpass',
        filterFrequency: 300,
        distortion: 0.1,
        duration: 4
    },

    // Percusión
    kick: {
        oscillatorType: 'sine',
        frequency: 60,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
        amplitude: 1,
        filterType: 'lowpass',
        filterFrequency: 100,
        distortion: 0.2,
        duration: 0.2
    },
    hihat: {
        oscillatorType: 'square',
        frequency: 5000,
        attack: 0.01,
        decay: 0.05,
        sustain: 0.1,
        release: 0.1,
        amplitude: 0.3,
        filterType: 'highpass',
        filterFrequency: 7000,
        distortion: 0.3,
        duration: 0.1
    },

    // Añadir estos nuevos presets al objeto PRESETS

    // Instrumentos básicos
    guitar: {
        oscillatorType: 'sawtooth',
        frequency: 196, // Sol (G3)
        attack: 0.05,
        decay: 0.2,
        sustain: 0.6,
        release: 0.4,
        amplitude: 0.7,
        filterType: 'lowpass',
        filterFrequency: 2200,
        distortion: 0.1,
        duration: 1.5
    },

    // Efectos de sonido
    explosion: {
        oscillatorType: 'sawtooth',
        frequency: 40,
        attack: 0.01,
        decay: 0.3,
        sustain: 0.2,
        release: 1.5,
        amplitude: 0.9,
        filterType: 'lowpass',
        filterFrequency: 200,
        distortion: 0.8,
        duration: 2
    },

    // Sintetizadores
    wobble: {
        oscillatorType: 'square',
        frequency: 140,
        attack: 0.1,
        decay: 0.3,
        sustain: 0.7,
        release: 0.4,
        amplitude: 0.8,
        filterType: 'lowpass',
        filterFrequency: 800,
        distortion: 0.4,
        duration: 2
    },
    pad: {
        oscillatorType: 'sine',
        frequency: 220,
        attack: 0.8,
        decay: 0.4,
        sustain: 0.8,
        release: 1.5,
        amplitude: 0.6,
        filterType: 'lowpass',
        filterFrequency: 1500,
        distortion: 0.1,
        duration: 4
    },

    // Efectos especiales
    ufo: {
        oscillatorType: 'sine',
        frequency: 880,
        attack: 0.2,
        decay: 0.3,
        sustain: 0.7,
        release: 0.5,
        amplitude: 0.6,
        filterType: 'bandpass',
        filterFrequency: 2000,
        distortion: 0.2,
        duration: 2.5
    },
    portal: {
        oscillatorType: 'sawtooth',
        frequency: 440,
        attack: 0.3,
        decay: 0.4,
        sustain: 0.8,
        release: 1,
        amplitude: 0.7,
        filterType: 'bandpass',
        filterFrequency: 1200,
        distortion: 0.3,
        duration: 3
    },

    // Sonidos naturales
    stream: {
        oscillatorType: 'sine',
        frequency: 400,
        attack: 0.2,
        decay: 0.1,
        sustain: 0.9,
        release: 0.3,
        amplitude: 0.4,
        filterType: 'bandpass',
        filterFrequency: 800,
        distortion: 0.1,
        duration: 3
    },
    fire: {
        oscillatorType: 'sawtooth',
        frequency: 100,
        attack: 0.1,
        decay: 0.2,
        sustain: 0.8,
        release: 0.4,
        amplitude: 0.6,
        filterType: 'lowpass',
        filterFrequency: 400,
        distortion: 0.3,
        duration: 2.5
    },
    waves: {
        oscillatorType: 'sine',
        frequency: 120,
        attack: 0.4,
        decay: 0.3,
        sustain: 0.7,
        release: 0.8,
        amplitude: 0.5,
        filterType: 'lowpass',
        filterFrequency: 300,
        distortion: 0.1,
        duration: 4
    },

    // Sonidos de animales
    dog_bark: {
        oscillatorType: 'square',
        frequency: 200,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.2,
        release: 0.1,
        amplitude: 0.7,
        filterType: 'bandpass',
        filterFrequency: 1000,
        distortion: 0.3,
        duration: 0.3
    },
    bird_chirp: {
        oscillatorType: 'sine',
        frequency: 2000,
        attack: 0.01,
        decay: 0.05,
        sustain: 0.1,
        release: 0.05,
        amplitude: 0.5,
        filterType: 'highpass',
        filterFrequency: 3000,
        distortion: 0.1,
        duration: 0.2
    },
    wolf_howl: {
        oscillatorType: 'sawtooth',
        frequency: 350,
        attack: 0.2,
        decay: 0.3,
        sustain: 0.7,
        release: 0.5,
        amplitude: 0.6,
        filterType: 'bandpass',
        filterFrequency: 700,
        distortion: 0.2,
        duration: 2
    },
    cricket: {
        oscillatorType: 'square',
        frequency: 4000,
        attack: 0.01,
        decay: 0.05,
        sustain: 0.1,
        release: 0.05,
        amplitude: 0.3,
        filterType: 'bandpass',
        filterFrequency: 4500,
        distortion: 0.1,
        duration: 0.15
    },

    // Percusión
    snare: {
        oscillatorType: 'triangle',
        frequency: 200,
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
        amplitude: 0.8,
        filterType: 'highpass',
        filterFrequency: 1000,
        distortion: 0.2,
        duration: 0.2
    },
    cymbal: {
        oscillatorType: 'square',
        frequency: 8000,
        attack: 0.01,
        decay: 0.3,
        sustain: 0.1,
        release: 0.5,
        amplitude: 0.4,
        filterType: 'highpass',
        filterFrequency: 9000,
        distortion: 0.2,
        duration: 0.8
    },

    // Ambientales
    drone: {
        oscillatorType: 'sawtooth',
        frequency: 100,
        attack: 1,
        decay: 0.5,
        sustain: 0.8,
        release: 1.5,
        amplitude: 0.5,
        filterType: 'lowpass',
        filterFrequency: 800,
        distortion: 0.2,
        duration: 5
    },
    atmosphere: {
        oscillatorType: 'sine',
        frequency: 200,
        attack: 0.8,
        decay: 0.4,
        sustain: 0.9,
        release: 1.2,
        amplitude: 0.4,
        filterType: 'bandpass',
        filterFrequency: 1000,
        distortion: 0.1,
        duration: 4
    },
    texture: {
        oscillatorType: 'triangle',
        frequency: 300,
        attack: 0.6,
        decay: 0.3,
        sustain: 0.7,
        release: 0.8,
        amplitude: 0.5,
        filterType: 'lowpass',
        filterFrequency: 1500,
        distortion: 0.15,
        duration: 3
    },
    space_ambient: {
        oscillatorType: 'sine',
        frequency: 150,
        attack: 1,
        decay: 0.5,
        sustain: 0.8,
        release: 2,
        amplitude: 0.4,
        filterType: 'bandpass',
        filterFrequency: 600,
        distortion: 0.1,
        duration: 5
    },
    underwater: {
        oscillatorType: 'sine',
        frequency: 180,
        attack: 0.4,
        decay: 0.3,
        sustain: 0.8,
        release: 0.6,
        amplitude: 0.5,
        filterType: 'lowpass',
        filterFrequency: 400,
        distortion: 0.05,
        duration: 3
    }
}; 