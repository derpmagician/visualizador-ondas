export function makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    
    for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = (3 + k) * x * 20 * Math.PI / (Math.PI + k * Math.abs(x));
    }
    
    return curve;
}

export function calculateFrequency(note, octave) {
    const A4 = 440;
    const A4_INDEX = 69; // MIDI note number for A4
    const noteIndex = note + (octave * 12);
    return A4 * Math.pow(2, (noteIndex - A4_INDEX) / 12);
} 