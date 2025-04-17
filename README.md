# 🏋️‍♂️ Workout Tracker (Cloud-Synced via Dropbox)

Welcome to **Workout Tracker**, your minimalist, cloud-synced fitness log. Designed to keep your workouts organized and accessible from anywhere, this tool integrates with **Dropbox** to store your progress securely and privately.

## 🚀 Features

- 📆 Log workouts with customizable exercises and notes
- ✅ Check off completed sets or exercises
- ☁️ Sync your workout data to **Dropbox** using a personal access token
- 🔒 All data is stored in your own Dropbox account — you stay in control
- 📱 Responsive design for mobile and desktop use

## 🔧 Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (Fetch API for Dropbox integration)
- Dropbox API

## ☁️ Dropbox Integration

This tracker uses the Dropbox API to save and load your workout data as a `.json` file. You will need a **Dropbox access token** from your Dropbox App Console.

### How to Get Your Access Token

1. Go to: [https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps)
2. Create a new app with full Dropbox access.
3. Generate a token under the OAuth 2 section.
4. Paste your token into the app when prompted.

> ⚠️ **Never share your access token publicly!** Treat it like a password.

## 📂 File Structure

