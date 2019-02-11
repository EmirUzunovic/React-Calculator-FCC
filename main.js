class Calculator extends React.Component { 
    constructor(props){
        super(props)
//ako je flag true to znaci da je vec jedna decimala ubacena ili operator
//dobro rjesenje za zahtjev samo posljednji operator se pika i samo jedna decimala u broju
        this.state = {
            currentNumber: "0",
            operatorFlag: false,
            decimalFlag: false
        }

        this.handleClick = this.handleClick.bind(this);
    }
        handleClick(buttonName) {
        let currentNumber = this.state.currentNumber;
        let operatorFlag = this.state.operatorFlag;
        let decimalFlag = this.state.decimalFlag;
   //swithc is true until break
        switch(true){
//u slucaju 0123456789 idi kroz if petlju gdje je opcija da li je current number razlicit od 0
          case  buttonName === "0" ||
                buttonName === "1" ||
                buttonName === "2" ||
                buttonName === "3" ||
                buttonName === "4" ||
                buttonName === "5" ||
                buttonName === "6" ||
                buttonName === "7" ||
                buttonName === "8" ||
                buttonName === "9" :
                if(this.state.currentNumber != "0"){
//ako je current number razlicit od nula tada pritisnuto dugme na dodaj na current nuber
                    currentNumber += buttonName;
//prebaci operator flag na false da bi omobucio ponovno ubacivanje operatora +-/*
                    operatorFlag = false;
                } else {
//ako je current number 0 tada prebrisi current nuber sa brojem koji je pritisnut
                    currentNumber = buttonName;
                }
//ako se desio slucaj brojeva ovdje prekini petlju
                    break;
//u slucaju +-/* idi kroz if petlju gdje je opcija da li je operator flag false ako jeste tada
                    case buttonName === "+" ||
                         buttonName === "-" ||
                         buttonName === "/" ||
                         buttonName === "*" :
                         if(!this.state.operatorFlag){
//tada dodaj stisnuto dugme na current number
                             currentNumber += buttonName;
//prebaci operatorflag na true da se nebi moglo vise operatora dodavati odmah iza postojeceg operatora 
                             operatorFlag = true;
                             decimalFlag= false;
//ako je state operator vec true znaci da je vec ima operator ukucan u tom slucaju 
                         }else{
//sa currentNumber skinuti posljednji unos i dodati novi 
                             const newNumber = currentNumber.slice(0,currentNumber.length-1);
                             currentNumber = newNumber + buttonName;
                         }
                        break;
                        case buttonName === "C":
                        currentNumber = "0";
                        operatorFlag = false;
                        decimalFlag= false;
                        break;
                        case buttonName === "=":
                        currentNumber = eval(currentNumber);
                        operatorFlag = false;
                        decimalFlag= true;
                        break;
                        case buttonName === ".":
                        if(!this.state.decimalFlag){
                            currentNumber += buttonName;
                            decimalFlag = true;
                        }
                } 
                this.setState({decimalFlag: decimalFlag});        
                this.setState({currentNumber:currentNumber});
                this.setState({operatorFlag: operatorFlag});
        }



    render() { 
        return (
            <div id = "calculator-body">
                <div id="calcOutput" >
                    <Screen currentNumber = {this.state.currentNumber}/>
                </div>
                <div id = "calculator">
                    <Button id = "clear" name = "C" handleClick = {this.handleClick} clas = {"btn btn-danger"}/>
                    <Button id = "multiply" name = "*" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "divide" name = "/" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "add" name = "+" handleClick = {this.handleClick} clas = {"btn btn-info"}/>

                    <Button id = "seven" name = "7" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "eight" name = "8" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "nine" name = "9" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "subtract" name = "-" handleClick = {this.handleClick} clas = {"btn btn-info"}/>

                    <Button id = "four" name = "4" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "five" name = "5" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "six" name = "6" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "decimal" name = "." handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "one" name = "1" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "two" name = "2" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    <Button id = "three" name = "3" handleClick = {this.handleClick} clas = {"btn btn-info"}/>
                    
                    
                    
                    
                    
                    <Button id = "equals" name = "=" handleClick = {this.handleClick} clas = {"btn btn-info btn-high"}/>
                    <Button id = "zero" name = "0" handleClick = {this.handleClick} clas = {"btn btn-info btn-wide"}/>
                    
            </div>
                
            </div>
            

        ); 
    } 
} 

class Screen extends React.Component {
    render(){
        return(
            <div id = "display">
                {this.props.currentNumber}
            </div>
        )
    }
}

class Button extends React.Component {
    runParentHandleClick = () => {
        this.props.handleClick(this.props.name)
    }
    render(){
        return(
            <button id = {this.props.id} onClick = {this.runParentHandleClick} className = {this.props.clas}>{this.props.name}</button>
        )
    }
}
ReactDOM.render(<Calculator />, document.getElementById('root'));