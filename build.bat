@echo off
echo start building backend view image
docker build --no-cache -t e87870823/ffmpeg_ui -f Dockerfile .
pause