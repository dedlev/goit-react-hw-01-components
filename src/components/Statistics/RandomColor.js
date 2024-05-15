
export function generateRandomColor() {
  const minBrightness = 150; 
  const red = Math.floor(Math.random() * (255 - minBrightness) + minBrightness);
  const green = Math.floor(Math.random() * (255 - minBrightness) + minBrightness);
  const blue = Math.floor(Math.random() * (255 - minBrightness) + minBrightness);
  return `rgb(${red}, ${green}, ${blue})`;
}

