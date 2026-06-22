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
  const ringRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // ---- Canvas Animation Logic ----
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!wrap || !canvas || !ring || !text) return;

    const ctx = canvas.getContext('2d');
    let W, H, t = 0;
    let mx = -9999, my = -9999, pvx = 0, pvy = 0, vx = 0, vy = 0;
    let pmx = -9999, pmy = -9999;
    let animationFrameId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    const clouds = [
      { bx:0.40, by:0.40, brx:0.30, bry:0.25, brot:-0.25,
        cols:[[18,55,135],[10,38,112],[6,24,92]], alphas:[0.60,0.48,0.38], scale:[1,.72,.45] },
      { bx:0.32, by:0.60, brx:0.22, bry:0.15, brot:0.3,
        cols:[[55,52,48],[35,33,30],[18,17,15]], alphas:[0.42,0.52,0.58], scale:[1,.65,.35] },
      { bx:0.72, by:0.20, brx:0.14, bry:0.10, brot:0.8,
        cols:[[22,20,18],[12,10,9]], alphas:[0.48,0.62], scale:[1,.5] },
      { bx:0.88, by:0.26, brx:0.14, bry:0.10, brot:-0.4,
        cols:[[185,100,82],[160,75,60]], alphas:[0.30,0.36], scale:[1,.55] },
      { bx:0.80, by:0.58, brx:0.13, bry:0.08, brot:0.15,
        cols:[[110,148,200],[85,125,180]], alphas:[0.22,0.28], scale:[1,.5] },
      { bx:0.16, by:0.30, brx:0.17, bry:0.11, brot:-0.1,
        cols:[[70,67,63],[45,42,39],[22,20,18]], alphas:[0.32,0.42,0.50], scale:[1,.6,.3] },
      { bx:0.22, by:0.80, brx:0.12, bry:0.07, brot:0.5,
        cols:[[20,18,16],[10,8,7]], alphas:[0.38,0.55], scale:[1,.45] },
      { bx:0.58, by:0.50, brx:0.16, bry:0.11, brot:-0.05,
        cols:[[45,88,160],[28,68,140]], alphas:[0.20,0.26], scale:[1,.55] },
    ];

    const st = clouds.map((c,i)=>({
      ox:0, oy:0, tx:0, ty:0,
      ph: i*1.37,
      dx:(Math.random()-.5)*.016,
      dy:(Math.random()-.5)*.012,
      br: 0.035+Math.random()*.035,
    }));

    function drawCloud(c, s, t){
      const cx = c.bx*W + s.ox;
      const cy = c.by*H + s.oy;
      const breathe = 1 + Math.sin(t*.009+s.ph)*s.br;
      ctx.save();
      ctx.translate(cx,cy);
      ctx.rotate(c.brot + Math.sin(t*.0025+s.ph)*.055);

      c.cols.forEach((col,i)=>{
        const rx = c.brx*W*c.scale[i]*breathe;
        const ry = c.bry*H*c.scale[i]*breathe;
        const [r,g,b] = col;
        const a = c.alphas[i];
        const rmax = Math.max(rx,ry);
        const grad = ctx.createRadialGradient(0,0,0,0,0,rmax);
        grad.addColorStop(0,   `rgba(${r},${g},${b},${a})`);
        grad.addColorStop(0.28,`rgba(${r},${g},${b},${a*.72})`);
        grad.addColorStop(0.60,`rgba(${r},${g},${b},${a*.28})`);
        grad.addColorStop(0.85,`rgba(${r},${g},${b},${a*.06})`);
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.save();
        ctx.scale(1, ry/rmax);
        ctx.beginPath();
        ctx.ellipse(0,0,rx,rx,0,0,Math.PI*2);
        ctx.fillStyle=grad;
        ctx.fill();
        ctx.restore();
      });
      ctx.restore();
    }

    function drawTendril(x1,y1,x2,y2,cpox,cpoy,col,a,w,t,ph){
      const [r,g,b]=col;
      const wobble = Math.sin(t*.006+ph)*12;
      const grad=ctx.createLinearGradient(x1,y1,x2,y2);
      grad.addColorStop(0,`rgba(${r},${g},${b},${a})`);
      grad.addColorStop(.4,`rgba(${r},${g},${b},${a*.55})`);
      grad.addColorStop(1,`rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.quadraticCurveTo(
        (x1+x2)/2+cpox+wobble,
        (y1+y2)/2+cpoy+wobble*.6,
        x2,y2
      );
      ctx.strokeStyle=grad;
      ctx.lineWidth=w;
      ctx.lineCap='round';
      ctx.stroke();
    }

    function frame(){
      t++;
      if(mx>0){ vx+=(mx-pmx)*.006; vy+=(my-pmy)*.006; }
      vx*=.88; vy*=.88;
      pmx=mx; pmy=my;

      st.forEach((s,i)=>{
        const c=clouds[i];
        const ndx=Math.sin(t*.002+s.ph*.8)*35+s.dx*(t%700<350?1:-1)*25;
        const ndy=Math.cos(t*.0015+s.ph*.6)*25 +s.dy*(t%550<275?1:-1)*20;
        let mdx=0,mdy=0;
        if(mx>0){
          const ccx=c.bx*W+s.ox, ccy=c.by*H+s.oy;
          const dx=mx-ccx, dy=my-ccy;
          const dist=Math.sqrt(dx*dx+dy*dy)||1;
          const inf=Math.max(0,1-dist/(W*.85));
          const pow=inf*inf*150;
          mdx=(dx/dist)*pow*1.5+vx*60*inf;
          mdy=(dy/dist)*pow*1.2+vy*50*inf;
        }
        s.tx=ndx+mdx; s.ty=ndy+mdy;
        s.ox+=(s.tx-s.ox)*.045;
        s.oy+=(s.ty-s.oy)*.045;
      });

      ctx.clearRect(0,0,W,H);
      ctx.fillStyle='#EEE9E0';
      ctx.fillRect(0,0,W,H);

      ctx.globalCompositeOperation='multiply';
      [5,6,4,3,1,7,0,2].forEach(i=>drawCloud(clouds[i],st[i],t));

      const s0=st[0],s1=st[1],s2=st[2],s5=st[5],s7=st[7];
      drawTendril(
        clouds[0].bx*W+s0.ox+W*.06, clouds[0].by*H+s0.oy-H*.08,
        clouds[2].bx*W+s2.ox-W*.05, clouds[2].by*H+s2.oy+H*.05,
        W*.04,-H*.06,[15,13,12],0.52,16+Math.sin(t*.008)*3, t,0
      );
      drawTendril(
        clouds[5].bx*W+s5.ox+W*.07, clouds[5].by*H+s5.oy+H*.02,
        clouds[0].bx*W+s0.ox-W*.09, clouds[0].by*H+s0.oy+H*.06,
        -W*.05,H*.04,[48,45,42],0.40,20+Math.sin(t*.007)*4, t,1.2
      );
      drawTendril(
        clouds[0].bx*W+s0.ox+W*.04, clouds[0].by*H+s0.oy+H*.1,
        clouds[1].bx*W+s1.ox-W*.05, clouds[1].by*H+s1.oy-H*.03,
        W*.02,H*.06,[16,48,118],0.38,24+Math.sin(t*.009)*5, t,2.1
      );
      drawTendril(
        clouds[7].bx*W+s7.ox-W*.06, clouds[7].by*H+s7.oy-H*.04,
        clouds[0].bx*W+s0.ox+W*.08, clouds[0].by*H+s0.oy+H*.02,
        W*.03,-H*.05,[30,72,145],0.25,14+Math.sin(t*.01)*3, t,3.4
      );

      ctx.globalCompositeOperation='source-over';
      animationFrameId = requestAnimationFrame(frame);
    }

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
      ring.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      mx = -9999; my = -9999; vx = 0; vy = 0;
      ring.style.opacity = '0';
    };

    // Attach to window so we can hover through the scroll overlay
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);

    resize();
    frame();

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
            top: "40px",
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
          <div style={{ position: "absolute", top: "40px", right: "40px", textAlign: "right" }}>
            <span style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,18,16,0.5)", fontFamily: "-apple-system,sans-serif", fontWeight: 500 }}>
              Our History
            </span>
          </div>

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

          {/* Crosshair cursor hint */}
          <div 
            ref={ringRef} 
            id="cursor-ring" 
            style={{
              position: "absolute",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(20,18,16,0.18)",
              transform: "translate(-50%,-50%)",
              transition: "opacity .3s",
              opacity: 0,
              pointerEvents: "none"
            }} 
          />
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
