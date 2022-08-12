function fetch(url, cb) {
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText); 
          // console.log(xhr.responseText)
          cb(data); 
        } else {
          console.log("Error in fetch " + xhr.status);
        }
      }
    };
  
    xhr.open("GET", url);
    xhr.send();
  }