@echo off
echo 🚀 MOODEC - Conexión a GitHub
echo ================================

echo.
echo ✅ Repositorio Git inicializado correctamente!
echo.
echo 📋 PRÓXIMOS PASOS:
echo.
echo 1. Ve a https://github.com y crea una cuenta (si no tienes)
echo 2. Haz clic en "New repository" 
echo 3. Nombre: moodec-website
echo 4. Descripción: MOODEC - La emoción detrás de tu voz
echo 5. Selecciona "Public"
echo 6. NO marques "Add a README file"
echo 7. Haz clic en "Create repository"
echo.
echo 8. GitHub te mostrará comandos como estos:
echo.
echo    git branch -M main
echo    git remote add origin https://github.com/TU-USUARIO/moodec-website.git
echo    git push -u origin main
echo.
echo 9. Copia TU URL de GitHub y ejecuta:
echo.

set /p github_url="Pega aquí tu URL de GitHub (https://github.com/TU-USUARIO/moodec-website.git): "

if not "%github_url%"=="" (
    echo.
    echo 🔄 Configurando repositorio remoto...
    git branch -M main
    git remote add origin %github_url%
    
    echo.
    echo 📤 Subiendo archivos a GitHub...
    git push -u origin main
    
    echo.
    echo ✅ ¡Éxito! Tu sitio está en GitHub
    echo.
    echo 🌐 Para activar GitHub Pages:
    echo 1. Ve a tu repositorio en GitHub
    echo 2. Haz clic en "Settings"
    echo 3. Scroll down a "Pages"
    echo 4. En "Source" selecciona "Deploy from a branch"
    echo 5. Branch: main
    echo 6. ¡Tu sitio estará en https://TU-USUARIO.github.io/moodec-website!
) else (
    echo ❌ No ingresaste URL. Ejecuta los comandos manualmente.
)

echo.
pause
