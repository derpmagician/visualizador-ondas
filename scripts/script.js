// script.js

// Variables globales
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscillator, gainNode, filter, reverb, distortion;
let isPlaying = false;

// Importar la constante PRESETS desde presets.js
import { PRESETS } from './presets.js';

// Elementos del DOM
const volumeControl = document.getElementById('volume');
const oscillatorType = document.getElementById('oscillatorType');
const filterType = document.getElementById('filterType');
const amplitudeControl = document.getElementById('amplitude');
const frequencyControl = document.getElementById('frequency');
const durationControl = document.getElementById('duration');
const reverbControl = document.getElementById('reverb');
const distortionControl = document.getElementById('distortion');
const attackControl = document.getElementById('attack');
const decayControl = document.getElementById('decay');
const sustainControl = document.getElementById('sustain');
const releaseControl = document.getElementById('release');
const generateSoundButton = document.getElementById('generateSound');
const stopSoundButton = document.getElementById('stopSound');
const resetDefaultsButton = document.getElementById('resetDefaults');
const customWaveformInput = document.getElementById('customWaveform');
const applyCustomWaveformButton = document.getElementById('applyCustomWaveform');

// Importar la función de visualización desde dibujaonda.js
import { visualizeWaveform } from './dibujaonda.js';

// Función para inicializar el audio
function initializeAudio() {
	// Crear nodos de audio
	oscillator = audioContext.createOscillator();
	gainNode = audioContext.createGain();
	filter = audioContext.createBiquadFilter();
	reverb = audioContext.createConvolver();
	distortion = audioContext.createWaveShaper();

	// Configurar nodos iniciales
	oscillator.type = oscillatorType.value;
	oscillator.frequency.setValueAtTime(frequencyControl.value, audioContext.currentTime);
	gainNode.gain.setValueAtTime(volumeControl.value, audioContext.currentTime); // Iniciar con ganancia en 0
	filter.type = filterType.value;
	filter.frequency.setValueAtTime(1000, audioContext.currentTime); // Frecuencia inicial del filtro
	distortion.curve = makeDistortionCurve(distortionControl.value * 100);

	// Conectar nodos
	oscillator.connect(filter);
	filter.connect(distortion);
	distortion.connect(gainNode);
	gainNode.connect(audioContext.destination);

	// Visualización de la onda
	visualizeWaveform(audioContext, filter);
}

// Función para aplicar distorsión
function makeDistortionCurve(amount) {
	let k = typeof amount === 'number' ? amount : 50;
	let n_samples = 44100;
	let curve = new Float32Array(n_samples);
	for (let i = 0; i < n_samples; ++i) {
		let x = (i * 2) / n_samples - 1;
		curve[i] = (3 + k) * x * 20 * Math.PI / (Math.PI + k * Math.abs(x));
	}
	return curve;
}

// Función para generar sonido
function generateSound() {
	if (isPlaying) return;

	// Detener cualquier oscilador previo
	if (oscillator) {
		oscillator.stop();
		oscillator.disconnect();
	}

	// Inicializar audio
	initializeAudio();

	// Configurar el tipo de oscilador
	if (oscillatorType.value === 'custom' && window.customPeriodicWave) {
		oscillator.setPeriodicWave(window.customPeriodicWave);
	} else {
		oscillator.type = oscillatorType.value;
	}

	// Resto de la configuración
	oscillator.frequency.setValueAtTime(frequencyControl.value, audioContext.currentTime);
	filter.type = filterType.value;
	filter.frequency.setValueAtTime(1000, audioContext.currentTime);
	distortion.curve = makeDistortionCurve(distortionControl.value * 100);

	// Envolvente ADSR
	const attackTime = parseFloat(attackControl.value);
	const decayTime = parseFloat(decayControl.value);
	const sustainLevel = parseFloat(sustainControl.value);
	const releaseTime = parseFloat(releaseControl.value);

	// Programar la envolvente ADSR en el nodo de ganancia
	gainNode.gain.cancelScheduledValues(audioContext.currentTime);
	gainNode.gain.setValueAtTime(0, audioContext.currentTime); // Inicio en 0
	gainNode.gain.linearRampToValueAtTime(amplitudeControl.value * volumeControl.value, audioContext.currentTime + attackTime); // Attack
	gainNode.gain.linearRampToValueAtTime(sustainLevel * volumeControl.value, audioContext.currentTime + attackTime + decayTime); // Decay
	gainNode.gain.setValueAtTime(sustainLevel * volumeControl.value, audioContext.currentTime + attackTime + decayTime); // Sustain

	oscillator.start();

	// Detener el sonido después de la duración especificada
	setTimeout(() => {
			gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + releaseTime); // Release
			oscillator.stop(audioContext.currentTime + releaseTime);
			isPlaying = false;
	}, durationControl.value * 1000);

	isPlaying = true;
}

// Función para detener el sonido
function stopSound() {
	if (oscillator) {
		oscillator.stop();
		isPlaying = false;
	}
}

// Función para restablecer valores predeterminados
function resetDefaults() {
	volumeControl.value = 0.5;
	oscillatorType.value = 'sine';
	filterType.value = 'lowpass';
	amplitudeControl.value = 0.5;
	frequencyControl.value = 440;
	durationControl.value = 2;
	reverbControl.value = 0;
	distortionControl.value = 0;
	attackControl.value = 0.1;
	decayControl.value = 0.3;
	sustainControl.value = 0.7;
	releaseControl.value = 0.5;

	// Actualizar la interfaz visualmente
	updateUIFromControls();
}

// Función para actualizar la interfaz cuando se restablecen los valores
function updateUIFromControls() {
	if (gainNode) gainNode.gain.setValueAtTime(volumeControl.value, audioContext.currentTime);
	if (oscillator) oscillator.type = oscillatorType.value;
	if (filter) filter.type = filterType.value;
	if (oscillator) oscillator.frequency.setValueAtTime(frequencyControl.value, audioContext.currentTime);
	if (distortion) distortion.curve = makeDistortionCurve(distortionControl.value * 100);
}

// Mostrar/ocultar la sección de oscilador personalizado
oscillatorType.addEventListener('change', () => {
	const customWaveformSection = document.getElementById('customWaveformSection');
	if (oscillatorType.value === 'custom') {
		customWaveformSection.style.display = 'block';
		applyCustomWaveformButton.disabled = false;
	} else {
		customWaveformSection.style.display = 'none';
		applyCustomWaveformButton.disabled = true;
		// Limpiar la onda personalizada cuando se cambia a otro tipo
		window.customPeriodicWave = null;
	}
	updateUI();
});

// Función para aplicar un oscilador personalizado
function applyCustomWaveform() {
	const waveformInput = customWaveformInput.value.trim();
	if (!waveformInput) {
		alert("Por favor, ingresa valores para la forma de onda.");
		return;
	}

	try {
		// Convertir los valores ingresados en un array de números
		const waveformValues = waveformInput.split(',').map(value => parseFloat(value.trim()));
		if (waveformValues.some(isNaN)) {
			alert("Los valores ingresados deben ser números separados por comas.");
			return;
		}

		// Normalizar los valores para que estén entre -1 y 1
		const maxAmplitude = Math.max(...waveformValues.map(Math.abs));
		const normalizedValues = waveformValues.map(value => value / maxAmplitude);

		// Crear una onda periódica personalizada
		const real = new Float32Array(normalizedValues.length).fill(0);
		const imag = new Float32Array(normalizedValues);

		// Guardar la onda periódica personalizada en una variable global
		window.customPeriodicWave = audioContext.createPeriodicWave(real, imag);

		// Si hay un oscilador activo, aplicar la onda personalizada
		if (oscillator && isPlaying) {
			oscillator.setPeriodicWave(window.customPeriodicWave);
		}
	} catch (error) {
		console.error("Error al aplicar la forma de onda personalizada:", error);
		alert("Error al aplicar la forma de onda personalizada");
	}
}

// Event listeners
generateSoundButton.addEventListener('click', generateSound);
stopSoundButton.addEventListener('click', stopSound);
resetDefaultsButton.addEventListener('click', resetDefaults);
applyCustomWaveformButton.addEventListener('click', applyCustomWaveform); // Vincular el botón de oscilador personalizado

// Actualizar controles en tiempo real
volumeControl.addEventListener('input', () => {
	if (gainNode) gainNode.gain.setValueAtTime(volumeControl.value, audioContext.currentTime);
});

oscillatorType.addEventListener('change', () => {
	if (oscillator) oscillator.type = oscillatorType.value;
});

filterType.addEventListener('change', () => {
	if (filter) filter.type = filterType.value;
});

frequencyControl.addEventListener('input', () => {
	if (oscillator) oscillator.frequency.setValueAtTime(frequencyControl.value, audioContext.currentTime);
});

distortionControl.addEventListener('input', () => {
	if (distortion) distortion.curve = makeDistortionCurve(distortionControl.value * 100);
});

function cambiarTipoOscilador() {
	if (oscillator) {
		oscillator.stop();
		oscillator.disconnect();
	}
	
	// Crear nuevo oscilador
	oscillator = audioContext.createOscillator();
	
	// Obtener el tipo seleccionado
	const tipoSeleccionado = document.getElementById('tipoOscilador').value;
	
	if (tipoSeleccionado === 'personalizado') {
		// Configurar onda personalizada
		const wave = dibujarOnda();
		oscillator.setPeriodicWave(wave);
	} else {
		// Configurar tipo estándar
		oscillator.type = tipoSeleccionado;
	}
	
	// Reconectar el oscilador al gainNode
	oscillator.connect(gainNode);
	gainNode.connect(audioContext.destination);
	
	// Reiniciar la frecuencia
	oscillator.frequency.setValueAtTime(frecuencia, audioContext.currentTime);
	
	// Iniciar el oscilador si estaba sonando
	if (isPlaying) {
		oscillator.start();
	}
}

function updateUI() {
	const oscillatorType = document.getElementById('oscillatorType').value;
	const customWaveform = document.getElementById('customWaveform').value;
	const generateButton = document.getElementById('generateSound');
	
	if (oscillatorType === 'custom') {
		generateButton.disabled = customWaveform.trim() === '';
	} else {
		generateButton.disabled = false;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('oscillatorType').addEventListener('change', updateUI);
	document.getElementById('customWaveform').addEventListener('input', function() {
		if (document.getElementById('oscillatorType').value === 'custom') {
			const generateButton = document.getElementById('generateSound');
			generateButton.disabled = this.value.trim() === '';
		}
	});
	
	updateUI();

	// Agregar event listeners para los botones de preset
	document.querySelectorAll('.preset-btn').forEach(button => {
		button.addEventListener('click', () => {
			const presetName = button.dataset.preset;
			applyPreset(presetName);
		});
	});

	// Manejar la selección de categoría de preset
	document.getElementById('presetCategory').addEventListener('change', function(e) {
		// Ocultar todos los grupos
		document.querySelectorAll('.preset-group').forEach(group => {
			group.classList.remove('active');
		});
		
		// Mostrar el grupo seleccionado
		const selectedCategory = e.target.value;
		document.querySelector(`.preset-group[data-category="${selectedCategory}"]`).classList.add('active');
	});

	// Mostrar el primer grupo de presets
	const firstCategory = document.getElementById('presetCategory').value;
	document.querySelector(`.preset-group[data-category="${firstCategory}"]`).classList.add('active');
});

function applyPreset(presetName) {
	const preset = PRESETS[presetName];
	if (!preset) return;

	// Aplicar valores del preset a los controles
	oscillatorType.value = preset.oscillatorType;
	frequencyControl.value = preset.frequency;
	attackControl.value = preset.attack;
	decayControl.value = preset.decay;
	sustainControl.value = preset.sustain;
	releaseControl.value = preset.release;
	amplitudeControl.value = preset.amplitude;
	filterType.value = preset.filterType;
	distortionControl.value = preset.distortion;
	durationControl.value = preset.duration;

	// Actualizar la interfaz
	updateUIFromControls();
	
	// Si hay un oscilador personalizado activo, limpiarlo
	if (oscillatorType.value !== 'custom') {
		window.customPeriodicWave = null;
	}
	
	// Ocultar sección de forma de onda personalizada si no es custom
	const customWaveformSection = document.getElementById('customWaveformSection');
	customWaveformSection.style.display = oscillatorType.value === 'custom' ? 'block' : 'none';
}