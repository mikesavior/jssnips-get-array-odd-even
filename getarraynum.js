function getArrayNum(ary) {
  if (ary instanceof Array) {
    try {
      let collected =[];
      let oddVals =[];
      let evenVals =[];
      let stringVals =[];
      
      for (const value of ary) {
        if (value % 2 === 1) {
          oddVals.push(value);
        }
        if (value % 2 === 0) {
          evenVals.push(value);
        }
        if (typeof value === 'string') {
          stringVals.push(value);
        }
      }
      collected.push(oddVals, evenVals, stringVals);
      console.log(`There are ${oddVals.length} odd value(s) in this collection. There are ${evenVals.length} even value(s) in this collection. There are ${stringVals.length} non-numeric value(s) in this collection.\n Collected: ${collected}`);
    } catch (ex) {
      console.log("Something went wrong. Issue: " + ex);
    }
  } else {
    console.log(`Invalid Argument: Unexpected Argument type: Expected Array for arg ${ary}`);
  }
}
