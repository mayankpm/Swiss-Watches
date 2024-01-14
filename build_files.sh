echo "BUILD STARTED"
python3 manage.py collectstatic --noinput --clear
echo "BUILD ENDED"