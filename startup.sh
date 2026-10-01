#!/bin/sh
set -eu
cd /workspace

# Check if dev server is already running
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  echo "Dev server already running on port 8080"
  exit 0
fi

# Start the dev server in background
echo "Starting dev server..."
npm run dev >> /tmp/app-startup.log 2>&1 &

# Wait for server to be ready (max 30 seconds)
max_attempts=30
attempt=0
while [ $attempt -lt $max_attempts ]; do
  if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
    echo "Dev server is running"
    exit 0
  fi
  attempt=$((attempt + 1))
  sleep 1
done

echo "Warning: Dev server startup timeout after 30 seconds"
exit 0
