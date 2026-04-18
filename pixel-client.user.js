// ==UserScript==
// @name         Pixel client for bloxd.io
// @namespace    http://tampermonkey.net
// @version      1.0.0
// @description  Closet cheat client for bloxd.io (Autoclicker, Auto-E, Fake Aim Assist, CPS Shower, Title)
// @author       Mardal_
// @match        https://*.bloxd.io/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    alert('🟢 Pixel Client: Injection succefull! 🟢');
    console.log('🟢 Pixel Client Loaded by Mardal_ 🟢');

    let myButton = document.createElement('button');
    myButton.innerHTML = 'Menu OFF';
    myButton.style.position = 'fixed';
    myButton.style.top = '20px';
    myButton.style.left = '500px';
    myButton.style.color = 'white';
    myButton.style.zIndex = '10000';
    myButton.style.padding = '10px';
    myButton.style.cursor = 'pointer';
    myButton.style.backgroundColor = 'red';
    myButton.style.border = 'none';
    myButton.style.borderRadius = '5px';
    myButton.style.fontWeight = 'bold';
    document.body.appendChild(myButton);

    const panel = document.createElement('div');
    panel.id = 'pixel-client-panel';
    panel.style.position = 'fixed';
    panel.style.top = '70px';
    panel.style.left = '500px';
    panel.style.zIndex = '10000';
    panel.style.backgroundColor = 'rgba(10,10,10,0.9)';
    panel.style.color = 'white';
    panel.style.padding = '15px';
    panel.style.width = '220px';
    panel.style.border = '2px solid cyan';
    panel.style.borderRadius = '8px';
    panel.style.fontFamily = 'monospace';
    panel.style.display = 'none';
    panel.innerHTML = '<div style="text-align:center;margin-bottom:10px;color:cyan;font-weight:bold;">PIXEL SETTINGS</div>';
    document.body.appendChild(panel);

    myButton.onclick = function() {
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
            myButton.innerHTML = 'Menu ON';
            myButton.style.backgroundColor = 'green';
        } else {
            panel.style.display = 'none';
            myButton.innerHTML = 'Menu OFF';
            myButton.style.backgroundColor = 'red';
        }
    };
    function createMenuButton(text) {
        let btn = document.createElement('button');
        btn.innerHTML = text;
        btn.style.width = '100%';
        btn.style.backgroundColor = '#222';
        btn.style.color = 'white';
        btn.style.border = '1px solid cyan';
        btn.style.padding = '10px';
        btn.style.marginTop = '8px';
        btn.style.cursor = 'pointer';
        btn.style.borderRadius = '4px';
        btn.style.transition = '0.3s';
        panel.appendChild(btn);
        return btn;
    }

    let btncps = createMenuButton('CPS Shower : [OFF]');
    btncps.onclick = function() {
        let isOn = btncps.innerHTML.includes('[OFF]');
        btncps.innerHTML = isOn ? 'CPS Shower : [ON]' : 'CPS Shower : [OFF]';
        btncps.style.backgroundColor = isOn ? 'green' : '#222';
    };

    let btnaim = createMenuButton('Fake Aim Assist : [OFF]');
    btnaim.onclick = function() {
        let isOn = btnaim.innerHTML.includes('[OFF]');
        btnaim.innerHTML = isOn ? 'Fake Aim Assist : [ON]' : 'Fake Aim Assist : [OFF]';
        btnaim.style.backgroundColor = isOn ? 'green' : '#222';
        aimtext.style.display = isOn ? 'block' : 'none';
    };
    let btnauto = createMenuButton('Autoclicker : [OFF]');
    let clics = null;
    btnauto.onclick = function() {
        if (clics === null) {
            clics = setInterval(() => {
                let game = document.querySelector('canvas');
                if (game) {
                    const x = window.innerWidth / 2;
                    const y = window.innerHeight / 2;
                    const opts = { bubbles: true, button: 0, clientX: x, clientY: y };

                    game.dispatchEvent(new MouseEvent('mousedown', opts));
                    game.dispatchEvent(new MouseEvent('mouseup', opts));
                    game.dispatchEvent(new MouseEvent('click', opts));
                }
            }, 33); // 30 CPS
            btnauto.innerHTML = 'Autoclicker : [ON]';
            btnauto.style.backgroundColor = 'green';
        } else {
            clearInterval(clics);
            clics = null;
            btnauto.innerHTML = 'Autoclicker : [OFF]';
            btnauto.style.backgroundColor = '#222';
        }
    };


    let btnAutoE = createMenuButton('Auto-Loot [E] : [OFF]');
    let eInterval = null;
    btnAutoE.onclick = function() {
        if (eInterval === null) {
            eInterval = setInterval(() => {
                const opts = { key: 'e', code: 'KeyE', keyCode: 69, bubbles: true };
                document.dispatchEvent(new KeyboardEvent('keydown', opts));
                document.dispatchEvent(new KeyboardEvent('keyup', opts));
            }, 33);
            btnAutoE.innerHTML = 'Auto-Loot [E] : [ON]';
            btnAutoE.style.backgroundColor = 'green';
        } else {
            clearInterval(eInterval);
            eInterval = null;
            btnAutoE.innerHTML = 'Auto-Loot [E] : [OFF]';
            btnAutoE.style.backgroundColor = '#222';
        }
    };


    let titleBtn = createMenuButton('Pixel Title : [OFF]');
    titleBtn.onclick = function() {
        let isOn = titleBtn.innerHTML.includes('[OFF]');
        titleBtn.innerHTML = isOn ? 'Pixel Title : [ON]' : 'Pixel Title : [OFF]';
        titleBtn.style.backgroundColor = isOn ? 'green' : '#222';
        text.style.display = isOn ? 'block' : 'none';
    };


    let Xbtn = createMenuButton('FERMER');
    Xbtn.style.border = '1px solid red';
    Xbtn.style.marginTop = '15px';
    Xbtn.onclick = function() {
        panel.style.display = 'none';
        myButton.innerHTML = 'Menu OFF';
        myButton.style.backgroundColor = 'red';
    };


    const text = document.createElement('div');
    text.textContent = 'Pixel Client V1.0';
    text.style.position = 'fixed';
    text.style.top = '10px';
    text.style.left = '20px';
    text.style.zIndex = '9999';
    text.style.color = 'cyan';
    text.style.fontSize = '25px';
    text.style.fontWeight = 'bold';
    text.style.textShadow = '2px 2px 4px black';
    text.style.pointerEvents = 'none';
    text.style.display = 'none';
    document.body.appendChild(text);

    const aimtext = document.createElement('div');
    aimtext.textContent = '-●-';
    aimtext.style.position = 'fixed';
    aimtext.style.top = '50%';
    aimtext.style.left = '50%';
    aimtext.style.transform = 'translate(-50%, -50%)';
    aimtext.style.color = 'rgba(255, 0, 0, 0.7)';
    aimtext.style.zIndex = '9999';
    aimtext.style.fontSize = '20px';
    aimtext.style.pointerEvents = 'none';
    aimtext.style.display = 'none';
    document.body.appendChild(aimtext);

})();
