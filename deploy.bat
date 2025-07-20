@echo off
echo 🚀 MOODEC - Script de Deployment para Windows
echo ===========================================

REM Verificar si Git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git no está instalado. Por favor instala Git primero.
    echo    Descarga desde: https://git-scm.com/
    pause
    exit /b 1
)

REM Inicializar repositorio Git
echo 📁 Inicializando repositorio Git...
git init

REM Agregar todos los archivos
echo 📦 Agregando archivos al repositorio...
git add .

REM Hacer commit inicial
echo 💾 Creando commit inicial...
git commit -m "🚀 Initial commit: MOODEC Website v1.0"

echo.
echo ✅ Repositorio Git creado exitosamente!
echo.
echo 📋 PRÓXIMOS PASOS:
echo 1. Ve a https://github.com y crea una cuenta (si no tienes)
echo 2. Crea un nuevo repositorio llamado 'moodec-website'
echo 3. Copia el repositorio URL que te den
echo 4. Ejecuta estos comandos:
echo.
echo    git remote add origin https://github.com/TU-USUARIO/moodec-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 5. Ve a Settings ^> Pages en tu repositorio
echo 6. Selecciona 'Deploy from a branch' ^> main
echo 7. ¡Tu sitio estará en https://TU-USUARIO.github.io/moodec-website!
echo.
echo 🎉 ¡Listo para deployment!
echo.
pause
