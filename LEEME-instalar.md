# Gastos Hormiga — versión corregida (archivos sueltos a la raíz)

Sube TODOS estos archivos juntos, al MISMO nivel (sin carpeta lib/):
index.html, sw.js, manifest.json, chart.umd.js, html2canvas.min.js,
jspdf1.min.js, html2pdf.js, icon-192.png, icon-512.png, icon.jpeg,
banner-fesc.jpeg, posgrado-unam.jpeg

## Qué se arregló
Antes las gráficas y la exportación a PDF buscaban los archivos en una
carpeta "lib/". Al subir todo suelto no los encontraba. Esta versión los
busca en la raíz, igual que como tú los subes.

## Actualizar en el teléfono
1. Sube estos archivos a tu repo (reemplazando los viejos).
2. En el celular: desinstala la app y en el navegador borra los datos del sitio.
3. Abre con internet, instala de nuevo. Ya quedan gráficas, PDF y uso sin internet.
