@echo off
docker run -d --name ffmpeg_ui --network=funique --ip 10.0.3.4 e87870823/web_backend_view:latest
pause