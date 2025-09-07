# Overview

Shadow_OSINT is an Arabic-language web application that serves as a comprehensive directory for Open Source Intelligence (OSINT) tools and resources. The application provides a curated collection of cybersecurity investigation tools, organized by categories such as usernames, email addresses, domains, IP addresses, social networks, and geolocation. It features a modern, dark-themed interface with phosphorescent green accents and supports search functionality to help security researchers and investigators quickly find relevant OSINT resources.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a traditional client-side architecture using vanilla HTML5, CSS3, and JavaScript. The main components include:

- **Single Page Application (SPA)**: Built with pure web technologies without frameworks
- **Component-based Structure**: Modular sections for header, search, filters, and resource categories
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox
- **Progressive Web App (PWA)**: Includes manifest file and service worker registration for offline capabilities

## Styling Architecture
- **CSS Custom Properties**: Centralized theme management using CSS variables for colors and effects
- **Phosphorescent Theme**: Dark background with neon green accents for cybersecurity aesthetic
- **Arabic RTL Support**: Right-to-left text direction with appropriate font loading (Cairo font)
- **Visual Effects**: Glow effects and animations to enhance the cyberpunk appearance

## Data Structure
- **Static Resource Database**: OSINT tools organized in JavaScript objects by category
- **Category-based Organization**: Resources grouped by investigation type (usernames, emails, domains, IPs, social media, geolocation)
- **Resource Metadata**: Each tool includes name, URL, and description for easy reference

## Search and Filter System
- **Client-side Search**: Real-time filtering through JavaScript without server dependencies
- **Category Filtering**: Dynamic filtering by resource type
- **Trending Resources**: Special category for popular or frequently used tools

## Internationalization
- **Arabic Language Support**: Primary interface in Arabic with RTL layout
- **Mixed Content**: Arabic UI with English tool names and descriptions
- **Font Integration**: Google Fonts (Cairo) for proper Arabic typography

# External Dependencies

## Frontend Libraries
- **Font Awesome 6.4.0**: Icon library for UI elements and visual enhancement
- **Google Fonts (Cairo)**: Arabic typography support with multiple font weights
- **External CDNs**: Content delivery networks for performance optimization

## OSINT Tool Integrations
The application references numerous external OSINT services and tools:
- **Investigation Platforms**: Sherlock, Hunter.io, Have I Been Pwned, Shodan
- **Domain Research**: SecurityTrails, BuiltWith, Whois services
- **Social Media Analysis**: Social Searcher, Mention, Brand24
- **Security Research**: VirusTotal, AbuseIPDB, EmailRep

## Web Standards
- **PWA Manifest**: Progressive Web App configuration for installability
- **Service Worker**: Browser caching and offline functionality
- **Responsive Design**: CSS media queries for cross-device compatibility

## No Backend Dependencies
The application is designed as a static website with no server-side requirements, database connections, or API endpoints. All functionality runs entirely in the browser, making it suitable for deployment on static hosting platforms.