import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./History.css";

gsap.registerPlugin(ScrollTrigger);

const historyData = [
  { year: "1998", text: ["In late 90's Cosmo appointed an agent for timely service and technical support to its Indian users."] },
  { year: "2000", text: ["Technical advisor from Cosmo Japan kept visiting India for service support and customer feedback."] },
  { year: "2005", text: ["As per customer feedback, Cosmo decided to open its own company in India to provide better service all over India."] },
  { year: "2007", text: ["Cosmo established a Liaison Office in October 2007 and started educating engineers about Air Leak Testing from a one-room office in Sushant Lok, Sector 55, Gurugram."] },
  { year: "2008", text: ["Participated in India Auto Show 2008 at Pragati Maidan, Delhi."] },
  { year: "2009", text: ["In December 2009, Cosmo Liaison Office was localized in India under the name Cosmo Instruments India Pvt. Ltd. at IMT Manesar."] },
  { year: "2010", text: ["Cosmo India developed a team of highly qualified and experienced sales and service engineers who completed intensive training in Japan, Malaysia, and Thailand."] },
  { year: "2011", text: ["Company served more than 300 customers and achieved an annual turnover of INR 13 Million in FY 2010–11.", "Established Sales & Service Office in the Bengaluru region.", "Established a Residential Office in Pune to support customers across the western region."] },
  { year: "2012", text: ["Expansion of headquarters with additional manpower to support customers on time, along with a dust-proof calibration laboratory."] },
  { year: "2013", text: ["Started manufacturing leak testing machines in the Bengaluru region based on customer demand."] },
  { year: "2014", text: ["Established Sales & Service Office for customers in the western region."] },
  { year: "2015", text: ["Established Sales & Service Office in Chennai to provide on-time technical support and solutions."] },
  { year: "2016", text: ["Participated in a plantation program at Manesar Government Polytechnic led by President Mr. Tomoyuki Furuse (Delhi), and another plantation drive at Gadudewi Hills, Supewadi (Pune)."] },
  { year: "2017", text: ["Celebrated the 10th Anniversary of COSMO INSTRUMENTS INDIA PVT. LTD.", "Expanded the Bengaluru R&D Centre with a new Leak Test Machine Design & Manufacturing facility."] },
  { year: "2018", text: ["Pune Sales & Service Office expanded with a Leak Testing Machine Manufacturing Unit, providing complete solutions."] },
  { year: "2019", text: ["Established a Domestic Sales & Service Office in Ahmedabad, Gujarat, to meet growing demand for leak testing and quick support."] },
  { year: "2021", text: ["New location established for the Bengaluru R&D Centre with expanded Leak Test Machine Design & Manufacturing facilities."] },
  { year: "2022", text: ["Established a Leak Testing Machine Facility at Ambattur, Chennai."] },
  { year: "2023", text: ["Established Sales & Service Office in Becharaji, Gujarat, to support increasing demand for leak testing and quick support.", "Started a joint venture of Cosmo for machine manufacturing in Becharaji.", "Started a joint venture of Cosmo for machine manufacturing in Jigani."] },
  { year: "2024", text: ["Continuing the journey of innovation, quality, and customer satisfaction with a vision for a better tomorrow."] }
];

export default function History() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // ---- Suminagashi Particle Animation Logic ----
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const text = textRef.current;
    const timeline = timelineRef.current;
    if (!wrap || !canvas || !cursor || !text || !timeline) return;

    const ctx = canvas.getContext('2d');
    let W, H, mouse = { x: -999, y: -999, active: false };
    const PARTICLE_COUNT = 200;
    const particles = [];
    let animationFrameId;

    const PALETTE = [
      [0,0,0],
      [30,30,30],
      [0,50,100],
      [0,80,150],
      [0,100,200],
      [50,130,200]
    ];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() { this.reset(true); }
      reset(init) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : -10;
        this.vx = (Math.random() - .5) * .4;
        this.vy = (Math.random() - .5) * .4;
        this.r = 1 + Math.random() * 2.2;
        this.col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.alpha = .15 + Math.random() * .5;
        this.baseAlpha = this.alpha;
        this.trail = [];
        this.maxTrail = 8 + Math.floor(Math.random() * 10);
      }
      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const RADIUS = 250;
        if (mouse.active && dist < RADIUS) {
          const force = (1 - dist / RADIUS) * 4.0;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * .12;
          this.vy -= Math.sin(angle) * force * .12;
          this.alpha = Math.min(1, this.baseAlpha + force * .6);
        } else {
          this.alpha += (this.baseAlpha - this.alpha) * .04;
        }
        this.vx *= .95; this.vy *= .95;
        this.vx += (Math.random() - .5) * .02;
        this.vy += (Math.random() - .5) * .02;
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrail) this.trail.shift();
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset(false);
      }
      draw() {
        const [r, g, b] = this.col;
        if (this.trail.length > 1) {
          for (let i = 1; i < this.trail.length; i++) {
            const t = i / this.trail.length;
            ctx.beginPath();
            ctx.moveTo(this.trail[i-1].x, this.trail[i-1].y);
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${t * this.alpha * .4})`;
            ctx.lineWidth = this.r * t;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha})`;
        ctx.fill();
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i], p2 = particles[j];
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            const op = (1 - d / 90) * .08;
            const [r, g, b] = p1.col;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${op})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
    }

    function drawMouseGlow() {
      if (!mouse.active) return;
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
      grad.addColorStop(0, 'rgba(0,100,200,0.1)');
      grad.addColorStop(1, 'rgba(0,100,200,0)');
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    function loop() {
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(0, 0, W, H);
      drawMouseGlow();
      drawConnections();
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(loop);
    }

    function init() {
      resize();
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
      loop();
    }

    // Attach to window so we can hover through the scroll overlay
    window.addEventListener('resize', resize);

    init();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      cursor.style.left = mouse.x + 'px';
      cursor.style.top = mouse.y + 'px';
      cursor.style.opacity = '1';
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'rgba(100,100,120,0.8)';
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -999; mouse.y = -999;
      cursor.style.opacity = '0';
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursor.style.background = 'rgba(20,18,16,0.9)';
    };

    // Attach to window so we can hover through the scroll overlay
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);

    // ---- GSAP Scroll Animations ----
    const pageContainer = document.querySelector('.history-page');
    
    // Background floating text parallax
    const parallaxAnim = gsap.to(text, {
      y: window.innerHeight * 0.4, // Move down smoothly as we scroll past first page
      ease: "none",
      scrollTrigger: {
        trigger: pageContainer,
        start: "top top",
        end: `${window.innerHeight}px top`,
        scrub: true,
      }
    });

    // Timeline Glass Cards Animation
    const ctxGsap = gsap.context(() => {
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item, index) => {
        const card = item.querySelector('.glass-card');
        const node = item.querySelector('.timeline-node');
        const isLeft = index % 2 === 1; // Correct for CSS nth-child logic
        
        gsap.fromTo(card, {
          opacity: 0,
          y: 80,
          rotationX: 10, // Spatial 3D effect
          rotationY: isLeft ? -5 : 5, // Slight tilt based on side
          scale: 0.95,
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        gsap.fromTo(node, {
          scale: 0,
          opacity: 0,
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, timelineRef);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (parallaxAnim.scrollTrigger) parallaxAnim.scrollTrigger.kill();
      parallaxAnim.kill();
      ctxGsap.revert();
      // Clean up any remaining ScrollTriggers
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="history-page">
      {/* FIXED BACKGROUND: Ink Canvas */}
      <div id="wrap" ref={wrapRef}>
        <canvas id="sumi" ref={canvasRef}></canvas>

        {/* Floating text inside fixed container */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
          {/* Japanese text */}
          <div 
            ref={textRef}
            style={{
            position: "absolute",
            left: "40px",
            top: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0
          }}>
            <span style={{ fontSize: "48px", fontWeight: 300, color: "rgba(20,18,16,0.82)", lineHeight: 1.05, letterSpacing: "0.05em", fontFamily: "serif" }}>イ</span>
            <span style={{ fontSize: "48px", fontWeight: 300, color: "rgba(20,18,16,0.82)", lineHeight: 1.05, letterSpacing: "0.05em", fontFamily: "serif" }}>ン</span>
            <span style={{ fontSize: "48px", fontWeight: 300, color: "rgba(20,18,16,0.82)", lineHeight: 1.05, letterSpacing: "0.05em", fontFamily: "serif" }}>ド</span>
            <span style={{ display: "block", width: "1px", height: "64px", background: "rgba(20,18,16,0.2)", margin: "14px 0" }} />
            <span style={{ fontSize: "14px", fontWeight: 400, color: "rgba(20,18,16,0.38)", letterSpacing: "0.22em", writingMode: "vertical-rl", textOrientation: "mixed", textTransform: "uppercase", fontFamily: "-apple-system,sans-serif" }}>
              Let's -- see our journey
            </span>
          </div>

          {/* Section label */}
          <div style={{ position: "absolute", top: "100px", right: "40px", textAlign: "right" }}>
            <span style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,18,16,0.5)", fontFamily: "-apple-system,sans-serif", fontWeight: 500 }}>
              Our History
            </span>
          </div>

          {/* Custom cursor */}
          <div 
            ref={cursorRef} 
            id="cursor" 
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "rgba(20,18,16,0.9)",
              transform: "translate(-50%,-50%)",
              transition: "width .12s, height .12s, background .12s",
              opacity: 0,
              pointerEvents: "none"
            }} 
          />

          {/* Central headline */}
          <div style={{
            position: "absolute",
            bottom: "48px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            whiteSpace: "nowrap"
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(20,18,16,0.28)", fontFamily: "-apple-system,sans-serif", fontWeight: 500, marginBottom: "10px" }}>
              Est. 2007
            </div>
            <div style={{ fontSize: "28px", fontWeight: 200, color: "rgba(12,10,8,0.72)", letterSpacing: "0.04em", fontFamily: "serif", fontStyle: "italic" }}>
              A Legacy in Motion
            </div>
          </div>


        </div>
      </div>

      {/* SCROLLABLE FOREGROUND: Timeline Content */}
      <div className="history-content">
        <div className="history-timeline" ref={timelineRef}>
          {historyData.map((item, index) => {
            const isLeft = index % 2 === 1; // Based on nth-child(even) being left-aligned
            return (
              <div key={index} className={`timeline-item ${isLeft ? 'left-card' : 'right-card'}`}>
                <div className="timeline-node"></div>
                <div className="glass-card">
                  <div className="year-badge">{item.year}</div>
                  <div className="card-text">
                    {item.text.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
