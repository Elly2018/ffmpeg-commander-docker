// https://en.wikipedia.org/wiki/Comparison_of_video_container_formats
const form = {
  protocols: [
    { name: 'File', value: 'movie.mp4' },
    { name: 'FTP', value: 'ftp://[user[:password]@]server[:port]/path/to/remote/movie.mp4' },
    { name: 'HTTP', value: 'http://server:port/movie.mp4' },
    { name: 'HTTPS', value: 'https://server:port/movie.mp4' },
    { name: 'RTMP', value: 'rtmp://[username:password@]server[:port][/app][/instance][/playpath]' },
    { name: 'SRT', value: 'srt://hostname:port[?options]' },
    { name: 'TCP', value: 'tcp://hostname:port[?options]' },
    { name: 'UDP', value: 'udp://hostname:port[?options]' },
    { name: 'Decklink', value: 'IN_1' },
  ],
  containers: {
    video: [
      { name: 'MP4', value: 'mp4' },
      { name: 'MKV', value: 'mkv' },
      { name: 'WebM', value: 'webm' },
      { name: 'MPG', value: 'mpg' },
      { name: 'AVI', value: 'avi' },
      { name: 'OGV', value: 'ogv' },
      { name: 'FLV', value: 'flv' },
      { name: 'Decklink', value: 'decklink' },
    ],
    audio: [
      { name: 'MP3', value: 'mp3' },
      { name: 'M4A', value: 'm4a' },
      { name: 'OGG', value: 'ogg' },
      { name: 'FLAC', value: 'flac' },
      { name: 'WAV', value: 'wav' },
    ],
  },
  clip: [
    { name: 'None', value: false },
    { name: 'Enabled', value: true },
  ],
  codecs: {
    video: [
      { name: 'x264', value: 'x264', supported: ['mp4', 'mkv', 'avi', 'decklink'] },
      { name: 'x265', value: 'x265', supported: ['mp4', 'mkv', 'avi', 'decklink'] },
      { name: 'h264_nvenc (Nvidia NVENC)', value: 'h264_nvenc', supported: ['mp4', 'decklink'] },
      { name: 'hevc_nvenc (Nvidia NVENC)', value: 'hevc_nvenc', supported: ['mp4', 'decklink'] },
      { name: 'AV1', value: 'av1', supported: ['mp4', 'mkv', 'decklink'] },
      { name: 'VP8', value: 'vp8', supported: ['mp4', 'webm', 'mkv', 'avi', 'decklink'] },
      { name: 'VP9', value: 'vp9', supported: ['mp4', 'webm', 'mkv', 'avi', 'decklink'] },
      { name: 'copy', value: 'copy', supported: null },
    ],
    audio: [
      { name: 'AAC', value: 'aac', supported: ['mp4', 'mp3', 'm4a', 'mkv', 'avi', 'flv', 'decklink'] },
      { name: 'AC3', value: 'ac3', supported: ['mp4', 'mkv', 'avi', 'decklink'] },
      { name: 'DTS', value: 'dts', supported: ['mp4', 'mkv', 'avi', 'decklink'] },
      { name: 'Vorbis', value: 'vorbis', supported: ['mp4', 'mkv', 'ogg', 'webm', 'decklink'] },
      { name: 'Opus', value: 'opus', supported: ['mp4', 'mkv', 'ogg', 'webm', 'decklink'] },
      { name: 'LAME', value: 'lame', supported: ['mp3', 'mkv', 'decklink'] },
      { name: 'ALAC', value: 'alac', supported: ['mp4', 'mkv', 'm4a', 'avi', 'decklink'] },
      { name: 'FLAC', value: 'flac', supported: ['flac', 'mkv', 'avi', 'decklink'] },
      { name: 'PCM', value: 'pcm', supported: ['mkv', 'decklink'] },
      { name: 'Copy', value: 'copy', supported: null },
      { name: 'None', value: 'none', supported: null },
    ],
  },
  presets: [
    { name: 'Placebo', value: 'placebo', supported: ['x264', 'x265', 'decklink'] },
    { name: 'Very Slow', value: 'veryslow', supported: ['x264', 'x265', 'decklink'] },
    { name: 'Slower', value: 'slower', supported: ['x264', 'x265', 'decklink'] },
    { name: 'Slow', value: 'slow', supported: ['x264', 'x265', 'h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'Medium', value: 'medium', supported: ['x264', 'x265', 'h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'Fast', value: 'fast', supported: ['x264', 'x265', 'h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'Faster', value: 'faster', supported: ['x264', 'x265', 'decklink'] },
    { name: 'Very Fast', value: 'veryfast', supported: ['x264', 'x265', 'decklink'] },
    { name: 'Super Fast', value: 'superfast', supported: ['x264', 'x265', 'decklink'] },
    { name: 'Ultra Fast', value: 'ultrafast', supported: ['x264', 'x265', 'decklink'] },
    { name: 'hp', value: 'hp', supported: ['h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'hq', value: 'hq', supported: ['h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'bd', value: 'bd', supported: ['h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'lossless', value: 'lossless', supported: ['h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'losslesshp', value: 'losslesshp', supported: ['h264_nvenc', 'hevc_nvenc', 'decklink'] },
    { name: 'None', value: 'none' },
  ],
  passOptions: [
    { name: 'CRF', value: 'crf' },
    { name: '1 Pass', value: '1' },
    { name: '2 Pass', value: '2' },
  ],
  pixelFormats: [
    { name: 'auto', value: 'auto' },
    { name: 'gray', value: 'gray' },
    { name: 'gray10le', value: 'gray10le' },
    { name: 'nv12', value: 'nv12' },
    { name: 'nv16', value: 'nv16' },
    { name: 'nv20le', value: 'nv20le' },
    { name: 'nv21', value: 'nv21' },
    { name: 'yuv420p', value: 'yuv420p' },
    { name: 'yuv420p10le', value: 'yuv420p10le' },
    { name: 'yuv422p', value: 'yuv422p' },
    { name: 'yuv422p10le', value: 'yuv422p10le' },
    { name: 'yuv444p', value: 'yuv444p' },
    { name: 'yuv444p10le', value: 'yuv444p10le' },
    { name: 'yuvj420p', value: 'yuvj420p' },
    { name: 'yuvj422p', value: 'yuvj422p' },
    { name: 'yuvj444p', value: 'yuvj444p' },
  ],
  frameRates: [
    { name: 'auto', value: 'auto' },
    { name: 'ntsc', value: 'ntsc' },
    { name: 'pal', value: 'pal' },
    { name: 'film', value: 'film' },
    { name: '23.976', value: '24000/1001' },
    { name: '24', value: '24' },
    { name: '25', value: '25' },
    { name: '29.97', value: '30000/1001' },
    { name: '30', value: '30' },
    { name: '48', value: '48' },
    { name: '50', value: '50' },
    { name: '59.94', value: '60000/1001' },
    { name: '60', value: '60' },
  ],
  speeds: [
    { name: 'auto', value: 'auto' },
    { name: '10%', value: '10*PTS' },
    { name: '25%', value: '4*PTS' },
    { name: '50%', value: '2*PTS' },
    { name: '75%', value: '1.33333*PTS' },
    { name: '150%', value: '.66667*PTS' },
    { name: '200%', value: '.5*PTS' },
    { name: '250%', value: '.4*PTS' },
    { name: '300%', value: '.33333*PTS' },
    { name: '500%', value: '.2*PTS' },
  ],
  tunes: [
    { name: 'None', value: 'none' },
    { name: 'Film', value: 'film' },
    { name: 'Animation', value: 'animation' },
    { name: 'Grain', value: 'grain' },
    { name: 'Still Image', value: 'stillimage' },
    { name: 'Fast Decode', value: 'fastdecode' },
    { name: 'Zero Latency', value: 'zerolatency' },
  ],
  profiles: [
    { name: 'None', value: 'none' },
    { name: 'Baseline', value: 'baseline' },
    { name: 'Main', value: 'main' },
    { name: 'High', value: 'high' },
  ],
  levels: [
    { name: 'None', value: 'none' },
    { name: '1.0', value: '1.0' },
    { name: '1.1', value: '1.1' },
    { name: '1.2', value: '1.2' },
    { name: '1.3', value: '1.3' },
    { name: '2.0', value: '2.0' },
    { name: '2.1', value: '2.1' },
    { name: '2.2', value: '2.2' },
    { name: '3.0', value: '3.0' },
    { name: '3.1', value: '3.1' },
    { name: '3.2', value: '3.2' },
    { name: '4.0', value: '4.0' },
    { name: '4.1', value: '4.1' },
    { name: '4.2', value: '4.2' },
    { name: '5.0', value: '5.0' },
    { name: '5.1', value: '5.1' },
    { name: '5.2', value: '5.2' },
  ],
  explicit: [
    { name: 'Enabled (explicit)', value: true },
    { name: 'None', value: false },
  ],
  fastStart: [
    { name: 'Enabled (faststart)', value: true },
    { name: 'None', value: false },
  ],
  sizes: [
    { name: 'Source', value: 'source' },
    { name: '8K', value: '8192' },
    { name: '8K UHD', value: '7680' },
    { name: '4K', value: '4096' },
    { name: '4K UHD', value: '3840' },
    { name: '2K', value: '2048' },
    { name: '1600p', value: '2560' },
    { name: '1440p', value: '2560' },
    { name: '1200p', value: '1920' },
    { name: '1080p', value: '1920' },
    { name: '900p', value: '1600' },
    { name: '720p', value: '1280' },
    { name: '576p', value: '1024' },
    { name: '480p', value: '720' },
    { name: '320p', value: '480' },
    { name: '240p', value: '320' },
    { name: 'Custom', value: 'custom' },
  ],
  formats: [
    { name: 'Widescreen', value: 'widescreen' },
    { name: 'Full Screen', value: 'fullscreen' },
  ],
  aspects: [
    { name: 'Auto', value: 'auto' },
    { name: '1:1', value: '1:1' },
    { name: '2.4:1', value: '2.4:1' },
    { name: '3:2', value: '3:2' },
    { name: '4:3', value: '4:3' },
    { name: '5:4', value: '5:4' },
    { name: '8:7', value: '8:7' },
    { name: '14:10', value: '14:10' },
    { name: '16:9', value: '16:9' },
    { name: '16:10', value: '16:10' },
    { name: '19:10', value: '19:10' },
    { name: '21:9', value: '21:9' },
    { name: '32:9', value: '32:9' },
  ],
  scalings: [
    { name: 'Auto', value: 'auto' },
    { name: 'Neighbor', value: 'neighbor' },
    { name: 'Area', value: 'area' },
    { name: 'Fast Bilinear', value: 'fast_bilinear' },
    { name: 'Bilinear', value: 'bilinear' },
    { name: 'Bicubic', value: 'bicubic' },
    { name: 'Experimental', value: 'experimental' },
    { name: 'Bicublin', value: 'bicublin' },
    { name: 'Gauss', value: 'gauss' },
    { name: 'Sinc', value: 'sinc' },
    { name: 'Lanczos', value: 'lanczos' },
    { name: 'Spline', value: 'spline' },
  ],
  audioStreams: [
    { name: 'None', value: 'none' },
    { name: 'All', value: 'all' },
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
    { name: '8', value: '8' },
  ],
  audioChannels: [
    { name: 'Source', value: 'source' },
    { name: 'Mono', value: '1' },
    { name: 'Stereo', value: '2' },
    { name: '5.1', value: '6' },
  ],
  audioQualities: [
    { name: 'Auto', value: 'auto' },
    { name: '400', value: '400k' },
    { name: '320', value: '320k' },
    { name: '256', value: '256k' },
    { name: '224', value: '224k' },
    { name: '192', value: '192k' },
    { name: '160', value: '160k' },
    { name: '128', value: '128k' },
    { name: '96', value: '96k' },
    { name: 'Custom', value: 'custom' },
    { name: 'Mute', value: 'mute' },
  ],
  sampleRates: [
    { name: 'Auto', value: 'auto' },
    { name: '7.35k', value: '7350' },
    { name: '8k', value: '8000' },
    { name: '11.025k', value: '11025' },
    { name: '12k', value: '12000' },
    { name: '16k', value: '16000' },
    { name: '22.05k', value: '22050' },
    { name: '24k', value: '24000' },
    { name: '32k', value: '32000' },
    { name: '44.1k', value: '44100' },
    { name: '48k', value: '48000' },
  ],
  deband: [
    { name: 'None', value: false },
    { name: 'Enabled', value: true },
  ],
  deshake: [
    { name: 'None', value: false },
    { name: 'Enabled', value: true },
  ],
  deflicker: [
    { name: 'None', value: false },
    { name: 'Enabled', value: true },
  ],
  dejudder: [
    { name: 'None', value: false },
    { name: 'Enabled', value: true },
  ],
  denoise: [
    { name: 'None', value: 'none' },
    { name: 'Default', value: 'default' },
    { name: 'Light', value: 'light' },
    { name: 'Medium', value: 'medium' },
    { name: 'Heavy', value: 'heavy' },
  ],
  deinterlace: [
    { name: 'None', value: 'none' },
    { name: 'Frame', value: 'frame' },
    { name: 'Field', value: 'field' },
    { name: 'Frame Nospatial', value: 'frame_nospatial' },
    { name: 'Field Nospatial', value: 'field_nospatial' },
  ],
  extraOptions: [
    { text: 'Force output file format.', value: 'f' },
    { text: 'Overwrite output files without asking.', value: 'y' },
    { text: 'Do not overwrite output files, and exit immediately if a specified output file already exists.', value: 'n' },
    { text: 'Send program-friendly progress information to stdout.', value: 'progress' },
    { text: 'Suppress printing banner.', value: 'hide_banner' },
    { text: 'Dump full command line and log output to a file named program-YYYYMMDD-HHMMSS.log in the current directory.', value: 'report' },
  ],
  logLevels: [
    { name: 'None', value: 'none' },
    { name: 'Quiet', value: 'quiet' },
    { name: 'Panic', value: 'panic' },
    { name: 'Fatal', value: 'fatal' },
    { name: 'Error', value: 'error' },
    { name: 'Warning', value: 'warning' },
    { name: 'Info', value: 'info' },
    { name: 'Verbose', value: 'verbose' },
    { name: 'Debug', value: 'debug' },
    { name: 'Trace', value: 'trace' },
  ],
};

export default form;
