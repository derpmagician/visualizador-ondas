// dibujaonda.js

let analyser = null; // Variable global para almacenar el analizador
let amplitudeScale = 1.0; // Factor de escala para la amplitud

export function visualizeWaveform(audioContext, sourceNode) {
	const waveformCanvas = document.getElementById('waveformCanvas');
	const canvasCtx = waveformCanvas.getContext('2d');

	// Ajustar el tamaño del canvas dinámicamente
	function resizeCanvas() {
		waveformCanvas.width = waveformCanvas.clientWidth;
		waveformCanvas.height = waveformCanvas.clientHeight;
	}
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas(); // Ajustar inicialmente

	// Si ya existe un analizador, desconéctalo antes de crear uno nuevo
	if (analyser) {
		analyser.disconnect();
	}

	// Crear un nodo analizador
	analyser = audioContext.createAnalyser();
	analyser.fftSize = 256;
	const bufferLength = analyser.frequencyBinCount;
	const dataArray = new Uint8Array(bufferLength);

	// Conectar el nodo fuente al analizador
	sourceNode.connect(analyser);
	analyser.connect(audioContext.destination);

	// Obtener colores desde CSS o variables globales
	const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--waveform-bg-color') || 'rgb(200, 200, 200)';
	const strokeColor = getComputedStyle(document.documentElement).getPropertyValue('--waveform-stroke-color') || 'rgb(0, 0, 0)';

	// Función para dibujar la onda
	function draw() {
		requestAnimationFrame(draw);

		// Obtener datos de la onda
		analyser.getByteTimeDomainData(dataArray);

		// Limpiar el canvas
		canvasCtx.fillStyle = backgroundColor;
		canvasCtx.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height);

		// Dibujar la onda
		canvasCtx.lineWidth = 2;
		canvasCtx.strokeStyle = strokeColor;
		canvasCtx.beginPath();

		const sliceWidth = waveformCanvas.width * 1.0 / bufferLength;
		let x = 0;

		for (let i = 0; i < bufferLength; i++) {
			const v = dataArray[i] / 128.0;
			const y = (v * waveformCanvas.height / 2) * amplitudeScale;

			if (i === 0) {
				canvasCtx.moveTo(x, y);
			} else {
				canvasCtx.lineTo(x, y);
			}

			x += sliceWidth;
		}

		canvasCtx.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
		canvasCtx.stroke();
	}

	// Iniciar el dibujo
	draw();
}

// Función para actualizar la escala de amplitud
export function setAmplitudeScale(scale) {
	amplitudeScale = scale;
}