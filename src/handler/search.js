const dynamicFilter = (data, inputData) => {
    const clearInputData = inputData.split('%20').join(' ');
    const clearArray = [];
    data.forEach((element) => {
      const elementPart = element.name.slice(0, clearInputData.length).toUpperCase();
      if (elementPart === clearInputData.toUpperCase()) { clearArray.push(element.name); }
    });
    return clearArray.slice(0, 8);
  };
  module.exports = dynamicFilter;