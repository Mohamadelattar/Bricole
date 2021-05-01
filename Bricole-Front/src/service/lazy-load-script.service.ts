import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'mmenu', src: '../assets/js/mmenu.min.js' },
  { name: 'tippy', src: 'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/3.0.3/tippy.all.min.js' },
  { name: 'simplebar', src: 'https://cdnjs.cloudflare.com/ajax/libs/simplebar/2.6.1/simplebar.min.js' },
  { name: 'snackbar', src: 'https://cdnjs.cloudflare.com/ajax/libs/snackbarjs/1.1.0/snackbar.min.js' },
  { name: 'clipboard', src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js' },
  { name: 'counterup', src: 'https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js' },
  { name: 'magnific-popup', src: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js' },
  { name: 'slick', src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js' },
  { name: 'jquery', src: 'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/3.0.3/tippy.all.min.js' },
 

];

declare var document: any;



@Injectable({
  providedIn: 'root'
})
export class LazyLoadScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }
}
