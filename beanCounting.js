function countChar(string, ch){
    let counted = 0
    for(i = 0; i < length.string; i++) {
      if(string[i] == ch){
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string){
      return countChar(string, "B");
  }

  console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
  