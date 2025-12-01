# Samer.AI - Static Website

This is a lightweight static version of the Samer.AI dashboard, built with HTML, CSS, and vanilla JavaScript. It mimics the original Next.js frontend but without server‑side dependencies, making it deployable on any static hosting service.

## 📁 Project Structure

```
static/
├── index.html          # Landing page
├── dashboard.html      # Main dashboard (chat, dark‑samer, image generation, profile)
├── login.html          # Login page
├── register.html       # Registration page
└── README.md           # This file
```

## 🚀 Features

- **Fully Responsive Design** – Adapts to mobile, tablet, and desktop screens.
- **Interactive Tabs** – Switch between Chat, Dark Samer, Image Generation, and Profile using pure JavaScript.
- **Simulated AI Chat** – Placeholder streaming UI with mock API calls (no real backend).
- **Modern UI** – Gradient backgrounds, glass‑morphism effects, and Tailwind CSS utilities.
- **Arabic RTL Layout** – Full right‑to‑left support with appropriate typography and icons.

## 🛠 Technologies Used

- **HTML5** – Semantic markup.
- **CSS3** – Custom styles and responsive media queries.
- **Tailwind CSS** (via CDN) – Rapid UI development.
- **Font Awesome** (via CDN) – Icons.
- **Vanilla JavaScript** – Tab switching, mobile menu, mock chat streaming.

## 📦 How to Run Locally

1. Ensure you have Python installed (any version).
2. Navigate to the `static` folder:
   ```bash
   cd workspace-175ff994-fc38-41da-8634-63e32322a215/static
   ```
3. Start a simple HTTP server:
   ```bash
   python -m http.server 8080
   ```
4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

Alternatively, you can open the HTML files directly in a browser (note that some API‑mock features may not work due to CORS).

## 🎨 Design Notes

- **Color Palette**: Dark gradient background (`#000000`, `#1a1a2e`, `#16213e`) with blue/purple accents.
- **Typography**: Segoe UI (fallback to system sans‑serif) with Arabic support.
- **Responsive Breakpoints**:
  - Mobile: `< 640px` (stacked input areas, hidden sidebar)
  - Tablet: `640px – 768px`
  - Desktop: `> 768px` (full sidebar visible)

## 🔧 Recent Improvements

1. **Enhanced Responsiveness**:
   - Chat input area stacks vertically on small screens.
   - Message container height adjusts per viewport.
   - Navigation bar collapses into a mobile‑friendly menu.

2. **Profile Section**:
   - Placeholder text now indicates login‑required state.
   - Removed dummy user data (“زائر”, “guest@samer.ai”) in favor of descriptive prompts.

3. **Chat Interface**:
   - Added CSS classes (`chat‑messages`, `chat‑input‑area`) for targeted responsive styling.
   - Improved scrolling behavior and button sizing.

4. **General Polish**:
   - Better contrast for readability.
   - Hover effects on interactive elements.
   - RTL layout consistency.

## ⚠️ Limitations (Static Version)

- No real authentication – login/register pages are static forms.
- AI chat uses mock streaming; no actual AI API calls are made.
- Image generation displays a placeholder image.
- Profile settings are disabled (read‑only).

## 📄 License

This static site is provided for demonstration purposes. The original Samer.AI project may have its own licensing terms.

## 👤 Author

Built as part of a frontend refinement task for Samer.AI.
