const e=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},t=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},r={form:document.querySelector(".feedback-form"),STORAGE_KEY:"feedback-form-state"};r.form.addEventListener("input",(function(t){e(r.STORAGE_KEY,{email:r.form.email.value,message:r.form.message.value})})),r.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset()})),function(){const e=t(r.STORAGE_KEY);try{r.form.email.value=e.email,r.form.message.value=e.message}catch(e){}}();
//# sourceMappingURL=03-feedback.aaeac922.js.map
