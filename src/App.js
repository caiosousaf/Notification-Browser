import { Notifyer } from "./Notifyer.js";

const App = {
    async start() {
    try {
        await Notifyer.init()
        Notifyer.notify({
          title: "Hora para ser lembrada",
          body: "Faça o que deve ser feito"
        })
    } catch (err) {
        console.log(err.message)
    }
    }
}

export { App }