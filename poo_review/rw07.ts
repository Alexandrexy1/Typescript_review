interface Product {
    name: string;
    price: number;
}

export class ProductCart {
    private readonly products: Product[] = [];

    addProducts(...products: Product[]): void {
        this.products.push(...products);
    }

    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if (index !== -1) this.products.splice(index, 1);
    }

    cartDetails(): void {
        this.products.forEach(product => console.log(`Name: ${product.name} Price: ${product.price}`));
        console.log(`Total: ${this.total()}`);
    }

    total(): number {
        let total = 0;
        this.products.filter(product => total += product.price);
        return total;
    }
}


const cart: ProductCart = new ProductCart();

cart.addProducts({name: "Soda", price: 4.9}, {name: "Moto", price: 5000.0});
cart.cartDetails();