
import s from './canvas.module.sass'
import { useRef, useEffect } from 'react'




interface drawCurveIterface {
    startX: number,
    startY: number,
    controlX1:number,
    controlY1:number,
    controlX2 :number, 
    controlY2 :Number,
    endX:number,
    endY:number,
    alpha:number,
    hue:number
}

const Canvas = () => {
    let ref = useRef(null)
    useEffect(()=>{
        const config = {
            curvesNum    : 10,
            waveSpeed    : .4,
            wavesToBlend : 4,  //waves count to blend 
            framesToMove : 120 //frames count to change type placement
        }

        class WaveNoise {
            wavesSet: number[]
        
            constructor() {
            this.wavesSet = [];
            }
        
            addWaves(requiredWaves:number) {
            for(let i = 0 ; i < requiredWaves ; ++i) {
                let randomAngle = Math.random() * 360; //generate random degree
                this.wavesSet.push(randomAngle);
            }
            }
        
            getWave() {
            let blendedWave = 0;
            for (let e of this.wavesSet) {
                blendedWave += Math.sin(e / 180 * Math.PI); //convert degree to radian and get sine
            }
            return (blendedWave / this.wavesSet.length + 1) / 2; 
            }
        
            update() {
        this.wavesSet.forEach((e, i) => {
                let r = Math.random() * (i + 1) * config.waveSpeed;
                this.wavesSet[i] = (e + r) % 360;
        });
            }
        }
    
    
    class Animation {
        cnv:any = ref.current
        ctx:any = null
        size: any = {w: 0, h: 0, cx: 0, cy: 0};
        controls: any = []

        controlsNum: number  = 3
        frameCounter: number = 0
        type4Start: number = 0
        type4End: number = 0

        // colorLight:string = '#c4c0d3'
        colorLight:string = '#fff'
        colorDark:string = '#c4c0d3'
        // colorNow:string = 'dark'
        colorNow:string = 'red'

        constructor() {
        }


        init() {                    //point of entry
            this.createCanvas();
            this.createControls();
            this.updateAnimation();
        }


        createCanvas() {
        this.ctx = this.cnv.getContext('2d');
        this.ctx.fillStyle = '#c4c0d3';
        this.ctx.fill();

        this.setCanvasSize();
        window.addEventListener(`resize`, () => this.setCanvasSize());
        }
        
        setCanvasSize() {
        this.size.w  = this.cnv.width  = window.innerWidth;
        this.size.h  = this.cnv.height = window.innerHeight;
        //   this.size.w = this.cnv.width
        //   this.size.h = this.cnv.height
        this.size.cx = this.size.w / 2; 
        this.size.cy = this.size.h / 2;
        }

        createControls() {
            for (let i = 0 ; i < (this.controlsNum + config.curvesNum) ; ++i) {// 3 general controls x1, y1, x2 bezierCurve
                let control = new WaveNoise();                                   // and 1 personal control y2 for any bezierCurve
                control.addWaves(config.wavesToBlend);
                this.controls.push(control);
            }
        }

        updateControls() {
            this.controls.forEach( (e:any) => e.update() );
        }

        changeColor(colorNow:string){
        switch(colorNow){
            case 'dark':
            this.ctx.fillStyle = this.colorLight;
            this.colorNow = 'light';
            break;
            case 'light':
            this.ctx.fillStyle = this.colorDark;
            this.colorNow = 'dark';
            break;
            }
        }
        
            // get current type placement for Curve start and for Curve end 
        getYPlacementType(type:number, i:number) {  //type recorded in (this.type4Start, this.type4End) animation properties
            if (type > .6) {
                        return this.size.h / config.curvesNum * i; 
            } else if (type > .4) {
                        return this.size.cy;
            } else if (type > .2) {
                        return this.size.h;
            } else {
                        return 0;
            }
        }



        updateCurves() {
            let c = this.controls;
            let _controlX1 = c[0].getWave() * this.size.w; // general controls x1 for all curves
            let _controlY1 = c[1].getWave() * this.size.h; // general controls y1 for all curves
            let _controlX2 = c[2].getWave() * this.size.w; // general controls x2 for all curves

            for (let i = 0 ; i < config.curvesNum ; ++i) {
                let _controlY2 = c[3 + i].getWave(); // personal control y2 for current curve
                let curveParam:drawCurveIterface = {
                startX     : 0,
                startY     : this.size.h - (10 * i),
                controlX1  : _controlX1, 
                controlY1  : _controlY1, 
                controlX2  : _controlX2, 
                controlY2  : _controlY2 * this.size.h, 
                endX       : this.size.w + 20,      
                endY       : 40,
                alpha      : _controlY2,
                    hue        : 360 / config.curvesNum * i
                }
            this.drawCurve(curveParam);
            }
        }

        drawCurve({startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, alpha, hue}:drawCurveIterface) {
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${alpha})`; 
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
            this.ctx.stroke();
        }

        updateCanvas() {
        this.ctx.clearRect(0, 0, this.size.w, this.size.h);
        }
        
        updateFrameCounter() {
            this.frameCounter = (this.frameCounter + 1) % config.framesToMove;
            if (this.frameCounter === 0) {
            this.type4Start = Math.random(); // change type for Curve Start
            this.type4End = Math.random();   // change type for Curve End
            }
        }

        updateAnimation() {
            this.updateFrameCounter();
            this.updateCanvas();  
            this.updateCurves();
            this.updateControls();
            window.requestAnimationFrame(() => this.updateAnimation());
        }
    }



    let anim = new Animation()
    anim.init()
    // console.log(anim)

    })



    return(
        <canvas ref={ref} className={s.canvas}/>
    )
}

export default  Canvas