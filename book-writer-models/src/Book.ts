abstract class Component {
  protected parent?: Component;

  protected children!: Component[];

  constructor() {
    this.children = [];
  }
}

export class SimpleComponent extends Component {}

export class Book {}
