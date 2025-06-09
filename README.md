# Explorador de Productos

Una aplicación web en **React** para explorar, filtrar y analizar un catálogo de productos. Permite buscar, filtrar por categoría, ordenar, paginar, exportar datos y visualizar estadísticas interactivas con gráficos.

---

## 🚀 Características principales

- **Búsqueda** dinámica por nombre de producto.
- **Filtrado** por categoría seleccionable.
- **Ordenamiento** configurable por precio u otros campos, en orden ascendente o descendente.
- **Paginación** para navegar cómodamente grandes listas.
- **Modo oscuro/claro** con detección automática y toggle manual.
- **Exportar productos** filtrados como archivo JSON.
- **Panel de estadísticas** con datos resumidos y gráficos interactivos (barras, líneas, pastel).
- **Carga diferida (_lazy loading_)** de componentes pesados para optimizar el rendimiento.

---

## 🛠️ Tecnologías y librerías utilizadas

- **React** con hooks (`useState`, `useEffect`, `useRef`, `Suspense`, `lazy`)
- **Axios** para la carga de datos desde API externa (`https://dummyjson.com/products`)
- **Recharts** para visualización gráfica
- **Tailwind CSS** para estilos rápidos y responsivos
- **JSON export** para descargar datos filtrados
- **Git/GitHub** para control de versiones

---

## 🏗️ Componentes principales y su función

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

## 📌 Condiciones de desarrollo del proyecto

### 📈 Desarrollo incremental obligatorio
El desarrollo debe realizarse progresivamente, incorporando nuevas funcionalidades sin romper lo previamente implementado. Se debe respetar una arquitectura de componentes y lógica coherente.

### 🗂️ Uso obligatorio de repositorio GitHub
Cada estudiante debe crear un único repositorio en **GitHub** para el proyecto. El desarrollo se realizará exclusivamente en dicho repositorio, que servirá como registro evolutivo del proyecto.

---

## 📅 Cronograma por semanas

### Semana 1 – React + Axios + Búsqueda
**Objetivo:** Consolidar fundamentos de React y consumir la API **DummyJSON** con Axios.  
**Tareas:**
- Obtener productos desde [DummyJSON](https://dummyjson.com/products?limit=100).
- Mostrar lista de productos con nombre y precio.
- Implementar barra de búsqueda.
- Mostrar mensajes si no hay coincidencias.
- Agregar botón para mostrar/ocultar estadísticas.

### Semana 2 – Tailwind + Componentización
**Objetivo:** Aplicar estilos y dividir la aplicación en componentes reutilizables.  
**Tareas:**
- Configurar **Tailwind CSS**.
- Crear componentes: `ProductList`, `ProductItem`, `StatsPanel`, `SearchBar`, etc.
- Implementar **modo oscuro** con `useRef`.

### Semana 3 – Filtrado y Ordenamiento
**Objetivo:** Incorporar filtros y ordenamiento dinámicos.  
**Tareas:**
- Agregar **filtro** por categoría (_category_ de DummyJSON).
- Implementar **ordenamiento** por precio y rating (ascendente/descendente).

### Semana 4 – Estadísticas Detalladas
**Objetivo:** Procesamiento de datos y estadísticas básicas.  
**Tareas:** Mostrar:
- **Precio promedio, máximo y mínimo**.
- **Cantidad de productos por categoría**.
- **Cantidad de productos con stock > 50, rating > 4.5**, etc.
- **Producto más caro y más barato por categoría**.
- **Promedio de rating general y por categoría**.

### Semana 5 – Visualización de Datos
**Objetivo:** Incluir gráficos interactivos con **Recharts**.  
**Tareas:**
- Gráfico de barras: **cantidad de productos por categoría**.
- Gráfico de líneas: **evolución simulada de precios**.
- Gráfico de pastel: **proporción de productos según stock**.

### Semana 6 – Exportación y UX
**Objetivo:** Optimizar experiencia de usuario y agregar exportación de datos.  
**Tareas:**
- **Exportar** productos filtrados a **JSON, CSV o Excel**.
- Implementar **paginación** o carga perezosa (_lazy loading_).
- Mejorar tiempos de carga y jerarquía visual.

---

## 🛠️ Instalación y uso

Sigue estos pasos para clonar, instalar y ejecutar la aplicación localmente:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git

# Entrar en la carpeta del proyecto
cd tu-repositorio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

---
## 🔗 API utilizada
Los datos se obtienen desde la API pública DummyJSON, que ofrece información sobre productos con nombre, precio, categoría, stock, rating y más.
