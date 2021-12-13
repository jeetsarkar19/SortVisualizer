import React from "react";
import * as SortingAlgo from './SortingAlgo.js';
import './SortingVisualizer.css';
export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                arr: [],
            };
    }
    //the first time anyone enters the page
    componentDidMount(){
        this.newArray();
    }
    //New array generation or reset button type
    newArray(){
        const arr = [];
        for(let i=0;i<291; i++){
            arr.push(randomnum(10,600));
        }
        this.setState({arr});
    }
    //Creating various sorting algorithm animations
    mergeSort() {
        const ani = SortingAlgo.mergeSort(this.state.arr);
        const newani = [];
        for(const animation of ani){
            newani.push(animation.comparison);
            newani.push(animation.comparison);
            newani.push(animation.swap);
        }
        for(let i=0;i<newani.length; i++){
            const arrBar = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [bar1,bar2] = newani[i];
                const b1Style = arrBar[bar1].style;
                const b2Style = arrBar[bar2].style;
                const color = i % 3 === 0 ? 'red':'rgb(115, 129, 196)';
                setTimeout(() => {
                    b1Style.backgroundColor = color;
                    b2Style.backgroundColor = color;
                }, i*5);
            }
            else{
                setTimeout(() => {
                   const [bar1,newH] = newani[i];
                   const b1Style = arrBar[bar1].style;
                   b1Style.height = `${newH}px`;
                }, i * 5);
            }
        }
    }
     
    quickSort() {}
    //This algorithm is a robust testing algorithm
    //Here we test 50 times, by making new array each time, then
    //we try comparing the sort and our own sorting algo techniques
    // testAlgo () {
    //     for(let i=0;i<50;i++){
    //         const arr = [];
    //         const length = randomnum(1,400);
    //         for(let j=0;j<length;j++){
    //             arr.push(randomnum(-400,400));
    //         }
    //         const arr1 = arr.slice().sort((a,b) =>a-b);
    //         const arr2 = SortingAlgo.mergeSort(arr.slice());
    //         console.log(EqualArrays(arr1,arr2));
    //     }
    // }

    render(){
        const {arr} = this.state;
        return (
            <div className="arr-container">
            {arr.map((value,idk) => (
            <div className="array-bar" key={idk}
            style={{
            //   backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
            ))}
            <button className="butt" onClick={()=> this.newArray()}>New Array </button>
            <button className="butt" onClick={()=> this.mergeSort()}>Merge Sort</button>
            <button className="butt" onClick={()=> this.quickSort()}>Quick Sort</button>
            {/* <button className="butt" onClick={()=> this.testAlgo()}>Test Algo </button> */}
            </div>
        );
    }
} 
function randomnum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// function EqualArrays(arr1,arr2){
//     if(arr1.length!==arr2.length) {
//         return false;
// //     }    
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]!==arr2[i])   {
//             return false;
//         }
//     }
//     return true;
// }