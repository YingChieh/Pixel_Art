(this["webpackJsonpreact-pixel-art-ych"]=this["webpackJsonpreact-pixel-art-ych"]||[]).push([[0],{16:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(7),i=n.n(o),a=(n(16),n(3)),s=n(1),l=function(t){var e=t.currentColor,n=t.cells,c=t.setCells,r=t.initGrid,o=function(t){return function(){c(n.map((function(n,c){return c===t?{color:e}:n})))}};return Object(s.jsx)("div",{className:"grid "+r,children:n.map((function(t,e){return Object(s.jsx)("div",{style:{background:t.color},className:"cell",onClick:o(e)},e)}))})},u=function(t){var e=t.currentColor,n=t.setCurrentColor;return Object(s.jsx)("input",{className:"colorPicker",type:"color",onChange:function(t){n(t.target.value)},value:e})},d=n(11),b=n(10),j=n.n(b),f=[64,144,256,1024],m=Array.from({length:f[0]},(function(){return{color:"#ffffff"}}));var O=Object(d.a)((function(){var t=Object(c.useState)("grid-8"),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(m),i=Object(a.a)(o,2),d=i[0],b=i[1],O=Object(c.useState)("#ff0000"),h=Object(a.a)(O,2),v=h[0],C=h[1],x=Object(c.useState)([]),p=Object(a.a)(x,2),g=p[0],k=p[1],N=function(t,e){r(e),w(t),b(m)},w=function(t){m=Array.from({length:f[t]},(function(){return{color:"#ffffff"}}))},y=function(t){var e=document.getElementsByClassName("grid")[0];j()(e).then((function(e){var n=e.toDataURL("image/"+t,1);G(n,"sexported-vis."+t)}))},G=function(t,e){var n=window.document.createElement("a");n.href=t,n.download=e,n.style="display:none;",(document.body||document.documentElement).appendChild(n),"function"===typeof n.click?n.click():(n.target="_blank",n.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),URL.revokeObjectURL(n.href),n.remove()};return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btnGrid",onClick:function(){return N(0,"grid-8")},children:"8 X 8"}),Object(s.jsx)("button",{className:"btnGrid",onClick:function(){return N(1,"grid-12")},children:"12 X 12"}),Object(s.jsx)("button",{className:"btnGrid",onClick:function(){return N(2,"grid-16")},children:"16 X 16"}),Object(s.jsx)("button",{className:"btnGrid",onClick:function(){return N(3,"grid-32")},children:"32 X 32"})]}),Object(s.jsxs)("div",{className:"pickerContainer",children:[Object(s.jsx)(u,{currentColor:v,setCurrentColor:C}),Object(s.jsx)("button",{className:"addList",onClick:function(){return t=v,void k(g.slice(-7).concat(t));var t},children:"Add to List"})]}),Object(s.jsx)("div",{className:"colorListContainer",children:g.map((function(t,e){return Object(s.jsx)("div",{className:"colorList",onClick:function(){return C(t)},style:{background:t}},e)}))}),Object(s.jsxs)("div",{className:"gridWrap",children:[Object(s.jsx)(l,{currentColor:v,cells:d,setCells:b,initGrid:n}),Object(s.jsxs)("div",{className:"downloadContainer",children:[Object(s.jsx)("button",{className:"button1",onClick:function(){return y("jpg")},children:"Download as JPG"}),Object(s.jsx)("button",{className:"button2",onClick:function(){return y("png")},children:"Download as PNG"}),Object(s.jsx)("button",{className:"button3",onClick:function(){return y("gif")},children:"Download as GIF"})]})]})]})}));i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.506359da.chunk.js.map