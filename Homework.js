var arr = [-3,8,7,6,5,-4,3,2,1];
var i = 0;
var x;
var j;

while(i < (arr.length-1))
{
    for(var j = i+1; j <= arr.length-1; j++)
    {
        if (arr[i] > arr[j]) {
                            x = arr[i]; arr[i]=arr[j]; arr[j]=x;
                            }
    }
    i++;
}
console.log(arr);
