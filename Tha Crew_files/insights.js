/**
 * Fastly Insights.js
 * Build generated: 2019-06-21
 * https://github.com/fastly/insights.js
 *
 * Copyright (c) 2019, Fastly, Inc. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

!function(){"use strict";function t(t,e){return e.split(".").every(function(e){return"object"===(void 0===t?"undefined":o(t))&&null!==t&&e in t&&void 0!==t[e]&&(t=t[e],!0)})}function e(){var t=document.getElementsByTagName("script")[0],e=document.createElement("script");e.src=n.build,e.onload=function(){"function"==typeof window.FASTLY.init&&window.FASTLY.init(n)},t.parentNode.insertBefore(e,t)}var n={apiKey:"040e3997-282c-4275-ba9b-a406ce78b133",session:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNDBlMzk5Ny0yODJjLTQyNzUtYmE5Yi1hNDA2Y2U3OGIxMzMiLCJleHAiOjE1NjI0ODMxMzIsImlhdCI6MTU2MjQ4MzA3Mn0.K_1fZRq7qRFzBJNm0aQGrCacH1tGJIJzKvdyMeHdtfA",settings:{"hosts": {"host": "www.fastly-insights.com","lookup": "eu.u.fastly-insights.com","pop": "pops.fastly-insights.com",},"sample":0.750},build:"https://www.fastly-insights.com/static/lib.de680de151704aac56a182e18e404fc69561c4d5.js",server:{"datacenter": "JNB"},tasks:[{"id": "pdata","type": "fetch","host": "pdata.pops.fastly-insights.com"},{"id": "anycast","type": "fetch","host": "any-v4.pops.fastly-insights.com"}],pops:['JNB', 'CPT', 'LHR', 'FRA', 'HHN', 'AMS', 'LCY', 'CPH', 'MXP', 'CDG', 'MAD', 'BMA', 'OSL', 'HEL', 'LGA', 'JFK', 'EWR', 'BOS', 'IAD', 'YUL', 'DCA', 'BWI', 'YYZ', 'ATL', 'ORD', 'MDW', 'CHI', 'PDK', 'FTY', 'CMH', 'MIA', 'DAL', 'DFW', 'IAH', 'MSP', 'FJR', 'DEN', 'SEA', 'BUR', 'PAO', 'LAX', 'YVR', 'SJC', 'MAA', 'BOM', 'SIN', 'DEL', 'QPG', 'GRU', 'GIG', 'CWB', 'HKG', 'SCL', 'NRT', 'ITM', 'HND', 'TYO', 'EZE', 'AKL', 'WLG', 'SYD', 'BNE', 'MEL', 'PER']},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n.ctm=t(window,"Promise")&&t(window,"Set")&&t(window,"fetch")&&t(window,"performance.getEntries");i&&function(t){return parseFloat(Math.random().toFixed(2))<=t}(n.settings.sample)&&function(t){"complete"!==document.readyState?document.addEventListener("readystatechange",function(){"complete"===document.readyState&&t()}):t()}(function(){return setTimeout(e,n.settings.delay||0)}),window.FASTLY=window.FASTLY||{},window.FASTLY.ctm=i,window.FASTLY.config=n}();
