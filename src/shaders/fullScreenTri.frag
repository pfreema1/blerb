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

//  Function from Iñigo Quiles
//  www.iquilezles.org/www/articles/functions/functions.htm
float expStep( float x, float k, float n ){
    return exp( -k*pow(x,n) );
}

float myCurve(float x) {
    // -((x - 0.5) * 2)^2 + 1
    return -pow((x - 0.5) * 4.0, 2.0) + 1.0;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec4 color = texture2D(uScene, uv);

    float y = 1.0 - expStep(uv.x, 5.0, 2.0);

    uv.x *= y;
    uv.y *= 2.0 * uv.x;

    vec4 textCanvasColor = texture2D(uTextCanvas, uv);
    color = textCanvasColor;

    


    gl_FragColor = vec4(color);
}