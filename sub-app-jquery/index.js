const render = ($)=> {
  const template = `<h1>Hello, render with jQuery</h1>`
  $('#sub-app').html(template);
  return Promise.resolve()
}

((global)=>{
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      return render($);
    },
    unmount: ()=> {
      console.log('purehtml unmount');
      return Promise.resolve();
    }
  }
})(window)