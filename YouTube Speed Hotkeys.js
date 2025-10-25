// ==UserScript==
// @name         YouTube Speed Hotkeys
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Управление скоростью плеера YouTube с помощью Shift+1, Shift+2 и Shift+3
// @author       Khvalimov Maksim
// @match        *://www.youtube.com/*
// @icon         https://images.squarespace-cdn.com/content/v1/5a9dd11e2714e52449908751/1591907017940-3BU2VFMCN88O45KKK0O6/hd-youtube-logo-png-transparent-background-20.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Клавиши 1, 2 и 3 меняют скорость видео
    const SPEED_KEY_MAP = {
        'Digit1': 1,    // Скорость 1x — обычная
        'Digit2': 1.25, // Скорость 1.25x — чуть быстрее
        'Digit3': 2     // Скорость 2x — в два раза быстрее
    };

    // Функция, чтобы поменять скорость воспроизведения видео
    function setPlaybackRate(rate) {
        const video = document.querySelector('video'); // Находим видео на странице
        if (video) {
            video.playbackRate = rate; // Устанавливаем нужную скорость
        }
    }

    // Когда нажимаем клавишу
    window.addEventListener('keydown', (e) => {
        if (!e.shiftKey) return; // Работает только если зажата клавиша Shift
        // Не меняем скорость, если пишем в поле ввода или редактируем текст
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

        const rate = SPEED_KEY_MAP[e.code]; // Проверяем, есть ли скорость для нажатой клавиши
        if (rate) {
            e.preventDefault(); // Отменяем стандартное действие клавиши
            setPlaybackRate(rate); // Меняем скорость видео
        }
    });

})();




