precision highp float;
uniform sampler2D uScene;
uniform sampler2D uTextCanvas;
uniform sampler2D uBlobTexture;
uniform vec2 uResolution;
uniform float uTime;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec4 color = texture2D(uScene, uv);
    vec4 textCanvasColor = texture2D(uTextCanvas, uv);
    vec4 blobColor = texture2D(uBlobTexture, uv);

    color = textCanvasColor;
    
    gl_FragColor = vec4(color);
}