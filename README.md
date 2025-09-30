# Explorador de Productos

Una aplicación web en **React** para explorar, filtrar y analizar un catálogo de productos. Permite buscar, filtrar por categoría, ordenar, paginar, exportar datos y visualizar estadísticas interactivas con gráficos.

---

##  Características principales

- **Búsqueda** dinámica por nombre de producto.
- **Filtrado** por categoría seleccionable.
- **Ordenamiento** configurable por precio u otros campos, en orden ascendente o descendente.
- **Paginación** para navegar cómodamente grandes listas.
- **Modo oscuro/claro** con detección automática y toggle manual.
- **Exportar productos** filtrados como archivo JSON.
- **Panel de estadísticas** con datos resumidos y gráficos interactivos (barras, líneas, pastel).
- **Carga diferida (_lazy loading_)** de componentes pesados para optimizar el rendimiento.

---

##  Tecnologías y librerías utilizadas

- **React** con hooks (`useState`, `useEffect`, `useRef`, `Suspense`, `lazy`)
- **Axios** para la carga de datos desde API externa (`https://dummyjson.com/products`)
- **Recharts** para visualización gráfica
- **Tailwind CSS** para estilos rápidos y responsivos
- **JSON export** para descargar datos filtrados
- **Git/GitHub** para control de versiones

---

##  Componentes principales y su función

- **SearchBar**: barra de búsqueda para filtrar productos por título.
- **ProductList**: listado visual de productos.
- **ToggleButton**: botón para activar/desactivar modo oscuro.
- **Pagination**: controles para cambiar de página.
- **Filters**: selección de categoría y opciones de ordenamiento.
- **Message**: notificaciones temporales de éxito o error.
- **MainContent**: contenedor principal para mostrar los productos filtrados.
- **NoProductsFound**: mensaje mostrado cuando no hay productos que coincidan con el filtro.
- **StatsPanel** (_lazy loading_): resumen estadístico de productos filtrados.
- **ChartsPanel** (_lazy loading_): gráficos visuales que muestran datos de productos.



---

#  Información importante para clonar y revisar el repositorio

##  Archivos rastreados por Git
El repositorio incluye correctamente los archivos del proyecto, como `README.md`, `package.json`, `App.jsx`, entre otros.

##  Estructura del proyecto
El proyecto se encuentra dentro de la carpeta `pro.int.3.abp/`, la cual a su vez está dentro de `pro.int.ev3.abp.f/`. Esto significa que al clonar el repositorio, deberá navegar a esa ruta para acceder al código fuente principal.

##  Verificación de estructura
Si nota que la carpeta `pro.int.3.abp/` no contiene el proyecto esperado o parece estar en una ruta incorrecta, puede verificar si los archivos deberían estar en la raíz del repositorio. De ser necesario, puede moverlos para facilitar la revisión.


## Instalar las dependencias

Una vez dentro de la carpeta del proyecto, ejecutar:

```bash
npm install

## Correr el proyecto
npm run dev

---
## 🔗 API utilizada
Los datos se obtienen desde la API pública DummyJSON, que ofrece información sobre productos con nombre, precio, categoría, stock, rating y más.
