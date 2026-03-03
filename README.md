# Stewardship: Board Meeting Management Platform

Stewardship is a premium, high-fidelity board meeting management platform designed to reduce cognitive load for executives and enhance strategic execution. This repository contains the UX case study, design system, and an interactive React-based prototype.

## 🌟 Key Features

- **Executive Dashboard**: A personalized home screen focusing on "What's Next" and pending action items.
- **Interactive Meeting Hub**: A centralized view with synchronized agendas, inline document previews, and real-time voting tools.
- **Outcome Tracking (Action Center)**: A dedicated system for tracking resolutions and task ownership post-meeting.
- **Executive Design Language**: A high-trust, premium aesthetic utilizing dark mode, glassmorphism, and modern typography (Outfit & Inter).
- **Mobile Companion**: A fully responsive mobile view for board members on the go.

## 📂 Project Structure

- `src/`: Contains the React application code.
  - `App.jsx`: Main application logic and component definitions.
  - `index.css`: The "Executive High-Trust" design system (CSS Variables & Utilities).
  - `assets/`: UI assets, including AI-generated boardroom backgrounds.
- `brain/`: Project documentation and artifacts.
  - `walkthrough.md`: Detailed UX case study and visual showcase.
  - `architecture.md`: Information architecture and key user flows.
  - `research_notes.md`: Stakeholder personas and competitive analysis.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone the project or navigate to the directory:
   ```bash
   cd /Users/mary/.gemini/antigravity/scratch/board-meeting-redesign
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Prototype
Start the development server:
```bash
npm run dev
```
The prototype will be available at `http://localhost:5173`.

## 🎨 Design Philosophy

Stewardship is built on the principle of **Actionable Intelligence**. Unlike traditional platforms that act as static document repositories, Stewardship prioritizes:
1. **Focus**: Surface only what is relevant to the current agenda item.
2. **Clarity**: Use visual hierarchy to highlight ownership and due dates.
3. **Speed**: Reduce clicks to entry for critical workflows like voting and note-taking.

## 📊 Verification & Testing

The platform has been verified for:
- **Visual Accuracy**: High-fidelity UI matches the "High-Trust" design goals.
- **Navigation Flow**: Seamless transitions between Dashboard, Meetings, and Actions.
- **Responsiveness**: Verified behavior on desktop and mobile (375px) viewports using automated browser testing.

---

*This project was developed as part of a UX/Product Design Case Study.*
