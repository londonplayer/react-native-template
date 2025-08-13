# 🚀 React Native Expo Template — Ready to Code

[![Expo](https://img.shields.io/badge/Expo-~latest-blue?logo=expo&logoColor=white)](https://expo.dev/)  
[![React Native](https://img.shields.io/badge/React%20Native-0.7x-blue?logo=react&logoColor=white)](https://reactnative.dev/)  
[![NativeWind](https://img.shields.io/badge/NativeWind-CSS-orange?logo=tailwindcss&logoColor=white)](https://www.nativewind.dev/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/londonplayer/react-native-expo-template/pulls)

A **ready-to-go React Native template** built with **Expo**, **NativeWind CSS**, and **Expo Router** — with all the boring setup already done for you.

No more deleting boilerplate files, no more repetitive configuration. Just **install, run, and start building**.

---

## 📸 Preview

<p align="center">
  <img src="assets/preview.png" alt="App Preview" width="300" />
</p>

> 💡 _You can replace `assets/preview.png` with a real screenshot or GIF of your app running in Expo Go._

---

## ✨ Features

londonplayer

- **📦 Expo + React Native** — Created with `expo create@latest` for the latest features.
- **🎨 NativeWind CSS** — Tailwind CSS styling for React Native, ready to use.
- **🗂 Expo Router** — File-based routing for a clean navigation structure.
- **🧹 No Expo Boilerplate** — Removed unnecessary default screens and assets.
- **⚡ Instant Start** — Just install dependencies and run the app.

---

## 📂 Project Structure

<pre>
```
├── app/                # Your screens & routes (Expo Router)
│   ├── index.tsx       # Home screen
│   └── ...             # Add more screens here
├── assets/             # Images, fonts, etc.
├── components/         # Reusable UI components
├── styles/             # Global styles & NativeWind config
├── package.json
└── README.md
```
</pre>

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/londonplayer/react-native-template.git
cd react-native-template
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Start the development server

```bash
npx expo start
```

### 4️⃣ Open in Expo Go

- Install Expo Go on your iOS or Android device.
- Scan the QR code from your terminal or browser.
- 🎉 You’re ready to code!

---

## 🎨 Styling with NativeWind

```tsx
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-gray-100">
			<Text className="heading-text-h1 text-primary p-6">Start editing your home page.</Text>
		</View>
	);
}
```

---

## 🗂 Navigation with Expo Router

<pre>
```
app/
├── index.tsx       → "/"
├── about.tsx       → "/about"
└── blog/
    └── [id].tsx    → "/blog/:id"
```
</pre>

No manual route configuration — just create files and go.

---

## 🛠 Tech Stack

- React Native — Cross-platform mobile apps
- Expo — Fast development & deployment
- NativeWind — Tailwind CSS for RN
- Expo Router — File-based navigation

---

## 📜 License

This project is licensed under the MIT License — feel free to use it for personal or commercial projects.

---

## 💡 Why This Template?

Setting up a new React Native project can be repetitive:

- Removing boilerplate screens
- Installing and configuring NativeWind
- Setting up navigation
- Organizing folders

This template skips the boring part so you can focus on building features.
