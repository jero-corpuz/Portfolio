'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Camera, RefreshCw, Sparkles, Image as ImageIcon, Sliders, Play, Square, Video, ShieldAlert } from 'lucide-react';

interface WebcamPixelGridProps {
  gridSize?: number;
  palette?: 'cyberpunk' | 'matrix' | 'monochrome' | 'rgb';
}

export default function WebcamPixelGrid({
  gridSize: initialGridSize = 12,
  palette: initialPalette = 'cyberpunk',
}: WebcamPixelGridProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [gridSize, setGridSize] = useState<number>(initialGridSize);
  const [palette, setPalette] = useState<'cyberpunk' | 'matrix' | 'monochrome' | 'rgb'>(initialPalette);
  const [snapshots, setSnapshots] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'camera' | 'gallery'>('camera');
  const [shape, setShape] = useState<'squares' | 'dots' | 'ascii'>('squares');

  // Start Webcam Stream
  const startCamera = async () => {
    try {
      setHasPermission(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsStreaming(true);
        setHasPermission(true);
      }
    } catch (err) {
      console.warn('Camera access denied or unavailable:', err);
      setHasPermission(false);
      setIsStreaming(false);
    }
  };

  // Stop Webcam Stream
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  // Pixel Grid Render Loop
  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      const hiddenCanvas = hiddenCanvasRef.current;
      const video = videoRef.current;

      if (canvas && hiddenCanvas) {
        const ctx = canvas.getContext('2d');
        const hiddenCtx = hiddenCanvas.getContext('2d');

        if (ctx && hiddenCtx) {
          const width = canvas.width;
          const height = canvas.height;

          // Clear main canvas
          ctx.fillStyle = '#05060f';
          ctx.fillRect(0, 0, width, height);

          if (isStreaming && video && video.readyState === 4) {
            // Draw video to hidden canvas
            hiddenCanvas.width = width;
            hiddenCanvas.height = height;
            hiddenCtx.drawImage(video, 0, 0, width, height);

            const imageData = hiddenCtx.getImageData(0, 0, width, height);
            const data = imageData.data;

            const cols = Math.floor(width / gridSize);
            const rows = Math.floor(height / gridSize);

            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                const x = c * gridSize;
                const y = r * gridSize;

                // Sample pixel color at center of grid cell
                const pixelX = Math.floor(x + gridSize / 2);
                const pixelY = Math.floor(y + gridSize / 2);
                const index = (pixelY * width + pixelX) * 4;

                const rVal = data[index];
                const gVal = data[index + 1];
                const bVal = data[index + 2];
                const brightness = (rVal + gVal + bVal) / 3;

                // Color Palette Transformation
                let fillColor = `rgb(${rVal}, ${gVal}, ${bVal})`;

                if (palette === 'matrix') {
                  fillColor = `rgb(0, ${Math.floor(brightness * 1.1)}, 60)`;
                } else if (palette === 'cyberpunk') {
                  fillColor =
                    brightness > 128
                      ? `rgb(255, ${Math.floor(brightness * 0.4)}, 180)`
                      : `rgb(0, ${Math.floor(brightness * 0.8)}, 255)`;
                } else if (palette === 'monochrome') {
                  fillColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
                }

                ctx.fillStyle = fillColor;

                // Shape rendering
                if (shape === 'squares') {
                  ctx.fillRect(x + 1, y + 1, gridSize - 2, gridSize - 2);
                } else if (shape === 'dots') {
                  const radius = (gridSize / 2 - 1) * (brightness / 255);
                  ctx.beginPath();
                  ctx.arc(x + gridSize / 2, y + gridSize / 2, Math.max(1, radius), 0, Math.PI * 2);
                  ctx.fill();
                } else if (shape === 'ascii') {
                  const chars = ' .:-=+*#%@';
                  const charIdx = Math.floor((brightness / 255) * (chars.length - 1));
                  ctx.font = `${gridSize}px monospace`;
                  ctx.fillText(chars[charIdx], x, y + gridSize);
                }
              }
            }
          } else {
            // Render simulated retro grid when camera is loading or permission denied
            const cols = Math.floor(width / gridSize);
            const rows = Math.floor(height / gridSize);
            const time = Date.now() * 0.003;

            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                const x = c * gridSize;
                const y = r * gridSize;
                const wave = Math.sin(c * 0.3 + r * 0.3 + time) * 127 + 128;

                if (palette === 'matrix') {
                  ctx.fillStyle = `rgb(0, ${Math.floor(wave)}, 40)`;
                } else if (palette === 'cyberpunk') {
                  ctx.fillStyle = wave > 128 ? '#f43f5e' : '#3b82f6';
                } else {
                  ctx.fillStyle = `rgb(${wave}, ${wave}, ${wave})`;
                }

                if (shape === 'dots') {
                  ctx.beginPath();
                  ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 3, 0, Math.PI * 2);
                  ctx.fill();
                } else {
                  ctx.fillRect(x + 1, y + 1, gridSize - 2, gridSize - 2);
                }
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isStreaming, gridSize, palette, shape]);

  // Take Snapshot
  const handleTakeSnapshot = () => {
    if (canvasRef.current) {
      const dataUrl = canvasRef.current.toDataURL('image/png');
      setSnapshots((prev) => [dataUrl, ...prev]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#070814] text-white font-mono p-4 space-y-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Camera className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Webcam Pixel Matrix</h3>
            <p className="text-[11px] text-white/50">Real-Time Canvas Pixel Grid Shader</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('camera')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'camera' ? 'bg-purple-600 text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" /> Camera View
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'gallery' ? 'bg-purple-600 text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" /> Gallery ({snapshots.length})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'camera' ? (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_240px] gap-4 items-stretch min-h-0">
          {/* Canvas Video Viewport */}
          <div className="relative rounded-2xl bg-[#03040a] border border-white/15 overflow-hidden flex flex-col justify-center items-center p-2 min-h-[300px]">
            <canvas
              ref={canvasRef}
              width={640}
              height={480}
              className="w-full h-full max-h-[460px] object-contain rounded-xl shadow-2xl"
            />
            <canvas ref={hiddenCanvasRef} className="hidden" />
            <video ref={videoRef} playsInline muted className="hidden" />

            {/* Permission Warning Overlay */}
            {hasPermission === false && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-20">
                <ShieldAlert className="w-10 h-10 text-rose-400 animate-bounce" />
                <h4 className="text-sm font-bold text-white">Camera Access Required</h4>
                <p className="text-xs text-white/60 max-w-xs font-sans">
                  Please allow camera permissions in your browser to render live webcam pixel matrix, or enjoy the animated preview.
                </p>
                <button
                  onClick={startCamera}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Retry Permission
                </button>
              </div>
            )}

            {/* Snapshot Trigger FAB */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={handleTakeSnapshot}
                className="px-5 py-2.5 rounded-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-xl hover:scale-105 transition-all flex items-center gap-2 border border-white/30"
              >
                <Camera className="w-4 h-4" /> Capture Snapshot
              </button>
            </div>
          </div>

          {/* Shader Controls Panel */}
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-4 text-xs font-mono flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-purple-300 font-bold border-b border-white/10 pb-2">
                <Sliders className="w-4 h-4" /> Shader Controls
              </div>

              {/* Grid Pixel Size */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-white/70">
                  <span>Pixel Size</span>
                  <span className="text-purple-300 font-bold">{gridSize}px</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={24}
                  step={2}
                  value={gridSize}
                  onChange={(e) => setGridSize(Number(e.target.value))}
                  className="w-full accent-purple-500 bg-black/40 cursor-pointer"
                />
              </div>

              {/* Color Palette */}
              <div className="space-y-1.5">
                <span className="text-white/70 block">Color Palette</span>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['cyberpunk', 'matrix', 'monochrome', 'rgb'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPalette(p)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] uppercase tracking-wider transition-all ${
                        palette === p
                          ? 'bg-purple-600/40 text-purple-200 border-purple-500/80 font-bold'
                          : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Matrix Shape */}
              <div className="space-y-1.5">
                <span className="text-white/70 block">Pixel Geometry</span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['squares', 'dots', 'ascii'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setShape(s)}
                      className={`px-2 py-1.5 rounded-lg border text-[10px] uppercase transition-all ${
                        shape === s
                          ? 'bg-purple-600/40 text-purple-200 border-purple-500/80 font-bold'
                          : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stream Status Toggle */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                onClick={isStreaming ? stopCamera : startCamera}
                className={`w-full py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isStreaming
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/30 hover:bg-rose-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                }`}
              >
                {isStreaming ? (
                  <>
                    <Square className="w-3.5 h-3.5" /> Stop Stream
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" /> Start Webcam
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Snapshots Gallery */
        <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/10 overflow-y-auto">
          {snapshots.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16 text-white/40">
              <ImageIcon className="w-12 h-12 stroke-1" />
              <p className="text-xs">No captured snapshots yet.</p>
              <button
                onClick={() => setActiveTab('camera')}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
              >
                Take First Photo
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {snapshots.map((snap, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl border border-white/15 overflow-hidden bg-black shadow-lg"
                >
                  <img src={snap} alt={`Snapshot ${idx}`} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <a
                      href={snap}
                      download={`pixel-matrix-snap-${idx + 1}.png`}
                      className="p-2 rounded-full bg-purple-600 text-white hover:scale-110 transition-transform"
                      title="Download Photo"
                    >
                      <ImageIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
