class Calculadora{

    constructor(){
        this.memoria="";
        this.pantalla="";
        this.operando1="";
        this.operando2="";
        this.operador="";
        this.operadorAnterior="";
    }

    digitos(x){

        this.pantalla += Number(x).toString();
        //Para quitar los ceros a la izquierda
        this.pantalla=Number(this.pantalla);
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        this.operadorAnterior="";
        this.operando2="";
    }

    punto(){
        this.pantalla+=".";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        this.operadorAnterior="";
        this.operando2="";
    }

    suma(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="+";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="+";
        }      
    }
    resta(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="-";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="-";
        }         
    }

    multiplicacion(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="*";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="*";
        }         
    }

    division(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="/";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="/";
        }         
    }

    mrc(){
        this.pantalla=this.memoria;
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        
    }

    mMenos(){
        this.memoria=Number(this.memoria)-Number(this.pantalla) ;
    }

    mMas(){
        this.memoria=Number(this.memoria)+Number(this.pantalla) ;
    }

    borrar(){
        this.pantalla="";
        this.operando1="";
        this.operando2="";
        this.operador="";
        this.operadorAnterior="";
        document.querySelector('input[type=text][name=\"pantalla\"]').value =this.pantalla ;
    }

    igual(){
        if(this.operador!=""){
            this.operando2=this.pantalla;
        }else if(this.operadorAnterior!=""){
            this.operador=this.operadorAnterior;
        }else{
            return;
        }

        if(this.operando2==""){
            this.operando2=this.operando1;
        }


       
       try{
        var result=eval(Number(this.operando1)+this.operador+Number(this.operando2));
        if(result.toString()=="NaN"){
            throw  "Error de calculo";
        }
        this.pantalla=result;
        this.operando1=result;
        this.operadorAnterior=this.operador;
        this.operador="";
       }catch(err){
        this.pantalla="E";
       }
       document.querySelector('input[type=text][name=\"pantalla\"]').value =this.pantalla ;
        
    }

    porcentaje(){
        this.operando2=this.pantalla;
        if(this.operador=="" || this.operando2==""){
            return;
        }
        //Si suma o resta
        if(this.operador=="+" || this.operador=="-"){
            this.operando2=(Number(this.operando1)/Number(100))*Number(this.operando2);
            try{
                var result=eval(Number(this.operando1)+this.operador+Number(this.operando2));
                if(result.toString()=="NaN"){
                    throw "Error de calculo";
                }
                this.pantalla=result;
                this.operando1=result;
                this.operadorAnterior="";
                this.operador="";
            }catch(err){
                this.pantalla="E";
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
            return;
        }
        //Si multiplica
        if(this.operador=="*"){
            try{
                var result=eval(Number(this.operando1)*(Number(this.operando2)/Number(100)));
                if(result.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=result;
                this.operando1=result;
                this.operadorAnterior="";
                this.operador="";
            }catch(err){
                this.pantalla="E";
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
            return;
        }

        //Si divide
        if(this.operador=="/"){
            try{
                var result=eval(Number(this.operando1)*(Number(100)/Number(this.operando2)));
                if(result.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=result;
                this.operando1=result;
                this.operadorAnterior="";
                this.operador="";
            }catch(err){
                this.pantalla="E";
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
            return;
        }
    }

    raiz(){
        if(this.operador!=""){
            this.igual();
        }     
        try {
            var result=Math.sqrt(Number(this.pantalla)); 
            if(result.toString()=="NaN"){
                throw  "Error de calculo";
            }
            this.pantalla=result;
            this.operando1=result;
            this.operadorAnterior="";
            this.operador="";
        } catch (err) {
            this.pantalla="E";      
               
        }
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;  
    }

    masMenos(){
       this.pantalla=(Number(this.pantalla)*(-1)).toString();
       document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }


    pulsaTecla(tecla){
        switch (tecla){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':  
            case '7':
            case '8':
            case '9':   
            case '0':
                this.digitos(tecla);
                break;
            case 'C':
                this.borrar();
                break;
            case '+':
                this.suma();
                break;
            case '-':
                this.resta();
                break;
            case '*':
                this.multiplicacion();
                break;
            case '/':
                this.division();   
                break;
            case 'r':
                this.raiz();
                break;
            case 'm':
                this.mrc();
                break;
            case 'o'  :
                this.borrar();
                break;
            case 'n':
                this.mMas();
                break;
            case 'b':
                this.mMenos();
                break;
            case 'v':
                this.masMenos();
                break;
            case '.':
                this.punto();
                break;
            case '=':
                this.igual();  
                break;
            case '%':
                this.porcentaje();
                break;              

        }
    }
    
    


}

calculadora = new Calculadora();

document.addEventListener('keydown',(event)=>calculadora.pulsaTecla(event.key))

