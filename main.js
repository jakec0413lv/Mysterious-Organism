// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  let specimen = {
    specimenNum: number,
    dna: array,
    mutate(){
      let randomIndex = Math.floor(Math.random()*15);
      let randomBase = Math.floor(Math.random()*3);
      console.log(this.dna)
      console.log(randomIndex);
      console.log(randomBase);
      if(this.dna[randomIndex] === 'A'){
        console.log()
        let options = ['T', 'C', 'G'];
        this.dna.splice(randomIndex, 1, options[randomBase])
      }else if(this.dna[randomIndex] === 'T'){
        let options = ['A', 'C', 'G'];
        this.dna.splice(randomIndex, 1, options[randomBase])
      } else if(this.dna[randomIndex] === 'C'){
        let options = ['A', 'T', 'G'];
        this.dna.splice(randomIndex, 1, options[randomBase])
      } 
      else if(this.dna[randomIndex] === 'G'){
        let options = ['A', 'T', 'C'];
        this.dna.splice(randomIndex, 1, options[randomBase])
      }
      return this.dna; 
    },
    compareDNA(object){
      console.log("Specimen 1: " + this.dna)
      console.log("Specimen 2: " + object.dna)
      let similarBases  = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === object.dna[i]){
          similarBases++;
        }
      }
      let percentInCommon = similarBases / 15;
      console.log('Specimen #' + this.specimenNum +' and Specimen #' + object.specimenNum + ' have ' + percentInCommon + '% DNA in common.')
    },
    willLikelySurvive() {
      console.log(this.dna);
      let counter = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          counter++;
        }
      }
      let G_C_Composition = counter / 15;
      console.log("Percent Composed of G or C: " + G_C_Composition)
      if(G_C_Composition >= .6){
        return true;
      }else{
        return false;
      }
    }
  }//End of specifmen object
  return specimen;
}

const specimenArrayCreation = () =>{
  let specimenArray = [];
  for(let i = 0; i < 30; i++){
    let specimen = pAequorFactory(Math.floor(Math.random()*5000), mockUpStrand());
    specimenArray.push(specimen);
  }
  return specimenArray;
}

const specimenArray = specimenArrayCreation();
console.log(specimenArray)







