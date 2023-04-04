type PaymentGateway = 'stripe' | 'paypal';

class Stripe {
  user: string;
  constructor(user: string) {
    this.user = user;
  }
  makePayment(amount: number): boolean {
    console.log(`${this.user} paid $${amount} to vendor via Stripe!`);
    return true;
  }
}

class PayPal {
  user: string;
  constructor(user: string) {
    this.user = user;
  }
  transferPayment(amount: number): boolean {
    console.log(`${this.user} paid $${amount} to vendor via PayPal!`);
    return true;
  }
}

interface PaymentInterface {
  makePayment(amount: number): boolean;
}

class StripePaymentAdapter implements PaymentInterface {
  stripeInstance: Stripe;
  constructor(user: string) {
    this.stripeInstance = new Stripe(user);
  }
  makePayment(amount: number): boolean {
    return this.stripeInstance.makePayment(amount);
  }
}

class PaypalPaymentAdapter implements PaymentInterface {
  paypalInstance: PayPal;
  constructor(user: string) {
    this.paypalInstance = new PayPal(user);
  }
  makePayment(amount: number): boolean {
    return this.paypalInstance.transferPayment(amount);
  }
}

class Payments {
  paymentGateway: PaymentGateway;
  paymentGatewayInstance: PaymentInterface;
  constructor(user: string, paymentGateway?: PaymentGateway) {
    if (paymentGateway === 'paypal') {
      this.paymentGateway = 'paypal';
      this.paymentGatewayInstance = new PaypalPaymentAdapter(user);
    } else {
      this.paymentGateway = 'stripe';
      this.paymentGatewayInstance = new StripePaymentAdapter(user);
    }
  }
  makePayment(amount: number): boolean {
    return this.paymentGatewayInstance.makePayment(amount);
  }
}

class Store {
  payments: Payments;
  cartAmount: number;
  constructor(user: string, paymentGateway?: PaymentGateway) {
    this.payments = new Payments(user, paymentGateway);
    this.cartAmount = 0;
  }
  addItem(amount: number) {
    this.cartAmount += amount;
  }
  removeItem(amount: number) {
    this.cartAmount -= amount;
  }
  checkout(): boolean {
    const success = this.payments.makePayment(this.cartAmount);
    if (success) this.cartAmount = 0;
    return success;
  }
}

const amazon = new Store('me', 'paypal');
amazon.addItem(100);
amazon.addItem(1000);
amazon.removeItem(200);
amazon.addItem(300);
amazon.removeItem(400);
console.log(amazon.checkout());
