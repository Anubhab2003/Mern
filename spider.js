function extractAmount(str) {
    // Use a regular expression to find numbers preceded by a currency symbol
    const regex = /[$₹]\s*(\d+)/;
    const match = str.match(regex);
    return match ? match[1] : 'No amount found';
  }
  
  // Example usage:
  const result = extractAmount("Please give us $1000");
  console.log(result); // Output: 1000
  