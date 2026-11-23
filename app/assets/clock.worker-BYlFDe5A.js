let e;self.onmessage=t=>{t.data==="start"?e??(e=setInterval(()=>postMessage("tick"),25)):(clearInterval(e),e=void 0)};
