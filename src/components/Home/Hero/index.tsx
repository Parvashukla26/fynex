'use client'
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import CardSlider from './slider';

// Reusable Shader Background Hook
const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const resize = () => {
    if (!canvasRef.current) return;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    canvasRef.current.width = window.innerWidth * dpr;
    canvasRef.current.height = window.innerHeight * dpr;
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl2', { alpha: false, antialias: true });
    if (!gl) return;

    const vsSource = `#version 300 es
            precision highp float;
            in vec4 position;
            void main() { gl_Position = position; }`;

    const fsSource = `#version 300 es
            precision highp float;
            out vec4 O;
            uniform vec2 resolution;
            uniform float time;
            #define FC gl_FragCoord.xy
            #define T time
            #define R resolution
            float rnd(vec2 p) {
                p=fract(p*vec2(12.9898,78.233));
                p+=dot(p,p+34.56);
                return fract(p.x*p.y);
            }
            float noise(in vec2 p) {
                vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
                float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+0.1), d=rnd(i+1.);
                return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
            }
            void main() {
                vec2 uv = (FC - 0.5 * R) / min(R.x, R.y);
                float n = noise(uv * 2.0 + T * 0.1);
                vec3 col = mix(vec3(0.01), vec3(0.06, 0.05, 0.04), n);
                O = vec4(col, 1.0);
            }`;

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    if (!program) return;

    const vShader = compileShader(vsSource, gl.VERTEX_SHADER);
    const fShader = compileShader(fsSource, gl.FRAGMENT_SHADER);

    if (vShader) gl.attachShader(program, vShader);
    if (fShader) gl.attachShader(program, fShader);
    gl.linkProgram(program);

    const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'resolution');
    const timeLoc = gl.getUniformLocation(program, 'time');

    const render = (now: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, now * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    resize();
    render(0);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return canvasRef;
};

const Hero = () => {
  const canvasRef = useShaderBackground();

  return (
    <section className='relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#1a1a1a]'>
      {/* Subtle WebGL Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      <div className='container px-6 relative z-10 mx-auto'>
        <div className='flex flex-col items-center text-center'>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='flex items-center gap-4 mb-10'>
            <div className='w-12 h-[1px] bg-primary/30'></div>
            <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
              Digital Intelligence Agency
            </span>
            <div className='w-12 h-[1px] bg-primary/30'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-5xl mb-12'>
            <h1 className='text-6xl md:text-8xl lg:text-[110px] font-medium text-white leading-[0.9] tracking-[-0.04em]'>
              Architecting <br />
              <span className='text-primary italic font-serif'>Exceptional</span> Futures.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className='text-white/50 text-18 md:text-22 max-w-2xl font-light leading-relaxed mb-16 tracking-wide'>
            Fynex is a boutique digital studio dedicated to the high-performance
            needs of modern industry leaders. We build with precision,
            scaling with elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className='flex flex-col sm:flex-row items-center gap-8 mb-32'>
            <a
              href='#contact'
              className='group relative flex items-center gap-4 bg-primary text-darkmode px-14 py-5 rounded-full font-bold text-16 uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)]'>
              Get Started
              <Icon icon="ph:arrow-right-bold" className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className='text-white/60 hover:text-white transition-all text-12 font-bold uppercase tracking-[0.4em] border-b border-white/10 pb-1'>
              Explore Operations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 2 }}
            className='w-full max-w-6xl border-t border-white/5 pt-16 mt-12'>
            <p className='text-white/20 text-10 uppercase tracking-[0.6em] mb-10 font-bold'>Strategic Partners</p>
            <CardSlider />
          </motion.div>

        </div>
      </div>

      {/* Visual Balance Elements */}
      <div className='absolute bottom-10 left-10 hidden lg:block'>
        <div className='flex gap-10 items-center opacity-20'>
          <div className='w-1 h-32 bg-gradient-to-b from-primary to-transparent'></div>
          <div className='text-white font-mono text-10 rotate-90 origin-left uppercase tracking-widest'>
            Coordinate: 48.8584° N
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
