echo "DJANGO BUILD STARTED"
python3 manage.py collectstatic --noinput --clear
echo "DJANGO BUILD ENDED"

echo "VITE BUILD STARTED"
cd Lux_Watches
npm run build
echo "VITE BUILD ENDED"
