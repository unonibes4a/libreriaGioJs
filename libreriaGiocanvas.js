
  class CanvasZoom {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.scale = 1;         
        this.originX = 0;       
        this.originY = 0;       
        this.img = null;        
        this.isPanning = false; 
        this.lastMouseX = 0;    
        this.lastMouseY = 0;    
    }

    setCanvas(canvasElement, imageObject) {
        if (!canvasElement || !(canvasElement instanceof HTMLCanvasElement)) {
            console.error("El elemento proporcionado no es un canvas HTML válido.");
            return;
        }
        if (!imageObject || !(imageObject instanceof Image)) {
            console.error("El objeto de imagen proporcionado no es válido.");
            return;
        }

        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.img = imageObject;

        this.canvas.width = this.img.width;
        this.canvas.height = this.img.height;
        this.redraw(); 

        this.removeEventListeners();

        this.canvas.addEventListener('wheel', this.handleWheel);
        this.canvas.addEventListener('mousedown', this.handleMouseDown);
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('mouseup', this.handleMouseUp);
        this.canvas.addEventListener('mouseout', this.handleMouseUp); 
    }

    removeEventListeners() {
        if (this.canvas) {
            this.canvas.removeEventListener('wheel', this.handleWheel);
            this.canvas.removeEventListener('mousedown', this.handleMouseDown);
            this.canvas.removeEventListener('mousemove', this.handleMouseMove);
            this.canvas.removeEventListener('mouseup', this.handleMouseUp);
            this.canvas.removeEventListener('mouseout', this.handleMouseUp);
        }
    }

    redraw() {
        if (!this.ctx || !this.img) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();

        this.ctx.translate(this.originX, this.originY); 
        this.ctx.scale(this.scale, this.scale);         

        this.ctx.drawImage(this.img, 0, 0);

        this.ctx.restore();
    }

    handleWheel = (event) => {
        event.preventDefault(); 

        const scaleAmount = 1.1; 
        const mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - this.canvas.getBoundingClientRect().top;

        let newScale = this.scale;
        if (event.deltaY < 0) { 
            newScale *= scaleAmount;
        } else { 
            newScale /= scaleAmount;
        }

        newScale = Math.max(0.1, Math.min(newScale, 10)); 

        if (newScale === this.scale) {
            return;
        }

        this.originX = mouseX - (mouseX - this.originX) * (newScale / this.scale);
        this.originY = mouseY - (mouseY - this.originY) * (newScale / this.scale);

        this.scale = newScale; 

        this.redraw(); 
    }

    handleMouseDown = (event) => {
        if (event.button === 0) { 
            this.isPanning = true;
            this.lastMouseX = event.clientX - this.canvas.getBoundingClientRect().left;
            this.lastMouseY = event.clientY - this.canvas.getBoundingClientRect().top;
            this.canvas.style.cursor = 'grab'; 
        }
    }

    handleMouseMove = (event) => {
        if (!this.isPanning) return;

        const currentMouseX = event.clientX - this.canvas.getBoundingClientRect().left;
        const currentMouseY = event.clientY - this.canvas.getBoundingClientRect().top;

        const dx = currentMouseX - this.lastMouseX;
        const dy = currentMouseY - this.lastMouseY;

        this.originX += dx;
        this.originY += dy;

        this.lastMouseX = currentMouseX;
        this.lastMouseY = currentMouseY;

        this.redraw(); 
    }

    handleMouseUp = () => {
        this.isPanning = false;
        this.canvas.style.cursor = 'default'; 
    }

    resetView() {
        this.scale = 1;
        this.originX = 0;
        this.originY = 0;
        this.redraw();
    }
}
class MathBasicCanvas20259D{
     setCanvas=(c)=>{this.canvas=c; }
     getImageData=(canvas)=>{
        const ctx = canvas.getContext('2d'); 
         ctx.willReadFrequently = true;
     return ctx.getImageData(0, 0, canvas.width, canvas.height);   
    }
     putImageData=(canvas,imageData)=>{
        const ctx = canvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    }
    limitvalue=(x,min=0,max=1)=> {if (x > max) return max;  if (x < min) return  min;   return x;   }
       gioSaturation = (tex_color, ec5) => {         
        const maxx = Math.max(tex_color.r, tex_color.g, tex_color.b);
        const adjust = ec5;
        if (tex_color.r !== maxx) {
          tex_color.r += (maxx - tex_color.r) * adjust;
        }
        if (tex_color.g !== maxx) {
          tex_color.g += (maxx - tex_color.g) * adjust;
        }
        if (tex_color.b !== maxx) {
          tex_color.b += (maxx - tex_color.b) * adjust;
        }
        tex_color.r = this.limitvalue(tex_color.r);
        tex_color.g = this.limitvalue(tex_color.g);
        tex_color.b = this.limitvalue(tex_color.b);
        return tex_color;
      }
      mixerHtmlColor = (
        rgbax,
        rgba2 = { r: 0.5, g: 0.45, b: 0.36 }, porcent, bool = false
      ) => {
        var maxx0 = Math.max(rgbax.r, rgbax.g, rgbax.b);
        var clmd = 1.0 - porcent;
        rgbax.r = rgbax.r * clmd + rgba2.r * porcent;
        rgbax.g = rgbax.g * clmd + rgba2.g * porcent;
        rgbax.b = rgbax.b * clmd + rgba2.b * porcent;
        if (bool) {
          let max2 = Math.max(rgbax.r, rgbax.g, rgbax.b);
          this.operacionMatematica(rgbax, maxx0 / (max2 + 0.00001), "*");
        }
        return rgbax;
      };
      colorDivide = (color1) => {
        var maxx0 = Math.max(color1.r, color1.g, color1.b) + 0.000000001;
        var minx = Math.min(color1.r, color1.g, color1.b).toFixed(4);
        return minx / (maxx0+0.0000001);
      }
      maxPx = (rgba) => {
        return Math.max(rgba.r, rgba.g, rgba.b);
      }
      minPx = (rgba) => {
        return Math.min(rgba.r, rgba.g, rgba.b);
      }
      simpleLinearFunction = (x1, y1, x2, y2, val) => {
        let m = 0;
        let b = 0;
        let dx = (x2 - x1)+0.00000001; 
        let dy = (y2 - y1).toFixed(4);
        m = dy / dx;
        b = y2 - m * x2;
        let e = null;
        e = m * val + b;
        return e;
      }
      rgbaCount=(rgba,count)=>{
        rgba.r=rgba.r/count;
        rgba.g=rgba.g/count;
        rgba.b=rgba.b/count;
      }
      cicloRGBA=(rgba,rgba2,vacontar)=>{
         rgba2.r = rgba2.r + rgba.r;
            rgba2.g = rgba2.g + rgba.g;
            rgba2.b = rgba2.b + rgba.b;
            vacontar++;
            return {rgba2,vacontar}
      }
     forPixeles = (imageData,callbackFor) => {
            let data = imageData.data; 
        var rgba = {r: 0, g: 0, b: 0,a:1 };      
        for (let i = 0; i < data.length; i += 4) {
          rgba.r = data[i] / 255; rgba.g = data[i + 1] / 255;
           rgba.b = data[i + 2] / 255;
            if(callbackFor){rgba=callbackFor(rgba);}
            data[i] = rgba.r * 255;data[i + 1] =rgba.g* 255;
          data[i + 2] = rgba.b * 255;data[i + 3] = rgba.a * 255;
        }

        return imageData;
    }
    forPixeles2=  (imageData,imageData2,callbackFor) => {
        let data = imageData.data;
              let data2 = imageData2.data;
        var rgba = {
          r: 0,
          g: 0,
          b: 0,
          a:1
        };
        var rgba2 = {
          r: 0,
          g: 0,
          b: 0,
          a:1
        }; 
        for (let i = 0; i < data.length; i += 4) {  
            rgba.r = data[i] / 255;
          rgba.g = data[i + 1] / 255;
          rgba.b = data[i + 2] / 255;
             rgba.a = data[i + 3] / 255;
             rgba2.r = data2[i] / 255;
          rgba2.g = data2[i + 1]*0 / 255;
          rgba2.b = data2[i + 2] *0/ 255;      
            rgba2.a = data2[i + 3] / 255;    
          let maxpx = Math.max(rgba.r, rgba.g, rgba.b); 
                if(callbackFor){rgba=callbackFor(rgba,rgba2);}
        
          data[i + 0] =rgba.r *0* 255;
          data[i + 1] = rgba.g*0 * 255;
          data[i + 2] =rgba.b* 255;  
          data[i + 3] =rgba.a* 255;  
        } 
        return imageData;
      }
         
      mathematicalOperation = (rgba, val, operacion) => {      
        if ("multiplicar" == operacion || operacion == "*") {
          rgba.r *= val;
          rgba.r = this.limitvalue(rgba.r);
          rgba.g *= val;
          rgba.g = this.limitvalue(rgba.g);
          rgba.b *= val;
          rgba.b = this.limitvalue(rgba.b);
          return rgba;
        }
        if (operacion == "+") {
          rgba.r += val;
          rgba.r = this.limitvalue(rgba.r);
          rgba.g += val;
          rgba.g = this.limitvalue(rgba.g);
          rgba.b += val;
          rgba.b = this.limitvalue(rgba.b);
          return rgba;
        }
        if ("potencia" == operacion || operacion == "pow") {
          rgba.r = Math.pow(rgba.r, val);
          rgba.r = this.limitvalue(rgba.r);
          rgba.g = Math.pow(rgba.g, val);
          rgba.g = this.limitvalue(rgba.g);
          rgba.b = Math.pow(rgba.b, val);
          rgba.b = this.limitvalue(rgba.b);
          return rgba;
        }
        if ("asigna" == operacion || operacion == "=") {
          rgba.r = val.r;
          rgba.r = this.limitvalue(rgba.r);
          rgba.g = val.g;
          rgba.g = this.limitvalue(rgba.g);
          rgba.b = val.b;
          rgba.b = this.limitvalue(rgba.b);
          return rgba;
        }
       
        return rgba;
      }
}