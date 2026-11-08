# Control de Gastos Hormiga — App sin internet e instalable (v2)

Esta versión funciona **sin conexión**, se **auto-ofrece instalar** (botón "Instalar"), muestra **"✓ Lista para usar sin internet"** cuando ya quedó guardada y **limpia sola** cualquier versión vieja.

## Archivos (súbelos TODOS, con la carpeta `lib`)

```
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
icon.jpeg
banner-fesc.jpeg
posgrado-unam.jpeg
lib/chart.umd.js
lib/html2canvas.min.js
lib/jspdf1.min.js
lib/html2pdf.js
```

## Pasos (en orden)

### 1) GitHub
- **Add file → Upload files**, arrastra todos los archivos **y la carpeta `lib`**, acepta reemplazar, **Commit changes**.
- Verifica que la carpeta **`lib`** quede al lado de `index.html` (ábrela: 4 archivos).

### 2) En el teléfono — borra lo viejo primero
- Si ya tenías el ícono, **desinstálalo**.
- Borra los datos del sitio:
  - **Android (Chrome):** candado/ⓘ junto a la dirección → *Datos del sitio* → *Borrar y restablecer*.
  - **iPhone (Safari):** Ajustes → Safari → Avanzado → Datos de sitios web → tu página → eliminar.

### 3) Instalar
- Abre la liga **con internet**; espera el aviso verde **"✓ Lista para usar sin internet"**.
- Toca el botón **"Instalar"** (iPhone: **Compartir → Agregar a inicio**).

### 4) Probar
- Cierra, **quita el internet** y abre el ícono: debe cargar.

## Comprobar que `lib` subió bien
Con internet, usa una función que genere **gráfica** o **PDF**; si funcionan, `lib` está bien.

## Al actualizar en el futuro
Sube el `sw.js` cambiando la versión (`gastos-hormiga-v2` → `v3`) para que el teléfono tome la nueva.
