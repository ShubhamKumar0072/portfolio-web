import "./Connect.css";
import { useState } from "react";

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxQLCgrEWk9Zx0o1ZmrV9GvyzEymrO-Mw7smxwzcwFQ6ELHuoeykslJvyHVivsR1KpUXQ/exec";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code"; // LeetCode

export default function Connect() {
    // Replace these with your real details ✅
    const PHONE = "+91 9661043615";
    const EMAIL = "shubhamkumar20040213@gmail.com";
    const LINKEDIN = "https://www.linkedin.com/in/shubham-kumar0072/";
    const GITHUB = "https://github.com/ShubhamKumar0072";
    const LEETCODE = "https://leetcode.com/u/_shubham_kumar_007_/";

    const [toast, setToast] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    //cnformation massage popup
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
            showToast(`Copy failed ❌ (check browser permission)`);
        }
    };


    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    //Sending data to Google Sheet
    const handleFakeSubmit = async (e) => {
        e.preventDefault();

        // Optional: basic validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            showToast("Please fill all fields ❗");
            return;
        }

        try {
            const payload = {
                name: form.name.trim(),
                email: form.email.trim(),
                message: form.message.trim(),
                source: window.location.pathname, // optional (helps you know which page)
            };

            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(payload),
            });

            // Apps Script sometimes behaves better when reading text then parsing
            const text = await res.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                throw new Error("Non-JSON response: " + text);
            }

            if (data.success) {
                showToast("Message sent ✅");
                setForm({ name: "", email: "", message: "" });
            } else {
                showToast("Failed ❌ " + (data.error || ""));
            }
        } catch (err) {
            showToast("Network error ❌ " + err.message);
        }
    };

    return (
        <div className="Connect">
            <div className="connect-wrap">
                <div className="connect-head">
                    <h1 className="enter fade-left d-1">Connect</h1>
                    <p className="enter fade-left d-1">Share your website project details, job offers, and exciting opportunities directly with me. I'm eager to learn about your vision and discuss how we can collaborate!</p>
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
                <div className="message-card enter fade-up d-1">
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
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Toast */}
                {toast && <div className="toast">{toast}</div>}
            </div>
        </div>
    );
}