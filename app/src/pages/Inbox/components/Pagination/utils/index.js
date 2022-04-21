export function calTotalPagesNumber(length, limit = 10) {
    const totalPageNumbers = Math.ceil(length / limit);
  
    let result = [];
    for (let i = 1; i <= totalPageNumbers; i++) {
      result.push(i);
    }
    return result;
  }