# Tattoo & Lashes Nails - Links Web Page

Este es el repositorio de la página de enlaces rápidos de **Tattoo & Lashes Nails**, diseñada bajo una estética premium, moderna y responsiva. Cuenta con efectos de glassmorphism, luces de neón en degradados morados/rosas y micro-interacciones móviles.

---

## 📂 Arquitectura del Proyecto

El proyecto está diseñado bajo una arquitectura limpia y separada (Separation of Concerns), ideal para un alto rendimiento y mantenibilidad:

```text
Tatto & Lashes Nails Web Page/
├── index.html          # Estructura principal y contenido semántico (HTML5)
├── README.md           # Guía de inicio y documentación de Git
└── public/
    ├── css/
    │   └── style.css   # Estilos responsivos, animaciones y tokens de diseño (CSS)
    ├── js/
    │   └── main.js     # Interacciones móviles y scripts de seguimiento (JS)
    └── img/
        └── logo.jpeg   # Logotipo personalizado del estudio
```

---

## 🚀 Cómo Iniciar el Proyecto en otro Equipo

Al tratarse de una web estática pura (HTML, CSS y JS vanilla), no requiere instalar dependencias pesadas. Puedes levantar un servidor local rápido utilizando cualquiera de los siguientes métodos:

### Opción 1: Con Python (Recomendado)
Si tienes Python instalado, abre la terminal en la carpeta raíz del proyecto y ejecuta:

```bash
python -m http.server 8080
```
Una vez ejecutado, abre tu navegador e ingresa a: **`http://localhost:8080`**

### Opción 2: Con Node.js (NPX)
Si usas Node.js, puedes levantar un servidor sin instalar nada globalmente ejecutando:

```bash
npx http-server -p 8080
```
Una vez ejecutado, abre tu navegador e ingresa a: **`http://localhost:8080`**

### Opción 3: Extensión VS Code (Live Server)
1. Abre la carpeta del proyecto en **VS Code**.
2. Instala la extensión **Live Server** (creada por Ritwick Dey).
3. Haz clic en el botón **"Go Live"** en la barra de estado inferior derecha de VS Code. Levantará el servidor automáticamente (usualmente en el puerto `5500`).

---

## 🖥️ Cómo Subir el Proyecto a Git

Para subir e iniciar el control de versiones en una plataforma como GitHub, GitLab o Bitbucket:

1. **Inicializar el repositorio local**:
   ```bash
   git init
   ```

2. **Añadir los archivos al área de preparación**:
   ```bash
   git add .
   ```

3. **Crear el primer Commit**:
   ```bash
   git commit -m "feat: initial commit - tattoo & lashes nails links web page"
   ```

4. **Crear el repositorio en tu plataforma Git (e.g. GitHub) y copiar la URL de origen**:
   ```bash
   # Vincular tu repositorio local con el remoto
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   ```

5. **Renombrar la rama principal a `main` (estándar moderno)**:
   ```bash
   git branch -M main
   ```

6. **Subir los cambios**:
   ```bash
   git push -u origin main
   ```

Una vez subido, en cualquier otra máquina solo tendrás que clonar el proyecto usando:
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```
Y seguir las instrucciones de la sección **"Cómo Iniciar el Proyecto"**.
