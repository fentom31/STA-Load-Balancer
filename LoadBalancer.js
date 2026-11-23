export default class LoadBalancer {
  // import vite.config;
  // Очень важное примечание к этому заданию: все полезные нагрузки запросов должны быть заменены числовым значением строки. В противном случае задание будет считаться невыполненным.

  constructor(servers) {
    // Ejemplo de un servidor:
    // {
    //   id: "server-2",
    //   power: 3,          // Unidades de trabajo por segundo simulado
    //   activeRequest: { id: "P01", payload: "08319462", work: 4 }, // null si está libre
    //   queuedRequests: [{ id: "P02", payload: "74150328", work: 2 }],
    //   activeProgress: 0.25 // Progreso de 0 a 1 (0 si está libre)
    // }
    // Los datos son de solo lectura y se actualizan durante la simulación.
    this.next = 0;
    this.rotation = servers.flatMap((server) => Array(server.power).fill(server.id)); //Array de longitud del power del server y lo rellena con su id p.ej. power4 id2 [2,2,2,2]

  }

  async onRequestArrival(request, sendToServer) {
    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }

    let minimo = Infinity;
    for(const servidor in this.servers){
      if (servidor.queuedRequests < minimo){
        minimo = servidor.queuedRequests;
      }
    }

    const server = this.rotation[this.next];
    this.next= (this.next + 1) % this.rotation.length; // %=modulo coge el resto de la división entera
    if (server.queuedRequests = minimo){
       const server = this.rotation[this.next];
      this.next= (this.next + 1) // %=modulo coge el resto de la división entera
    }

    // Envía la petición al servidor y devuelve su respuesta al cliente.
    return sendToServer(server.id);
  }
}