#!/bin/bash

HTTP 405 Method Not Allowed
Allow: POST, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "detail": "Method \"GET\" not allowed."
}



# Function to check if a port is available
check_port() {
  local port=$1
  lsof -i :$port > /dev/null
}

# Function to find an available port
find_available_port() {
  local port=$1
  while check_port $port; do
    ((port++))
  done
  echo $port
}

# Function to gracefully terminate a process using a port
terminate_process() {
  local port=$1
  local pid=$(lsof -t -i :$port)
  if [ -n "$pid" ]; then
    echo "Terminating process using port $port (PID: $pid)..."
    kill -15 $pid
    sleep 2
    # Check again if the process is terminated
    if lsof -i :$port > /dev/null; then
      echo "Failed to terminate the process. Please manually terminate the process using port $port."
      exit 1
    else
      echo "Process terminated successfully."
    fi
  fi
}

# Terminate any process using port 8000
terminate_process 8000

# Start Django Backend
echo "Starting Django Backend..."
port=8000
cd Backend/Hello
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver $port &

# Navigate back to the main project directory
cd ../../

# Start React + Vite Frontend
echo "Starting React + Vite Frontend..."
cd Lux_Watches
npm install
npm run dev

