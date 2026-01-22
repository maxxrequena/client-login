# Ejercicio 1: Login con PIN en React Native

Este proyecto es una aplicación móvil desarrollada en **React Native CLI** y **TypeScript** que implementa un flujo de autenticación mediante PIN. La aplicación sienta las bases de una arquitectura escalable, incluyendo manejo de estado global, persistencia de datos y theming (modos claro y oscuro).

## 🚀 Objetivo del Proyecto

El objetivo principal es construir una pantalla de login con PIN numérico que, tras una validación exitosa, permite al usuario acceder a la pantalla principal de la aplicación. El proyecto demuestra un manejo robusto de la arquitectura y el estado de la aplicación.

## ✨ Funcionalidades

- **Login con PIN numérico**:
  - Ingreso de un PIN de al menos 4 dígitos.
  - Validación en tiempo real para aceptar solo números.
  - Mensajes de error claros si el PIN es incorrecto.
  - La validación es local (mock) sin necesidad de un backend.
- **Theming Dinámico**:
  - Soporte para modos **Light** y **Dark**.
  - Selector de tema disponible después de iniciar sesión.
  - El tema seleccionado se guarda y persiste entre sesiones.
- **Navegación Protegida**:
  - El usuario no puede acceder a la pantalla `Home` sin estar autenticado.

## 🛠️ Tecnologías y Librerías Utilizadas

El proyecto fue construido siguiendo los requerimientos técnicos especificados:

- **Framework**: [React Native CLI](https://reactnative.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Navegación**: [React Navigation](https://reactnavigation.org/)
- **Estado Global**: [Recoil](https://recoiljs.org/)
- **Persistencia de Datos**: [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- **Contexto de la UI**: [React Context API](https://es.react.dev/learn/passing-data-deeply-with-context) para el manejo del tema.

## 📂 Estructura del Proyecto

El código está organizado siguiendo una separación clara de responsabilidades para facilitar el mantenimiento y la escalabilidad:

```
src/
├── components/   # Componentes reutilizables (ej. botones, inputs)
├── context/      # Contexto de React (ej. ThemeContext)
├── navigation/   # Stacks de navegación y flujos de la app
├── recoil/       # Atoms y selectores para el estado global
├── screens/      # Pantallas principales (Login, Home)
└── services/     # Lógica de negocio y servicios (ej. AsyncStorage)
```

## ⚙️ Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo.

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```

3.  **Instala los pods de iOS (solo para desarrollo en macOS):**

    ```bash
    cd ios && pod install && cd ..
    ```

4.  **Inicia el Metro Bundler:**

    ```bash
    npm start
    ```

5.  **Ejecuta la aplicación en Android:**
    (Asegúrate de tener un emulador en ejecución o un dispositivo conectado)
    ```bash
    npm run android
    ```

## 📦 Build de la APK

Para generar el archivo `.apk` de depuración, puedes ejecutar el siguiente comando desde la raíz del proyecto:

```bash
cd android && ./gradlew assembleDebug
```

El archivo `app-debug.apk` se encontrará en la carpeta `android/app/build/outputs/apk/debug/`.

---

Creado por **[Tu Nombre]**.
