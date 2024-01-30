import p5 from "p5";

// clicking on the canvas causes the wind to move in a different direction

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;
const NUM_PARTICLES = 2000;
const NOISE_SCALE = 0.01 / 2;

const WIND_OPACITY = 10;
const BACKGROUND_R = 25;
const BACKGROUND_G = 71;
const BACKGROUND_B = 135;
const BACKGROUND_OPACITY = 0;

const WIND_SPEED_X = 0.6;
const WIND_SPEED_Y = 0.6;

let particles: p5.Vector[] = [];

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(s.createVector(s.random(s.width), s.random(s.height)));
    }

    s.stroke(255);
    s.stroke(255, WIND_OPACITY);
    s.clear();
  };

  s.draw = () => {
    s.background(BACKGROUND_R, BACKGROUND_G, BACKGROUND_B, BACKGROUND_OPACITY);
    for (let i = 0; i < NUM_PARTICLES; i++) {
      let p = particles[i];
      s.point(p.x, p.y);
      let n = s.noise(
        p.x * NOISE_SCALE,
        p.y * NOISE_SCALE,
        s.frameCount * NOISE_SCALE * NOISE_SCALE
      );
      let a = s.TAU * n;
      p.x += s.cos(a) * WIND_SPEED_X;
      p.y += s.sin(a) * WIND_SPEED_Y;
      if (!onScreen(p)) {
        p.x = s.random(s.width);
        p.y = s.random(s.height);
      }
    }
  };

  s.mouseReleased = () => {
    s.noiseSeed(s.millis());
    s.background(BACKGROUND_R, BACKGROUND_G, BACKGROUND_B);
  };

  const onScreen = (v: p5.Vector) => {
    return v.x >= 0 && v.x <= s.width && v.y >= 0 && v.y <= s.height;
  };
};

export const makeWind = (node: HTMLElement) => {
  new p5(sketch, node);
};
