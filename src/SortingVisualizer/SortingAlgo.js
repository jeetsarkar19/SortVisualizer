//Merge sort algorithm in Javascript 
//Naive merge sort isn't ideal as it would lead to messed up animation
export function mergeSort(arr){
    const ani = [];
    if (arr.length <= 1) return arr;
    const auxarr = arr.slice();
    mergeSorterhelper(arr,0,arr.length-1,auxarr,ani);
    return ani;
}
function mergeSorterhelper(mainArr,start,end,auxarr,ani){
    if(start===end) return;
    const mid = Math.floor((start+end)/2);
    mergeSorterhelper(auxarr,start,mid,mainArr,ani);
    mergeSorterhelper(auxarr,mid+1,end,mainArr,ani);
    helpMerge(mainArr,start,mid,end,auxarr,ani);
}
function helpMerge(mainArr,start,mid,end,auxarr,ani){
    let k = start;
    let i = start;
    let j = mid+1;
    while(i<=mid && j<=end){
        const animation = {};
        animation.comparison = [i, j];
        if(auxarr[i] <= auxarr[j]){
            animation.swap = [k,auxarr[i]];
            mainArr[k++] = auxarr[i++];
        }
        else{
            animation.swap = [k, auxarr[j]];
            mainArr[k++] = auxarr[j++];
        }
        ani.push(animation);
    }
    while(i<=mid){
        ani.push({
            comparison: [i, i],
            swap: [k, auxarr[i]],
        });
        mainArr[k++] = auxarr[i++];
    }
    while(j<=end){
        ani.push({
            comparison: [j, j],
            swap: [k, auxarr[j]],
        });
        mainArr[k++] = auxarr[j++];
    }
}
