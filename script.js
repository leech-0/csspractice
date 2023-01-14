var inputData, dataLength,num;
inputData = prompt("이게 css로 가능하다고?");
const inputArr = Array.from(inputData);
dataLength=inputArr.length;
for(num=0;num<dataLength;num++){
    document.write("<span>"+inputArr[num]+"</span>");
}