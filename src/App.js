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
            const messages = [
                'Vá e faça Acontecer',
                 'Tome para si, O que é seu por direito',
                  'Tudo certo',
                  'Ir ao mercado',
                   'Faça alguma coisa',
                    'Decida',
                     'Seja alguém'
            ],
             randomIndex = Math.floor(Math.random() * messages.length)
            Notifyer.notify({
                title: "Hora para ser lembrada",
                body: messages[randomIndex]
              })
            Timer.init();
        })

        
        Timer.init(1 * 60)
        
        
    } catch (err) {
        console.log(err.message)
    }
    }
}

export { App }