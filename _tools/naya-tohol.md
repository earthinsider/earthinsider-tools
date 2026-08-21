<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Magics - Fancy Text Generator & 50+ Text Tools</title>
    <meta name="description" content="Transform your plain text into eye-catching fancy fonts for social media. 100% free, unlimited use, copy-paste ready!">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    
    <style>
        :root {
            --primary-color: #4A6CF7;
            --secondary-color: #6C63FF;
            --accent-color: #00C4B4;
            --success-color: #28a745;
            --bg-color: #F9FBFF;
            --card-bg: #FFFFFF;
            --text-color: #1A1A1A;
            --text-light: #666;
            --border-color: #E5E8EF;
            --shadow: 0 5px 15px rgba(0,0,0,0.05);
            --radius: 10px;
            --transition: all 0.3s ease;
            
            /* Footer colors for light mode */
            --footer-bg: #1A1A1A;
            --footer-text: #FFFFFF;
            --footer-text-light: #B0B0B0;
            --footer-border: #333;
        }

        [data-theme="dark"] {
            --primary-color: #4A6CF7;
            --secondary-color: #6C63FF;
            --accent-color: #00E0C6;
            --success-color: #34ce57;
            --bg-color: #0D1117;
            --card-bg: #161B22;
            --text-color: #FFFFFF;
            --text-light: #A1A1A1;
            --border-color: #30363D;
            --shadow: 0 5px 15px rgba(0,0,0,0.2);
            
            /* Footer colors for dark mode */
            --footer-bg: #FFFFFF;
            --footer-text: #1A1A1A;
            --footer-text-light: #666;
            --footer-border: #E5E8EF;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
            transition: var(--transition);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            padding: 15px 0;
            border-bottom: 1px solid var(--border-color);
            background-color: var(--bg-color);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
        }

        .theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: var(--text-color);
            padding: 8px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }

        .theme-toggle:hover {
            background-color: var(--border-color);
        }

        /* Hero Section */
        .hero {
            padding: 80px 0;
            text-align: center;
            background: linear-gradient(135deg, rgba(74, 108, 247, 0.1) 0%, var(--bg-color) 100%);
        }

        .hero h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Ad Units */
        .ad-unit {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background-color: transparent;
            margin: 20px 0;
        }

        .ad-unit.desktop {
            height: 90px;
        }

        .ad-unit.mobile {
            height: 50px;
            display: none;
        }

        .ad-unit.tool-ad-desktop {
            grid-column: 1 / -1;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .ad-unit.desktop {
                display: none;
            }
            
            .ad-unit.mobile {
                display: flex;
            }
        }

        /* Main Content */
        .content {
            padding: 60px 0;
        }

        .app-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        @media (min-width: 992px) {
            .app-container {
                flex-direction: row;
            }
            
            .input-section, .preview-section {
                flex: 1;
            }
        }

        .input-section {
            background: var(--card-bg);
            border-radius: var(--radius);
            padding: 30px;
            box-shadow: var(--shadow);
            transition: var(--transition);
            border: 1px solid var(--border-color);
        }

        .preview-section {
            background: var(--card-bg);
            border-radius: var(--radius);
            padding: 30px;
            box-shadow: var(--shadow);
            transition: var(--transition);
            border: 1px solid var(--border-color);
            max-height: 80vh;
            overflow-y: auto;
        }

        .section-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: var(--primary-color);
        }

        /* Input Area */
        .input-area {
            margin-bottom: 25px;
        }

        .input-text {
            width: 100%;
            min-height: 150px;
            padding: 15px;
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            font-size: 16px;
            resize: vertical;
            font-family: inherit;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: var(--transition);
        }

        .input-text:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.1);
        }

        .button-group {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        button {
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: var(--transition);
            font-family: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .clear-btn {
            background-color: #e74c3c;
            color: white;
            width: 100%;
            animation: bounce 2s infinite;
        }

        .clear-btn:hover {
            background-color: #c0392b;
            transform: translateY(-2px);
        }

        /* Preview Items */
        .preview-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .preview-item {
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 20px;
            background-color: var(--bg-color);
            transition: var(--transition);
        }

        .preview-item:hover {
            box-shadow: var(--shadow);
            transform: translateY(-3px);
        }

        .preview-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .preview-name {
            font-weight: 600;
            color: var(--primary-color);
        }

        .preview-text {
            font-size: 1.2rem;
            margin-bottom: 15px;
            word-break: break-word;
            min-height: 40px;
            padding: 10px;
            background-color: var(--card-bg);
            border-radius: 5px;
        }

        .preview-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        @media (max-width: 768px) {
            .preview-actions {
                flex-direction: column;
            }
        }

        .copy-btn {
            background-color: var(--primary-color);
            color: white;
            padding: 8px 15px;
            font-size: 0.9rem;
            flex: 1;
        }

        .copy-btn:hover {
            background-color: var(--secondary-color);
            transform: translateY(-2px);
        }

        .download-btn {
            background-color: var(--success-color);
            color: white;
            padding: 8px 15px;
            font-size: 0.9rem;
            flex: 1;
        }

        .download-btn:hover {
            background-color: #218838;
            transform: translateY(-2px);
        }

        /* Tooltip */
        .tooltip {
            position: relative;
            display: inline-block;
        }

        .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -60px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #333 transparent transparent transparent;
        }

        .tooltip.show .tooltiptext {
            visibility: visible;
            opacity: 1;
        }

        /* Favorites Section */
        .favorites-section {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
        }

        .favorites-section h3 {
            margin-bottom: 15px;
            color: var(--text-color);
        }

        .favorites-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .favorite-item {
            background-color: var(--primary-color);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: var(--transition);
        }

        .favorite-item:hover {
            background-color: var(--secondary-color);
            transform: translateY(-2px);
        }

        /* Gradient preview */
        .gradient-preview {
            background: linear-gradient(90deg, #ff0000, #ff9900, #33cc33, #3399ff, #cc33ff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        /* Tools Grid */
        .tools-section {
            padding: 80px 0;
            border-top: 1px solid var(--border-color);
        }

        .tools-section h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 50px;
            color: var(--primary-color);
        }

        .tools-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
        }

        @media (max-width: 768px) {
            .tools-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }

        .tool-card {
            background: var(--card-bg);
            border-radius: var(--radius);
            padding: 25px;
            box-shadow: var(--shadow);
            transition: var(--transition);
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            height: 100%;
            opacity: 0;
            transform: translateY(20px);
        }

        .tool-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .tool-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            border-color: var(--primary-color);
        }

        .tool-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--primary-color);
        }

        [data-theme="dark"] .tool-icon {
            color: var(--accent-color);
        }

        .tool-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 8px;
            text-align: center;
        }

        .tool-description {
            color: var(--text-color);
            text-align: center;
            margin-bottom: 20px;
            flex-grow: 1;
        }

        .tool-link {
            display: block;
            text-align: center;
            padding: 12px 20px;
            background: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-size: 1rem;
            transition: var(--transition);
            margin-top: auto;
            animation: smoothBounce 4s infinite ease-in-out;
        }

        .tool-link:hover {
            background: var(--secondary-color);
            transform: translateY(-2px);
        }

        /* Informational Section */
        .info-section {
            padding: 80px 0;
            border-top: 1px solid var(--border-color);
        }

        .info-section h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 50px;
            color: var(--primary-color);
        }

        .info-content {
            max-width: 900px;
            margin: 0 auto;
        }

        .info-content p {
            margin-bottom: 20px;
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .info-content h3 {
            font-size: 1.5rem;
            margin: 40px 0 20px;
            color: var(--secondary-color);
        }

        /* FAQ Section */
        .faq-section {
            padding: 60px 0;
            border-top: 1px solid var(--border-color);
        }

        .faq-section h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 50px;
            color: var(--primary-color);
        }

        .faq-grid {
            display: grid;
            gap: 25px;
            max-width: 900px;
            margin: 0 auto;
        }

        .faq-item {
            background: var(--card-bg);
            border-radius: var(--radius);
            padding: 25px;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-color);
        }

        .faq-question {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: var(--primary-color);
        }

        .faq-answer {
            color: var(--text-color);
            line-height: 1.7;
        }

        /* Footer */
        footer {
            background-color: var(--footer-bg);
            padding: 40px 0 20px;
            margin-top: 0;
            border-top: 1px solid var(--footer-border);
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            gap: 40px;
            margin-bottom: 30px;
        }

        @media (max-width: 768px) {
            .footer-content {
                flex-direction: column;
                gap: 25px;
            }
        }

        .footer-section {
            flex: 1;
        }

        .footer-section h3 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: var(--footer-text);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 8px;
        }

        .footer-links a {
            color: var(--footer-text-light);
            text-decoration: none;
            transition: var(--transition);
            font-size: 0.95rem;
        }

        .footer-links a:hover {
            color: var(--accent-color);
            padding-left: 5px;
        }

        .copyright {
            text-align: center;
            padding-top: 25px;
            border-top: 1px solid var(--footer-border);
            color: var(--footer-text-light);
            font-size: 0.9rem;
        }

        /* Animation for conversion process */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .animate-spin {
            animation: spin 1s linear infinite;
        }

        /* Animation for buttons */
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes smoothBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">File Magics</a>
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark/light mode">
                    <span id="themeIcon">🌙</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Ad Unit: Header to Hero - Desktop -->
    <div class="container">
        <div class="ad-unit desktop" id="ad-header-desktop">
            <!-- Desktop ad unit will be loaded here -->
        </div>
    </div>

    <!-- Ad Unit: Header to Hero - Mobile -->
    <div class="container">
        <div class="ad-unit mobile" id="ad-header-mobile">
            <!-- Mobile ad unit will be loaded here -->
        </div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Fancy Text Generator - Create Stylish Fonts & Cool Text Symbols Instantly</h1>
        </div>
    </section>

    <!-- Ad Unit: Hero to Tools - Desktop -->
    <div class="container">
        <div class="ad-unit desktop" id="ad-hero-desktop">
            <!-- Desktop ad unit will be loaded here -->
        </div>
    </div>

    <!-- Ad Unit: Hero to Tools - Mobile -->
    <div class="container">
        <div class="ad-unit mobile" id="ad-hero-mobile">
            <!-- Mobile ad unit will be loaded here -->
        </div>
    </div>

    <!-- Main Content - Fancy Text Generator -->
    <main class="content" id="fancy-text-generator">
        <div class="container">
            <div class="app-container">
                <!-- Input Section -->
                <section class="input-section">
                    <h2 class="section-title">Enter Your Text</h2>
                    
                    <div class="input-area">
                        <textarea class="input-text" id="inputText" placeholder="Type your text here...">Hello World!</textarea>
                    </div>
                    
                    <div class="button-group">
                        <button class="clear-btn" id="clearBtn">
                            Clear Text
                        </button>
                    </div>
                    
                    <div class="favorites-section">
                        <h3>Favorite Styles</h3>
                        <div id="favoritesList" class="favorites-list">
                            <!-- Favorite items will be added here dynamically -->
                        </div>
                    </div>
                </section>
                
                <!-- Preview Section -->
                <section class="preview-section">
                    <h2 class="section-title">Fancy Text Preview</h2>
                    
                    <div id="previewContainer" class="preview-container">
                        <!-- Preview items will be added here dynamically -->
                    </div>
                </section>
            </div>
        </div>
    </main>

    <!-- More Tools Section -->
    <section class="tools-section">
        <div class="container">
            <h2>More File Magics Tools</h2>
            <div class="tools-grid">
                <!-- Tool 1: Fancy Text Generator -->
                <div class="tool-card" data-popular="true" data-url="fancy-text-generator.html">
                    <div class="tool-icon">✨</div>
                    <h3 class="tool-title">Fancy Text Generator</h3>
                    <p class="tool-description">Generate fancy text with 100+ stylish fonts and symbols. Copy and paste cool letters for Instagram, Facebook, Twitter, WhatsApp bios and posts. Free online fancy font generator tool.</p>
                    <a href="lines-to-csv.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 1 -->
                <div class="ad-unit mobile" id="ad-tool1-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 2: Bold Text Generator -->
                <div class="tool-card" data-popular="true" data-url="bold-text-generator.html">
                    <div class="tool-icon">🔠</div>
                    <h3 class="tool-title">Bold Text Generator</h3>
                    <p class="tool-description">Convert normal text to bold letters online. Create 𝐛𝐨𝐥𝐝 text for social media posts, Instagram captions, and WhatsApp messages. Free bold font generator without downloads.</p>
                    <a href="bold-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 2 -->
                <div class="ad-unit mobile" id="ad-tool2-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after first row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row1-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 3: Small Text Generator -->
                <div class="tool-card" data-popular="true" data-url="small-text-generator.html">
                    <div class="tool-icon">🔡</div>
                    <h3 class="tool-title">Small Text Generator</h3>
                    <p class="tool-description">Generate ˢᵐᵃˡˡ ᵗᵉˣᵗ and superscript fonts online. Create tiny letters for Instagram bio, Twitter, and Discord. Free small caps text converter tool.</p>
                    <a href="small-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 3 -->
                <div class="ad-unit mobile" id="ad-tool3-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 4: Text Case Converter -->
                <div class="tool-card" data-popular="true" data-url="text-case-converter.html">
                    <div class="tool-icon">🔄</div>
                    <h3 class="tool-title">Text Case Converter</h3>
                    <p class="tool-description">Convert text case online - UPPERCASE, lowercase, Title Case, Sentence case, aLtErNaTe CaSe. Free text capitalization tool for quick formatting. No installation needed.</p>
                    <a href="text-case-converter.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 4 -->
                <div class="ad-unit mobile" id="ad-tool4-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after second row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row2-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 5: Cursive Text Generator -->
                <div class="tool-card" data-popular="true" data-url="cursive-text-generator.html">
                    <div class="tool-icon">✒️</div>
                    <h3 class="tool-title">Cursive Text Generator</h3>
                    <p class="tool-description">Generate 𝓬𝓾𝓻𝓼𝓲𝓿𝓮 text and script fonts online. Copy fancy cursive letters for Instagram, Facebook, and social media. Free handwriting font generator tool.</p>
                    <a href="cursive-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 5 -->
                <div class="ad-unit mobile" id="ad-tool5-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 6: Word Counter -->
                <div class="tool-card" data-popular="true" data-url="word-counter.html">
                    <div class="tool-icon">📝</div>
                    <h3 class="tool-title">Word Counter</h3>
                    <p class="tool-description">Free online word counter tool. Count words, characters, sentences, paragraphs, and reading time instantly. Perfect for essays, articles, and social media posts with character limits.</p>
                    <a href="word-counter.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 6 -->
                <div class="ad-unit mobile" id="ad-tool6-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after third row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row3-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 7: Strikethrough Text -->
                <div class="tool-card" data-popular="true" data-url="strikethrough-text.html">
                    <div class="tool-icon">🚫</div>
                    <h3 class="tool-title">Strikethrough Text</h3>
                    <p class="tool-description">Generate strikethrough text online. Create crossed-out letters for social media, documents, and messages. Free strikethrough font generator. Copy and paste instantly.</p>
                    <a href="strikethrough-text.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 7 -->
                <div class="ad-unit mobile" id="ad-tool7-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 8: Upside Down Text -->
                <div class="tool-card" data-popular="true" data-url="upside-down-text.html">
                    <div class="tool-icon">↕️</div>
                    <h3 class="tool-title">Upside Down Text</h3>
                    <p class="tool-description">Turn text upside down online. Create flipped and reversed letters for fun social media posts. Free upside down text generator for Instagram, Facebook, WhatsApp.</p>
                    <a href="upside-down-text.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 8 -->
                <div class="ad-unit mobile" id="ad-tool8-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after fourth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row4-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 9: Underline Text Generator -->
                <div class="tool-card" data-popular="true" data-url="underline-text-generator.html">
                    <div class="tool-icon">📏</div>
                    <h3 class="tool-title">Underline Text Generator</h3>
                    <p class="tool-description">Create U͟n͟d͟e͟r͟l͟i͟n͟e͟d͟ text online. Generate underlined fonts for social media where formatting isn't available. Free text underlining tool. Copy and paste anywhere.</p>
                    <a href="underline-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 9 -->
                <div class="ad-unit mobile" id="ad-tool9-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 10: Text Repeater -->
                <div class="tool-card" data-popular="true" data-url="text-repeater.html">
                    <div class="tool-icon">🔄</div>
                    <h3 class="tool-title">Text Repeater</h3>
                    <p class="tool-description">Repeat text, words, or sentences up to 10,000 times instantly. Free online text repeater tool for spam messages, testing, and fun posts. No character limits.</p>
                    <a href="text-repeater.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 10 -->
                <div class="ad-unit mobile" id="ad-tool10-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after fifth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row5-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 11: Invisible Text -->
                <div class="tool-card" data-popular="true" data-url="invisible-text.html">
                    <div class="tool-icon">👻</div>
                    <h3 class="tool-title">Invisible Text</h3>
                    <p class="tool-description">Generate invisible text and blank characters for WhatsApp, Discord, Instagram. Send empty messages and create blank names. Free invisible character copy tool.</p>
                    <a href="invisible-text.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 11 -->
                <div class="ad-unit mobile" id="ad-tool11-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 12: Blank Space Generator -->
                <div class="tool-card" data-popular="true" data-url="blank-space-generator.html">
                    <div class="tool-icon">⬜</div>
                    <h3 class="tool-title">Blank Space Generator</h3>
                    <p class="tool-description">Generate blank spaces for Instagram bio, username, and posts. Copy invisible space characters that work on all social media platforms. Free blank text generator.</p>
                    <a href="blank-space-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 12 -->
                <div class="ad-unit mobile" id="ad-tool12-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after sixth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row6-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 13: Bubble Text Generator -->
                <div class="tool-card" data-popular="true" data-url="bubble-text-generator.html">
                    <div class="tool-icon">Ⓜ️</div>
                    <h3 class="tool-title">Bubble Text Generator</h3>
                    <p class="tool-description">Generate Ⓑⓤⓑⓑⓛⓔ ⓣⓔⓧⓣ with circled letters online. Create rounded fonts for Instagram, Discord, and social media. Free bubble letter generator tool.</p>
                    <a href="bubble-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 13 -->
                <div class="ad-unit mobile" id="ad-tool13-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 14: Wide Text Generator -->
                <div class="tool-card" data-popular="true" data-url="wide-text-generator.html">
                    <div class="tool-icon">🟰</div>
                    <h3 class="tool-title">Wide Text Generator</h3>
                    <p class="tool-description">Create Ｆｕｌｌ  ｗｉｄｔｈ  ｔｅｘｔ online. Generate aesthetic wide letters for vaporwave posts and social media. Free Japanese-style text converter.</p>
                    <a href="wide-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 14 -->
                <div class="ad-unit mobile" id="ad-tool14-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after seventh row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row7-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 15: Hashtag Generator -->
                <div class="tool-card" data-popular="true" data-url="hashtag-generator.html">
                    <div class="tool-icon">#️⃣</div>
                    <h3 class="tool-title">Hashtag Generator</h3>
                    <p class="tool-description">Generate relevant hashtags for Instagram, Twitter, TikTok, and Facebook posts. AI-powered hashtag suggestions to boost engagement. Free hashtag maker tool.</p>
                    <a href="hashtag-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 15 -->
                <div class="ad-unit mobile" id="ad-tool15-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 16: Text to Emoji -->
                <div class="tool-card" data-popular="true" data-url="text-to-emoji.html">
                    <div class="tool-icon">😊</div>
                    <h3 class="tool-title">Text to Emoji</h3>
                    <p class="tool-description">Turn text into emoji online. Convert words and sentences to relevant emojis automatically. Free text to emoji converter for social media messages.</p>
                    <a href="text-to-emoji.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 16 -->
                <div class="ad-unit mobile" id="ad-tool16-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after eighth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row8-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 17: Mirror Text -->
                <div class="tool-card" data-popular="true" data-url="mirror-text.html">
                    <div class="tool-icon">🪞</div>
                    <h3 class="tool-title">Mirror Text</h3>
                    <p class="tool-description">Generate ɿoɿɿim ɈxɘT online. Create mirror text and backwards letters for creative posts. Free reversed text generator tool.</p>
                    <a href="mirror-text.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 17 -->
                <div class="ad-unit mobile" id="ad-tool17-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 18: Glitch Text Generator -->
                <div class="tool-card" data-popular="true" data-url="glitch-text-generator.html">
                    <div class="tool-icon">🌀</div>
                    <h3 class="tool-title">Glitch Text Generator</h3>
                    <p class="tool-description">Generate Z̵a̸l̴g̷o̶ glitch text online. Create scary, corrupted, and cursed text for gaming names, horror posts. Free zalgo text generator with custom intensity.</p>
                    <a href="glitch-text-generator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 18 -->
                <div class="ad-unit mobile" id="ad-tool18-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after ninth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row9-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 19: Title Case Converter -->
                <div class="tool-card" data-popular="true" data-url="title-case-converter.html">
                    <div class="tool-icon">🏷️</div>
                    <h3 class="tool-title">Title Case Converter</h3>
                    <p class="tool-description">Convert text to Title Case online. Automatically capitalize the first letter of each word following grammar rules. Free title capitalization tool for headings.</p>
                    <a href="title-case-converter.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 19 -->
                <div class="ad-unit mobile" id="ad-tool19-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 20: Sentence Case -->
                <div class="tool-card" data-popular="true" data-url="sentence-case.html">
                    <div class="tool-icon">📝</div>
                    <h3 class="tool-title">Sentence Case</h3>
                    <p class="tool-description">Convert text to proper sentence case. Capitalize first letter of sentences automatically. Free sentence case converter for essays and articles.</p>
                    <a href="sentence-case.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 20 -->
                <div class="ad-unit mobile" id="ad-tool20-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after tenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row10-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 21: Find and Replace -->
                <div class="tool-card" data-popular="true" data-url="find-and-replace.html">
                    <div class="tool-icon">🔍</div>
                    <h3 class="tool-title">Find and Replace</h3>
                    <p class="tool-description">Find and replace words in text online. Bulk search and replace tool for documents, code, and content editing. Free text replacement utility.</p>
                    <a href="find-and-replace.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 21 -->
                <div class="ad-unit mobile" id="ad-tool21-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 22: Remove Blank Lines -->
                <div class="tool-card" data-popular="true" data-url="remove-blank-lines.html">
                    <div class="tool-icon">🗑️</div>
                    <h3 class="tool-title">Remove Blank Lines</h3>
                    <p class="tool-description">Remove all blank lines and extra spaces from text instantly. Clean up documents, code, and lists. Free blank line remover tool.</p>
                    <a href="remove-blank-lines.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 22 -->
                <div class="ad-unit mobile" id="ad-tool22-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after eleventh row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row11-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 23: Remove Duplicates -->
                <div class="tool-card" data-popular="true" data-url="remove-duplicates.html">
                    <div class="tool-icon">❌</div>
                    <h3 class="tool-title">Remove Duplicates</h3>
                    <p class="tool-description">Remove duplicate lines from text online. Keep unique lines only. Perfect for cleaning lists, emails, and data. Free duplicate remover tool.</p>
                    <a href="remove-duplicates.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 23 -->
                <div class="ad-unit mobile" id="ad-tool23-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 24: Emoji Remover -->
                <div class="tool-card" data-popular="true" data-url="emoji-remover.html">
                    <div class="tool-icon">🚫</div>
                    <h3 class="tool-title">Emoji Remover</h3>
                    <p class="tool-description">Remove all emojis and emoticons from text online. Clean text for professional documents and formal content. Free emoji stripper tool.</p>
                    <a href="emoji-remover.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 24 -->
                <div class="ad-unit mobile" id="ad-tool24-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after twelfth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row12-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 25: Reverse Text -->
                <div class="tool-card" data-popular="true" data-url="reverse-text.html">
                    <div class="tool-icon">🔀</div>
                    <h3 class="tool-title">Reverse Text</h3>
                    <p class="tool-description">Reverse text, words, and sentences online. Create backwards text for fun posts and puzzles. Free text reverser and flipper tool.</p>
                    <a href="reverse-text.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 25 -->
                <div class="ad-unit mobile" id="ad-tool25-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 26: Sort Lines Alphabetically -->
                <div class="tool-card" data-popular="true" data-url="sort-lines-alphabetically.html">
                    <div class="tool-icon">📊</div>
                    <h3 class="tool-title">Sort Lines Alphabetically</h3>
                    <p class="tool-description">Sort lines alphabetically online. Arrange lists in ascending or descending order instantly. Free text sorting tool for organizing data.</p>
                    <a href="sort-lines-alphabetically.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 26 -->
                <div class="ad-unit mobile" id="ad-tool26-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after thirteenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row13-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 27: Remove Hashtags -->
                <div class="tool-card" data-popular="true" data-url="remove-hashtags.html">
                    <div class="tool-icon">#️⃣</div>
                    <h3 class="tool-title">Remove Hashtags</h3>
                    <p class="tool-description">Remove hashtags from Instagram captions, tweets, and social media posts. Clean text by stripping all # symbols. Free hashtag remover tool.</p>
                    <a href="remove-hashtags.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 27 -->
                <div class="ad-unit mobile" id="ad-tool27-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 28: Whitespace Remover -->
                <div class="tool-card" data-popular="true" data-url="whitespace-remover.html">
                    <div class="tool-icon">✨</div>
                    <h3 class="tool-title">Whitespace Remover</h3>
                    <p class="tool-description">Remove extra whitespace, tabs, and spaces from text. Clean up formatting instantly. Free space trimmer tool for documents and code.</p>
                    <a href="whitespace-remover.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 28 -->
                <div class="ad-unit mobile" id="ad-tool28-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after fourteenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row14-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 29: Instagram Bio Formatter -->
                <div class="tool-card" data-popular="true" data-url="instagram-bio-formatter.html">
                    <div class="tool-icon">📱</div>
                    <h3 class="tool-title">Instagram Bio Formatter</h3>
                    <p class="tool-description">Format Instagram bio with line breaks and spacing. Create aesthetic IG bios with proper formatting. Free Instagram bio line break tool.</p>
                    <a href="instagram-bio-formatter.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 29 -->
                <div class="ad-unit mobile" id="ad-tool29-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 30: Letter Spacing Tool -->
                <div class="tool-card" data-popular="true" data-url="letter-spacing-tool.html">
                    <div class="tool-icon">🔤</div>
                    <h3 class="tool-title">Letter Spacing Tool</h3>
                    <p class="tool-description">Add space between letters online. Create S p a c e d  t e x t for aesthetic posts and emphasis. Free letter spacing generator.</p>
                    <a href="letter-spacing-tool.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 30 -->
                <div class="ad-unit mobile" id="ad-tool30-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after fifteenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row15-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 31: Email Extractor -->
                <div class="tool-card" data-popular="true" data-url="email-extractor.html">
                    <div class="tool-icon">📧</div>
                    <h3 class="tool-title">Email Extractor</h3>
                    <p class="tool-description">Extract email addresses from text, documents, and web pages. Find and collect all emails instantly. Free email scraper and parser tool.</p>
                    <a href="email-extractor.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 31 -->
                <div class="ad-unit mobile" id="ad-tool31-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 32: URL Extractor -->
                <div class="tool-card" data-popular="true" data-url="url-extractor.html">
                    <div class="tool-icon">🌐</div>
                    <h3 class="tool-title">URL Extractor</h3>
                    <p class="tool-description">Extract URLs and links from text online. Pull all web addresses from documents instantly. Free URL finder and link extractor tool.</p>
                    <a href="url-extractor.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 32 -->
                <div class="ad-unit mobile" id="ad-tool32-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after sixteenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row16-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 33: HTML Tag Remover -->
                <div class="tool-card" data-popular="true" data-url="html-tag-remover.html">
                    <div class="tool-icon">🏷️</div>
                    <h3 class="tool-title">HTML Tag Remover</h3>
                    <p class="tool-description">Remove HTML tags from text online. Clean HTML code and get plain text instantly. Free HTML stripper and cleaner tool.</p>
                    <a href="html-tag-remover.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 33 -->
                <div class="ad-unit mobile" id="ad-tool33-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 34: Sentence Splitter -->
                <div class="tool-card" data-popular="true" data-url="sentence-splitter.html">
                    <div class="tool-icon">✂️</div>
                    <h3 class="tool-title">Sentence Splitter</h3>
                    <p class="tool-description">Break text into individual sentences online. Separate sentences with line breaks automatically. Free sentence separator tool.</p>
                    <a href="sentence-splitter.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 34 -->
                <div class="ad-unit mobile" id="ad-tool34-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after seventeenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row17-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 35: Random Line Picker -->
                <div class="tool-card" data-popular="true" data-url="random-line-picker.html">
                    <div class="tool-icon">🎲</div>
                    <h3 class="tool-title">Random Line Picker</h3>
                    <p class="tool-description">Pick random lines from text online. Great for giveaways, name selection, and random choices. Free random selector tool.</p>
                    <a href="random-line-picker.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 35 -->
                <div class="ad-unit mobile" id="ad-tool35-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 36: Line Shuffler -->
                <div class="tool-card" data-popular="true" data-url="line-shuffler.html">
                    <div class="tool-icon">🔄</div>
                    <h3 class="tool-title">Line Shuffler</h3>
                    <p class="tool-description">Shuffle and randomize lines of text online. Mix up lists in random order. Free line randomizer and mixer tool.</p>
                    <a href="line-shuffler.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 36 -->
                <div class="ad-unit mobile" id="ad-tool36-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after eighteenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row18-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 37: Paragraph Separator -->
                <div class="tool-card" data-popular="true" data-url="paragraph-separator.html">
                    <div class="tool-icon">📑</div>
                    <h3 class="tool-title">Paragraph Separator</h3>
                    <p class="tool-description">Separate paragraphs with blank lines online. Format text with proper paragraph spacing. Free paragraph formatter tool.</p>
                    <a href="paragraph-separator.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 37 -->
                <div class="ad-unit mobile" id="ad-tool37-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 38: Remove Special Characters -->
                <div class="tool-card" data-popular="true" data-url="remove-special-characters.html">
                    <div class="tool-icon">🔤</div>
                    <h3 class="tool-title">Remove Special Characters</h3>
                    <p class="tool-description">Remove special characters, symbols, and punctuation from text. Keep alphanumeric characters only. Free character stripper tool.</p>
                    <a href="remove-special-characters.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 38 -->
                <div class="ad-unit mobile" id="ad-tool38-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after nineteenth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row19-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 39: Number Extractor -->
                <div class="tool-card" data-popular="true" data-url="number-extractor.html">
                    <div class="tool-icon">🔢</div>
                    <h3 class="tool-title">Number Extractor</h3>
                    <p class="tool-description">Pull all numbers and digits from text online. Extract numeric values from documents instantly. Free number finder tool.</p>
                    <a href="number-extractor.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 39 -->
                <div class="ad-unit mobile" id="ad-tool39-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 40: Reverse Each Word -->
                <div class="tool-card" data-popular="true" data-url="reverse-each-word.html">
                    <div class="tool-icon">🔄</div>
                    <h3 class="tool-title">Reverse Each Word</h3>
                    <p class="tool-description">Reverse each word separately while keeping word order. Create mirror words for puzzles and games. Free word reverser tool.</p>
                    <a href="reverse-each-word.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 40 -->
                <div class="ad-unit mobile" id="ad-tool40-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after twentieth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row20-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 41: Line Numbering Tool -->
                <div class="tool-card" data-popular="true" data-url="line-numbering-tool.html">
                    <div class="tool-icon">1️⃣</div>
                    <h3 class="tool-title">Line Numbering Tool</h3>
                    <p class="tool-description">Add line numbers to text online. Number each line automatically for references and organization. Free line numbering utility.</p>
                    <a href="line-numbering-tool.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 41 -->
                <div class="ad-unit mobile" id="ad-tool41-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 42: Character Frequency -->
                <div class="tool-card" data-popular="true" data-url="character-frequency.html">
                    <div class="tool-icon">📊</div>
                    <h3 class="tool-title">Character Frequency</h3>
                    <p class="tool-description">Count how many times each character appears in text. Analyze character frequency and distribution. Free character counter tool.</p>
                    <a href="character-frequency.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 42 -->
                <div class="ad-unit mobile" id="ad-tool42-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after twenty-first row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row21-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 43: HTML Encoder -->
                <div class="tool-card" data-popular="true" data-url="html-encoder.html">
                    <div class="tool-icon">🔡</div>
                    <h3 class="tool-title">HTML Encoder</h3>
                    <p class="tool-description">Encode text to HTML entities online. Convert special characters to & < > format. Free HTML entity converter.</p>
                    <a href="html-encoder.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 43 -->
                <div class="ad-unit mobile" id="ad-tool43-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 44: HTML Decoder -->
                <div class="tool-card" data-popular="true" data-url="html-decoder.html">
                    <div class="tool-icon">🔤</div>
                    <h3 class="tool-title">HTML Decoder</h3>
                    <p class="tool-description">Decode HTML entities back to normal text. Convert & < > to readable characters. Free HTML entity decoder.</p>
                    <a href="html-decoder.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 44 -->
                <div class="ad-unit mobile" id="ad-tool44-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after twenty-second row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row22-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 45: Letter Extractor -->
                <div class="tool-card" data-popular="true" data-url="letter-extractor.html">
                    <div class="tool-icon">🔡</div>
                    <h3 class="tool-title">Letter Extractor</h3>
                    <p class="tool-description">Extract letters from text and remove numbers, symbols. Keep alphabetic characters only. Free letter-only filter tool.</p>
                    <a href="letter-extractor.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 45 -->
                <div class="ad-unit mobile" id="ad-tool45-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 46: Remove All Spaces -->
                <div class="tool-card" data-popular="true" data-url="remove-all-spaces.html">
                    <div class="tool-icon">␣</div>
                    <h3 class="tool-title">Remove All Spaces</h3>
                    <p class="tool-description">Remove all spaces from text online. Eliminate space characters completely for compact text. Free space remover tool.</p>
                    <a href="remove-all-spaces.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 46 -->
                <div class="ad-unit mobile" id="ad-tool46-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after twenty-third row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row23-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 47: Line Number Remover -->
                <div class="tool-card" data-popular="true" data-url="line-number-remover.html">
                    <div class="tool-icon">🚫</div>
                    <h3 class="tool-title">Line Number Remover</h3>
                    <p class="tool-description">Remove line numbers from the beginning of each line. Clean numbered lists automatically. Free line number stripper.</p>
                    <a href="line-number-remover.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 47 -->
                <div class="ad-unit mobile" id="ad-tool47-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 48: List to CSV -->
                <div class="tool-card" data-popular="true" data-url="list-to-csv.html">
                    <div class="tool-icon">📋</div>
                    <h3 class="tool-title">List to CSV</h3>
                    <p class="tool-description">Convert line-separated list to comma-separated values. Transform text lists to CSV format. Free list converter tool.</p>
                    <a href="list-to-csv.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 48 -->
                <div class="ad-unit mobile" id="ad-tool48-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after twenty-fourth row -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-row24-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Tool 49: Line Break Converter -->
                <div class="tool-card" data-popular="true" data-url="line-break-converter.html">
                    <div class="tool-icon">⏎</div>
                    <h3 class="tool-title">Line Break Converter</h3>
                    <p class="tool-description">Convert line breaks between different formats. Transform \n to <br> tags and vice versa. Free line break formatter.</p>
                    <a href="line-break-converter.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 49 -->
                <div class="ad-unit mobile" id="ad-tool49-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Tool 50: Markdown Cleaner -->
                <div class="tool-card" data-popular="true" data-url="markdown-cleaner.html">
                    <div class="tool-icon">🧹</div>
                    <h3 class="tool-title">Markdown Cleaner</h3>
                    <p class="tool-description">Remove markdown syntax from text. Convert markdown to plain text by stripping bold, italic, and other formatting. Free markdown stripper.</p>
                    <a href="markdown-cleaner.html" class="tool-link">Use Tool</a>
                </div>
                
                <!-- Mobile Ad after Tool 50 -->
                <div class="ad-unit mobile" id="ad-tool50-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
                <!-- Desktop Ad after 50 tools -->
                <div class="ad-unit desktop tool-ad-desktop" id="ad-after50-desktop">
                    <!-- Desktop ad unit will be loaded here -->
                </div>
                
                <!-- Mobile Ad after 50 tools -->
                <div class="ad-unit mobile" id="ad-after50-mobile">
                    <!-- Mobile ad unit will be loaded here -->
                </div>
                
            </div>
        </div>
    </section>

    <!-- Informational Section -->
    <section class="info-section">
        <div class="container">
            <h2>Fancy Text Generator: Transform Your Plain Text into Eye-Catching Typography</h2>
            <div class="info-content">
                <p>In today's digital landscape, standing out from the crowd has become more challenging than ever. With millions of social media posts, messages, and online content being created every second, capturing attention requires something extra. This is where a fancy text generator becomes your secret weapon for creating unique, stylish, and visually appealing text that makes people stop scrolling and take notice.</p>
                
                <h3>What Makes Fancy Text Generators Essential for Modern Digital Communication</h3>
                
                <p>The digital world has evolved beyond simple plain text communication. Whether you're crafting a social media bio, designing a profile header, creating engaging posts, or simply trying to add personality to your messages, fancy text generators provide the creative edge you need. These powerful tools transform ordinary letters and words into stunning typographical designs that express your individuality and capture attention instantly.</p>
                
                <p>Unlike standard keyboards that limit you to basic characters, fancy text generators unlock a universe of decorative fonts, special symbols, unique characters, and creative text styles. From elegant cursive scripts to bold gothic lettering, from cute bubble letters to sophisticated serif fonts, these generators give you access to thousands of text variations that would otherwise be impossible to create manually.</p>
                
                <h3>Why Your Content Needs Fancy Text More Than Ever</h3>
                
                <p>In the attention economy we live in, you have mere seconds to make an impression. Studies show that users spend less than three seconds deciding whether to engage with content. Plain, boring text simply doesn't cut through the noise anymore. Fancy text serves multiple crucial purposes:</p>
                
                <p><strong>Instant Visual Differentiation:</strong> When someone scrolls through hundreds of posts, your stylized text creates an immediate visual break that catches the eye. This split-second attention grab can mean the difference between being noticed or being ignored completely.</p>
                
                <p><strong>Brand Identity Building:</strong> Consistent use of specific text styles helps establish your unique brand identity across platforms. Whether you're a content creator, business owner, or influencer, having a distinctive text style becomes part of your recognizable signature.</p>
                
                <p><strong>Emotional Expression:</strong> Different font styles convey different emotions and tones. Playful bubble letters communicate fun and approachability, while elegant script fonts suggest sophistication and class. The right text style reinforces your message's emotional intent.</p>
                
                <p><strong>Professional Polish:</strong> Using fancy text in headers, titles, and key phrases adds a professional, designed look to your content without requiring graphic design skills or expensive software.</p>
                
                <p><strong>Cross-Platform Compatibility:</strong> Unlike images or graphics that may not display correctly everywhere, fancy text generated through Unicode characters works across virtually all platforms, devices, and applications.</p>
                
                <h3>The Technology Behind Fancy Text Generation</h3>
                
                <p>Fancy text generators leverage Unicode, the universal character encoding standard that includes over 143,000 characters from various writing systems and symbol sets. While your standard keyboard provides access to only a tiny fraction of these characters, fancy text generators tap into this massive library to create stylized text.</p>
                
                <p>These tools use sophisticated algorithms to map regular letters to their fancy counterparts in Unicode. For example, your letter "A" might be converted to 𝓐 (mathematical script capital A), 𝔸 (mathematical double-struck capital A), or 🅰 (negative squared Latin capital letter A), among dozens of other variations.</p>
                
                <p>The beauty of this approach is that the generated text isn't an image—it's actual selectable, copyable text that works anywhere Unicode is supported, which includes virtually every modern platform: Facebook, Instagram, Twitter, TikTok, WhatsApp, Discord, YouTube, LinkedIn, and countless others.</p>
                
                <h3>Strategic Applications Across Digital Platforms</h3>
                
                <p><strong>Social Media Optimization</strong></p>
                <p>On Instagram, fancy text in your bio creates immediate visual interest and helps communicate your brand personality before users even see your posts. Story highlights titles become more engaging with stylized text, and captions with strategic font variations see higher engagement rates.</p>
                
                <p><strong>Twitter's character limit</strong> makes every letter count. Fancy text helps your tweets stand out in crowded feeds, making followers more likely to stop and read. Thread titles with distinctive typography increase click-through rates significantly.</p>
                
                <p><strong>Facebook posts</strong> with fancy text elements receive more comments and shares because they visually differentiate from the standard post format. Group names and event titles with creative text styling appear more professional and attract more members.</p>
                
                <p><strong>LinkedIn professionals</strong> use subtle fancy text in headlines and summaries to stand out while maintaining professional credibility. The right typographical choice conveys expertise and attention to detail.</p>
                
                <p><strong>TikTok creators</strong> incorporate fancy text in video descriptions and profile bios to match their creative video content aesthetic. Comments with stylized text often receive more replies and engagement.</p>
                
                <h3>Advantages Over Alternative Solutions</h3>
                
                <p><strong>Comparison with Image-Based Text</strong></p>
                <p>Unlike creating text images in Photoshop or Canva, fancy text generators produce actual copyable text that users can select, search engines can index, and screen readers can process. Images require separate creation for every piece of text, while generators work instantly for unlimited variations.</p>
                
                <p>Images increase loading times and data usage, while fancy text loads instantly with negligible file size. For mobile users with limited data plans, this difference matters significantly.</p>
                
                <p>Editing image text requires reopening design software and recreating the entire image. Generated fancy text can be edited as easily as regular text—just type your changes and regenerate.</p>
                
                <p><strong>Comparison with Platform-Specific Formatting</strong></p>
                <p>Many platforms offer basic formatting like bold and italic, but these options are limited, inconsistent across platforms, and often stripped when text is copied elsewhere. Fancy text generated through Unicode works universally and maintains its appearance across all platforms.</p>
                
                <p>Platform formatting typically offers only 2-3 style options. Fancy text generators provide hundreds of distinct styles, giving you vastly more creative flexibility.</p>
                
                <h3>Conclusion: Transforming Digital Communication</h3>
                
                <p>In an increasingly visual digital world where attention is currency and differentiation is survival, fancy text generators provide accessible, powerful, and versatile tools for standing out and expressing yourself effectively. The combination of zero cost, instant results, universal compatibility, unlimited creative options, and no technical requirements makes these generators indispensable resources for anyone communicating online.</p>
                
                <p>Whether you're building a brand, growing a following, expressing creativity, or simply making your messages more engaging, fancy text generators offer the typographical power once reserved for professional designers, now available to everyone instantly. The question isn't whether to use a fancy text generator—it's which styles you'll explore first to transform your digital presence.</p>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <div class="faq-question">What is a fancy text generator and how does it work?</div>
                    <div class="faq-answer">A fancy text generator is an online tool that converts regular plain text into stylized typography using Unicode characters. It works by mapping standard letters to decorative Unicode equivalents, creating visually distinctive text that can be copied and used anywhere.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Are fancy text generators free to use?</div>
                    <div class="faq-answer">Yes, most fancy text generators are completely free with no hidden costs, subscriptions, or usage limits. Some offer premium features for a small fee, but basic functionality is universally free.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Will fancy text work on all social media platforms?</div>
                    <div class="faq-answer">Fancy text works on virtually all major platforms including Instagram, Facebook, Twitter, TikTok, WhatsApp, Discord, YouTube, LinkedIn, and Snapchat because it uses Unicode characters supported across modern systems.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can I use fancy text for commercial purposes?</div>
                    <div class="faq-answer">Yes, fancy text can be used freely for both personal and commercial purposes. Unicode characters are standardized and not subject to licensing restrictions.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Does fancy text affect SEO or search engine rankings?</div>
                    <div class="faq-answer">Fancy text in body content can negatively impact SEO because search engines may not index stylized Unicode characters as effectively. Use fancy text for decorative elements rather than SEO-critical content.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Is fancy text accessible to screen readers?</div>
                    <div class="faq-answer">Accessibility varies by style. Some fancy text reads correctly with screen readers while others may be incomprehensible. For maximum accessibility, use fancy text sparingly for decorative purposes only.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can I save my favorite fancy text styles?</div>
                    <div class="faq-answer">Many generators offer save, favorite, or history features to quickly access previously used styles. Browser bookmarks can also save specific generator pages with preset configurations.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">How many different fancy text styles are available?</div>
                    <div class="faq-answer">Quality generators offer 50-200+ distinct text styles ranging from cursive scripts to gothic letters, bubble fonts to monospace variations, and countless other options.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can fancy text contain numbers and symbols?</div>
                    <div class="faq-answer">Most generators support numbers, common punctuation, and symbols in addition to letters, though some decorative styles may only include alphabetic characters.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Will fancy text display correctly on mobile devices?</div>
                    <div class="faq-answer">Yes, fancy text displays correctly on iOS, Android, and other mobile platforms that support Unicode, which includes virtually all modern smartphones and tablets.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can I use fancy text in email subject lines?</div>
                    <div class="faq-answer">Yes, but use strategically. Some fancy text in subject lines can increase open rates, but excessive use may trigger spam filters or appear unprofessional in business contexts.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Does fancy text increase engagement on social media?</div>
                    <div class="faq-answer">Studies show that posts with visual variety, including fancy text, typically receive higher engagement rates because they stand out in crowded feeds and capture attention more effectively.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can I edit fancy text after generating it?</div>
                    <div class="faq-answer">You can edit by returning to the generator, modifying your original text, and regenerating. The fancy text itself should be treated as final output rather than editable in place.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Are there any security risks with fancy text generators?</div>
                    <div class="faq-answer">Reputable fancy text generators pose no security risks. They generate simple Unicode characters without code execution, file uploads, or personal data collection.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can I combine multiple fancy text styles together?</div>
                    <div class="faq-answer">Yes, you can generate different portions of text in various styles and manually combine them, creating unique mixed-typography effects for maximum visual impact.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">How do I choose the right fancy text style for my content?</div>
                    <div class="faq-answer">Consider your audience, platform, message tone, and brand identity. Experiment with different styles to find options that align with your content's purpose and aesthetic goals.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can fancy text be used in professional business communications?</div>
                    <div class="faq-answer">Yes, with appropriate discretion. Subtle fancy text in headers, signatures, or emphasis points can add polish, but excessive or playful styles may appear unprofessional in formal business contexts.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Does fancy text work in video captions and subtitles?</div>
                    <div class="faq-answer">Compatibility varies by video platform and player. Test fancy text in your specific application before using extensively in video content.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">What's the difference between fancy text generators and font changers?</div>
                    <div class="faq-answer">Fancy text generators create Unicode character variations that work universally, while font changers typically apply platform-specific formatting that may not transfer across different applications or websites.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Can I use fancy text in file names and folder names?</div>
                    <div class="faq-answer">Yes, but use with caution. While fancy text works in file names on most modern operating systems, it may cause compatibility issues when transferring files between different systems or with older software.</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Ad Unit after FAQs - Desktop -->
    <div class="container">
        <div class="ad-unit desktop" id="ad-faqs-desktop">
            <!-- Desktop ad unit will be loaded here -->
        </div>
    </div>

    <!-- Ad Unit after FAQs - Mobile -->
    <div class="container">
        <div class="ad-unit mobile" id="ad-faqs-mobile">
            <!-- Mobile ad unit will be loaded here -->
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Important</h3>
                    <ul class="footer-links">
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                        <li><a href="disclaimer.html">Disclaimer</a></li>
                        <li><a href="dmca.html">DMCA</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Information</h3>
                    <ul class="footer-links">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="index.html">Tools List</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                © 2025 File Magics. All rights reserved.
            </div>
        </div>
    </footer>

    <!-- Ad Unit after Footer - Desktop -->
    <div class="container">
        <div class="ad-unit desktop" id="ad-footer-desktop">
            <!-- Desktop ad unit will be loaded here -->
        </div>
    </div>

    <!-- Ad Unit after Footer - Mobile -->
    <div class="container">
        <div class="ad-unit mobile" id="ad-footer-mobile">
            <!-- Mobile ad unit will be loaded here -->
        </div>
    </div>

    <script>
        // Transformation functions
        const transformations = {
            // Bold Unicode
            bold: (text) => {
                const boldMap = {
                    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
                    'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
                    'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
                    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
                    'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
                    'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
                };
                return text.split('').map(char => boldMap[char] || char).join('');
            },
            
            // Italic Unicode
            italic: (text) => {
                const italicMap = {
                    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
                    'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
                    'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
                    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
                    'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
                    'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
                };
                return text.split('').map(char => italicMap[char] || char).join('');
            },
            
            // Bold-Italic Unicode
            boldItalic: (text) => {
                const boldItalicMap = {
                    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋',
                    'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕',
                    'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
                    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱',
                    'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻',
                    'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁'
                };
                return text.split('').map(char => boldItalicMap[char] || char).join('');
            },
            
            // Small Caps / Small Letters
            smallCaps: (text) => {
                const smallCapsMap = {
                    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
                    'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ',
                    'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
                    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
                    'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ',
                    'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
                };
                return text.split('').map(char => smallCapsMap[char] || char).join('');
            },
            
            // Upside-down
            upsideDown: (text) => {
                const upsideDownMap = {
                    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
                    'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
                    'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
                    'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
                    'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '┴',
                    'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
                    '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
                    '.': '˙', ',': "'", "'": ',', '"': ',,', '`': ',', '?': '¿', '!': '¡', '[': ']', ']': '[', '(': ')', 
                    ')': '(', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
                };
                return text.split('').map(char => upsideDownMap[char] || char).join('').split('').reverse().join('');
            },
            
            // Reverse Text
            reverse: (text) => {
                return text.split('').reverse().join('');
            },
            
            // Zalgo / Glitch (limited)
            zalgo: (text) => {
                const diacritics = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈́', '͊', '͋', '͌'];
                const maxDiacritics = 6;
                
                return text.split('').map(char => {
                    if (char === ' ') return char;
                    
                    let result = char;
                    const count = Math.floor(Math.random() * maxDiacritics) + 1;
                    
                    for (let i = 0; i < count; i++) {
                        result += diacritics[Math.floor(Math.random() * diacritics.length)];
                    }
                    
                    return result;
                }).join('');
            },
            
            // Spaced Letters
            spaced: (text) => {
                return text.split('').join(' ');
            },
            
            // Bubble / Enclosed
            bubble: (text) => {
                const bubbleMap = {
                    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
                    'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
                    'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
                    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
                    'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
                    'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
                    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
                };
                return text.split('').map(char => bubbleMap[char] || char).join('');
            },
            
            // Cursive / Script
            cursive: (text) => {
                const cursiveMap = {
                    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
                    'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
                    'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
                    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
                    'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
                    'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
                };
                return text.split('').map(char => cursiveMap[char] || char).join('');
            },
            
            // Fraktur
            fraktur: (text) => {
                const frakturMap = {
                    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
                    'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
                    'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
                    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
                    'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
                    'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
                };
                return text.split('').map(char => frakturMap[char] || char).join('');
            },
            
            // Double-struck
            doubleStruck: (text) => {
                const doubleStruckMap = {
                    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
                    'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
                    'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
                    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
                    'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
                    'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
                };
                return text.split('').map(char => doubleStruckMap[char] || char).join('');
            },
            
            // Strike-through
            strikethrough: (text) => {
                return text.split('').map(char => char + '\u0336').join('');
            },
            
            // Gradient visual preview (CSS) - purely visual, not in Unicode
            gradient: (text) => {
                // This transformation doesn't change the text, just applies CSS class
                return text;
            },
            
            // Emoji decorate
            emojiDecorate: (text) => {
                const emoji = ['✨', '🌟', '💫', '⭐', '🔥', '💥', '🌈', '🦄', '🍕', '🍦', '🎉', '🎊', '🎈', '🎁', '❤️', '💖'];
                const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
                return `${randomEmoji} ${text} ${randomEmoji}`;
            },
            
            // Wide Text
            wide: (text) => {
                const wideMap = {
                    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ',
                    'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ',
                    'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
                    'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ',
                    'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ',
                    'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
                    '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９',
                    ' ': '　'
                };
                return text.split('').map(char => wideMap[char] || char).join('');
            },
            
            // Squared Text
            squared: (text) => {
                const squaredMap = {
                    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
                    'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
                    'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
                    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹',
                    'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃',
                    'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉'
                };
                return text.split('').map(char => squaredMap[char] || char).join('');
            }
        };

        // Transformation definitions with display names
        const transformationList = [
            { id: 'bold', name: 'Bold Text', func: transformations.bold },
            { id: 'italic', name: 'Italic Text', func: transformations.italic },
            { id: 'boldItalic', name: 'Bold-Italic Text', func: transformations.boldItalic },
            { id: 'smallCaps', name: 'Small Caps', func: transformations.smallCaps },
            { id: 'upsideDown', name: 'Upside Down', func: transformations.upsideDown },
            { id: 'reverse', name: 'Reverse Text', func: transformations.reverse },
            { id: 'zalgo', name: 'Zalgo / Glitch', func: transformations.zalgo },
            { id: 'spaced', name: 'Spaced Letters', func: transformations.spaced },
            { id: 'bubble', name: 'Bubble Text', func: transformations.bubble },
            { id: 'cursive', name: 'Cursive Text', func: transformations.cursive },
            { id: 'fraktur', name: 'Fraktur Text', func: transformations.fraktur },
            { id: 'doubleStruck', name: 'Double-Struck Text', func: transformations.doubleStruck },
            { id: 'strikethrough', name: 'Strikethrough Text', func: transformations.strikethrough },
            { id: 'gradient', name: 'Gradient Text', func: transformations.gradient },
            { id: 'emojiDecorate', name: 'Emoji Decorate', func: transformations.emojiDecorate },
            { id: 'wide', name: 'Wide Text', func: transformations.wide },
            { id: 'squared', name: 'Squared Text', func: transformations.squared }
        ];

        // State management
        let favorites = JSON.parse(localStorage.getItem('fancyTextFavorites')) || [];
        let debounceTimer;

        // DOM elements
        const inputText = document.getElementById('inputText');
        const clearBtn = document.getElementById('clearBtn');
        const previewContainer = document.getElementById('previewContainer');
        const favoritesList = document.getElementById('favoritesList');

        // Initialize the app
        function init() {
            // Add event listeners
            inputText.addEventListener('input', handleInput);
            clearBtn.addEventListener('click', clearInput);
            
            // Initialize favorites display
            updateFavoritesDisplay();
            
            // Generate initial preview with sample text
            updatePreview(inputText.value);
        }

        // Handle text input with debounce
        function handleInput() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                updatePreview(inputText.value);
            }, 150);
        }

        // Clear input text
        function clearInput() {
            inputText.value = '';
            updatePreview('');
        }

        // Update preview with transformed text
        function updatePreview(text) {
            previewContainer.innerHTML = '';
            
            if (!text.trim()) {
                const emptyMessage = document.createElement('div');
                emptyMessage.textContent = 'Type something to see fancy text previews';
                emptyMessage.style.textAlign = 'center';
                emptyMessage.style.padding = '20px';
                emptyMessage.style.color = '#7f8c8d';
                previewContainer.appendChild(emptyMessage);
                return;
            }
            
            // Truncate long text for preview (but keep full for copy/download)
            const displayText = text.length > 300 ? text.substring(0, 300) + '...' : text;
            
            transformationList.forEach(transform => {
                const previewItem = createPreviewItem(transform, text, displayText);
                previewContainer.appendChild(previewItem);
            });
        }

        // Create a preview item for a transformation
        function createPreviewItem(transform, fullText, displayText) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            
            const previewHeader = document.createElement('div');
            previewHeader.className = 'preview-header';
            
            const previewName = document.createElement('div');
            previewName.className = 'preview-name';
            previewName.textContent = transform.name;
            previewHeader.appendChild(previewName);
            
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.innerHTML = favorites.includes(transform.id) ? '★' : '☆';
            favoriteBtn.setAttribute('aria-label', `Add ${transform.name} to favorites`);
            favoriteBtn.addEventListener('click', () => toggleFavorite(transform.id, favoriteBtn));
            previewHeader.appendChild(favoriteBtn);
            
            previewItem.appendChild(previewHeader);
            
            const previewText = document.createElement('div');
            previewText.className = 'preview-text';
            
            // Apply the transformation
            let transformedText = transform.func(fullText);
            
            // For display, use truncated version if needed
            const displayTransformedText = fullText.length > 300 ? 
                transform.func(displayText) : transformedText;
            
            // Special handling for gradient preview
            if (transform.id === 'gradient') {
                previewText.className += ' gradient-preview';
                previewText.textContent = displayTransformedText;
            } else {
                previewText.textContent = displayTransformedText;
            }
            
            previewItem.appendChild(previewText);
            
            const previewActions = document.createElement('div');
            previewActions.className = 'preview-actions';
            
            // Copy button
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn tooltip';
            copyBtn.innerHTML = 'Copy <span class="tooltiptext">Copied!</span>';
            copyBtn.setAttribute('aria-label', `Copy ${transform.name} text`);
            copyBtn.addEventListener('click', () => copyToClipboard(transformedText, copyBtn));
            previewActions.appendChild(copyBtn);
            
            // Download PNG button
            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'download-btn';
            downloadBtn.textContent = 'Download PNG';
            downloadBtn.setAttribute('aria-label', `Download ${transform.name} as PNG`);
            downloadBtn.addEventListener('click', () => downloadAsPNG(transformedText, transform.name));
            previewActions.appendChild(downloadBtn);
            
            previewItem.appendChild(previewActions);
            
            return previewItem;
        }

        // Copy text to clipboard
        function copyToClipboard(text, button) {
            navigator.clipboard.writeText(text).then(() => {
                // Show tooltip
                button.classList.add('show');
                setTimeout(() => {
                    button.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy text to clipboard');
            });
        }

        // Download text as PNG
        function downloadAsPNG(text, transformName) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            // Set canvas dimensions based on text
            const fontSize = 24;
            const padding = 20;
            
            context.font = `${fontSize}px Arial, sans-serif`;
            const textWidth = context.measureText(text).width;
            
            canvas.width = textWidth + padding * 2;
            canvas.height = fontSize + padding * 2;
            
            // Clear canvas with transparent background
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw text
            context.font = `${fontSize}px Arial, sans-serif`;
            context.fillStyle = '#333';
            context.textBaseline = 'middle';
            context.fillText(text, padding, canvas.height / 2);
            
            // Create download link
            const link = document.createElement('a');
            link.download = `${transformName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        // Toggle favorite status
        function toggleFavorite(transformId, button) {
            const index = favorites.indexOf(transformId);
            
            if (index === -1) {
                // Add to favorites
                favorites.push(transformId);
                button.innerHTML = '★';
            } else {
                // Remove from favorites
                favorites.splice(index, 1);
                button.innerHTML = '☆';
            }
            
            // Save to localStorage
            localStorage.setItem('fancyTextFavorites', JSON.stringify(favorites));
            
            // Update favorites display
            updateFavoritesDisplay();
        }

        // Update favorites display
        function updateFavoritesDisplay() {
            favoritesList.innerHTML = '';
            
            if (favorites.length === 0) {
                const emptyMessage = document.createElement('div');
                emptyMessage.textContent = 'No favorites yet. Click the star icon on any transform to add it here.';
                emptyMessage.style.color = '#7f8c8d';
                favoritesList.appendChild(emptyMessage);
                return;
            }
            
            favorites.forEach(transformId => {
                const transform = transformationList.find(t => t.id === transformId);
                if (transform) {
                    const favoriteItem = document.createElement('div');
                    favoriteItem.className = 'favorite-item';
                    favoriteItem.textContent = transform.name;
                    favoriteItem.addEventListener('click', () => {
                        inputText.focus();
                        updatePreview(inputText.value);
                    });
                    favoritesList.appendChild(favoriteItem);
                }
            });
        }

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;
        
        // Check for saved theme preference or default to light
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
        
        function updateThemeIcon(theme) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }

        // Tool card animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Apply initial styles and observe tool cards
        document.querySelectorAll('.tool-card').forEach(card => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Handle ad visibility based on screen size
        function handleAdVisibility() {
            const isMobile = window.innerWidth <= 768;
            document.querySelectorAll('.ad-unit.desktop').forEach(ad => {
                ad.style.display = isMobile ? 'none' : 'flex';
            });
            document.querySelectorAll('.ad-unit.mobile').forEach(ad => {
                ad.style.display = isMobile ? 'flex' : 'none';
            });
        }

        // Initial call and resize listener
        handleAdVisibility();
        window.addEventListener('resize', handleAdVisibility);

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>

</html>
