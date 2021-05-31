class Num {
    constructor(el){
        this.el = document.querySelector(el);
        this.showText = document.querySelector('.show-text');
        this.equal = document.querySelector('.equal');
        this.clear = document.querySelector('.clear');
        this._Event();
        this._Clear();
        this._Equal();
    }

    _Event(){
        this.el.addEventListener('click',this._output.bind(this));
    }

    _output(){
        this.showText.textContent += this.el.value;
        console.log(this.showText.textContent);
    }

    _Clear(){
        this.clear.addEventListener('click',()=>{
            this.showText.textContent = '';
        });
    }
    _Equal(){
        this.equal.addEventListener('click',()=>{
            const myWork = this.showText.textContent ;
            const myTotal = eval(myWork);
            this.showText.textContent = myTotal
        });
    }
}


class Addition{
    constructor(){
        this.addition = document.querySelector('.addition');
        this.showText = document.querySelector('.show-text');
        this._Add();
    }

    _Add(){
        this.addition.addEventListener('click',()=>{
            this.showText.textContent +=  this.addition.value;
        });
    }
}

class Maina{
    constructor(){
        this.minus = document.querySelector('.minus');
        this.showText = document.querySelector('.show-text');
        this._Minus();
    }

    _Minus(){
        this.minus.addEventListener('click',()=>{
            this.showText.textContent +=  this.minus.value;
        });
    }

}

class Mul{
    constructor(){
        this.multi = document.querySelector('.multi');
        this.showText = document.querySelector('.show-text');
        this._Multi();
    }

    _Multi(){
        this.multi.addEventListener('click',()=>{
            this.showText.textContent +=  this.multi.value;
        });
    }

}

class Div{
    constructor(){
        this.division = document.querySelector('.division');
        this.showText = document.querySelector('.show-text');
        this._Division();
    }

    _Division(){
        this.division.addEventListener('click',()=>{
            this.showText.textContent +=  this.division.value;
        });
    }

}

class Dot{
    constructor(){
        this.dot = document.querySelector('.dot');
        this.showText = document.querySelector('.show-text');
        this._Dot();
    }

    _Dot(){
        this.dot.addEventListener('click',()=>{
            this.showText.textContent +=  this.dot.value;
        });
    }

}

class Percent{
    constructor(){
        this.percent = document.querySelector('.percent');
        this.showText = document.querySelector('.show-text');
        this._Per();
    }

    _Per(){
        this.percent.addEventListener('click',()=>{
            this.showText.textContent +=  this.percent.value;
        });
    }

}

new Num('.number0');
new Num('.number1');
new Num('.number2');
new Num('.number3');
new Num('.number4');
new Num('.number5');
new Num('.number6');
new Num('.number7');
new Num('.number8');
new Num('.number9');
new Addition();
new Maina();
new Mul();
new Div();
new Dot();
new Percent();
