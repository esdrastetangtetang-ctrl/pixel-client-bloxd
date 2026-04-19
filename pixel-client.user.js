// ==UserScript==
// @name         Pixel client for bloxd.io
// @namespace    http://tampermonkey.net
// @version      1.0.0
// @description  Closet cheat client for bloxd.io (Autoclicker, Auto-E, Fake Aim Assist, CPS Shower, Title)
// @author       Mardal_
// @match        https://*.bloxd.io/*
// @icon         https://png.pngtree.com/png-clipart/20220918/original/pngtree-letter-p-icon-png-image_8622509.png
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
