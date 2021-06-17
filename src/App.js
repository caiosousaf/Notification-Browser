import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const App = {
    async start() {
    try {
        await Notifyer.init()

        Emitter.on('countdown-start', () => {
            
        })

        Emitter.on('countdown-end', () => {
            Notifyer.notify({
                title: "Hora para ser lembrada",
                body: "Faça o que deve ser feito"
              })
            Timer.init();
        })

        
        Timer.init(0.2 * 60)
        
        
    } catch (err) {
        console.log(err.message)
    }
    }
}

export { App }