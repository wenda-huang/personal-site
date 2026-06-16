import { useState, useEffect, useRef } from "react";
import {
  profile,
  nav,
  visitorCount,
  home,
  about,
  projects,
  skills,
  contact,
  sidebar,
  footer,
  catImage,
} from "./content";

// ─── Animated XP progress bar ─────────────────────────────────────────────────

function XpBar({ pct, label }: { pct: number; label: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ fontSize: 11, fontFamily: "Tahoma, Verdana, sans-serif" }}>{label}</span>
        <span style={{ fontSize: 11, color: "#316ac5", fontFamily: "Tahoma, Verdana, sans-serif" }}>{pct}%</span>
      </div>
      <div style={{
        height: 16, background: "#ffffff",
        border: "1px solid #808080",
        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.25)",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${width}%`,
          background: "linear-gradient(to bottom, #5ab84c 0%, #3d9a2e 40%, #2e8020 60%, #3d9a2e 100%)",
          transition: "width 1.2s ease-out",
          position: "relative",
          overflow: "hidden",
        }}>
          <div className="xp-shine" />
        </div>
      </div>
    </div>
  );
}

// ─── Section heading (XP blue bar style) ─────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "linear-gradient(to right, #316ac5, #4a80d0)",
      color: "#ffffff",
      fontSize: 11,
      fontWeight: "bold",
      fontFamily: "Tahoma, sans-serif",
      padding: "3px 8px",
      marginBottom: 8,
      letterSpacing: "0.03em",
    }}>
      {children}
    </div>
  );
}

// ─── XP-style button ──────────────────────────────────────────────────────────

function XpButton({ children, onClick, primary = false, type = "button", disabled = false }: { children: React.ReactNode; onClick?: () => void; primary?: boolean; type?: "button" | "submit"; disabled?: boolean }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: "Tahoma, Verdana, sans-serif",
        fontSize: 11,
        padding: "4px 18px",
        minWidth: 75,
        cursor: "pointer",
        color: "#000000",
        border: active
          ? "1px solid #316ac5"
          : hover
            ? "1px solid #316ac5"
            : `1px solid ${primary ? "#316ac5" : "#7b9fc7"}`,
        borderRightColor: active ? "#316ac5" : hover ? "#1e4db7" : (primary ? "#1e4db7" : "#4a7aaf"),
        borderBottomColor: active ? "#316ac5" : hover ? "#1e4db7" : (primary ? "#1e4db7" : "#4a7aaf"),
        background: active
          ? "linear-gradient(to bottom, #c0d0e8 0%, #d8e4f4 100%)"
          : hover
            ? "linear-gradient(to bottom, #eef4ff 0%, #c8d8f4 45%, #bccce8 55%, #c8d8f4 100%)"
            : "linear-gradient(to bottom, #f5f9ff 0%, #d4e2f4 45%, #c8d4ef 55%, #d4e2f4 100%)",
        boxShadow: active
          ? "inset 1px 1px 2px rgba(0,0,60,0.2)"
          : "inset 0 1px 0 rgba(255,255,255,0.85)",
      }}
    >
      {children}
    </button>
  );
}

// ─── Horizontal rule ──────────────────────────────────────────────────────────

function XpRule() {
  return (
    <div style={{ margin: "10px 0" }}>
      <div style={{ borderTop: "1px solid #808080" }} />
      <div style={{ borderTop: "1px solid #ffffff" }} />
    </div>
  );
}

// ─── Tab content sections ─────────────────────────────────────────────────────

function HomeTab() {
  return (
    <div>
      <div style={{ background: "#fffef0", border: "1px solid #c8c000", padding: "6px 10px", marginBottom: 12, fontSize: 11, fontFamily: "Tahoma, sans-serif" }}>
        <strong>Welcome!</strong> You are visitor #<span style={{ color: "#cc0000", fontWeight: "bold" }}>{visitorCount.toLocaleString()}</span> to this site.
        Last updated: <strong>{home.lastUpdated}</strong>.
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* Welcome panel */}
        <div style={{ flex: 2, minWidth: 240 }}>
          <SectionHeading>{home.welcomeHeading}</SectionHeading>
          <div style={{ padding: "0 2px" }}>
            {home.intro.map((para, i) => (
              <p key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>{para}</p>
            ))}
            <XpRule />
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <span style={{ fontSize: 20 }}>⭐</span>
              <div>
                <strong style={{ fontSize: 12 }}>{home.availabilityNote.title}</strong>
                <p style={{ fontSize: 11, color: "#555", margin: "2px 0 0" }}>{home.availabilityNote.detail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Site info panel */}
        <div style={{ flex: 1, minWidth: 160 }}>
          <SectionHeading>Site Info</SectionHeading>
          <div style={{ padding: "4px 2px", fontSize: 11 }}>
            {home.siteInfo.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "2px 0", borderBottom: "1px dotted #d0d0d0" }}>
                <span style={{ color: "#555" }}>{label}:</span>
                <span style={{ fontWeight: "bold" }}>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 10 }}>
            <SectionHeading>★ Featured Work</SectionHeading>
            <div style={{ padding: "4px 2px", fontSize: 11 }}>
              {home.featuredWork.map(({ name, meta }) => (
                <div key={name} style={{ padding: "4px 6px", background: "#f0f0f0", border: "1px solid #d0d0d0", marginBottom: 4 }}>
                  <strong>{name}</strong>
                  <br />
                  <span style={{ color: "#555" }}>{meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <XpRule />

      {/* Scrolling ticker */}
      <div style={{ background: "#ece9d8", border: "1px inset #808080", padding: "4px 6px", overflow: "hidden", whiteSpace: "nowrap" }}>
        <span style={{ fontSize: 11, color: "#333", display: "inline-block" }} className="xp-marquee">
          {home.ticker}
        </span>
      </div>
    </div>
  );
}

function AboutTab() {
  return (
    <div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {/* Photo */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: 130, height: 160,
            border: "2px inset #808080",
            background: "#d0d0d0",
            overflow: "hidden",
            boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}>
            <img
              src={profile.photoUrl}
              alt={profile.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ textAlign: "center", fontSize: 10, color: "#555", marginTop: 4, fontStyle: "italic" }}>
            {profile.photoCaption}
          </div>
        </div>

        {/* Bio */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <SectionHeading>About Me</SectionHeading>
          <div style={{ fontSize: 12, lineHeight: 1.7 }}>
            {about.bio.map((para, i) => (
              <p key={i} style={{ marginBottom: 6 }}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <XpRule />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* Quick facts */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <SectionHeading>Quick Facts</SectionHeading>
          <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse" }}>
            <tbody>
              {about.quickFacts.map(({ label, value }) => (
                <tr key={label} style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td style={{ padding: "3px 4px", color: "#555", fontWeight: "bold", width: 90 }}>{label}:</td>
                  <td style={{ padding: "3px 4px" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Interests */}
        <div style={{ flex: 1, minWidth: 160 }}>
          <SectionHeading>Interests &amp; Hobbies</SectionHeading>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 11 }}>
            {about.interests.map((item) => (
              <li key={item} style={{ padding: "3px 0", borderBottom: "1px dotted #e0e0e0" }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PortfolioTab() {
  return (
    <div>
      <p style={{ fontSize: 11, color: "#555", marginBottom: 10 }}>
        Here are some of my recent projects. Click on any project for more info!
      </p>

      {projects.map((p, i) => (
        <div key={i} style={{
          border: "1px solid #d0d0d0",
          marginBottom: 10,
          boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
        }}>
          <div style={{
            background: i === 0 ? "linear-gradient(to right, #316ac5, #4a80d0)" : i === 1 ? "linear-gradient(to right, #2a7a28, #4a9a47)" : "linear-gradient(to right, #804010, #c06020)",
            color: "#ffffff",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "Tahoma, sans-serif",
            padding: "3px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span>📁 {p.name}</span>
            <span style={{ fontSize: 10, fontWeight: "normal", opacity: 0.9 }}>{p.year} · {p.status}</span>
          </div>
          <div style={{ padding: "8px 10px", background: "#ffffff" }}>
            <p style={{ fontSize: 11, lineHeight: 1.6, margin: "0 0 6px", color: "#333" }}>{p.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
              <span style={{ fontSize: 10, color: "#555", fontStyle: "italic" }}>Technologies: {p.tech}</span>
              <XpButton>View Project »</XpButton>
            </div>
          </div>
        </div>
      ))}

      <XpRule />
      <p style={{ fontSize: 10, color: "#888", textAlign: "center", margin: 0 }}>
        More work available upon request — reach out via the Contact tab.
      </p>
    </div>
  );
}

function SkillsTab() {
  return (
    <div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <SectionHeading>Skill Levels</SectionHeading>
          <div style={{ padding: "4px 0" }}>
            {skills.bars.map((s) => (
              <XpBar key={s.name} label={s.name} pct={s.pct} />
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 180 }}>
          <SectionHeading>Software &amp; Tools</SectionHeading>
          <ul style={{ listStyle: "none", padding: 0, margin: "4px 0 12px", fontSize: 11 }}>
            {skills.tools.map(({ icon, name, level }) => (
              <li key={name} style={{ display: "flex", justifyContent: "space-between", padding: "3px 2px", borderBottom: "1px dotted #e0e0e0" }}>
                <span>{icon} {name}</span>
                <span style={{ color: level === "Expert" ? "#006600" : level === "Advanced" ? "#0000cc" : level === "Intermediate" ? "#996600" : "#777777", fontWeight: "bold", fontSize: 10 }}>
                  {level}
                </span>
              </li>
            ))}
          </ul>

          <SectionHeading>Disciplines</SectionHeading>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
            {skills.disciplines.map((d) => (
              <span key={d} style={{
                fontSize: 10,
                padding: "2px 6px",
                background: "#ece9d8",
                border: "1px solid #aaa",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                whiteSpace: "nowrap",
              }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const emptyForm = { name: "", email: "", subject: "", message: "", botcheck: "" };

function ContactTab() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(emptyForm);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (status === "sending") return;

    // Honeypot: real users never fill this hidden field.
    if (form.botcheck) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMsg("The contact form isn't configured yet (missing access key).");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `New message from ${form.name || "your site"}`,
          message: form.message,
          from_name: "Personal Site Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again, or email me directly.");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "30px 20px" }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>✉️</div>
        <div style={{ background: "#dff0d8", border: "1px solid #4b9a47", padding: "10px 16px", display: "inline-block", marginBottom: 12 }}>
          <strong style={{ color: "#2a6a20" }}>Message sent successfully!</strong>
        </div>
        <p style={{ fontSize: 11, color: "#555" }}>
          Thanks for getting in touch. I&apos;ll reply within 24 hours.
        </p>
        <XpButton onClick={() => setStatus("idle")}>Send Another</XpButton>
      </div>
    );
  }

  const sending = status === "sending";

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "Tahoma, Verdana, sans-serif",
    fontSize: 11,
    padding: "3px 4px",
    border: "1px solid #7b9fc7",
    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.15)",
    background: "#ffffff",
    boxSizing: "border-box",
    outline: "none",
    color: "#000000",
  };

  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
      <div style={{ flex: 2, minWidth: 240 }}>
        <SectionHeading>Send Me a Message</SectionHeading>
        <form onSubmit={handleSubmit} style={{ padding: "4px 0" }}>
          <table style={{ width: "100%", fontSize: 11, borderCollapse: "separate", borderSpacing: "0 5px" }}>
            <tbody>
              <tr>
                <td style={{ width: 70, fontWeight: "bold", paddingRight: 8, verticalAlign: "middle" }}>Your Name:</td>
                <td><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={fieldStyle} placeholder="John Smith" /></td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 8, verticalAlign: "middle" }}>Email:</td>
                <td><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={fieldStyle} placeholder="john@example.com" /></td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 8, verticalAlign: "middle" }}>Subject:</td>
                <td><input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} style={fieldStyle} placeholder="Hello!" /></td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 8, verticalAlign: "top", paddingTop: 4 }}>Message:</td>
                <td>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{ ...fieldStyle, resize: "vertical" }}
                    placeholder="Tell me what's up..."
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Honeypot — hidden from real users; bots that fill it are rejected. */}
          <input
            type="text"
            name="botcheck"
            value={form.botcheck}
            onChange={(e) => setForm({ ...form, botcheck: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />

          {status === "error" && (
            <div style={{ background: "#fde8e8", border: "1px solid #d04040", color: "#a02020", padding: "6px 10px", marginTop: 6, fontSize: 11 }}>
              ⚠ {errorMsg}
            </div>
          )}

          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <XpButton type="submit" disabled={sending}>{sending ? "Sending…" : "Send Message"}</XpButton>
            <XpButton onClick={() => { setForm(emptyForm); setStatus("idle"); setErrorMsg(""); }} disabled={sending}>Clear Form</XpButton>
          </div>
        </form>
      </div>

      <div style={{ flex: 1, minWidth: 150 }}>
        <SectionHeading>Contact Info</SectionHeading>
        <div style={{ fontSize: 11, padding: "4px 0" }}>
          {contact.info.map(({ icon, label, value }) => (
            <div key={label} style={{ padding: "4px 0", borderBottom: "1px dotted #d0d0d0" }}>
              <span style={{ marginRight: 4 }}>{icon}</span>
              <strong>{label}:</strong> {value}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <SectionHeading>Response Time</SectionHeading>
          <div style={{ fontSize: 11, padding: "4px 2px", lineHeight: 1.6 }}>
            <span style={{ color: "#008000" }}>●</span> {contact.responseTime}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState("Home");
  const [visitors, setVisitors] = useState(visitorCount);

  useEffect(() => {
    const t = setInterval(() => setVisitors((v) => v + Math.floor(Math.random() * 2) + 1), 12000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(180deg, #4d8dcc 0%, #6aace0 38%, #88d08a 62%, #4a9a3d 100%)",
      minHeight: "100vh",
      padding: "20px 10px 30px",
      position: "relative",
    }}>
      <style>{`
        .xp-link { color: #0000cc; text-decoration: underline; cursor: pointer; }
        .xp-link:hover { color: #cc0000; }
        @keyframes xpShine { from { left: -80%; } to { left: 160%; } }
        .xp-shine {
          position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.28), transparent);
          animation: xpShine 2.2s linear infinite;
        }
        @keyframes xpMarquee { from { transform: translateX(100vw); } to { transform: translateX(-200%); } }
        .xp-marquee { animation: xpMarquee 28s linear infinite; }
        * { box-sizing: border-box; }
        textarea, input { font-family: Tahoma, Verdana, sans-serif; }
        textarea:focus, input:focus { outline: 2px solid #316ac5; outline-offset: -1px; }
        .xp-badge {
          display: inline-block;
          width: 88px; height: 31px;
          border: 1px solid #808080;
          font-size: 8px;
          font-family: Tahoma, sans-serif;
          text-align: center;
          line-height: 1.3;
          padding: 2px;
          cursor: default;
          font-weight: bold;
          overflow: hidden;
          box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Floating cat in the bottom-left corner (set catImage.url in content.ts) */}
      {catImage.url && (
        <img
          src={catImage.url}
          alt={catImage.alt}
          title={catImage.alt}
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            width: catImage.width,
            height: "auto",
            zIndex: 100,
            border: "3px solid #0055e5",
            borderRadius: "6px",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.4)",
            background: "#ffffff",
            padding: 2,
          }}
        />
      )}

      <div style={{ maxWidth: 820, margin: "0 auto", fontFamily: "Tahoma, Verdana, Geneva, sans-serif", fontSize: 12 }}>

        {/* HEADER */}
        <div style={{
          background: "linear-gradient(to right, #1a44b0 0%, #2b5fcf 25%, #3a78e8 50%, #2b5fcf 75%, #1a44b0 100%)",
          padding: "14px 20px 12px",
          borderBottom: "2px solid #6a9ada",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Sheen across header */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "50%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
            pointerEvents: "none",
          }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <h1 style={{
                fontFamily: "Trebuchet MS, Tahoma, sans-serif",
                fontSize: 28, color: "#ffffff", fontWeight: "bold",
                textShadow: "1px 2px 3px rgba(0,0,0,0.5)",
                margin: 0, lineHeight: 1.2,
              }}>
                {profile.name}
              </h1>
              <p style={{ color: "#b8d4ff", fontSize: 11, margin: "4px 0 0", letterSpacing: "0.02em" }}>
                :: {profile.tagline} :: {profile.affiliation} ::
              </p>
            </div>
            <div style={{ textAlign: "right", fontSize: 10, color: "#b0c8f0" }}>
              <div style={{ fontSize: 22, marginBottom: 2 }}>{profile.headerEmoji}</div>
              <div>{profile.availability}</div>
              <div style={{ color: "#80ff80", fontWeight: "bold" }}>● {profile.statusLabel}</div>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div style={{
          background: "#d4d0c8",
          padding: "5px 8px 0",
          borderLeft: "1px solid #ffffff",
          borderRight: "1px solid #404040",
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 2,
        }}>
          {nav.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                fontFamily: "Tahoma, Verdana, sans-serif",
                fontSize: 11,
                padding: "5px 14px",
                cursor: "pointer",
                border: "1px solid #808080",
                borderBottom: tab === t ? "1px solid #ffffff" : "1px solid #808080",
                borderRadius: "3px 3px 0 0",
                background: tab === t
                  ? "#ffffff"
                  : "linear-gradient(to bottom, #e0dcd4 0%, #ccc8c0 100%)",
                fontWeight: tab === t ? "bold" : "normal",
                color: "#000000",
                position: "relative",
                top: tab === t ? 1 : 0,
                zIndex: tab === t ? 1 : 0,
                marginBottom: tab === t ? 0 : undefined,
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* MAIN CONTENT AREA */}
        <div style={{
          display: "flex",
          background: "#ffffff",
          border: "1px solid #808080",
          borderLeft: "1px solid #404040",
          borderBottom: "1px solid #404040",
          borderTop: "none",
          minHeight: 380,
        }}>
          {/* SIDEBAR */}
          <div style={{
            width: 175,
            background: "#f0efeb",
            borderRight: "1px solid #c0bdb5",
            flexShrink: 0,
            padding: "8px 0",
          }}>
            {/* Nav links */}
            <SectionHeading>Navigation</SectionHeading>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 8px" }}>
              {nav.map((t) => (
                <li key={t}>
                  <button
                    onClick={() => setTab(t)}
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      padding: "4px 10px",
                      fontSize: 11,
                      fontFamily: "Tahoma, sans-serif",
                      background: tab === t ? "#316ac5" : "transparent",
                      color: tab === t ? "#ffffff" : "#0000cc",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: tab === t ? "none" : "underline",
                      fontWeight: tab === t ? "bold" : "normal",
                    }}
                  >
                    {tab === t ? "▶ " : "› "}{t}
                  </button>
                </li>
              ))}
            </ul>

            {/* Online status */}
            <SectionHeading>Status</SectionHeading>
            <div style={{ padding: "6px 8px", fontSize: 11 }}>
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: sidebar.status.online ? "#008000" : "#888", fontWeight: "bold" }}>
                  ● {sidebar.status.online ? "Online" : "Offline"}
                </span>
              </div>
              <div style={{ color: "#555", marginBottom: 2 }}>AIM: {sidebar.status.aim}</div>
              <div style={{ color: "#555" }}>ICQ: {sidebar.status.icq}</div>
            </div>

            {/* Visitor counter */}
            <SectionHeading>Visitors</SectionHeading>
            <div style={{ padding: "6px 8px" }}>
              <div style={{
                background: "#000000",
                color: "#00ff00",
                fontFamily: "Courier New, monospace",
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
                padding: "4px 6px",
                letterSpacing: "0.1em",
                border: "2px inset #404040",
              }}>
                {String(visitors).padStart(7, "0")}
              </div>
              <div style={{ fontSize: 9, color: "#777", textAlign: "center", marginTop: 3 }}>
                Total Visitors
              </div>
            </div>

            {/* Currently playing */}
            <SectionHeading>Now Playing 🎵</SectionHeading>
            <div style={{ padding: "6px 8px", fontSize: 10, color: "#333" }}>
              <div style={{ fontWeight: "bold", marginBottom: 2 }}>{sidebar.nowPlaying.artist}</div>
              <div style={{ color: "#555", marginBottom: 4 }}>{sidebar.nowPlaying.track}</div>
              <div style={{
                height: 6,
                background: "#d0d0d0",
                border: "1px inset #808080",
                overflow: "hidden",
                marginBottom: 2,
              }}>
                <div style={{
                  width: `${sidebar.nowPlaying.progressPct}%`,
                  height: "100%",
                  background: "linear-gradient(to bottom, #4fa83d, #2a7a20)",
                }} />
              </div>
              <div style={{ color: "#888" }}>{sidebar.nowPlaying.time}</div>
            </div>

            {/* Web ring */}
            <SectionHeading>Links</SectionHeading>
            <ul style={{ listStyle: "none", padding: "4px 8px", margin: 0, fontSize: 11 }}>
              {sidebar.links.map((l) => (
                <li key={l} style={{ marginBottom: 3 }}>
                  <a href="#" className="xp-link">» {l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* MAIN CONTENT */}
          <div style={{ flex: 1, padding: "10px 14px", overflow: "auto", minWidth: 0 }}>
            {tab === "Home" && <HomeTab />}
            {tab === "About Me" && <AboutTab />}
            {tab === "Portfolio" && <PortfolioTab />}
            {tab === "Skills" && <SkillsTab />}
            {tab === "Contact" && <ContactTab />}
          </div>
        </div>

        {/* STATUS BAR */}
        <div style={{
          background: "#d4d0c8",
          borderLeft: "1px solid #ffffff",
          borderRight: "1px solid #404040",
          borderBottom: "1px solid #404040",
          padding: "2px 8px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          color: "#333",
          fontFamily: "Tahoma, sans-serif",
        }}>
          <span>✓ Page loaded successfully</span>
          <span>Internet zone</span>
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: 14, padding: "10px 0" }}>
          {/* 88×31 buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10, justifyContent: "center" }}>
            {footer.badges.map(({ bg, fg, top, bot }) => (
              <div key={top + bot} className="xp-badge" style={{ background: bg, color: fg }}>
                <div style={{ borderBottom: `1px solid rgba(255,255,255,0.3)`, paddingBottom: 2, marginBottom: 2 }}>{top}</div>
                <div>{bot}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", fontSize: 10, color: "#ffffffcc", textShadow: "1px 1px 2px rgba(0,0,0,0.7)", lineHeight: 1.7 }}>
            <div>{footer.copyright}</div>
            <div>{footer.note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
