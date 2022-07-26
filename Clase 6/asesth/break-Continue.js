console.warn("Break")
for (let index = 0; index <5; index++) {
    if(index==2){
        break
        console.log(index)
    }
  
    //console.log(index)
};

console.warn("Continue")

for (let index = 0; index < 5; index++){
    if(index==1){
        continue
    }
    console.log(index)
}
