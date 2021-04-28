class Scheduling {
  constructor(
    id,
    client,
    flight,
    schedulingTime,
    payment,
    installments,
    price,
    status
  ) {
    this.id = id;
    this.client = client;
    this.flight = flight;
    this.schedulingTime = schedulingTime;
    this.payment = payment;
    this.installments = installments;
    this.price = price;
    this.status = status || "Ativo";
  }

  showScheduling() {
    return `${this.client.name} - id voo: ${this.flight.id} - ${this.flight.price}: ${this.status}`;
  }

  getPrice() {
    return this.flight.price;
  }

  cancelScheduling() {
    this.status = "Cancelado";
  }

  getStatus() {
    return `Este agendamento está ${this.status}`;
  }
}
