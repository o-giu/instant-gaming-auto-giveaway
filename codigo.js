// ==UserScript==
// @name        Giu - IG Auto Giveaway
// @namespace   Violentmonkey Scripts
// @match       https://www.instant-gaming.com/*
// @grant       none
// @version     2.2
// @author      Auto
// ==/UserScript==

(function() {
    'use strict';

    const links = [
        "https://www.instant-gaming.com/fr/giveaway/BOBLENNON",
        "https://www.instant-gaming.com/fr/giveaway/INSTANTGAMING",
        "https://www.instant-gaming.com/fr/giveaway/SUPREMELEADER",
        "https://www.instant-gaming.com/fr/giveaway/ICONOBLAST",
        "https://www.instant-gaming.com/fr/giveaway/bugland",
        "https://www.instant-gaming.com/fr/giveaway/GAMEMOVIELAND",
        "https://www.instant-gaming.com/fr/giveaway/CODQG",
        "https://www.instant-gaming.com/fr/giveaway/NALFEINN",
        "https://www.instant-gaming.com/fr/giveaway/VARG",
        "https://www.instant-gaming.com/fr/giveaway/skyyart",
        "https://www.instant-gaming.com/fr/giveaway/ALKOR",
        "https://www.instant-gaming.com/fr/giveaway/ROBERT",
        "https://www.instant-gaming.com/fr/giveaway/GAMEWAVE",
        "https://www.instant-gaming.com/fr/giveaway/RATSUPER",
        "https://www.instant-gaming.com/fr/giveaway/YANKA",
        "https://www.instant-gaming.com/fr/giveaway/STREAMRUNNERS",
        "https://www.instant-gaming.com/fr/giveaway/MeetTheMyth",
        "https://www.instant-gaming.com/fr/giveaway/PHENRIR",
        "https://www.instant-gaming.com/fr/giveaway/GMODFR",
        "https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGES",
        "https://www.instant-gaming.com/fr/giveaway/ACRE",
        "https://www.instant-gaming.com/fr/giveaway/BILLYCHEROKEE",
        "https://www.instant-gaming.com/fr/giveaway/LYNX",
        "https://www.instant-gaming.com/fr/giveaway/ZONALEROS",
        "https://www.instant-gaming.com/fr/giveaway/GUIGUI",
        "https://www.instant-gaming.com/fr/giveaway/PORAID",
        "https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGPT",
        "https://www.instant-gaming.com/fr/giveaway/TOMBIE",
        "https://www.instant-gaming.com/fr/giveaway/muusoo",
        "https://www.instant-gaming.com/fr/giveaway/xariel",
        "https://www.instant-gaming.com/fr/giveaway/POKEMONMILLENNIUM",
        "https://www.instant-gaming.com/fr/giveaway/AQUIYAHORA",
        "https://www.instant-gaming.com/fr/giveaway/PIVI",
        "https://www.instant-gaming.com/fr/giveaway/Seals311",
        "https://www.instant-gaming.com/fr/giveaway/vicio",
        "https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGITALIA",
        "https://www.instant-gaming.com/fr/giveaway/INFOPOINT-ITALIA",
        "https://www.instant-gaming.com/fr/giveaway/FROZ3N",
        "https://www.instant-gaming.com/fr/giveaway/ELOTRIX",
        "https://www.instant-gaming.com/fr/giveaway/NYKK3",
        "https://www.instant-gaming.com/fr/giveaway/PLAYERINSIDE",
        "https://www.instant-gaming.com/fr/giveaway/ILGATTOSULTUBO",
        "https://www.instant-gaming.com/fr/giveaway/FRANCESCOPARDINI",
        "https://www.instant-gaming.com/fr/giveaway/NU89",
        "https://www.instant-gaming.com/fr/giveaway/ITERMOSIFONI",
        "https://www.instant-gaming.com/fr/giveaway/CORYPHEUS",
        "https://www.instant-gaming.com/fr/giveaway/THETJI",
        "https://www.instant-gaming.com/fr/giveaway/deladysigner",
        "https://www.instant-gaming.com/fr/giveaway/KURU",
        "https://www.instant-gaming.com/fr/giveaway/biffa",
        "https://www.instant-gaming.com/fr/giveaway/K0MPA",
        "https://www.instant-gaming.com/fr/giveaway/instantgamingde",
        "https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGPL",
        "https://www.instant-gaming.com/fr/giveaway/snedgie",
        "https://www.instant-gaming.com/fr/giveaway/mitasims",
        "https://www.instant-gaming.com/fr/giveaway/officialinvictus",
        "https://www.instant-gaming.com/fr/giveaway/GCA",
        "https://www.instant-gaming.com/fr/giveaway/tahva",
        "https://www.instant-gaming.com/fr/giveaway/frankieslair",
        "https://www.instant-gaming.com/fr/giveaway/GIORNOGAMING",
        "https://www.instant-gaming.com/fr/giveaway/SOLOUMIDO",
        "https://www.instant-gaming.com/fr/giveaway/CYBERLUK",
        "https://www.instant-gaming.com/fr/giveaway/STELIUS",
        "https://www.instant-gaming.com/fr/giveaway/CSGOFR",
        "https://www.instant-gaming.com/fr/giveaway/EXOMADARA",
        "https://www.instant-gaming.com/fr/giveaway/KWOREY",
        "https://www.instant-gaming.com/fr/giveaway/PHOTORACERTV",
        "https://www.instant-gaming.com/fr/giveaway/ARLAN360",
        "https://www.instant-gaming.com/fr/giveaway/j0nathan",
        "https://www.instant-gaming.com/fr/giveaway/HEIKKI360",
        "https://www.instant-gaming.com/fr/giveaway/topgames",
        "https://www.instant-gaming.com/fr/giveaway/CABRAVOLADORA",
        "https://www.instant-gaming.com/fr/giveaway/DRWAL",
        "https://www.instant-gaming.com/fr/giveaway/MERTA",
        "https://www.instant-gaming.com/fr/giveaway/IMPAKT",
        "https://www.instant-gaming.com/fr/giveaway/kiszak",
        "https://www.instant-gaming.com/fr/giveaway/playluque",
        "https://www.instant-gaming.com/fr/giveaway/STRADI",
        "https://www.instant-gaming.com/fr/giveaway/poro",
        "https://www.instant-gaming.com/fr/giveaway/DESASTRESHOW",
        "https://www.instant-gaming.com/fr/giveaway/JOFRIK99",
        "https://www.instant-gaming.com/fr/giveaway/kemist",
        "https://www.instant-gaming.com/fr/giveaway/MFGAMING",
        "https://www.instant-gaming.com/fr/giveaway/heystan",
        "https://www.instant-gaming.com/fr/giveaway/drunge",
        "https://www.instant-gaming.com/fr/giveaway/Zazza23",
        "https://www.instant-gaming.com/fr/giveaway/blackpommes",
        "https://www.instant-gaming.com/pt/giveaway/quantoquevaicustar",
        "https://www.instant-gaming.com/pt/giveaway/eusouocap",
        "https://www.instant-gaming.com/fr/giveaway/LUSORKOEFFIZIENT",
        "https://www.instant-gaming.com/it/giveaway/joepad17",
        "https://www.instant-gaming.com/en/giveaway/vutomy",
        "https://www.instant-gaming.com/es/giveaway/elkai",
        "https://www.instant-gaming.com/en/giveaway/onlywaifu",
        "https://www.instant-gaming.com/en/giveaway/cryzenx",
        "https://www.instant-gaming.com/fr/giveaway/naito75",
        "https://www.instant-gaming.com/pt/giveaway/remedy",
        "https://www.instant-gaming.com/pl/giveaway/LOSIU",
        "https://www.instant-gaming.com/pt/giveaway/azhunky",
        "https://www.instant-gaming.com/fr/giveaway/ramosturbo",
        "https://www.instant-gaming.com/de/giveaway/mello",
        "https://www.instant-gaming.com/en/giveaway/pixelade",
        "https://www.instant-gaming.com/en/giveaway/carinazinhaa",
        "https://www.instant-gaming.com/en/giveaway/huebi",
        "https://www.instant-gaming.com/es/giveaway/miriampetricor"
    ];

    const style = document.createElement('style');
    style.innerHTML = `
        #ig-panel-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 280px;
            background: #1e1e1e;
            color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.6);
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            z-index: 9999999;
            overflow: hidden;
            border: 1px solid #333;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        #ig-panel-container.minimized {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #ig-panel-container.minimized .header,
        #ig-panel-container.minimized .content {
            display: none !important;
        }

        #ig-panel-container.minimized .min-icon {
            display: block;
            font-size: 28px;
            animation: pulse 2s infinite;
        }

        .min-icon { display: none; }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        .header {
            background: linear-gradient(90deg, #6200ea, #9d46ff);
            padding: 12px 15px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .header button {
            background: rgba(0,0,0,0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        }
        .header button:hover { background: rgba(0,0,0,0.4); }

        .content { padding: 15px; }

        .progress-container {
            background: #333;
            border-radius: 10px;
            height: 8px;
            width: 100%;
            margin-bottom: 12px;
            overflow: hidden;
        }
        .progress-bar {
            background: #00e676;
            height: 100%;
            width: 0%;
            transition: width 0.3s ease;
            box-shadow: 0 0 8px rgba(0, 230, 118, 0.5);
        }

        .status-info {
            font-size: 13px;
            color: #ccc;
            margin-bottom: 15px;
            text-align: center;
            line-height: 1.4;
            background: #252525;
            padding: 10px;
            border-radius: 8px;
        }
        .status-info strong { color: #fff; }

        .controls { display: flex; gap: 10px; }
        .btn {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            font-size: 13px;
            transition: transform 0.1s, opacity 0.2s;
            text-transform: uppercase;
        }
        .btn:active { transform: scale(0.96); }
        .btn:hover { opacity: 0.9; }

        .btn-start { background: #00e676; color: #004d40; }
        .btn-start.paused { background: #ffea00; color: #3e2723; }
        .btn-reset { background: #ff1744; color: white; }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.id = 'ig-panel-container';

    container.innerHTML = `
        <div class="min-icon">🎁</div>
        <div class="header">
            <span>Giu - IG Auto Giveaway</span>
            <button id="ig-minimize-btn" title="Minimizar">_</button>
        </div>
        <div class="content">
            <div class="progress-container">
                <div class="progress-bar" id="ig-progress"></div>
            </div>
            <div class="status-info" id="ig-status">
                Pronto para começar
            </div>
            <div class="controls">
                <button class="btn btn-start" id="ig-btn-start">INICIAR</button>
                <button class="btn btn-reset" id="ig-btn-reset">RESETAR</button>
            </div>
        </div>
    `;
    document.body.appendChild(container);

    const btnMinimize = document.getElementById('ig-minimize-btn');
    const progressBar = document.getElementById('ig-progress');
    const statusDiv = document.getElementById('ig-status');
    const btnStart = document.getElementById('ig-btn-start');
    const btnReset = document.getElementById('ig-btn-reset');

    let isMinimized = localStorage.getItem('ig_minimized') === 'true';
    if(isMinimized) container.classList.add('minimized');

    container.onclick = function(e) {
        if (container.classList.contains('minimized')) {
            container.classList.remove('minimized');
            localStorage.setItem('ig_minimized', 'false');
            return;
        }
    };

    btnMinimize.onclick = function(e) {
        e.stopPropagation();
        container.classList.add('minimized');
        localStorage.setItem('ig_minimized', 'true');
    };

    function updateUI() {
        const isRunning = localStorage.getItem('ig_running') === 'true';
        const currentIndex = parseInt(localStorage.getItem('ig_index') || '0');
        const total = links.length;
        const progress = Math.min((currentIndex / total) * 100, 100);

        progressBar.style.width = `${progress}%`;

        if (currentIndex >= total) {
             statusDiv.innerHTML = `✅ <strong>Concluído!</strong><br>Todos os ${total} links visitados.`;
             btnStart.innerText = 'FIM';
             btnStart.disabled = true;
             btnStart.classList.remove('paused');
             return;
        }

        if (isRunning) {
            statusDiv.innerHTML = `🚀 <strong>Rodando...</strong><br>Link ${currentIndex + 1} de ${total}`;
            btnStart.innerText = 'PAUSAR';
            btnStart.classList.add('paused');
        } else {
            statusDiv.innerHTML = `⏸️ <strong>Pausado</strong><br>Próximo: ${currentIndex + 1}/${total}`;
            btnStart.innerText = 'INICIAR';
            btnStart.classList.remove('paused');
        }
    }

    btnStart.onclick = function(e) {
        e.stopPropagation();
        const currentIndex = parseInt(localStorage.getItem('ig_index') || '0');
        if (currentIndex >= links.length) return;

        const isRunning = localStorage.getItem('ig_running') === 'true';
        if (isRunning) {
            localStorage.setItem('ig_running', 'false');
        } else {
            localStorage.setItem('ig_running', 'true');
            processQueue();
        }
        updateUI();
    };

    btnReset.onclick = function(e) {
        e.stopPropagation();
        localStorage.setItem('ig_running', 'false');
        localStorage.setItem('ig_index', '0');
        btnStart.disabled = false;
        updateUI();
    };

    function clickButton() {
        const buttons = document.querySelectorAll('a.button.validate, button.button.validate, div.button.validate');
        let clicked = false;

        for (let btn of buttons) {
            const txt = btn.innerText.toLowerCase();
            if (txt.includes('particip') || txt.includes('enter') || txt.includes('participar')) {
                btn.click();
                clicked = true;
                break;
            }
        }

        if (!clicked) {
             const manualBtn = document.querySelector('#giveaway_participate_button');
             if(manualBtn) { manualBtn.click(); clicked = true; }
        }

        return clicked;
    }

    function processQueue() {
        const isRunning = localStorage.getItem('ig_running') === 'true';
        if (!isRunning) return;

        let index = parseInt(localStorage.getItem('ig_index') || '0');

        if (index >= links.length) {
            localStorage.setItem('ig_running', 'false');
            updateUI();
            return;
        }

        const targetUrl = links[index];
        const currentUrl = window.location.href.split('?')[0];

        if (currentUrl !== targetUrl) {
            statusDiv.innerHTML = `🔄 Indo para link ${index + 1}...`;
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000);
            return;
        }

        statusDiv.innerHTML = `⚡ Tentando participar...`;

        setTimeout(() => {
            const success = clickButton();
            if (success) {
                statusDiv.innerHTML = '✅ Sucesso! Aguarde...';
            } else {
                statusDiv.innerHTML = '🔎 Botão não encontrado/Já participa';
            }

            setTimeout(() => {
                localStorage.setItem('ig_index', (index + 1).toString());
                processQueue();
            }, 3000);

        }, 2500);
    }

    updateUI();
    if (localStorage.getItem('ig_running') === 'true') {
        processQueue();
    }

})();
