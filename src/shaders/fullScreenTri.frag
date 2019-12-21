precision highp float;
uniform sampler2D uScene;
uniform sampler2D uTextCanvas;
uniform sampler2D uBlobTexture;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

//  Function from Iñigo Quiles
//  www.iquilezles.org/www/articles/functions/functions.htm
float pcurve( float x, float a, float b ){
    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));
    return k * pow( x, a ) * pow( 1.0-x, b );
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec4 color = texture2D(uScene, uv);

    float y = pcurve(uv.x, 2.0, 1.0);

    uv.x *= y;

    vec4 refractColor1 = texture2D(uTextCanvas, uv + (y * 0.01 * (uv.x)));
    vec4 refractColor2 = texture2D(uTextCanvas, uv + (y * 0.02 * (uv.x)));
    vec4 refractColor3 = texture2D(uTextCanvas, uv + (y * 0.03 * (uv.x)));

    vec4 refractColor = vec4(refractColor1.r, refractColor2.g, refractColor3.b, 1.0);

    // uv.x *= pow(uv.x, 2.0);      
    // uv = fract(uv); // Wrap arround 1.0

    vec4 textCanvasColor = texture2D(uTextCanvas, uv);
    color = refractColor;




    gl_FragColor = vec4(color);
}