# replit.md

## Overview

This is an interactive educational web application for teaching Computer Networks and Internet concepts to Indonesian high school students (grades X, XI, XII). The application provides structured learning materials with animations, interactive content, and quizzes to enhance student understanding of networking fundamentals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Architecture Pattern**: Single Page Application (SPA) with tab-based navigation
- **Responsive Design**: Mobile-first approach with CSS flexbox and grid layouts
- **Animation System**: CSS-based animations for network visualizations and transitions

### Backend Architecture
- **Type**: Client-side only application (static frontend)
- **Data Storage**: JavaScript objects stored in memory (data.js file)
- **No Server**: Fully static application that runs entirely in the browser

### Data Management
- **Storage Solution**: In-memory JavaScript objects
- **Data Structure**: Hierarchical organization by grade level and content type
- **Content Types**: Learning materials, quiz questions, animations, and educational content
- **Language**: Indonesian (Bahasa Indonesia) for educational content

## Key Components

### 1. Navigation System
- **Grade Selection**: Three-tier system (X, XI, XII grades)
- **Content Tabs**: Material and Quiz sections for each grade
- **Breadcrumb Navigation**: Back-to-grade functionality

### 2. Learning Content System
- **Structured Learning**: Apperception, Probing, Material, and Reflection phases
- **Interactive Elements**: Animated network diagrams and visual representations
- **Content Organization**: Hierarchical structure based on educational methodology

### 3. Quiz System
- **Question Management**: Multiple choice questions with immediate feedback
- **Progress Tracking**: Question numbering and completion status
- **Result Analysis**: Score calculation with detailed breakdown
- **Retry Functionality**: Ability to retake quizzes

### 4. Animation Engine
- **Network Visualizations**: CSS-based animations for network concepts
- **Interactive Diagrams**: Visual representations of network topologies
- **Loading States**: Smooth transitions between content sections

### 5. Responsive UI Components
- **Card-based Layout**: Modular design with consistent styling
- **Icon Integration**: Font Awesome icons for visual enhancement
- **Color System**: Gradient-based theme with accessibility considerations

## Data Flow

### 1. Application Initialization
```
DOM Ready → Initialize App → Setup Event Listeners → Update Grade Info
```

### 2. Content Navigation
```
Grade Selection → Content Loading → Tab Switching → Material/Quiz Display
```

### 3. Quiz Flow
```
Quiz Start → Question Display → Answer Selection → Progress Update → Results Calculation
```

### 4. Learning Progression
```
Apperception → Probing Questions → Main Material → Reflection → Assessment
```

## External Dependencies

### 1. Font Awesome
- **Purpose**: Icon library for consistent UI elements
- **Version**: 6.0.0
- **CDN**: CloudFlare CDN delivery
- **Usage**: Navigation icons, educational symbols, and interactive elements

### 2. Web Fonts
- **Primary Font**: Segoe UI system font stack
- **Fallbacks**: Tahoma, Geneva, Verdana, sans-serif
- **Approach**: System fonts for optimal performance and accessibility

## Deployment Strategy

### Static Hosting Requirements
- **Type**: Static file hosting (HTML, CSS, JS)
- **Server Requirements**: None (client-side only)
- **CDN Support**: Recommended for Font Awesome and potential performance optimization
- **Browser Compatibility**: Modern browsers with ES6+ support

### Deployment Considerations
- **File Structure**: Flat file organization for simple deployment
- **Asset Optimization**: Minification recommended for production
- **Caching Strategy**: Static asset caching for improved performance
- **Mobile Optimization**: Responsive design tested across devices

### Educational Context
- **Target Audience**: Indonesian high school students (grades 10-12)
- **Subject Matter**: Computer Networks and Internet fundamentals
- **Pedagogical Approach**: Interactive learning with visual aids and assessments
- **Language**: Indonesian (Bahasa Indonesia) for all educational content

The application follows educational best practices with structured learning phases, interactive assessments, and visual learning aids to enhance student comprehension of networking concepts.