
export function useBarcode() {
  const min = 100000000000;
  const max = 999999999999;

  function setNumOfBarcodes(num: number, prefix: string){
    const barCodes = new Array<string>()
    for (let i = 0; i < num; i++) {
      barCodes.push(
        prefix +
          Math.floor(Math.random() * (max - min + 1) + min).toString()
      );
    }
    return barCodes
  }

  // expose managed state as return value
  return { setNumOfBarcodes }
}
