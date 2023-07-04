class Controls{
    constructor(type){
        this.forward = false;
        this.reverse = false;
        this.left = false;
        this.right = false;

        switch(type){
            case "KEYS":
                this.addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward=true;
                break;


        }
    }
    addKeyboardListeners(){
        document.onkeydown=(event)=>{ //we used arrow function to refer to the current obj of this class using this pointer 
            switch(event.key){        //as if we used function(event) this pointer would refer to the the fuction itself and not the class object
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
            }
        }
    }
}


