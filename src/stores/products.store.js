import { observable } from 'mobx';


export class ProductsStore {
  @observable items = {
    '1': {
      id: '1',
      title:'Ferry from Port Blair to Havelock',
      image: 'https://th.bing.com/th/id/OIP.MXiytVSLED9hEJoDuboOQgHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Description for Port Blair to Havelock ferry.',
      price: 5000
    },
    '2': {
      id: '2',
      title: 'Ferry from Havelock to Neil',
      image: 'https://th.bing.com/th/id/OIP.eK9dkv_opjB_OjyifdsjCwHaFY?w=252&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Description for Havelock to Neil ferry.',
      price: 2000
    },
    '3': {
      id: '3',
      title: 'Ferry from Neil to Port Blair',
      image: 'https://th.bing.com/th/id/OIP.m-QkdqWzoD2q2v4n24xi6gHaEE?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Description for Neil to Port Blair ferry.',
      price: 1500
    },
    '4': {
      id: '4',
      title: 'Ferry from Port Blair to Havelock to Neil and back to Port Blair',
      description: 'Description for the multi-leg ferry trip.',
      image: 'https://th.bing.com/th/id/OIP.iIMjJubdVYFypqGeb1WG5wHaEt?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 1200
    }
  }

  getProductById(id) {
    return this.items[id];
  }
}

export default new ProductsStore();
