import "./Connect.css";
import { useState } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code"; // LeetCode
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Connect() {
    // Replace these with your real details ✅
    const PHONE = "+91 00000 00000";
    const EMAIL = "yourmail@example.com";
    const LINKEDIN = "https://www.linkedin.com/in/your-link/";
    const GITHUB = "https://github.com/your-handle";
    const LEETCODE = "https://leetcode.com/your-handle/";

    const [toast, setToast] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const showToast = (msg) => {
        setToast(msg);
        window.clearTimeout(showToast._t);
        showToast._t = window.setTimeout(() => setToast(""), 1800);
    };

    const copyText = async (label, value) => {
        try {
            await navigator.clipboard.writeText(value);
            showToast(`${label} copied ✅`);
        } catch {
            // fallback if clipboard blocked
            showToast(`Copy failed ❌ (check browser permission)`);
        }
    };

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFakeSubmit = (e) => {
        e.preventDefault();
        showToast("Message saved locally ✨ (connect backend later)");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="Connect">
            <div className="connect-wrap">
                <div className="connect-head">
                    <h1>Connect</h1>
                    <p>Quick links + a simple message box. Phone/Email click to copy 📋</p>
                </div>

                {/* Compact action tiles */}
                <div className="connect-actions">
                    <button
                        className="action-tile"
                        type="button"
                        onClick={() => copyText("Phone", PHONE)}
                        aria-label="Copy phone number"
                    >
                        <span className="tile-icon"><PhoneIphoneIcon fontSize="small" /></span>
                        <span className="tile-label">Phone</span>
                        <span className="tile-value">{PHONE}</span>
                    </button>

                    <button
                        className="action-tile"
                        type="button"
                        onClick={() => copyText("Email", EMAIL)}
                        aria-label="Copy email address"
                    >
                        <span className="tile-icon"><EmailIcon fontSize="small" /></span>
                        <span className="tile-label">Email</span>
                        <span className="tile-value">{EMAIL}</span>
                    </button>

                    <a className="action-tile link-tile" href={LINKEDIN} target="_blank" rel="noreferrer">
                        <span className="tile-icon"><LinkedInIcon fontSize="small" /></span>
                        <span className="tile-label">LinkedIn</span>
                        <span className="tile-value">Open profile</span>
                    </a>

                    <a className="action-tile link-tile" href={LEETCODE} target="_blank" rel="noreferrer">
                        <span className="tile-icon"><CodeIcon fontSize="small" /></span>
                        <span className="tile-label">LeetCode</span>
                        <span className="tile-value">View handle</span>
                    </a>

                    <a className="action-tile link-tile" href={GITHUB} target="_blank" rel="noreferrer">
                        <span className="tile-icon"><GitHubIcon fontSize="small" /></span>
                        <span className="tile-label">GitHub</span>
                        <span className="tile-value">See projects</span>
                    </a>
                </div>

                {/* Message section (no email sending logic) */}
                <div className="message-card">
                    <div className="message-head">
                        <h2>Leave a Message</h2>
                        {/* <p>Currently UI-only. You can connect EmailJS / backend later 🚀</p> */}
                    </div>

                    <form className="message-form" onSubmit={handleFakeSubmit}>
                        <label className="field">
                            <span>Your Name</span>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Shubham Kumar"
                                autoComplete="name"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>Your Email</span>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </label>

                        <label className="field field-full">
                            <span>Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                required
                            />
                        </label>

                        <button className="send-btn" type="submit">
                            Save Message
                        </button>
                    </form>
                </div>

                {/* Toast */}
                {toast && <div className="toast">{toast}</div>}
            </div>
        </div>
    );
}